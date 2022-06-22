const express = require("express");
const posts = express.Router();
const postsController = require("../../controller/offchain/postsController");

posts.route("/").get(postsController.list);
posts.route("/").post(postsController.write);
posts.route("/:id").get(postsController.read);

module.exports = posts;
