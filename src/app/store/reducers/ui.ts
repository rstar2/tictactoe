/**
 * Created by rumen on 2/13/2017.
 */

import { Action } from '@ngrx/store';
import { createSelector } from 'reselect';

import { UIState, initialUIState } from '../state/ui';
import { UIActions } from '../actions';
import { AppState } from '../state';

export const uiStateReducer =
  function (state: UIState = initialUIState, action: Action): UIState {
    switch (action.type) {
      case UIActions.UI_TITLE_UPDATE:
        const title = (<UIActions.UITitleUpdateAction>action).payload;
        return {
          title: title
        };
      default:
        return state;
    }
  };

export const getUIState = (state: AppState): UIState => state.ui;

export const getTitle = createSelector(
  getUIState,
  (state: UIState) => state.title);

