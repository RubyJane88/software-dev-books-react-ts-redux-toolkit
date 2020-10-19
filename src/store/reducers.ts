/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux';

import antiHeroReducer from '../features/anti-heroes/anti-hero.slice';
import heroReducer from '../features/heroes/hero.slice';
import villainReducer from '../features/villains/villain.slice';
import apressBookReducer from '../features/apress/apress-slice';
import manningBookReducer from '../features/manning/manning-slice';
import oreillyBookReducer from '../features/oreilly/oreilly-slice';
import packtBookReducer from '../features/packt/packt-slice';

/*Merges the main reducer with the router state and dynamically injected reducers*/
/*place all reducers here separated by commas. For example, heroReducer*/
const injectedReducers = {
  hero: heroReducer,
  villain: villainReducer,
  antiHero: antiHeroReducer,
  apressBook: apressBookReducer,
  packtBookReducer: packtBookReducer,
  manningBook: manningBookReducer,
  oreillyBookReducer: oreillyBookReducer,
};

const rootReducer = combineReducers({
  ...injectedReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createReducer = () => rootReducer;
