import {
  Box,
  Typography,
  Theme,
  createStyles,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  deleteApressBookByIdAction,
  getApressBooksAction,
} from '../apress.async.actions';
import { RootState } from '../../../store/reducers';

const ApressBooks: FC = () => {
  console.log('apressBooks.tsx: apressBooks');
  const dispatch = useDispatch();
  const { loading, apressBooks } = useSelector(
    (state: RootState) => state.apressBook,
  );

  const classes = useStyles();

  //local state
  const [counter, setCounter] = useState('0');

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
                  {counter === ab.id && <span> - marked</span>}
                </Typography>
              </div>
              <Button
                className={classes.button}
                variant={'contained'}
                color={'primary'}
                onClick={() => setCounter(ab.id)}
              >
                Mark
              </Button>
              <Button
                className={classes.button}
                onClick={() => dispatch(deleteApressBookByIdAction(ab.id))}
                variant={'outlined'}
                color={'secondary'}
              >
                DELETE in DB
              </Button>
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
