const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateFortuneInput(data) {
  let errors = {};

  data.sentence = validText(data.sentence) ? data.sentence : "";

  if (!Validator.isLength(data.sentence, { min: 5, max: 140 })) {
    errors.sentence = "Tweet must be between 5 and 140 characters";
  }

  if (Validator.isEmpty(data.sentence)) {
    errors.sentence = "Sentence field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
