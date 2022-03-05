const { NotImplementedError } = require('../extensions/index.js');

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
  if (arr.length === 1) {
    return arr;
  } else {
    let indexes = [];
    let numbers = [];
    let res = [];
    arr.forEach((el, index) => {
      if (el === -1) {
        indexes.push(index);
      } else {
        numbers.push(el);
      }
    });
    console.log('indexes of -1: ' + indexes);
    console.log('numbers: ' + numbers);
    if (numbers.length === 0) {
      return arr;
    } else {
      numbers.sort((a, b) => {
        return a - b;
      });
      console.log('sorted numbers: ' + numbers);
      indexes.forEach((el) => {
        numbers.splice(el, 0, -1);
      });
      return numbers;
    }
  }
}

module.exports = {
  sortByHeight,
};
