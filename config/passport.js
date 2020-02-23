const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('./keys');

const options = {};
options.jwFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//.fromAuth.. is a built-in method

options.secretOrKey = key.secretOrKey;

module.exports = passport => {
  passport.use(new JwtStrategy(options, (jwt_payload, done) => {
    console.log(jwt_payload);
    done();
    //similar to next from middleware to move on to the next middleware
    //we are using done here for password not to hang around there
  }))
}