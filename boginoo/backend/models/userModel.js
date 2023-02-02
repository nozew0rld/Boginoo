const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLenght: [50, "your name must be in between 1 to 50 characters."],
    minLenght: [1, "your name must be at least 1 character."],
    default: "guest user",
  },
  email: {
    type: String,
    unique: true,
    required: [true, "enter your email address"],
  },
  password: {
    type: String,
    required: [true, "enter your password"],
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
});

const users = mongoose.model("users", userSchema);

module.exports = users;
