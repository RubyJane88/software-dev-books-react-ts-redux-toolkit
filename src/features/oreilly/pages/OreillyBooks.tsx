import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOreillyBooksAction } from '../oreilly-async.actions';

const OreillyBooks: FC = () => {
  console.log('oreillyBooks.tsx: oreillyBooks');
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('oreillyBooks.tsx: useEffect');
    dispatch(getOreillyBooksAction());
  }, [dispatch]);

  return (
    <div>
      <h3> The Best Software Developer Books from O'reilly </h3>
    </div>
  );
};

export default OreillyBooks;
