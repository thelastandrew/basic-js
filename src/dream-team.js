const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    if (members.length > 0) {
      let res = [];
      members.forEach((el) => {
        if (typeof el === 'string') {
          res.push(el.trim()[0].toUpperCase());
        }
      });
      res.sort();
      let dreamTeam = res.reduce((prev, cur) => {
        return prev + cur;
      });
      return dreamTeam;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam,
};
