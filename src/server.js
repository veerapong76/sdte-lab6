const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Test Step3!");
});

module.exports = app;
