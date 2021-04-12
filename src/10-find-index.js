/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function search(array, value, left, right) {
  const center = Math.floor((right - left) / 2 + left);
  if (array[center] === value) return center;
  if (array[center] < value) return search(array, value, center + 1, right);
  return search(array, value, left, center);
}

function findIndex(array, value) {
  return search(array, value, 0, array.length - 1);
}

module.exports = findIndex;
