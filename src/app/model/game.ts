/**
 * Created by rumen on 2/12/2017.
 */

import { Tile } from './tile';
import { TileState } from './state';

export interface Game {
  readonly tiles: Matrix<Tile>;
}

let _createEmpty = (len: number): Tile[] => {
  const arr: Tile[] = [];
  for (let i = 0; i < len; i++) {
    arr.push({type: TileState.Empty});
  }
  return arr;
};


let createEmpty = (len1, len2): Matrix<Tile> => {
  const arr: Tile[][] = [];
  for (let i = 0; i < len2; i++) {
    arr.push(_createEmpty(len1));
  }
  return arr;
};

export { createEmpty };
