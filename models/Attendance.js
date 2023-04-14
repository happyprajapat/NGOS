const mongoose = require("mongoose");

// const attendance = new mongoose.Schema({
//   rollNo: {
//     type: Number,
//     required: true,
//     // unique: true,
//   },
//   section: {
//     type: String,
//     // required: true,
//   },
//   // attendance: {
//   //   monday: [
//   //     {
//   //       type: Object,
//   //     },
//   //   ],
//   //   tuesday: [
//   //     {
//   //       type: Object,
//   //     },
//   //   ],
//   //   wednesday: [
//   //     {
//   //       type: Object,
//   //     },
//   //   ],
//   //   thursday: [
//   //     {
//   //       type: Object,
//   //     },
//   //   ],
//   //   friday: [
//   //     {
//   //       type: Object,
//   //     },
//   //   ],
//   //   saturday: [
//   //     {
//   //       type: Object,
//   //     },
//   //   ],
//   //   sunday: [
//   //     {
//   //       type: Object,
//   //     },
//   //   ],
//   // },
//   attendance: {
//     type: Object,
//   },
// });
const attendance = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    unique: true,
  },
  attendance: [
    {
      date: {
        type: String,
      },
      time: {
        type: String,
      },
      present: [
        {
          type: Number,
        },
      ],
      absent: [
        {
          type: Number,
        },
      ],
    },
  ],
});

// return token;
// };
attendance.methods.addAttendance = async function (data) {
  const attend = this;
  // const token = jwt.sign(attendance._id.toString(), "cezisbest");
  // console.log("dssde bc: ", attend);
  let ok = true;
  attend.attendance.forEach(async (i) => {
    if (i.date == data.date) {
      console.log("hunn dss");
      let ind = attend.attendance.findIndex((x) => x.date == data.date);
      // console.log("hoho ", attend.attendance[ind]);
      attend.attendance[ind] = data;
      ok = false;
      // await attend.save();
    }
  });
  if (ok) {
    attend.attendance = attend.attendance.concat(data);
  }
  await attend.save();
};
// attendance.methods.addPresent = async function (date, data) {
//   const attend = this;
//   // const token = jwt.sign(attendance._id.toString(), "cezisbest");
//   console.log(attend.attendance.present);
//   attend.attendance.forEach(async (i) => {
//     if (i.date == date) {
//       console.log(
//         "attenghi: ",
//         attend.attendance[attend.attendance.length - 1]
//       );
//       attend.attendance[attend.attendance.length - 1] = i.present.concat(data);
//       await attend.save();
//     }
//   });

// })
// };
const attend = mongoose.model("attendance", attendance);
module.exports = attend;
