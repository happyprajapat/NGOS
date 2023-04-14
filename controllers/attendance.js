const attendance = require("../models/Attendance");

const upload = async (req, res) => {
  //   const rollNo = 21018499;
  //   const section = "4f2";
  const [find] = await attendance.find({ rollNo: req.body.rollNo });
  console.log("find: ", find);
  try {
    if (find == undefined) {
      console.log("Bodyy: ", req.body);
      console.log("undef");
      const time = new attendance({
        rollNo: req.body.rollNo,
        section: req.body.section,
        attendance: req.body.attendance,
      });
      await time.save();
      return res.send({ time });
    } else {
      throw new Error("user exist");
    }
  } catch {
    console.log("Attendance attendacne");
    console.log(find.attendance[req.body.date]);
    console.log("oookll pppllloo");
    console.log(req.body.attendance);
    const f = find.attendance;
    f[req.body.date].push(["hlo", "ok"]);
    find.attendance = f;
    await find.save();
    return res.send(find);
  }
};
const upload2 = async (req, res) => {
  console.log(req.session.user.subject);
  const attend = await attendance.findOne({
    subject: req.session.user.subject,
  });
  let ares = "";
  attend.attendance.forEach((i) => {
    if (i.date == req.body.date) {
      console.log("ha tan aa");
      ares = "true";
    }
  });
  console.log("ares ", ares);
  // if (ares == "true") {
  //   let ind = attend.attendance.findIndex((x) => x.date == req.body.date);
  //   console.log("hoho ", attend.attendance[ind]);
  //   attend.attendance[ind] = {
  //     date: req.body.date,
  //     present: req.body.present,
  //     absent: req.body.absent,
  //   };

  //   await attend.save();
  //   res.send({ attend });
  // } else {
  console.log("hehehe");

  console.log(attend);
  req.session.attendance = {
    date: req.body.date,
    present: req.body.present,
    absent: req.body.absent,
  };
  await attend.addAttendance({
    date: req.body.date,
    present: req.body.present,
    absent: req.body.absent,
  });
  await attend.save();
  res.send({ attend });
  // }
};
// const upload2 = async (req, res) => {
//   const attend = await attendance.findOne({ subject: req.body.subject });
//   console.log(attend);
//   await attend.addAttendance({
//     date: req.body.date,
//     present: req.body.present,
//   });
//   await attend.save();
//   res.send({ attend });
// };
// const upload2 = async (req, res) => {
//   const attend = new attendance({
//     subject: req.body.name,
//   });
//   await attend.save();
//   res.send({ attend });
// };
const empty = async (req, res) => {
  const attend = await attendance.findOne({ subject: req.body.subject });
  attend.attendance = attend.attendance[0];
  attend.attendance = [];
  //   attend.attendance[0].date = "";
  //   attend.attendance[0].present = [];
  await attend.save();
  res.send(attend);
};
const getAttendanceSchedule = async (req, res) => {
  const [timeTable] = await attendance.find({ subject: req.body.subject });

  const rno = req.body.cc ? req.session.setRno : req.session.user.rollNo;
  console.log(rno);
  //   const timeTabl = await attendance.find({});
  //   console.log("tabla: ", timeTabl);
  let abpr = {};
  console.log("attj", timeTable.attendance);
  timeTable.attendance.forEach((i) => {
    i.absent.forEach((j) => {
      if (j == rno) {
        console.log("yesss", i.date);
        abpr[i.date] = "absent";
      }
    });
    i.present.forEach((j) => {
      if (j == rno) {
        console.log("yesss", i.date);
        abpr[i.date] = "present";
      }
    });
  });
  console.log(abpr);
  res.send(abpr);
  //   const attendi = await timeTable.attendance;
  //   attendi.forEach((i) => {
  //     if (i.date == req.body.date) {
  //       res.send({ i });
  //     }
  //   });
  //   console.log(attendi);
  //   res.send({ attendi });
};
const getAllAttendance = async (req, res) => {
  const rno = req.body.cc ? req.session.setRno : req.session.user.rollNo;
  console.log(rno);
  const timeTable = await attendance.find({});
  const date = req.body.date;
  //   console.log(timeTable);
  let abpr = {};
  //   console.log("attj", timeTable.attendance);
  timeTable.forEach((a) => {
    const att = a.attendance;
    // abpr[a.subject] = {};
    att.forEach((i) => {
      i.absent.forEach((j) => {
        if (j == rno) {
          console.log("yesss", i.date);
          if (i.date == date) {
            abpr[a.subject] = "absent";
          }
        }
      });
      i.present.forEach((j) => {
        if (j == rno) {
          console.log("yesss", i.date);
          if (i.date == date) {
            abpr[a.subject] = "present";
          }
        }
      });
    });
  });
  console.log("all abbnpr: ", abpr);
  res.send(abpr);
  //   const attendi = await timeTable.attendance;
  //   attendi.forEach((i) => {
  //     if (i.date == req.body.date) {
  //       res.send({ i });
  //     }
  //   });
  //   console.log(attendi);
  //   res.send({ attendi });
};
module.exports = {
  upload,
  upload2,
  empty,
  getAttendanceSchedule,
  getAllAttendance,
};
