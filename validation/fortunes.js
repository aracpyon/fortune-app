const Validator = require('validator');
const validText = require('./validations');

module.exports = function validateFortuneInput(data){
  let errors = {};

  data.sentence = validText(data.sentence) ? data.sentence : '';
  data.favorability = validText(data.favorability) ? data.favorability : '';
  // debugger
  if (!Validator.isLength(data.sentence, { min: 10 })) {
    errors.sentence = 'Fortune must be more than 10 characters';
  }

  if (Validator.isEmpty(data.sentence)) {
    errors.sentence = 'fortune field is required';
  }

  if (Validator.isEmpty(data.favorability)){
    errors.favorability = 'Favorability is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };

};