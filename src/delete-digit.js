const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];
  for (let i = 0; i < n.toString().length; i++) {
    let stArr = Array.from(n.toString());
    stArr.splice(i, 1);
    arr.push(stArr.join(''));
  }
  return Number(arr.sort()[arr.length - 1]);
}

module.exports = {
  deleteDigit,
};
