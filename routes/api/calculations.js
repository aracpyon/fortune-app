const Calculation = require('../../models/Calculations');
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
    // debugger
    const newCalculation = new Calculation({
        user_1: req.body.user_1,
        user_2: req.body.user_2,
        fortune_id: req.body.fortune_id,
        percentage: req.body.percentage
    });
    debugger
    newCalculation.save().then(calculation => res.json(calculation))
        .catch(err => res.json(err))
});

router.get("/", (req, res) => {
    Calculation.find().then(allCalc => res.json(allCalc) );
});
module.exports = router;