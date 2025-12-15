const express = require("express");
const app = express();
const path = require("node:path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.listen(3000, (error) => {
  if (!error) {
    console.log("server is active");
  }
  console.log("server not working :(");
});
