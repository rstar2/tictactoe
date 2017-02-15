/**
 * Created by rumen on 2/15/2017.
 */

import { IndexPair } from "./index-pair";

export class Matrix<T> {

  constructor(private data: Array<Array<T>>) {}

  forEach(callbackfn: (value: T, index: IndexPair) => void) {

  }

  map(callbackfn: (value: T, index: IndexPair) => T): Matrix<T> {
       return this;
  }
}
