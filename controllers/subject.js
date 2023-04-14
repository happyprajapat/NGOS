const User = require("../models/User");
const Subject = require("../models/Attendance");

const getAttendance = async (req, res, next) => {
  const sub = await Subject.findOne({ subject: req.session.user.subject });
  req.session.selectSub = req.session.user.subject;
  res.send({ sub });
};
const getSub = async (req, res, next) => {
  const sub = await Subject.findOne({ subject: req.body.subject });
  req.session.selectSub = req.body.subject;
  res.send({ sub });
};
const push = async (req, res, next) => {
  const date = req.body.subjectDate;
  req.session.subjectDate = date;
  console.log("datteee", req.session.subjectDate);
  res.redirect("/attendance");
};
const getDateWiseAttendance = async (req, res, next) => {
  const date = req.session.subjectDate;

  const sub = await Subject.findOne({ subject: req.session.selectSub });
  let kj = 0;
  let m;
  try {
    sub.attendance.forEach((i) => {
      if (i.date == date) {
        kj = 99;
        m = i;
        throw new Error(true);
      }
    });
    if (kj == 99) {
      return res.send({
        attendance: false,
      });
    }
  } catch {
    return res.send({ data: m, subject: req.session.selectSub });
  }
};
const setRno = async (req, res) => {
  req.session.setRno = req.body.rno;
  res.send({ yes: true });
};
module.exports = {
  getAttendance,
  push,
  getDateWiseAttendance,
  getSub,
  setRno,
};
