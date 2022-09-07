"use strict";

const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
app.use(express.json());
// routs
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/person", (req, res) => {
  //   const user = req.body;
  const { name, age, gender } = req.body;

  const modifiedAge = parseInt(age) + 5;

  res.status(201).send(modifiedAge.toString());

  //   res.status(201).send("created user");
  // res.status(201).send(`${modifiedAge}`);
});

function start(port) {
  app.listen(port, () => console.log(`hello world ${port}`));
}

module.exports = {
  app: app,
  start: start,
};
