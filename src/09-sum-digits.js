/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const num = `${n}`.split('').reduce((acc, i) => acc + +i, 0);
  return num > 9 ? getSumOfDigits(num) : num;
  // let i = n;
  // while (i > 9) {
  //   i = `${n}`.split('').reduce((acc, x) => acc += (+x), 0);
  // }
  // return i;
}

module.exports = getSumOfDigits;
