const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  
    matrix.forEach(element => {

      element.forEach(innerElement => {
        if (innerElement === '^^') count += 1;
      })

    });
    return count;
};