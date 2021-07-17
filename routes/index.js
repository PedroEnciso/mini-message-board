var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there! Welcome to my message board.",
    user: "Pedro",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Random User",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = router;
