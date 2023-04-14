const express = require("express");
const mainControllers = require("../controllers/mainControllers");
const auth = require("../middleware/auth");
const isLoggedIn = require("../middleware/isLoggedIn");

const router = express.Router();
console.log("use route");
router.get("/register", mainControllers.register);
router.get("/login", mainControllers.login);
router.get("/logout", mainControllers.logout);
router.get("/dashboard", mainControllers.dashboard);
router.get("/timeTable", mainControllers.timeTable);
router.get("/attendance", mainControllers.attendance);
router.get("/verify-otp", mainControllers.register2);
router.get("/register-user", mainControllers.register3);
router.get("/upload", mainControllers.upload);
router.get("/feedback", mainControllers.feedback);
router.get("/grades", mainControllers.displayGrade);
router.get("/subject", mainControllers.subject);
router.get("/subject1", mainControllers.subject1);
router.get("/takeAttendance", mainControllers.takeAttendance);
router.get("/subjectAttendance", mainControllers.subAttend);
router.get("/ccSub", mainControllers.ccSubject);
router.get("/student", mainControllers.student);
router.get("/display", mainControllers.display);

module.exports = router;
