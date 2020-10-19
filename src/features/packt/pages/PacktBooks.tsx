import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPacktBooksAction } from '../packt.async.actions';
import { RootState } from '../../../store/reducers';
import { Box, Typography } from '@material-ui/core';

const PacktBooks: FC = () => {
  console.log('packt-books.tsx: packtBooks');
  const dispatch = useDispatch();
  const { loading, packtBooks } = useSelector(
    (state: RootState) => state.packtBookReducer,
  );

  useEffect(() => {
    console.log('packtBooks.tsx: useEffect');
    dispatch(getPacktBooksAction());
  }, [dispatch]);

  return (
    <div>
      <h3> The Best Software Developer Books from Packt</h3>

      <div>
        {loading ? (
          <h2> Loading..Please wait </h2>
        ) : (
          packtBooks.map(pb => (
            <Box
              mb={2}
              key={pb.id}
              display={'flex'}
              justifyContent={'space-between'}
              flexDirection={'column'}
            >
              <div>
                <Typography>
                  <span>
                    <li>
                      {`${pb.bookTitle} ${pb.author} ${pb.datePublished} ${pb.ratingReview} ${pb.summaryText}`}
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

export default PacktBooks;
