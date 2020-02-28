const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const passport = require('passport');
const findZodiac = require('../../helpers/zodiac_string_calc');



const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// special route to get two random users
router.get("/twousers", (req, res) => {
  User.aggregate([{ $sample: { size: 2 } }]).then(users => {
    res.json(users);
  });
});

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email
  });
});

router.get("/test", (req, res) => {
  res.json({ msg: "This is the user route" });
});

router.get("/", (req, res) => {
  // Filters the output to only have the username
  User.find({ }, { 
    username: 1,
    birthDate: 1,
    zodiac: 1,
    kids: 1,
    marriage: 1,
    personality: 1
  })
    .then(docs => {
      return res.json(docs);
    })
    .catch(err => {
      console.error(err);
    });
});

router.get("/:id", (req, res) => {

  User.findOne({ _id: req.params.id })
    .then(user => {
      return res.json(user);
    })
    .catch(err => {
      console.error(err);
    });
});

router.post("/register", (req, res) => {

  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res
        .status(400)
        .json({ email: "A user is already registered with that email" });
    } else {

      

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        birthDate: req.body.birthDate,
        zodiac: findZodiac(req.body.birthDate),
        kids: req.body.kids,
        marriage: req.body.marriage,
        personality: req.body.personality
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            //if it's saved send it to front end
            .then(user => {
              const payload = {
                id: user.id,
                username: user.username,
                email: user.email,
                birthDate: user.birthDate,
                zodiac: user.zodiac,
                kids: user.kids,
                marriage: user.marriage,
                personality: user.personality
              };
      
              jwt.sign(
                payload,keys.secretOrKey,{ expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                }
              );
              // res.send(user);
            })
            .catch(err => res.status(404).json(err));
        });
      });


    }
  });
});

router.post("/login", (req, res) => {

  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ email: "This user doesn't exist " });
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          username: user.username,
          email: user.email,
          birthDate: user.birthDate,
          zodiac: user.zodiac,
          kids: user.kids,
          marriage: user.marriage,
          personality: user.personality
        };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Invalid credentials" });
      }
    });
  });
});


module.exports = router;
