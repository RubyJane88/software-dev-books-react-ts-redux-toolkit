import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPacktBooksAction } from '../packt.async.actions';

const PacktBooks: FC = () => {
  console.log('packt-books.tsx: packtBooks');
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('packtBooks.tsx: useEffect');
    dispatch(getPacktBooksAction());
  }, [dispatch]);

  return (
    <div>
      <h3> The Best Software Developer Books from Packt</h3>
    </div>
  );
};

export default PacktBooks;
