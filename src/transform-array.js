const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed myArray based on the control sequences that original
 * myArray contains
 *
 * @param {myArray} myArr initial myArray
 * @returns {myArray} transformed myArray
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr) == false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let myArr = [...arr];
  if (myArr[0] == '--discard-prev' || myArr[0] == '--double-prev') {
    myArr.shift();
  }
  if (myArr[myArr.length-1] == '--double-next' || myArr[myArr.length-1] == '--discard-next') {
    myArr.pop();
  }

  myArr.forEach(function(item) {
    if (item == '--discard-next' ) {
      myArr.splice(myArr.indexOf(item), 2, null);
    } else
     if (item == '--discard-prev' ) {
      myArr.splice(myArr.indexOf(item)-1, 2);
    } else if (item == '--double-next' ) {
      myArr.splice(myArr.indexOf(item), 1, myArr[myArr.indexOf(item)+1]);
    } else if (item == '--double-prev' ) {
      console.log(item);
      myArr.splice(myArr.indexOf(item), 1, myArr[myArr.indexOf(item)-1]);
    }
     else return item;
  })
  return myArr.filter((item) => item !== null);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

}

module.exports = {
  transform
};
