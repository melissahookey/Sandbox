const express = require("express");
const app = express();
const port = 8080;
require("dotenv").config();

app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));

app.listen(8080, () => {
  console.log("App is listening on port 8080!");
});

// takes user to account auth on spotify
app.get("/", (req, res) => {
  res.send(
    "<a href='https://accounts.spotify.com/authorize?client_id=" +
      process.env.CLIENT_ID +
      "&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Faccount&scope=user-top-read'>Sign in</a>"
  );
});

app.get("/account", async (req, res) => {
  console.log("spotify response code is " + req.query.code);
  res.sendFile(__dirname + "/views/index.html");
});

// after user allows access, redirect to index.html
app.get("", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
