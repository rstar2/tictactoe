import { Store } from '@ngrx/store';

import { AppState } from '../state';

export * from './game';
export * from './ui';

export let getState = (store: Store<AppState>): AppState => {
  let state: AppState;

  store.take(1).subscribe(s => state = s);

  return state;
};
