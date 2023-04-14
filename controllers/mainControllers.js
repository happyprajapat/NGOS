const timeTablemodel = require("../models/timeTable");
const week = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
const register = (req, res) => {
  res.render("./register/first.ejs");
};
const upload = (req, res) => {
  res.render("./timeTableUpload.ejs", {
    userName: req.session.user.firstName,
    role: req.session.user.role,
    section: req.session.user.section,
  });
};
const takeAttendance = (req, res) => {
  res.render("./takeAttendance.ejs", {
    userName: req.session.user.firstName,
    role: req.session.user.role,
    section: req.session.user.section,
    subject: req.session.user.subject,
  });
};
const feedback = (req, res) => {
  res.render("./feedback.ejs", {
    userName: req.session.user.firstName,
    role: req.session.user.role,
    section: req.session.user.section,
  });
};
const displayGrade = (req, res) => {
  res.render("./grades.ejs", {
    userName: req.session.user.firstName,
    role: req.session.user.role,
    section: req.session.user.section,
  });
};
const subject = (req, res) => {
  let present = "NA";
  let absent = "NA";
  let totall = "NA";
  if (req.session.attendance) {
    console.log("attttend", req.session.attendance);
    present = req.session.attendance.present.length;
    console.log(present);
    absent = req.session.attendance.absent.length;
    totall = present + absent;
    console.log(present);
    console.log(absent);
  } else {
    console.log("heni bro");
  }
  if (req.session.user) {
    console.log("pres: ", present);
    console.log("nhi janda peya saala");
    res.render("subject", {
      userName: req.session.user.firstName,
      role: req.session.user.role,
      section: req.session.user.section,
      subject: req.session.user.subject,
      present: present,
      absent: absent,
      totall: totall,
    });
  } else {
    res.redirect("/login");
  }
};

const register2 = (req, res) => {
  console.log("Register: ", req.session);
  if (req.session.register == 2) {
    res.render("./register/second.ejs");
  } else {
    res.redirect("/register");
  }
};
const register3 = (req, res) => {
  if (req.session.register == 3) {
    res.render("./register/third.ejs");
  } else {
    res.redirect("/register");
  }
};

const dashboard = (req, res) => {
  if (req.session.user) {
    console.log("mnb");
    console.log(req.session.user);
    return res.render("dashboard", {
      userName: req.session.user.firstName,
      role: req.session.user.role,
      section: req.session.user.section,
    });
  } else {
    return res.redirect("/login");
  }
};
const login = (req, res) => {
  res.render("login");
};
const logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};
const timeTable = (req, res) => {
  if (req.session.user) {
    res.render("timeTable", {
      userName: req.session.user.firstName,
      role: req.session.user.role,
      section: req.session.user.section,
    });
  } else {
    res.redirect("/login");
  }
};
const attendance = async (req, res) => {
  let subjectWiseSchedule = {};
  if (req.session.user) {
    res.render("attendance", {
      userName: req.session.user.firstName,
      role: req.session.user.role,
      section: req.session.user.section,
      subject: req.session.user.subject,
    });
  } else {
    res.redirect("/login");
  }
};
const subAttend = async (req, res) => {
  let subjectWiseSchedule = {};
  if (req.session.user) {
    res.render("subAttend", {
      userName: req.session.user.firstName,
      role: req.session.user.role,
      section: req.session.user.section,
      subject: req.session.user.subject,
    });
  } else {
    res.redirect("/login");
  }
};
const subject1 = async (req, res) => {
  let subjectWiseSchedule = {};
  if (req.session.user) {
    res.render("subject1", {
      userName: req.session.user.firstName,
      role: req.session.user.role,
      section: req.session.user.section,
      subject: req.session.user.subject,
      present: 10,
      absent: 20,
      totall: 30,
    });
  } else {
    res.redirect("/login");
  }
};
const ccSubject = async (req, res) => {
  let subjectWiseSchedule = {};
  if (req.session.user) {
    res.render("ccSub", {
      userName: req.session.user.firstName,
      role: req.session.user.role,
      section: req.session.user.section,
      subject: req.session.user.subject,
      present: 10,
      absent: 20,
      totall: 30,
    });
  } else {
    res.redirect("/login");
  }
};
const student = async (req, res) => {
  let subjectWiseSchedule = {};
  if (req.session.user) {
    res.render("student", {
      userName: req.session.user.firstName,
      role: req.session.user.role,
      section: req.session.user.section,
    });
  } else {
    res.redirect("/login");
  }
};
const display = async (req, res) => {
  let subjectWiseSchedule = {};
  if (req.session.user) {
    res.render("display", {
      userName: req.session.user.firstName,
      role: req.session.user.role,
      section: req.session.user.section,
    });
  } else {
    res.redirect("/login");
  }
};
module.exports = {
  register,
  register2,
  register3,
  dashboard,
  login,
  logout,
  timeTable,
  attendance,
  upload,
  feedback,
  displayGrade,
  subject,
  subject1,
  takeAttendance,
  subAttend,
  ccSubject,
  student,
  display,
};
