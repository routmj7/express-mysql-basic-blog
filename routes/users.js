var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("users list");
});

router.get("/details", function (req, res, next) {
  res.send("Users details");
});

module.exports = router;
