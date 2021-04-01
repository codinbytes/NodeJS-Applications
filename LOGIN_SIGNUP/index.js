const express = require("express");
const path = require("path");
const Users = require("./models/Users");
const bodyParser = require("body-parser");
const database = require("./db/conn");
const app = express();

const staticPath = path.join(__dirname, "static");

app.use(express.static(staticPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/static/login.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/static/signup.html");
});

app.post("/login", function (req, res, next) {});

app.post("/signup", async function (req, res, next) {
  try {
    const password = req.body.passwordsignup;
    const cpassword = req.body.passwordsignup_confirm;
    if (password === cpassword) {
      const User = new Users({
        username: req.body.usernamesignup,
        email: req.body.emailsignup,
        password: req.body.passwordsignup,
      });

      const user = await User.save();
      res.status(201).send("Registered Successfully");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});
app.listen(5000);
