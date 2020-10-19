import { createSlice } from '@reduxjs/toolkit';
import {
  oreillyBookNameSpace,
  OreillyBookModel,
  OreillyBookStateType,
} from './oreilly-types';

import { getOreillyBooksAction } from './oreilly-async.actions';
import exp from 'constants';

export const initialState: OreillyBookStateType = {
  oreillyBook: {} as OreillyBookModel,
  oreillyBooks: [] as OreillyBookModel[],
  error: '',
  loading: false,
};

export const oreillyBookSlice = createSlice({
  name: oreillyBookNameSpace,
  initialState: initialState,

  reducers: {},

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
  },
});

export default oreillyBookSlice.reducer;
