const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(directMachine = true) {
    this.directMachine = directMachine;
  }

  encrypt(message, key) {
    const m = message;
    const k = key;

    return this.VigenereChiperHandler(m, k);
  }

  decrypt(message, key) {
    const m = message;
    const k = key;
    return this.VigenereChiperHandler(m, k, true);
  }

  VigenereChiperHandler(message, key, isDecode) {
    if (arguments.length < 2) throw new Error('Error');

    const _isDecode = isDecode || false;
    const _message = message.toUpperCase();
    const _key = key.toUpperCase();

    const answer = [];
    
    let symbol;
    let j = 0;
    
    for(let i = 0; i < _message.length; i += 1) {
      let charCode = _message[i].charCodeAt(0);
      
      if (charCode >= 65 && charCode <= 90) {

        if (_isDecode) {
          symbol = String.fromCharCode((charCode + 26 - _key.charCodeAt(j)) % 26 + 'A'.charCodeAt(0));
        } else {
          symbol = String.fromCharCode((charCode + _key.charCodeAt(j)) % 26 + 'A'.charCodeAt(0));
        }

        answer.push(symbol);
        
        if (j === _key.length - 1) {
          j = 0;
        } else j += 1;
      } else answer.push(_message[i]);         
    }
    
    if (this.directMachine === false) answer.reverse();

    return answer.join('');
  }
}

module.exports = VigenereCipheringMachine;
