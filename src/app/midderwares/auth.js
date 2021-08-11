const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = "603221464013-ji6thsjj9862r5es12she2f5hgdjlsde.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "QhYAj1Gf_Don2DXFAXBEQO8L";

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "https://wonderplace.herokuapp.com/auth/google/login",
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
