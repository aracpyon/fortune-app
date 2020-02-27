const Calculation = require("../../models/Calculations");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const ZodiacCalc = require("../../frontend/src/util/zodiac_calc_util");
const Fortune = require("../../models/Fortune");

router.post("/", (req, res) => {

  debugger

  const user_1 = {
    _id: req.body["user_1[id]"],
    zodiac: req.body["user_1[zodiac]"],
    kids: parseInt(req.body["user_1[kids]"]),
    marriage: parseInt(req.body["user_1[marriage]"]),
    personality: parseInt(req.body["user_1[personality]"])
  };

  const user_2 = {
    _id: req.body["user_2[_id]"],
    zodiac: req.body["user_2[zodiac]"],
    kids: parseInt(req.body["user_2[kids]"]),
    marriage: parseInt(req.body["user_2[marriage]"]),
    personality: parseInt(req.body["user_2[personality]"])
  };

  debugger

  // Calculates the compatibility based on zodiac
  const percentCompatZodiac = ZodiacCalc[user_1.zodiac][user_2.zodiac];

  // Calculates the compatibility based on personal information
  let total_per = Math.abs(user_1.kids - user_2.kids);
  total_per += Math.abs(user_1.marriage - user_2.marriage);
  total_per += Math.abs(user_1.personality - user_2.personality);
  const final_score = (total_per / 4) * 100;

  // Averages both compatibility
  const final_percentage = (percentCompatZodiac + final_score) / 2;

  if (final_percentage < 50) {
    Fortune.aggregate([
      { $match: { favorability: "Negative" } },
      { $sample: { size: 1 } }
    ])
      .then(fortune => {
        const newCalculation = new Calculation({
          user_1: user_1._id,
          user_2: user_2._id,
          fortune_id: fortune[0]._id,
          sentence: fortune[0].sentence,
          percentage: final_percentage
        });
        debugger
        newCalculation
          .save()
          .then(calculation => {
            return res.json({ calculation, fortune: fortune[0] });
          })
          .catch(err => res.json(err));
      })
      .catch(err => res.json(err));
  } else if (final_percentage > 50 && final_percentage > 80) {
    Fortune.aggregate([
      { $match: { favorability: "Positive" } },
      { $sample: { size: 1 } }
    ])
      .then(fortune => {
        const newCalculation = new Calculation({
          user_1: user_1._id,
          user_2: user_2._id,
          fortune_id: fortune[0]._id,
          sentence: fortune[0].sentence,
          percentage: final_percentage
        });
        debugger

        newCalculation
          .save()
          .then(calculation => {
            return res.json({ 
              calculation, 
              fortune: fortune[0] });
          })
          .catch(err => res.json(err));
      })
      .then(err => res.json(err));
  } else {
    Fortune.aggregate([
      { $match: { favorability: "Super Positive" } },
      { $sample: { size: 1 } }
    ])
      .then(fortune => {
        const newCalculation = new Calculation({
          user_1: user_1._id,
          user_2: user_2._id,
          fortune_id: fortune[0]._id,
          sentence: fortune[0].sentence,
          percentage: final_percentage
        });
        debugger

        newCalculation
          .save()
          .then(calculation => {
            return res.json({
              calculation,
              fortune: fortune[0]
            });
          })
          .catch(err => res.json(err));
      })
      .catch(err => res.json(err));
  }
});

router.get("/", (req, res) => {
  Calculation.find().then(allCalc => res.json(allCalc));
});

module.exports = router;
