const { Router } = require("express");
const msgRouter = Router();
const msgs = [
  {
    msg: "coffee later?",
    user: "Loreal",
    added: new Date(),
  },
  {
    msg: "wya??",
    user: "Milani",
    added: new Date(),
  },
  {
    msg: "wya??",
    user: "Bretman R",
    added: new Date(),
  },
  {
    msg: "wya??",
    user: "Armani",
    added: new Date(),
  },
  {
    msg: "wya??",
    user: "Patrick Ta",
    added: new Date(),
  },
];

msgs.get("/", (req, res) => {
  res.render("homepage", { title: "Mini Messageboard", messages: messages });
});
