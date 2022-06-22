const express = require("express");
const auth = express.Router();
const authController = require("../../controller/offchain/authController");

auth.route("/register").post(authController.register);
auth.route("/login").post(authController.login);

module.exports = auth;
