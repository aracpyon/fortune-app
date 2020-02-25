const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CalculationSchema = new Schema({
    user_1: {
        // type: Schema.Types.ObjectId,
        // ref: 'users'
      },
    user_2: {
        // type: Schema.Types.ObjectId,
        // ref: 'users'
    },
    fortune_id: {
        // type: Schema.Types.ObjectId,
        // ref: 'fortunes'
    },
    percentage: {
        type: Number
    }
});

module.exports = Calculation = mongoose.model('calculation', CalculationSchema);