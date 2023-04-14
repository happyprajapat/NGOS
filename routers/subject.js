const express = require("express");
const mainControllers = require("../controllers/subject");

const router = express.Router();

router.get("/getSub", mainControllers.getAttendance);
router.post("/getSub2", mainControllers.getSub);
router.post("/push", mainControllers.push);
router.get("/getDate", mainControllers.getDateWiseAttendance);
router.post("/setRno", mainControllers.setRno);
module.exports = router;
