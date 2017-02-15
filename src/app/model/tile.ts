/**
 * Created by rumen on 2/12/2017.
 */

import { TileState } from "./state";
import { IndexPair } from "./index-pair";

export interface Tile {
  readonly index: IndexPair;
  readonly state: TileState;
}

export function emptyTile(index1: number, index2: number): Tile {
  return {
    index: new IndexPair(index1, index2),
    state: TileState.Empty
  }
}
