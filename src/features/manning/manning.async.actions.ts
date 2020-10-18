import { createAsyncThunk } from '@reduxjs/toolkit';
import { ManningBookActionTypes, ManningBookModel } from './manning-types';
import { getAxios } from '../../axios-http-client/generic-api-calls';
import { EndPoints } from '../../axios-http-client/api-config';

export const getManningBooksAction = createAsyncThunk(
  ManningBookActionTypes.FETCH_MANNING_BOOKS,
  async () => {
    const { data } = await getAxios<ManningBookModel>(EndPoints.manningBooks);
    return data;
  },
);
