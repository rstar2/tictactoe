/**
 * Created by rumen on 2/12/2017.
 */

import { Tile, emptyTile } from './tile';
import { Matrix } from './matrix';

export interface Game {
  readonly tiles: Matrix<Tile>;
}

let _createEmpty = (index1: number, len: number): Tile[] => {
  const arr: Tile[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(emptyTile(index1, i));
  }
  return arr;
};


let createEmpty = (len1, len2): Matrix<Tile> => {
  const arr: Tile[][] = [];
  for (let i = 0; i < len2; i++) {
    arr.push(_createEmpty(i, len1));
  }
  return new Matrix(arr);
};

export function initialGame(len1, len2): Game {
  return {
    tiles: createEmpty(len1, len2)
  };
}
