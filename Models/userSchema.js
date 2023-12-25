const mongoose = require("mongoose");

const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        return validator.isLength(value, { min: 3, max: 20 });
      },
      message: "Username must be between 3 and 20 characters",
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Invalid email format",
    },
  },
  password: {
    type: String,
    required: true,
  },
  premium: {
    type: Boolean,
    default: false,
  },
});

const users = mongoose.model("users", userSchema);

module.exports = users;
