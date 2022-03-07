const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let arr = [];
  domains.forEach((element) => {
    arr.push(element.split('.'));
  });

  arr.forEach((element) => {
    let domName = '';
    for (let i = element.length - 1; i >= 0; i--) {
      domName += `.${element[i]}`;
      if (obj[domName] === undefined) {
        obj[domName] = 1;
      } else {
        obj[domName] += 1;
      }
    }
  });

  return obj;
}

module.exports = {
  getDNSStats,
};
