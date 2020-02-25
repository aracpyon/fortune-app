const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CalculationSchema = new Schema({
    user_1: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
    user_2: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    fortune_ID: {
        type: Schema.Types.ObjectId,
        ref: 'fortunes'
    }
});

module.exports = Calculation = mongoose.model('calculation', CalculationSchema);