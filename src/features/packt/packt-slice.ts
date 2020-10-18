import { createSlice } from '@reduxjs/toolkit';
import {
  PacktBookModel,
  packtBookNameSpace,
  PacktBookStateType,
} from './packt-types';

import { getPacktBooksAction } from './packt.async.actions';

export const initialState: PacktBookStateType = {
  packtBook: {} as PacktBookModel,
  packtBooks: [] as PacktBookModel[],
  error: '',
  loading: false,
};

export const packtBookSlice = createSlice({
  name: packtBookNameSpace,
  initialState: initialState,

  reducers: {},

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
  },
});
