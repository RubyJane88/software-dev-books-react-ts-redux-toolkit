import {
  Box,
  Typography,
  Theme,
  createStyles,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteManningBookByIdAction,
  getManningBooksAction,
} from '../manning.async.actions';
import { RootState } from '../../../store/reducers';

const ManningBooks: FC = () => {
  console.log('manningBooks.Tsx: ManningBooks');
  const dispatch = useDispatch();
  const { loading, manningBooks } = useSelector(
    (state: RootState) => state.manningBook,
  );

  const classes = useStyles();

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

              <Button
                className={classes.button}
                onClick={() => dispatch(deleteManningBookByIdAction(mb.id))}
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

export default ManningBooks;

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
