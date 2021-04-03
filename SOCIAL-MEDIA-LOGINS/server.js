const express = require("express");
const routes = require("./routes/auth-route");
const passportAuth = require("./config/passport-setup");
const connection = require("./db/conn");
const passport = require("passport");
const cookieSession = require('cookie-session')

const app = express();

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieSession(
  {
    maxAge: 24*60*60*1000, // one day session
    keys:["saadhassanisawesome"]
  }
));
app.set("view engine", "ejs");
app.use("/auth", routes);
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(5000, () => {
  console.log("Listening on 5000");
});
