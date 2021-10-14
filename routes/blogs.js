var express = require("express");
var router = express.Router();
var multer = require("multer");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("create", { title: "Create Blog" });
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post("/upload", upload.single("blogimg"), function (req, res, next) {
  // var fileinfo = req.file; // fieldname, orig_name, enc, mimetype, dest, filename, path, size
  var fileinfo = req.file.filename;
  var title = req.body.title;
  console.log(fileinfo);
  res.redirect("/blogs");
});

router.post("/uploads", upload.array("blogimg", 5), function (req, res, next) {
  var fileinfo = req.files;
  var title = req.body.title;
  console.log(fileinfo);
  res.redirect("/blogs");
});

module.exports = router;
