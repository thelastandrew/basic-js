const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let localDepth = 1;
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        localDepth += this.calculateDepth(element);
      }
      if (localDepth > depth) {
        depth = localDepth;
      }
      localDepth = 1;
    });
    return depth;
  }
}

module.exports = {
  DepthCalculator,
};
