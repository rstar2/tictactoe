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
      case UIActions.UI_UPDATE:
        const todo: boolean = (<UIActions.UIUpdateAction>action).payload;
        return {
          todo: todo
        };
      default:
        return state;
    }
  };

export const getUIState = (state: AppState): UIState => state.ui;

export const getUIStateTodo = createSelector(
  getUIState,
  (state: UIState) => state.todo);

