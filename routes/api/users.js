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


router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
  .then(user => {
    if (user){
      //if user already exists in our database
      //we return errors to let them know
      return res.status(400).json({email: "A user is already registered with that email"})
    }else{
      const newUser = new User({
        handle: req.body.handle,
        email: req.body.email,
        password: req.body.password
      })

      //this is just testing take below out
      // newUser.save().then(user => res.send(user)).catch(err => res.send(err)); 

      //use bcrypt to genereate our salt
      //bcrypt.genSalt(10(number of times to generate salt, callbackfunction(err, salt) ))
      bcrypt.genSalt(10, (err, salt => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
          //if it's saved send it to front end
            .then((user) => res.send(user))
            .catch(err => console.log(err))
        })
      }))
    }
  })
})

router.post('./login', (req, res) => {
  const { errors, isValid } = validLoginInput(req.body);

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
          // res.send({ msg: "Success"})
          const payload = {
            id: user.id,
            handle: user.handle,
            email: user.email
          }
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
        }else{
          return res.status(400).json({password: "Incorrect"});
        }
      })
    })
})

module.exports = router;