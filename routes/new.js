let express = require("express");
let router = express.Router();

router.get("/", function (req, res, next) {
  res.render("form", { title: "pedro is the cooliest" });
});

module.exports = router;
