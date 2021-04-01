const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  date: { type: Date, default: Date.now },
});

const Users = new mongoose.model("User", userSchema);
module.exports = Users;
