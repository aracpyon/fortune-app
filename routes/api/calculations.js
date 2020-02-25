const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
    const newCalculation = new Calculation({
        userOne: req.body.userOne,
        userTwo: req.body.userTwo,
        fortuneId: req.body.fortuneId
    });
    newCalculation.save().then(calculation => res.json(calculation));
});

router.get("/", (req, res) => {
    req.find().then(allCalc => res.json(allCalc) );
});
module.exports = router;