const express = require("express");
const mainControllers = require("../controllers/mainControllers");

const router = express.Router();
console.log("use route");
router.get("/register-volunteer", mainControllers.registerVolunteer);
router.get("/register-student", mainControllers.registerStudent);

module.exports = router;
