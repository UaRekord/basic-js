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
  let arr = n.toString().split('');
  let myIndex = arr.indexOf(Math.min(...arr).toString());
  if (+arr[0] < +arr[1]) {
    arr.shift();
  } else {
  arr.splice(myIndex,1);
}
return +arr.join('');
  // remove line with error and write your code here
}
module.exports = {
  deleteDigit
};
