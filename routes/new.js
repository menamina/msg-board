const { Router } = require("express");
const newMsgRouter = Router();

newMsgRouter.get("/new", (req, res) => {
  res.render("form");
});

newMsgRouter.post("/new", (req, res) => {
  messages.push({
    msg: req.body.msg,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = newMsgRouter;
