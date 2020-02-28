const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const Fortune = require("../../models/Fortune");
const Calculation = require("../../models/Calculations");
const validateFortuneInput = require("../../validation/fortunes");

router.get("/", (req, res) => {
  Fortune.find()
    .sort({ date: -1 })
    .then(fortunes => res.json(fortunes))
    .catch(err =>
      res.status(404).json({ nofortunesfound: "No fortunes found" })
    );
});

router.get("/randompos", (req, res) => {
  Fortune.aggregate([
    { $match: { favorability: "positive" } },
    { $sample: { size: 1 } }
  ]).then(fortune => res.json(fortune));
});

router.get("/user/:user_id", (req, res) => {

  Fortune.find().lean()
    .then(fortunes => {
      Calculation.find({ user_1: req.params.user_id })
        .then(calculations => {
          const fortunesObj = {};
          const calculationFortunes = calculations.map(
            calculation => {
         
              return calculation.fortune_id.toJSON();
            }
          );
          fortunes.forEach(fortune => {
            fortunesObj[fortune._id.toJSON()] = {_id: fortune._id.toJSON(),
              favorability: fortune.favorability,
              sentence: fortune.sentence,
              date: fortune.date
            };
          });

          let returnArr = [];
          calculationFortunes.forEach(fortuneId => {
            if (fortunesObj[fortuneId]){
              returnArr.push(fortunesObj[fortuneId]);
            }
          });
    
          return res.json(returnArr);
        })
        .catch(err => res.json(err));
    })
    .catch(err => res.json(err));
});

router.get("/:id", (req, res) => {
  Fortune.findById(req.params.id)
    .then(fortune => res.json(fortune))
    .catch(err =>
      res.status(404).json({ nofortunefound: "no fortune found with that ID" })
    );
});

router.post(
  "/",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateFortuneInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newFortune = new Fortune({
      favorability: req.body.favorability,
      sentence: req.body.sentence
    });

    newFortune.save().then(fortune => res.json(fortune));
  }
);

module.exports = router;
