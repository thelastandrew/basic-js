const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let exceptions = [];
  let res = matrix.reduce(function (prev, cur) {
    let innerRes = cur.reduce(function (a, b, index) {
      if (!exceptions.includes(index)) {
        if (b === 0) {
          exceptions.push(index);
        }
        return a + b;
      } else {
        return a;
      }
    }, 0);
    return prev + innerRes;
  }, 0);

  return res;
}

module.exports = {
  getMatrixElementsSum,
};
