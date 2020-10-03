const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;

    for (let i = 0; i < arr.length; i += 1) {

      let maxDepth = 1;

      if (Array.isArray(arr[i])) {
        maxDepth += this.calculateDepth(arr[i]);
      }

      if (depth < maxDepth) {
        depth = maxDepth;
      }
    }
    return depth;
  }
};