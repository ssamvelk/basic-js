const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) throw new Error;
 
  const transformed = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
        i++;
      }
      i++;
    } else if (arr[i] === '--discard-prev') {
      if (i !== 0) {
        transformed.pop();
      }
    } else if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        transformed.push(arr[i + 1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (i !== 0) {
        transformed.push(arr[i - 1]);
      }
    } else {
      transformed.push(arr[i]);
    }
  }
  return transformed;
};
