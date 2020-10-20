import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  PacktBookModel,
  packtBookNameSpace,
  PacktBookStateType,
} from './packt-types';

import {
  getPacktBooksAction,
  deletePacktBookByIdAction,
} from './packt.async.actions';

export const initialState: PacktBookStateType = {
  packtBook: {} as PacktBookModel,
  packtBooks: [] as PacktBookModel[],
  error: '',
  loading: false,
};

export const packtBookSlice = createSlice({
  name: packtBookNameSpace,
  initialState: initialState,

  reducers: {
    removePacktBookByIdTemporaryAction: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.packtBooks = state.packtBooks.filter(
        pb => pb.id !== action.payload,
      );
    },
  },

  extraReducers: builder => {
    /*GET ALL*/
    builder.addCase(getPacktBooksAction.pending, state => {
      state.error = '';
      state.loading = true;
    });

    builder.addCase(getPacktBooksAction.fulfilled, (state, action) => {
      state.packtBooks = action?.payload;
      state.loading = false;
    });

    builder.addCase(getPacktBooksAction.rejected, (state, action: any) => {
      state.error = action?.payload.message;
      state.loading = false;
    });

    /*Delete All - optimistic update*/
    builder.addCase(deletePacktBookByIdAction.pending, (state, action) => {
      state.tempData = [...state.packtBooks];
      state.error = '';
      const index = state.packtBooks.findIndex(a => a.id === action.meta.arg);
      state.packtBooks.splice(index, 1);
    });

    builder.addCase(
      deletePacktBookByIdAction.rejected,
      (state, action: any) => {
        state.error = action?.error?.message;
        state.packtBooks = state.tempData as PacktBookModel[];
      },
    );
  },
});

export const { removePacktBookByIdTemporaryAction } = packtBookSlice.actions;

export default packtBookSlice.reducer;
