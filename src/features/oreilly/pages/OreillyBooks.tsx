import {
  Box,
  Button,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteOreillyBookByIdAction,
  getOreillyBooksAction,
} from '../oreilly-async.actions';
import { RootState } from '../../../store/reducers';

const OreillyBooks: FC = () => {
  console.log('oreillyBooks.tsx: oreillyBooks');
  const dispatch = useDispatch();

  const { loading, oreillyBooks } = useSelector(
    (state: RootState) => state.oreillyBookReducer,
  );

  const classes = useStyles();
  const [counter, setCounter] = useState('0');

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
                  {counter === ob.id && <span> -Marked </span>}
                </Typography>
              </div>

              <Button
                className={classes.button}
                variant={'contained'}
                color={'primary'}
                onClick={() => setCounter(ob.id)}
              >
                Mark
              </Button>

              <Button
                className={classes.button}
                onClick={() => dispatch(deleteOreillyBookByIdAction(ob.id))}
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

export default OreillyBooks;

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
