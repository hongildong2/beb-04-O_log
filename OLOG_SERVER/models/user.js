const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  address: {
    type: String,
  },
  privateKey: {
    type: String,
  },
  receivedToken: {
    type: Number,
    default: 0,
  },
  expectedToken: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
