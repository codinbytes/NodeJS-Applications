const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  date: { type: Date, default: Date.now },
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const Users = new mongoose.model("User", userSchema);
module.exports = Users;
