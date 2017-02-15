/**
 * Created by rumen on 2/13/2017.
 */

import { Action, ActionReducer } from '@ngrx/store';
import { createSelector } from 'reselect';

import { Game, Tile, TileState } from '../../model';
import { GameState, initialGameState } from '../state/game';
import { GameActions } from '../actions';
import { AppState } from '../state';

let tilesReducer: ActionReducer<Game> = (game: Game = null, action: Action): Game => {
  switch (action.type) {
    case GameActions.TILE_UPDATE:
      const tile: Tile = (<GameActions.TileUpdateTypeAction>action).payload.tile;
      const tileState: TileState = (<GameActions.TileUpdateTypeAction>action).payload.state;

      // TODO Rumen -
      return {
        tiles: null
      };
    default:
      return game;
  }

};

export const gameReducer = function (len1: number, len2: number): ActionReducer<GameState> {
  return (state: GameState = initialGameState(len1, len2), action: Action): GameState => {
    switch (action.type) {
      case GameActions.TILE_UPDATE:
        const tile: Tile = (<GameActions.TileUpdateTypeAction>action).payload.tile;
        const tileState: TileState = (<GameActions.TileUpdateTypeAction>action).payload.state;

        return {
          currentGame: tilesReducer(state.currentGame, action)
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

