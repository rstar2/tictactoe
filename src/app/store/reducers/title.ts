import { Action } from '@ngrx/store';

import { TitleActions } from '../actions';
import { AppState } from '../state';

export const titleReducer = (state = 'Ups', action: Action): string => {
  switch (action.type) {
    case TitleActions.TITLE_UPDATE:
      const title: string = (<TitleActions.TitleUpdateAction>action).payload;
      return title;
    default:
      return state;
  }
};

export const getTitle = (state: AppState): string => state.title;
