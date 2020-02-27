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
  birthDate: {
    type: Date,
    required: true
  },
  zodiac: {
    type: String
  },
  kids: {
    type: Number,
    required: true
  },
  marriage: {
    type: Number,
    required: true
  },
  personality: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});



module.exports = User = mongoose.model('User', UserSchema);