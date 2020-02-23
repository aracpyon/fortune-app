//a validation for register

const Validator = require("Validator");
//Validator is a library
const validText = require("./valid-text");


module.exports = function validateRegisterInput(){
  let errors = {};

  data.handle = validText(data.handle) ? data.handle : "";
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.pssword2 = validText(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 30 })){
    errors.handle = "handle must be between 2 and 30 charactros";

  }

  if (Validator.isEmpty(data.handle)){
    errors.handle = "Handle field is required";
  }

  if (Validator.isEmpty(data.email)){
    errors.email = "Email field is required";
  }
  
  if (!Validator.isEmail(data.email)){
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)){
    errors.password = "Password is required";
  }

  if (Validator.isEmpty(data.password)){
    errors.password = "Password must be between 2 and 30 chars";
  }

  if (!Validator.equals(data.password, data.password2)){
    errors.password2 = "Password must match";
  }

  return {
    errors, 
    isValid: Object.keys(errors).length === 0
  }
}