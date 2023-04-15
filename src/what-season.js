const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(/*date*/) {
  /*let inputDate = new Date(date);
  if (Date.parse(inputDate) == NaN) {
    return 'Unable to determine the time of year!';
  }
  let month = inputDate.getMonth();
  if (month === 11 || month >=0 || month < 2 || date == 'winter') {
    console.log(month);
    return 'winter';
  } else if (month >=2 || month < 5){
    console.log(month);
    return 'spring';
  } else if (month >=5 || month < 8 || date == 'summer'){
    return 'summer';
  } else if (month >=8 || month < 11){
    return 'autumn';
  }*/
  throw new NotImplementedError('Not implemented');
// remove line with error and write your code here
}

module.exports = {
  getSeason
};
