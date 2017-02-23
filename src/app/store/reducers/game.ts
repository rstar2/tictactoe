/**
 * Created by rumen on 2/13/2017.
 */

import { Action, ActionReducer } from '@ngrx/store';
import { createSelector } from 'reselect';

import { Game, Tile } from '../../model';
import { GameState, initialGameState } from '../state/game';
import { GameActions } from '../actions';
import { AppState } from '../state';

let tileReducer = (tile: Tile, action: Action): Tile => {
  switch (action.type) {
    case GameActions.TILE_UPDATE_SUCCESS:
      const tileCur: Tile = (<GameActions.TileUpdateSuccessAction>action).payload;

      if (!tile.index.equals(tileCur.index)) {
        return tile;
      }

      return {
        index: tileCur.index,
        state: tileCur.state
      };
    default:
      return tile;
  }
};

let tilesReducer: ActionReducer<Game> = (game: Game, action: Action): Game => {
  switch (action.type) {
    case GameActions.TILE_UPDATE_SUCCESS:
      return {
        tiles: game.tiles.map(tile => tileReducer(tile, action))
      };
    default:
      return game;
  }
};

export const gameReducer = (len1: number, len2: number): ActionReducer<GameState> => {
  return (state: GameState = initialGameState(len1, len2), action: Action): GameState => {
    switch (action.type) {
      case GameActions.TILE_UPDATE_SUCCESS:
        return {
          currentGame: tilesReducer(state.currentGame, action)
        };
      default:
        return state;
    }
  };
};

export const getGameState = (state: AppState): GameState => state.game;

export const getCurrentGame = createSelector(
  getGameState,
  (state: GameState) => state.currentGame);

