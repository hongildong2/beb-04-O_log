const express = require("express");
const posts = express.Router();
const postsController = require("../../controller/offchain/postsController");
const checkLoggedIn = require("../../checkLoggedIn");

posts.route("/").get(postsController.list);
posts.route("/").post(checkLoggedIn, postsController.write);
posts.route("/:id").get(checkLoggedIn, postsController.read);

module.exports = posts;
