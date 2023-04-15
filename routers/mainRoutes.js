const express = require("express");
const mainControllers = require("../controllers/mainControllers");

const router = express.Router();
console.log("use route");
router.get("/register", mainControllers.register);

module.exports = router;
