const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const Calculation = require('../../models/Calculations');
const ZodiacCalc = require('../../frontend/src/util/zodiac_calc_util');

router.post("/", (req, res) => {

    const user_1 = {
        _id: req.body['user_1._id'],
        zodiac: req.body['user_1.zodiac'],
        kids: parseInt(req.body['user_1.kids']),
        marriage: parseInt(req.body['user_1.marriage']),
        personality: parseInt(req.body['user_1.personality'])
    };

    const user_2 = {
        _id: req.body['user_2._id'],
        zodiac: req.body['user_2.zodiac'],
        kids: parseInt(req.body['user_2.kids']),
        marriage: parseInt(req.body['user_2.marriage']),
        personality: parseInt(req.body['user_2.personality'])
    };

    const percentCompatZodiac = ZodiacCalc[user_1.zodiac][user_2.zodiac];
    debugger


    const newCalculation = new Calculation({
        userOne: req.body.userOne,
        userTwo: req.body.userTwo,
        fortuneId: req.body.fortuneId
        // percentage 
    });
    newCalculation.save().then(calculation => res.json(calculation));
});

router.get("/", (req, res) => {
    req.find().then(allCalc => res.json(allCalc) );
});

module.exports = router;