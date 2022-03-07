const { NotImplementedError } = require('../extensions/index.js');

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
  let emptyArr = [];
  let arr = str.split('');
  let counter = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      counter += 1;
    } else if (arr[i] !== arr[i + 1]) {
      if (counter === 1) {
        counter = '';
      }
      emptyArr.push(`${counter}${arr[i]}`);
      counter = 1;
    }
  }

  return emptyArr.join('');
}

module.exports = {
  encodeLine,
};
