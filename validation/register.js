const Validator = require("validator");
// ^ Validator is a library ^
const validText = require("./validations");

module.exports = function validateRegisterInput(data){
  let errors = {};
  
  data.username = validText(data.username) ? data.username : "";
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.password2 = validText(data.password2) ? data.password2 : "";
  
  if (!Validator.isLength(data.username, { min: 3, max: 25 })) {
    errors.username = "Username must be between 3 and 25 characters";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 25 })) {
    errors.password = "Password must be between 6 and 25 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  if (Validator.isEmpty(data.birthDate)) {
    errors.birthDate = "Birthdate is required";
  }

  if (Validator.isEmpty(data.kids)) {
    errors.kids = "Please select a given option";
  }

  if (Validator.isEmpty(data.marriage)) {
    errors.marriage = "Please select a given option";
  }

  if (Validator.isEmpty(data.personality)) {
    errors.personality = "Please select a given option";
  }

  return {
    errors, 
    isValid: Object.keys(errors).length === 0
  };
};