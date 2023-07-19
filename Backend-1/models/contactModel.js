const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;
// const tokenSchema = require("./tokenSchema");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: "wrong email format bro",
    },
  },
  subject: {
    type: String,
    required: true,
  },
  contact: {
    required: true,
    type: Number,
  },
  message: {
    required: true,
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
