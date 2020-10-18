import { Box, Typography, Theme, createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApressBooksAction } from '../apress.async.actions';
import { RootState } from '../../../store/reducers';

const ApressBooks: FC = () => {
  console.log('apressBooks.tsx: apressBooks');
  const dispatch = useDispatch();
  const { loading, apressBooks } = useSelector(
    (state: RootState) => state.apressBook,
  );

  //local state

  useEffect(() => {
    console.log('apressBooks.tsx: useEffect');
    dispatch(getApressBooksAction());
  }, [dispatch]);

  return (
    <div>
      <h3> The Best Software Developer Books by Apress </h3>
      <div>
        {loading ? (
          <h2> Loading.. Please wait</h2>
        ) : (
          apressBooks.map(ab => (
            <Box
              mb={2}
              key={ab.id}
              display={'flex'}
              justifyContent={'space-between'}
              flexDirection={'column'}
            >
              <div>
                <Typography>
                  <span>
                    <li>
                      {`${ab.bookTitle} ${ab.author} ${ab.datePublished} ${ab.ratingReview} ${ab.summaryText}`}
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

export default ApressBooks;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: '0 0.5rem',
      '&:focus': {
        outline: 'none',
      },
    },
  }),
);
