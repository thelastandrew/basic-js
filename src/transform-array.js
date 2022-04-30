const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  const discardPrev = '--discard-prev';
  const discardNext = '--discard-next';
  const doublePrev = '--double-prev';
  const doubleNext = '--double-next';
  let res = [];

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  //  else if ((arr.length = 0)) {
  //   return arr;
  // }
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === discardPrev) {
        if (i === 0 || arr[i - 2] === discardNext) {
          continue;
        } else {
          res.pop();
          continue;
        }
      } else if (arr[i] === discardNext) {
        if (i === arr.length - 1) {
          continue;
        } else {
          i += 1;
          continue;
        }
      } else if (arr[i] === doublePrev) {
        if (i === 0 || arr[i - 2] === discardNext) {
          continue;
        } else {
          res.push(arr[i - 1]);
          continue;
        }
      } else if (arr[i] === doubleNext) {
        if (i === arr.length - 1) {
          continue;
        } else {
          res.push(arr[i + 1]);
          continue;
        }
      }
      res.push(arr[i]);
    }
  }
  return res;
}

module.exports = {
  transform,
};
