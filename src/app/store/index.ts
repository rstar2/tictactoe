/**
 * Created by rumen on 2/13/2017.
 */

import { ActionReducer, combineReducers, Action } from '@ngrx/store';
import { compose } from '@ngrx/core';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';

import { AppState } from './state';
import {gameReducer, uiReducer, titleReducer} from './reducers';

let appReducers = {
  game: gameReducer(3, 3),
  ui: uiReducer,
  title: titleReducer
};

export default (state: AppState, action: Action): AppState => {
  let reducer: ActionReducer<AppState>;

  if (environment.production) {
    reducer = compose(storeFreeze, combineReducers)(appReducers);
  } else {
    reducer = combineReducers(appReducers);
  }

  return reducer(state, action);
};
