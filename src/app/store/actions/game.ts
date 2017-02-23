/**
 * Created by rumen on 2/13/2017.
 */

import { Action } from '@ngrx/store';

import { type } from '../utils';
import { Tile } from '../../model';

export const TILE_UPDATE: string = type('[Tile] Update state - REQUEST');
export const TILE_UPDATE_SUCCESS: string = type('[Tile] Update state - SUCCESS');

abstract class TileAction implements Action {
  type: string;
  constructor(type: string, public payload: Tile) {
  }
}

export class TileUpdateAction extends TileAction {
  constructor(public payload: Tile) {
    super(TILE_UPDATE, payload);
  }
}

export class TileUpdateSuccessAction extends TileAction {
  constructor(public payload: Tile) {
    super(TILE_UPDATE, payload);
  }
}

