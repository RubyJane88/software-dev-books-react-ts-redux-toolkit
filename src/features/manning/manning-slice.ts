import {
  ManningBookModel,
  manningBookNameSpace,
  ManningBookStateType,
} from './manning-types';
import { createSlice } from '@reduxjs/toolkit';
import { getManningBooksAction } from './manning.async.actions';

export const initialState: ManningBookStateType = {
  manningBook: {} as ManningBookModel,
  manningBooks: [] as ManningBookModel[],
  error: '',
  loading: false,
};

export const manningBookSlice = createSlice({
  name: manningBookNameSpace,
  initialState: initialState,

  reducers: {},

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
  },
});
