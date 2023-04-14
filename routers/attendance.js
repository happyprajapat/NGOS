const express = require("express");
const mainControllers = require("../controllers/attendance");

const router = express.Router();

router.post("/attendanceUpload", mainControllers.upload2);
router.post("/empty", mainControllers.empty);
router.post("/get", mainControllers.getAttendanceSchedule);
router.post("/getAllAttendance", mainControllers.getAllAttendance);

module.exports = router;
