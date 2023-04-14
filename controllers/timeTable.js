const timeTable = require("../models/timeTable");
const timeTablemodel = require("../models/timeTable");
const config = require("../data.json");
require("dotenv").config();
const week = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
const upload = async (req, res, next) => {
  try {
    // const section = req.session.section;
    const [time] = await timeTable.find({ section: req.session.user.section });
    try {
      if (time.length != 0) {
        console.log(time);
        time.timeTable = req.body.time;
        await time.save();
        res.send({
          done: true,
        });
      } else {
        throw new Error("ok");
      }
    } catch {
      const timeTablee = new timeTable({
        section: req.session.user.section,
        timeTable: req.body.time,
      });
      await timeTablee.save();
      res.redirect("/timeTable");
      res.send({
        done: true,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
const getTime = async (req, res, next) => {
  try {
    console.log("section", req.session);
    const [time] = await timeTable.find({ section: req.session.user.section });
    res.send({
      time: time,
    });
  } catch (err) {
    console.log("errrror: ", err);
  }
};
const getTimetable = async (req, res) => {
  let subjectWiseSchedule = {};
  if (req.session.user) {
    // let j = 0;
    console.log("in the attend");
    // console.log(req.session.user.section);
    const [time] = await timeTablemodel.find({
      section: req.session.user.section,
    });
    // (subjectWiseSchedule["monday"] =
    week.forEach((j) => {
      subjectWiseSchedule[j] = [];
      time.timeTable[j].forEach((i) => {
        if (i[2] == req.body.subject) {
          subjectWiseSchedule[j].push(i);
        }
      });
    });
    console.log(subjectWiseSchedule);
    res.send({ subjectWiseSchedule });
  }
};
module.exports = { upload, getTime, getTimetable };
