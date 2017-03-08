/**
 * Created by rumen on 2/13/2017.
 */

import { Action } from '@ngrx/store';

import { type } from '../../utils';
import { Tile, GameResult, Opponent } from '../../model';

export const OPPONENT_UPDATE: string = type('[Opponent] Update');
export const GAME_START: string = type('[Game] Start');
export const GAME_END: string = type('[Game] End');
export const TILE_UPDATE: string = type('[Tile] Update - REQUEST');
export const TILE_UPDATE_SUCCESS: string = type('[Tile] Update - SUCCESS');
export const MY_TURN_UPDATE: string = type('[MyTurn] Update');

export class OpponentUpdateAction implements Action {
  type = OPPONENT_UPDATE;
  constructor(public payload: { opponent: Opponent, isMyGame: boolean }) {
  }
}

export class GameStartAction implements Action {
  type = GAME_START;
  constructor(public payload: boolean) {
  }
}

export class GameEndAction implements Action {
  type = GAME_END;
  constructor(public payload: GameResult) {
  }
}

abstract class TileAction implements Action {
  constructor(public type: string, public payload: Tile) {
  }
}

export class TileUpdateAction extends TileAction {
  constructor(public payload: Tile) {
    super(TILE_UPDATE, payload);
  }
}

export class TileUpdateSuccessAction extends TileAction {
  constructor(public payload: Tile) {
    super(TILE_UPDATE_SUCCESS, payload);
  }
}

export class MyTurnUpdateAction implements Action {
  type = MY_TURN_UPDATE;
  constructor(public payload: boolean) {
  }
}
