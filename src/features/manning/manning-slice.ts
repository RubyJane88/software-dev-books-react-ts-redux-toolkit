import { createSlice } from '@reduxjs/toolkit';
import {
  ManningBookModel,
  manningBookNameSpace,
  ManningBookStateType,
} from './manning-types';

import {
  deleteManningBookByIdAction,
  getManningBooksAction,
} from './manning.async.actions';

export const initialState: ManningBookStateType = {
  manningBook: {} as ManningBookModel,
  manningBooks: [] as ManningBookModel[],
  error: '',
  loading: false,
};

export const manningBookSlice = createSlice({
  name: manningBookNameSpace,
  initialState: initialState,

  reducers: {
    removeManningBookByIdTemporaryAction: (state, action) => {
      state.manningBooks = state.manningBooks.filter(
        mb => mb.id !== action.payload,
      );
    },
  },

  extraReducers: builder => {
    /*GET ALL*/
    builder.addCase(getManningBooksAction.pending, state => {
      state.error = '';
      state.loading = true;
    });
    builder.addCase(getManningBooksAction.fulfilled, (state, action: any) => {
      state.manningBooks = action?.payload;
      state.loading = false;
    });
    builder.addCase(getManningBooksAction.rejected, (state, action: any) => {
      state.error = action?.payload.message;
      state.loading = false;
    });

    //DELETE - optimistic update
    builder.addCase(
      deleteManningBookByIdAction.pending,
      (state, action: any) => {
        state.tempData = [...state.manningBooks];
        state.error = '';
        const index = state.manningBooks.findIndex(
          m => m.id === action.meta.arg,
        );
        state.manningBooks.splice(index, 1);
      },
    );
    builder.addCase(
      deleteManningBookByIdAction.rejected,
      (state, action: any) => {
        state.error = action?.error?.message;
        state.manningBooks = state.tempData as ManningBookModel[];
      },
    );
  },
});

export const {
  removeManningBookByIdTemporaryAction,
} = manningBookSlice.actions;

export default manningBookSlice.reducer;
