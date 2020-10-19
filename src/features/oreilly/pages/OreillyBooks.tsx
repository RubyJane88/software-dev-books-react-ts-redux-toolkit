import { Box, Theme, Typography } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOreillyBooksAction } from '../oreilly-async.actions';
import { RootState } from '../../../store/reducers';

const OreillyBooks: FC = () => {
  console.log('oreillyBooks.tsx: oreillyBooks');
  const dispatch = useDispatch();
  const { loading, oreillyBooks } = useSelector(
    (state: RootState) => state.oreillyBookReducer,
  );

  useEffect(() => {
    console.log('oreillyBooks.tsx: useEffect');
    dispatch(getOreillyBooksAction());
  }, [dispatch]);

  return (
    <div>
      <h3> The Best Software Developer Books from O'reilly </h3>
      <div>
        {loading ? (
          <h2> Loading..Please wait </h2>
        ) : (
          oreillyBooks.map(ob => (
            <Box
              mb={2}
              key={ob.id}
              display={'flex'}
              justifyContent={'space-between'}
              flexDirection={'column'}
            >
              <div>
                <Typography>
                  <span>
                    <li>
                      {`${ob.bookTitle} ${ob.author} ${ob.datePublished} ${ob.ratingReview} ${ob.summaryText}`}
                    </li>
                  </span>
                </Typography>
              </div>
            </Box>
          ))
        )}
      </div>
    </div>
  );
};

export default OreillyBooks;
