const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
 let count = 0;
 matrix.flat().forEach(function(item) {
  if (item === '^^') {
    count++;
  }
 });
 return count;
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
