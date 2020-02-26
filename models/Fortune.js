const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FortuneSchema = new Schema({
  favorability: {
    type: String,
    required: true
  },
  sentence: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//

module.exports = Fortune = mongoose.model('fortune', FortuneSchema);