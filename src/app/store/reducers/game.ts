/**
 * Created by rumen on 2/13/2017.
 */

import { Action, ActionReducer } from '@ngrx/store';
import { createSelector } from 'reselect';

import { TileState } from '../../model';
import { GameState, initialGameState } from '../state/game';
import { GameActions } from '../actions';
import { AppState } from '../state';


export const gameReducer = function (len1: number, len2: number): ActionReducer<GameState> {
  return (state: GameState = initialGameState(len1, len2), action: Action): GameState => {
    switch (action.type) {
      case GameActions.TILE_UPDATE:
        const tileState: TileState = (<GameActions.TileUpdateTypeAction>action).payload.state;
        const index: IndexPair = (<GameActions.TileUpdateTypeAction>action).payload.index;
        // TODO Rumen -
        return {
          currentGame: null
        };
      default:
        return state;
    }
  };
};


const getGameState = (state: AppState): GameState => state.game;

export const getCurrentGame = createSelector(
  getGameState,
  (state: GameState) => state.currentGame);

