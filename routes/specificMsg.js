const { Router } = require("express");
const specificMsg = Router();
const { msgs } = require("./home");

specificMsg.get("/msg/:index", (req, res) => {
  const index = Number(req.params.index);
  const message = msgs[index];

  if (!message) {
    console.log(res.status(404).send("msg not found :("));
  } else {
    res.render("msgDetails", { message });
  }
});

module.exports = specificMsg;
