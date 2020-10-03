const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;


module.exports = function dateSample(sampleActivity) {
  
  const LN_2 = 0.693
  const value = parseFloat(sampleActivity);
  
  if ( value <= 0 || value > 15 || isNaN(value)) {
    return false
  } else if (sampleActivity && (typeof sampleActivity === 'string')) {
    const K = LN_2 / HALF_LIFE_PERIOD;

    const T = Math.ceil(Math.log(MODERN_ACTIVITY / value) / K);
    return T;
  } else return false
    
};