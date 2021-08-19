const passport = require('passport');
const express = require('express');
const route = express.Router();
const account = require('../app/controllers/models/account')
const jwt = require('jsonwebtoken')
require('../app/midderwares/auth')

route.get('/google/login', passport.authenticate('google', { failureRedirect: '/index.html' }),
async function(req, res) {
  let user = await account.findOne({googleId : req.user.id})
  var token;
  if(!user) {
      var newUser = new account({
        firstName : req.user.family_name,
        lastName : req.user.given_name,
        email : req.user.email,
        googleId : req.user.id
      })
    newUser.save();
   token  =  jwt.sign({
        email : newUser.email
    },'mk');
    req.session._id = newUser._id;
  }
  else {
    token  =  jwt.sign({
        email : user.email
    },'mk');
    req.session._id = user._id;
    req.session.phone = user.phone;
  }
  req.session.email = req.user.email;
  req.session.token = token;
  req.session.firstName = req.user.family_name;
  req.session.name = req.user.given_name;
  res.redirect('/index.html');
})

route.get('/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));






module.exports = route