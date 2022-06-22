const express = require("express");
const posts = require("./posts");
const auth = require("./auth");
const router = express.Router();

router.use("/posts", posts);
router.use("/auth", auth);

module.exports = router;
