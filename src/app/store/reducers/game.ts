/**
 * Created by rumen on 2/13/2017.
 */

import { Action, ActionReducer } from '@ngrx/store';
import { createSelector } from 'reselect';

import { Game, Tile, TileState } from '../../model';
import { GameState, initialGameState } from '../state/game';
import { GameActions } from '../actions';
import { AppState } from '../state';

let tileReducer = (tile: Tile, action: Action): Tile => {
  switch (action.type) {
    case GameActions.TILE_UPDATE_SUCCESS:
      const tileNew: Tile = (<GameActions.TileUpdateSuccessAction>action).payload;

      // new state should be valid
      if (tileNew.state === TileState.Empty) {
        throw new Error('Updating with new state should be valid and not Empty for ' + tileNew);
      }

      if (!tile.index.equals(tileNew.index)) {
        return tile;
      }

      // old state should be still Empty
      if (tile.state !== TileState.Empty) {
        throw new Error('Tile is already updated: ' + tile + ', cannot set it to ' + tileNew);
      }

      return Object.assign({}, tile, tileNew);
    default:
      return tile;
  }
};

let gameReducer: ActionReducer<Game> = (game: Game, action: Action): Game => {
  switch (action.type) {
    case GameActions.TILE_UPDATE_SUCCESS:
      return {
        tiles: game.tiles.map(tile => tileReducer(tile, action))
      };
    default:
      return game;
  }
};

let myTurnReducer = (isMyTurn, action: Action): boolean => {
  switch (action.type) {
    case GameActions.MY_TURN_UPDATE:
      return (<GameActions.MyTurnUpdateAction>action).payload;
    default:
      return isMyTurn;
  }
};

export const gameStateReducer = (len1: number, len2: number): ActionReducer<GameState> => {
  return (state: GameState = initialGameState(len1, len2, true), action: Action): GameState => {
    switch (action.type) {
      case GameActions.GAME_START:
        let { opponent, isMyGame } = (<GameActions.GameStartAction>action).payload;
        return Object.assign({}, initialGameState(len1, len2, isMyGame), { opponent });

      case GameActions.GAME_END:
        let result = (<GameActions.GameEndAction>action).payload;
        return Object.assign({}, state, { result });

      case GameActions.TILE_UPDATE_SUCCESS:
        let game = gameReducer(state.game, action);
        return Object.assign({}, state, { game });

      case GameActions.MY_TURN_UPDATE:
        let isMyTurn = myTurnReducer(state.isMyTurn, action);
        return Object.assign({}, state, { isMyTurn });

      default:
        return state;
    }
  };
};

export const getGameState = (state: AppState): GameState => state.game;

export const getGame = createSelector(
  getGameState,
  (state: GameState) => state.game);

export const getResult = createSelector(
  getGameState,
  (state: GameState) => state.result);

export const getMyTurn = createSelector(
  getGameState,
  (state: GameState) => state.isMyTurn);

export const getMyTileState = createSelector(
  getGameState,
  (state: GameState) => state.myTileState);

export const getOpponent = createSelector(
  getGameState,
  (state: GameState) => state.opponent);

export const getOpponentTileState = createSelector(
  getGameState,
  (state: GameState) => state.opponentTileState);


