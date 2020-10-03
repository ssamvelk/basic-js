const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === undefined) this.chain.push(`( )`);
    else this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (
      (typeof position !== 'number')
      || !Number.isInteger(position)
      || position <= 0
      || position > this.chain.length
      ) {
          this.chain = [];
          throw new Error('Error') ;
      }
        
    this.chain.splice(position-1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const answer = this.chain.join("~~");
    this.chain = [];
    return answer;
  }
};

module.exports = chainMaker;
