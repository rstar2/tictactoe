/**
 * Created by rumen on 2/13/2017.
 */

import { Action } from "@ngrx/store";

import { type } from "../utils";
import { TileState } from "../../model/state";

export const TILE_UPDATE: string = type('[Tile] Update state');

export class TileUpdateTypeAction implements Action {
  type = TILE_UPDATE;

  constructor(public payload: {index: IndexPair, state: TileState}) {
  }
}
