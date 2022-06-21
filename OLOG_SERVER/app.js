require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRouter = require("./router/Router");

const Routers = require("./router");
const app = express();

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Main router
app.use("/", mainRouter);

app.get("/", (req, res) => {
  res.send("HI");
});

app.listen(PORT, () => {
  console.log("Rrr");
});
