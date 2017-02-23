import { Action } from '@ngrx/store';

import { TitleActions } from '../actions';
import { AppState } from '../state';

export const titleStateReducer = (state = 'Ups', action: Action): string => {
  switch (action.type) {
    case TitleActions.TITLE_UPDATE:
      return (<TitleActions.TitleUpdateAction>action).payload;
    default:
      return state;
  }
};

export const getTitle = (state: AppState): string => state.title;
