//login valisator to make sure if the user is passing up enough information to successfully login

//Validator is from pacakge 'validator'
const Validator = require("validator");
const validText = require("./validations");

//function that takes in data object(email and password) and check their validations

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : "";

  data.password = validText(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    //collecting all the errors
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  //return the object we can do sth with later on..
  return {
    errors,
    isValid: Object.keys(errors).length === 0
    //isValid is checking if there is anything in errors. If the length is 0, it should be true
  };
};