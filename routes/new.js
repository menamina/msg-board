const { Router } = require("express");
const newMsgRouter = Router();
const { msgs } = require("./home");

newMsgRouter.get("/new", (req, res) => {
  res.render("form");
});

newMsgRouter.post("/new", (req, res) => {
  msgs.push({
    msg: req.body.msg,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = newMsgRouter;
