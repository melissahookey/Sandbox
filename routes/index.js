const express = require("express");

const homeRouter = require("../views/index.html");

const app = express();

app.use("../views/index.html", homeRouter);

module.exports = app;
