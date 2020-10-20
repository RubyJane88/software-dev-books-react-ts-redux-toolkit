import { createAsyncThunk } from '@reduxjs/toolkit';
import { PacktBookActionTypes, PacktBookModel } from './packt-types';
import { EndPoints } from '../../axios-http-client/api-config';
import {
  deleteAxios,
  getAxios,
} from '../../axios-http-client/generic-api-calls';

export const getPacktBooksAction = createAsyncThunk(
  PacktBookActionTypes.FETCH_PACKT_BOOKS,
  async () => {
    const { data } = await getAxios<PacktBookModel>(EndPoints.packtBooks);
    return data;
  },
);

export const deletePacktBookByIdAction = createAsyncThunk(
  PacktBookActionTypes.REMOVE_PACKT_BOOKS_BY_ID,
  async (id: string) => {
    return await deleteAxios<void>(EndPoints.packtBooks, id);
  },
);
