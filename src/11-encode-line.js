/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const fin = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) { count++; } else { break; }
    }
    fin.push(count > 1 ? `${count}${arr[i]}` : arr[i]);
    i += count - 1;
  }
  return fin.join('');
}

module.exports = encodeLine;
