import { createAsyncThunk } from '@reduxjs/toolkit';
import { OreillyBookActionTypes, OreillyBookModel } from './oreilly-types';
import { getAxios } from '../../axios-http-client/generic-api-calls';
import { EndPoints } from '../../axios-http-client/api-config';

export const getOreillyBooksAction = createAsyncThunk(
  OreillyBookActionTypes.FETCH_OREILLY_BOOKS,
  async () => {
    const { data } = await getAxios<OreillyBookModel>(EndPoints.oreillyBooks);
    return data;
  },
);
