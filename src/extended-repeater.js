const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const _str = String(str);
  const addition = (options.addition === undefined) ? '' : String(options.addition);
  
  const {
    repeatTimes = 1,
    separator = '+',
    
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options
  
  let answer = [];

  for( let i = 0; i < repeatTimes; i += 1) {
    answer.push(_str);
    
    for( let j = 0; j < additionRepeatTimes; j += 1) {
      answer.push(addition)
      if (j !== additionRepeatTimes - 1) answer.push(additionSeparator)
    }

    if (i !== repeatTimes - 1) answer.push(separator)
  }

 return answer.join('')
};
  