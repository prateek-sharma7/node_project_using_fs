const express = require("express");
const path = require("path");
const router = express.Router();

const productscontroller = require("../controllers/products");

router.get("/", productscontroller.getProducts);

module.exports = router;
