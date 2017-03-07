/**
 * Created by rumen on 2/15/2017.
 */
import * as utils from '../utils';
import { IndexPair } from './index-pair';

export class Matrix<T> {

  constructor(private data: Array<Array<T>>) { }

  forEach(callbackfn: (value: T) => boolean) {
    this.data.some((row: Array<T>): boolean => {
      let toStop = false;
      row.some((item: T): boolean => {
        toStop = callbackfn(item);
        return toStop;
      });
      return toStop;
    });
  }

  map(callbackfn: (value: T) => T): Matrix<T> {
    let matrixNew: Array<Array<T>> = [];

    this.data.forEach((row: Array<T>) => {
      let rowNew: Array<T> = [];
      matrixNew.push(rowNew);
      row.forEach((item: T) => {
        let itemNew: T = callbackfn(item);
        rowNew.push(itemNew);
      });
    });

    return new Matrix(matrixNew);
  }

  forEachTicTacToe(callbackfn: (value: T[]) => boolean): void {
    let toStop = false;

    // parse all rows
    this.data.some((row: Array<T>, rowIndex: number): boolean => {
      toStop = callbackfn(row);
      return toStop;
    });

    const len = this.data.length;

    // parse all colummns
    if (!toStop) {
      for (let j = 0; j < len; j++) {
        let col: T[] = [];
        for (let i = 0; i < len; i++) {
          col.push(this.data[i][j]);
        }
        toStop = callbackfn(col);
        if (toStop) {
          break;
        }
      }
    }

    // parse both diagonals
    if (!toStop) {
      let diagonal: T[] = [];
      for (let i = 0; i < len; i++) {
        diagonal.push(this.data[i][i]);
      }
      toStop = callbackfn(diagonal);
    }

    if (!toStop) {
      let diagonal: T[] = [];
      for (let i = 0, j = len - 1; i < len; i++ , j--) {
        diagonal.push(this.data[i][j]);
      }
      toStop = callbackfn(diagonal);
    }
  }

  getRandom(predicate: (item: T) => boolean): T {
    let rows: number[] = [];

    const len = this.data.length;

    // select a renadom row first
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (predicate(this.data[i][j])) {
          rows.push(i);
          break;
        }
      }
    }

    if (rows.length === 0) {
      return null;
    }

    let random = utils.getRandomIntInclusive(0, rows.length - 1);
    let index1 = rows[random];

    // get a random column inside this row
    let cols: number[] = []
    for (let j = 0; j < len; j++) {
      if (predicate(this.data[index1][j])) {
        cols.push(j);
      }
    }

    random = utils.getRandomIntInclusive(0, cols.length - 1);
    let index2 = cols[random];

    return this.data[index1][index2];
  }

}
