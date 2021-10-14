var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/emps/:id/:name", function (req, res, next) {
  res.render("employees", { result: req.params });
  // res.json(req.params);
});

// form submit using post
router.post("/emps/submit", function (req, res, next) {
  var id = req.body.empid;
  var name = req.body.empname;
  res.redirect("/emps/" + id + "/" + name);
  // res.json(req.body);
});

module.exports = router;
