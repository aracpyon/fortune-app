const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require('jsonwebtoken');

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

router.get('/test', (req, res) => {
  res.json({ msg: "This is the user route" });
});

router.get('/', (req, res) => {
  User.find()
    .then(docs => {
      return res.json(docs);
    })
    .catch(err => {
      console.error(err);
    });
})

router.get('/:id', (req, res) => {
  // debugger
  User.findOne({ _id: req.params.id})
    .then(user => {
      return res.json(user);
    })
    .catch(err => {
      console.error(err);
    });
});

router.post('/register', (req, res) => {
  // debugger
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
  .then(user => {
    if (user){
      return res.status(400).json({email: "A user is already registered with that email"})
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        birthDate: req.body.birthDate,
        zodiac: req.body.zodiac,
        kids: req.body.kids,
        marriage: req.body.marriage,
        personality: req.body.personality
      })

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
          //if it's saved send it to front end
            .then((user) => res.send(user))
            .catch(err => console.log(err))
        })
      })
    }
  })
})

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid){
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email})
    .then(user => {
      if (!user){
        return res.status(404).json({ email: "This user doesn't exist "});
      }

      bcrypt.compare(password, user.password)
      .then(isMatch => {
        if(isMatch){
          const payload = {
            id: user.id,
            username: user.username,
            email: user.email
          };
          
          jwt.sign(
            payload, 
            keys.secretOrKey,
            { expirationIn: 300 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer" + token
              });
            }
          )
        } else {
          return res.status(400).json({password: "Invalid credentials"});
        }
      })
    })
})



module.exports = router;