/**
 * Created by rumen on 2/13/2017.
 */

import { Action } from '@ngrx/store';

import { type } from '../utils';
import { Tile } from '../../model';

export const TILE_UPDATE: string = type('[Tile] Update - REQUEST');
export const TILE_UPDATE_SUCCESS: string = type('[Tile] Update - SUCCESS');

export const MY_TURN_UPDATE: string = type('[MyTurn] Update');

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
