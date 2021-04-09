const express = require("express");
const bodyParser = require("body-parser");

app = express();
app.set("views", "ejs");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", urlencodedParser, (req, res) => {
  res.render("register");
});
