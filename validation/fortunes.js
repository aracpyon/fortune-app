const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateFortuneInput(data){
  let errors = {};

  data.sentence = validText(data.sentence) ? data.sentence : '';
  data.favorbility = validText(data.favorbility) ? data.favorbility : '';

  if (!Validator.isLength(data.sentence, { min: 10 })) {
    errors.sentence = 'Fortune must be more than 10 characters';
  }

  if (Validator.isEmpty(data.sentence)) {
    errors.sentence = 'fortune field is required';
  }

  if (Validator.isEmpty(data.favorbility)){
    errors.favorbility = 'Favorbility is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };

};