import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ApressBookStateType,
  ApressBookModel,
  apressBookNameSpace,
} from './apress-types';

import {
  deleteApressBookByIdAction,
  getApressBooksAction,
} from './apress.async.actions';

export const initialState: ApressBookStateType = {
  apressBook: {} as ApressBookModel,
  apressBooks: [] as ApressBookModel[],
  error: '',
  loading: false,
};

export const apressBookSlice = createSlice({
  name: apressBookNameSpace,
  initialState: initialState,

  /*non-async actions*/
  reducers: {
    removeApressBookByIdTemporaryAction: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.apressBooks = state.apressBooks.filter(
        ab => ab.id !== action.payload,
      );
    },
  },

  /*async action*/
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

    /*Delete All - optimistic update*/
    builder.addCase(deleteApressBookByIdAction.pending, (state, action) => {
      state.tempData = [...state.apressBooks];
      state.error = '';
      const index = state.apressBooks.findIndex(a => a.id === action.meta.arg);
      state.apressBooks.splice(index, 1);
    });

    builder.addCase(
      deleteApressBookByIdAction.rejected,
      (state, action: any) => {
        state.error = action?.error?.message;
        state.apressBooks = state.tempData as ApressBookModel[];
      },
    );
  },
});

// non async actions*!
export const { removeApressBookByIdTemporaryAction } = apressBookSlice.actions;
export default apressBookSlice.reducer;
