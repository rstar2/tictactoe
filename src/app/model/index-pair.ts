/**
 * Created by rumen on 2/15/2017.
 */

export class IndexPair {
  constructor(private index1: number, private index2: number) {
  }

  equals(other?: IndexPair): boolean {
    if (!other) return false;
    return this.index1 === other.index1 && this.index2 === other.index2;
  }
}
