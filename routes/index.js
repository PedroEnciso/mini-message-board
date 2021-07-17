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

/* GET add message page. */
router.get("/new", function (req, res, next) {
  res.render("form", { title: "Add a message" });
});

/* POST data from user */
router.post("/new", function (req, res, next) {
  console.log("POST from /new");
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
