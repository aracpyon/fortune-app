const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const Fortune = require("../../models/Fortune");
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
  Fortune
    .aggregate([
      { $match: { favorability: "positive" }},
      { $sample: { size: 1 } 
    }])
    .then( fortune => res.json(fortune));
});

router.get("/user/:user_id", (req, res) => {
  Fortune.find({user: req.params.user_id})
    .then(fortunes => res.json(fortunes))
    .catch(err => res.status(404).json({ nomatchhistoryfound: 'No Fortune history found from this user'}))
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
