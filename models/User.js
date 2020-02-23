const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//mongoose scehma object

//new User Schema
const UserSchema = new Schema({
  handle: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    tpye: String,
    required: true
  },
  date: {
    type: Date, 
    default: Date.now
  }
});

//now, define what this User schema means inside our app
//create model 'mongoose.model(string(what we want our model to be  called), model's schema)

const User = mongoose.model('users', USerSchema);


module.exports = User = mongoose.model('User', UserSchema);