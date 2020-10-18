import { createSlice } from '@reduxjs/toolkit';
import {
  ApressBookStateType,
  ApressBookModel,
  apressBookNameSpace,
} from './apress-types';

import { getApressBooksAction } from './apress.async.actions';

export const initialState: ApressBookStateType = {
  apressBook: {} as ApressBookModel,
  apressBooks: [] as ApressBookModel[],
  error: '',
  loading: false,
};

export const apressBookSlice = createSlice({
  name: apressBookNameSpace,
  initialState: initialState,

  reducers: {},

  extraReducers: builder => {
    /*GET ALL*/
    builder.addCase(getApressBooksAction.pending, state => {
      state.error = '';
      state.loading = true;
    });

    builder.addCase(getApressBooksAction.fulfilled, (state, action) => {
      state.apressBooks = action?.payload;
      state.loading = false;
    });

    builder.addCase(getApressBooksAction.rejected, (state, action: any) => {
      state.error = action?.payload.message;
      state.loading = false;
    });
  },
});

/*export all non async actions*/
/* export const {removeApressBookByIdTempAction = apressBookSlice.action*/

export default apressBookSlice.reducer;
