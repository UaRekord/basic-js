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
  let counter = 0;
  let output = ''
  for (let i=0; i < str.length; i++) {
    for (let j= i; j < str.length; j++) {
      if (str[i] === str[j]) {
        counter++;
        i=j;
      } else break;
    }
    (counter > 1) ? output += counter + str[i] : output += str[i];
    counter = 0;
  }
  return output;
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
