const express = require("express");
const userControllers = require("../controllers/userControllers");
const auth = require("../middleware/auth");
const isLoggedIn = require("../middleware/isLoggedIn");

const router = express.Router();
console.log("use route");
router.post("/emailExist", userControllers.checkUser);
// router.post("/users", userControllers.postUserData);
router.post("/users", userControllers.postUserData);
router.post("/login", userControllers.login);
router.get("/logout", userControllers.logout);
router.post("/registerMail", userControllers.registerMail);
router.post("/register", userControllers.register);
router.post("/otpVerify", userControllers.verifyOtp);
router.get("/getAll", userControllers.getAllUsers);

router.post("/findName", userControllers.findName);
module.exports = router;
