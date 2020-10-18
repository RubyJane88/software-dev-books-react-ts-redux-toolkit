import { Box, Typography } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getManningBooksAction } from '../manning.async.actions';
import { RootState } from '../../../store/reducers';

const ManningBooks: FC = () => {
  console.log('manningBooks.Tsx: ManningBooks');
  const dispatch = useDispatch();
  const { loading, manningBooks } = useSelector(
    (state: RootState) => state.manningBook,
  );

  useEffect(() => {
    console.log('manningBooks.tsx: useEffect');
    dispatch(getManningBooksAction());
  }, [dispatch]);

  return (
    <div>
      <h3> The Best Software Developer Books from Manning </h3>

      <div>
        {loading ? (
          <h2> Loading...please wait</h2>
        ) : (
          manningBooks.map(mb => (
            <Box
              mb={2}
              key={mb.id}
              display={'flex'}
              justifyContent={'space-between'}
              flexDirection={'column'}
            >
              <div>
                <Typography>
                  <span>
                    <li>
                      {`${mb.bookTitle} ${mb.author} ${mb.datePublished} ${mb.ratingReview} ${mb.summaryText}`}
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

export default ManningBooks;
