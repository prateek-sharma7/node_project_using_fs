const express = require("express");
const path = require("path");
const router = express.Router();
const productscontroller = require("../controllers/products");

router.get("/add-product", productscontroller.getAddProduct);

router.post("/add-product", productscontroller.postAddProduct);

module.exports = router;
