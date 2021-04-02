const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const User = require("../models/User");

passport.use(
  new GoogleStrategy(
    {
      // options for strategy
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      // passport callback function

      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log(currentUser);
        } else {
          new User({
            username: profile.emails[0].value,
            googleId: profile.id,
          })
            .save()
            .then((newuser) => {
              console.log(newuser);
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      });
    }
  )
);
