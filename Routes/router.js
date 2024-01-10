const express = require("express");

const router = new express.Router();

const userController = require("../Controllers/userController");
const productController = require("../Controllers/productController");
// user registration
router.post("/user/register", userController.register);

// User login
router.post("/user/login", userController.login);

// get products
router.get("/products", productController.getAllProducts);

module.exports = router;
