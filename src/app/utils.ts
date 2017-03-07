/**
 * Created by rumen on 2/13/2017.
 */

const typeCache: { [label: string]: boolean } = {};

export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}

/**
 * Getting a random number between 0 and 1.
 * @return A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
 */
function getRandom(): number {
  return Math.random();
}

/**
 * Getting a random number between two values.
 * The returned value is no lower than (and may possibly equal) min, and is less than (but not equal to) max.
 * @param min
 * @param max
 */
function getRandomArbitrary(min, max): number {
  return Math.random() * (max - min) + min;
}

/**
 * Getting a random integer between two values.
 * The value is no lower than min (or the next integer greater than min if min isn't an integer),
 * and is less than (but not equal to) max.
 * @param min
 * @param max
 */
export function getRandomInt(min, max): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Getting a random integer between two values, inclusive.
 * While the getRandomInt() function above is inclusive at the minimum, it's exclusive at the maximum.
 * This method is inclusive at both ends.
 * @param min
 * @param max
 */
export function getRandomIntInclusive(min, max): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
