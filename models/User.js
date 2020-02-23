const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//mongoose scehma object

//new User Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  birth_date: {
    type: Date,
    required: true
  },
  zodiac: {
    type: String
  },
  date: {
    type: Date, 
    default: Date.now
  }
});

//now, define what this User schema means inside our app
//create model 'mongoose.model(string(what we want our model to be  called), model's schema)

const User = mongoose.model('users', UserSchema);
// users blah blah

module.exports = User;