const express = require("express");
const apiControllers = require("../controllers/apiControllers");

const router = express.Router();
console.log("use route");
router.post("/registerStudent", apiControllers.registerStudent);
router.post("/registerVolunteer", apiControllers.registerVolunteer);

module.exports = router;
