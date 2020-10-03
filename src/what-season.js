const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!'
  if (date.hasOwnProperty('toString')) throw new Error('Uncorrect type of date!');
  const month = date.getMonth();
  const seasons = [
    'winter',
    'winter',
    'spring',
    'spring',
    'spring',
    'summer',
    'summer',
    'summer',
    'fall',
    'fall',
    'fall',
    'winter'
  ];
  return seasons[month]
};