const express = require("express");
const app = express();
const path = require("node:path");
const { msgRouter } = require("./routes/home");
const newMsgRouter = require("./routes/new");
const specificMsg = require("./routes/specificMsg");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use("/", msgRouter);
app.use("/", newMsgRouter);
app.use("/", specificMsg);

app.listen(3000, (error) => {
  if (!error) {
    console.log("server is active");
  } else {
    console.log("server not working :(");
  }
});
