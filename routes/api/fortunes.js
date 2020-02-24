//retrieve a specific fortune for sepcific user.

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Fortune = require('../../models/Fortune');
const Calculation = require('../../models/calculation')
const validateFortuneInput = require('../../validation/fortunes');

router.get('/user/:user_id', (req, res) => {
  Calculation.find({user: req.params.user})
})

router.get('/fortune')

router.get('/:id', (req, res) => {
  Fortune.findById(req.params.id)
    .then(fortune => res.json(fortune))
    .catch(err => 
        res.status(404).json({ nofortunefound: 'No fortune found with this ID'}))
});
