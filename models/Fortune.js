const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FortuneSchema = new Schema({
  favorbility: {
    type: String,
    required: true
  },
  sentence: {
    type: String,
    required: true
  }
})

const Fortune = mongoose.model('fortunes', FortuneSchema);

module.exports = Fortune;