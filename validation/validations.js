//a function validator to check if the input(str) is a right input
const validText = str => {
  return typeof str === 'string' && str.trim().length > 0;
}

module.exports = validText;