const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let answer = [];
  members.forEach(name => {
    if (typeof name === 'string') {
      answer.push(name.trim()[0].toUpperCase());
    }
  });
  answer.sort();
  return answer.join('');
};
