import { createAsyncThunk } from '@reduxjs/toolkit';
import { EndPoints } from '../../axios-http-client/api-config';
import { ApressBookActionTypes, ApressBookModel } from './apress-types';
import { getAxios } from '../../axios-http-client/generic-api-calls';

export const getApressBooksAction = createAsyncThunk(
  ApressBookActionTypes.FETCH_APRESS_BOOKS,
  async () => {
    const { data } = await getAxios<ApressBookModel>(EndPoints.apressBooks);
    return data;
  },
);
