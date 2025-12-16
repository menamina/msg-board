const { Router } = require("express");
const specificMsg = Router();

specificMsg.get("/ms/:id", (req, res) => {});

module.exports = specificMsg;
