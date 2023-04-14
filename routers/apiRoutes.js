const express = require("express");
const apiControllers = require("../controllers/apiControllers");

const router = express.Router();
console.log("use route");
router.get("/register", apiControllers.register);

module.exports = router;
