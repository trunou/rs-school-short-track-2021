/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrIr = [];
  const sortArr = (arr.filter((x) => x > (-1))).sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arrIr.push(i);
    }
  }
  for (let j = 0; j < arrIr.length; j++) {
    sortArr.splice(arrIr[j], 0, -1);
  }
  return sortArr;
}

module.exports = sortByHeight;
