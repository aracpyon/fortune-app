const Validator = require("validator");
// const validText = require("./validations");

module.exports = function validateFortuneInput(data) {
  let errors = {};

  // debugger
  
  if (Validator.isEmpty(data.user_1)) {
    errors.user_1 = "user ID is required";
  }

  if (Validator.isEmpty(data.user_2)) {
    errors.user_2 = "user ID is required";
  }

  if (Validator.isEmpty(data.fortune_id)) {
    errors.fortune_id = "Fortune ID is required";
  }

  if (Validator.isEmpty(data.percentage)) {
    errors.percentage = "percentage is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
