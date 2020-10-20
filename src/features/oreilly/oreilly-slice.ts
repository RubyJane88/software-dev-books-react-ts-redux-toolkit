import { createSlice } from '@reduxjs/toolkit';
import {
  oreillyBookNameSpace,
  OreillyBookModel,
  OreillyBookStateType,
} from './oreilly-types';

import {
  deleteOreillyBookByIdAction,
  getOreillyBooksAction,
} from './oreilly-async.actions';

export const initialState: OreillyBookStateType = {
  oreillyBook: {} as OreillyBookModel,
  oreillyBooks: [] as OreillyBookModel[],
  error: '',
  loading: false,
};

export const oreillyBookSlice = createSlice({
  name: oreillyBookNameSpace,
  initialState: initialState,

  reducers: {
    removeOreillyBookByIdTemporaryAction: (state, action) => {
      state.oreillyBooks = state.oreillyBooks.filter(
        ob => ob.id !== action.payload,
      );
    },
  },

  extraReducers: builder => {
    /*GET ALL*/
    builder.addCase(getOreillyBooksAction.pending, state => {
      state.error = '';
      state.loading = true;
    });
    builder.addCase(getOreillyBooksAction.fulfilled, (state, action) => {
      state.oreillyBooks = action?.payload;
      state.loading = false;
    });

    builder.addCase(getOreillyBooksAction.rejected, (state, action: any) => {
      state.error = action?.payload.message;
      state.loading = false;
    });

    /*DELETE ALL - optimistic update*/
    builder.addCase(
      deleteOreillyBookByIdAction.pending,
      (state, action: any) => {
        state.tempData = [...state.oreillyBooks];
        state.error = '';
        const index = state.oreillyBooks.findIndex(
          o => o.id === action.meta.arg,
        );
        state.oreillyBooks.splice(index, 1);
      },
    );

    builder.addCase(
      deleteOreillyBookByIdAction.rejected,
      (state, action: any) => {
        state.error = action?.action.error?.message;
        state.oreillyBooks = state.tempData as OreillyBookModel[];
      },
    );
  },
});

export const {
  removeOreillyBookByIdTemporaryAction,
} = oreillyBookSlice.actions;

export default oreillyBookSlice.reducer;
