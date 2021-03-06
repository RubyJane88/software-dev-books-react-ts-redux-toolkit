import React from 'react';
import { useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import {
  AppBar,
  Box,
  Button,
  createStyles,
  Theme,
  Toolbar,
} from '@material-ui/core';
import TotalOfCharacters from './TotalOfCharacters';
import { makeStyles } from '@material-ui/styles';

const NavigationBar = () => {
  const store = useSelector((state: RootState) => state);
  const history = useHistory();
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ marginBottom: '2rem' }}>
      <Toolbar>
        <Box>
          <Button
            className={classes.button}
            onClick={() => history.push('/anti-heroes')}
            color="inherit"
          >
            Anti Heroes
          </Button>
          <TotalOfCharacters collection={store.antiHero.antiHeroes} />
        </Box>
        <Box>
          <Button
            className={classes.button}
            onClick={() => history.push('/heroes')}
            color="inherit"
          >
            Heroes
          </Button>
          <TotalOfCharacters collection={store.hero.heroes} />
        </Box>
        <Box>
          <Button
            className={classes.button}
            onClick={() => history.push('/villains')}
            color="inherit"
          >
            Villains
          </Button>
          <TotalOfCharacters collection={store.villain.villains} />
        </Box>

        <Box>
          <Button
            className={classes.button}
            // onClick={() => history.push('/apress')}
            color="inherit"
          >
            Apress Books
          </Button>
          {/*<TotalOfCharacters collection={store.villain.villains} />*/}
        </Box>

        <Box>
          <Button
            className={classes.button}
            // onClick={() => history.push('/apress')}
            color="inherit"
          >
            Packt Books
          </Button>
          {/*<TotalOfCharacters collection={store.villain.villains} />*/}
        </Box>

        <Box>
          <Button
            className={classes.button}
            // onClick={() => history.push('/apress')}
            color="inherit"
          >
            Manning Books
          </Button>
          {/*<TotalOfCharacters collection={store.villain.villains} />*/}
        </Box>

        <Box>
          <Button
            className={classes.button}
            // onClick={() => history.push('/apress')}
            color="inherit"
          >
            O'Reilly Books
          </Button>
          {/*<TotalOfCharacters collection={store.villain.villains} />*/}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;

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
