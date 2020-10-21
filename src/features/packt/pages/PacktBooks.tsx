import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deletePacktBookByIdAction,
  getPacktBooksAction,
} from '../packt.async.actions';
import { RootState } from '../../../store/reducers';
import { Box, Button, Typography, createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { removeApressBookByIdTemporaryAction } from '../../apress/apress-slice';
import { removePacktBookByIdTemporaryAction } from '../packt-slice';

const PacktBooks: FC = () => {
  console.log('packt-books.tsx: packtBooks');
  const dispatch = useDispatch();
  const { loading, packtBooks } = useSelector(
    (state: RootState) => state.packtBookReducer,
  );

  const classes = useStyles();
  const [counter, setCounter] = useState('0');

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
                      {`${pb.bookTitle} 
                      ${pb.author} 
                      ${pb.datePublished} 
                      ${pb.ratingReview}
                       ${pb.summaryText}`}
                    </li>
                  </span>
                  {counter === pb.id && <span> -Marked </span>}
                </Typography>
              </div>

              <Button
                className={classes.button}
                variant={'contained'}
                color={'primary'}
                onClick={() => setCounter(pb.id)}
              >
                Mark
              </Button>

              <Button
                className={classes.button}
                onClick={() =>
                  dispatch(removePacktBookByIdTemporaryAction(pb.id))
                }
                variant={'contained'}
                color={'secondary'}
              >
                Remove
              </Button>

              <Button
                className={classes.button}
                onClick={() => dispatch(deletePacktBookByIdAction(pb.id))}
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

export default PacktBooks;

const useStyles = makeStyles(theme =>
  createStyles({
    button: {
      margin: '0.0.5rem',
      '&:focus': {
        outline: 'none',
      },
    },
  }),
);
