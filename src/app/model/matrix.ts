/**
 * Created by rumen on 2/15/2017.
 */

import { IndexPair } from './index-pair';

export class Matrix<T> {

  constructor(private data: Array<Array<T>>) { }

  forEach(callbackfn: (value: T, index: IndexPair) => void) {
    this.data.forEach((col: Array<T>, colIndex: number) => {
      col.forEach((item: T, rowIndex: number) => {
        callbackfn(item, new IndexPair(colIndex, rowIndex));
      });
    });
  }

  map(callbackfn: (value: T, index: IndexPair) => T): Matrix<T> {
    let newMatrix: Array<Array<T>> = []

    this.data.forEach((col: Array<T>, colIndex: number) => {
      let row: T[] = [];
      newMatrix.push(row);
      col.forEach((item: T, rowIndex: number) => {
        let newItem: T = callbackfn(item, new IndexPair(colIndex, rowIndex));
        row.push(item);
      });
    });

    return new Matrix(newMatrix);
  }
}
