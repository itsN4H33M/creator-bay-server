const express = require("express");

const router = new express.Router();

const userController = require("../Controllers/userController");
// user registration
router.post("/user/register", userController.register);

// User login
router.post('/user/login', userController.login)

module.exports = router;
