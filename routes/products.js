var express = require("express");
var router = express.Router();
var db = require("../db");

router.get("/", function (req, res, next) {
  var select = "SELECT * FROM products";

  db.query(select, function (err, rows, fields) {
    if (err) throw err;
    // res.json(rows);
    res.render("products", { title: "CURD Operation", products: rows });
  });
});

router.get("/create-product", function (req, res, next) {
  res.render("createform", { title: "Create Product" });
});

router.post("/createnew", function (req, res, next) {
  var product_name = req.body.product_name;
  var product_price = req.body.product_price;

  var insert = `INSERT INTO products (name, price) VALUES ("${product_name}", "${product_price}")`;
  db.query(insert, function (err, result) {
    if (err) throw err;
    res.redirect("/products");
  });
});

router.get("/edit-form/:id", function (req, res, next) {
  var id = req.params.id;

  select_edit = `SELECT * FROM products WHERE id=${id}`;
  db.query(select_edit, function (err, rows, fields) {
    res.render("editform", { title: "Update product", product: rows[0] });
  });
});

router.post("/update-product/:id", function (req, res, next) {
  var new_product_name = req.body.product_name;
  var new_product_price = req.body.product_price;

  var id = req.params.id;

  var update = `UPDATE products SET name="${new_product_name}", price="${new_product_price}" WHERE id=${id}`;
  db.query(update, function (err, result) {
    if (err) throw err;
    res.redirect("/products");
  });
});

router.get("/delete-product/:id", function (req, res, next) {
  var id = req.params.id;
  var del = `DELETE FROM products WHERE id=${id}`;

  db.query(del, function (err, result) {
    if (err) throw err;
    res.redirect("/products");
  });
});

module.exports = router;
