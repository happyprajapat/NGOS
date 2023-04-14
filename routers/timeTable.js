const express = require("express");
const mainControllers = require("../controllers/timeTable");

const router = express.Router();
console.log("use route");

router.post("/uploadd", mainControllers.upload);
router.get("/time", mainControllers.getTime);
router.post("/timeTable", mainControllers.getTimetable);
module.exports = router;
