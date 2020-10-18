import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getManningBooksAction } from '../manning.async.actions';

const ManningBooks: FC = () => {
  console.log('manningBooks.Tsx: ManningBooks');
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('manningBooks.tsx: useEffect');
    dispatch(getManningBooksAction());
  }, [dispatch]);

  return (
    <div>
      <h3> The Best Software Developer Books from Manning </h3>
    </div>
  );
};

export default ManningBooks;
