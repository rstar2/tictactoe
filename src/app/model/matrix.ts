import { GameResult } from './game-result';
/**
 * Created by rumen on 2/15/2017.
 */

import { IndexPair } from './index-pair';

export class Matrix<T> {

  constructor(private data: Array<Array<T>>) { }

  forEach(callbackfn: (value: T) => boolean) {
    this.data.some((col: Array<T>, colIndex: number): boolean => {
      let toStop = false;
      col.some((item: T, rowIndex: number): boolean => {
        toStop = callbackfn(item);
        return toStop;
      });
      return toStop;
    });
  }

  map(callbackfn: (value: T) => T): Matrix<T> {
    let newMatrix: Array<Array<T>> = [];

    this.data.forEach((col: Array<T>, colIndex: number) => {
      let row: Array<T> = [];
      newMatrix.push(row);
      col.forEach((item: T, rowIndex: number) => {
        let itemNew: T = callbackfn(item);
        row.push(itemNew);
      });
    });

    return new Matrix(newMatrix);
  }

}
