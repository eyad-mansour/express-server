"use strict";

const express = require("express");
const app = express();
app.use(express.json());
// routs
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/person", (req, res) => {
  //   const user = req.body;
  //   const { name, age, gender } = req.query;
  const user = {
    name: "eyad",
    age: 25,
    gender: "male",
  };
  const modifiedAge = parseInt(user.age) + 5;

  //   res.status(201).send("created user");
  res.status(201).send(`age is 5 more years ${modifiedAge}`);
});

function start(port) {
  app.listen(port, () => console.log(`hello world ${port}`));
}

module.exports = {
  app: app,
  start: start,
};
