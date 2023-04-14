// const express = require("Express");
const mongoose = require("mongoose");

const timeTable = new mongoose.Schema({
  section: {
    type: String,
    required: true,
    unique: true,
  },
  timeTable: {
    monday: [
      {
        type: Object,
        // required: true,
      },
    ],
    tuesday: [
      {
        type: Object,
        // required: true,
      },
    ],
    wednesday: [
      {
        type: Object,
        // required: true,
      },
    ],
    thursday: [
      {
        type: Object,
        // required: true,
      },
    ],
    friday: [
      {
        type: Object,
        // required: true,
      },
    ],
    saturday: [
      {
        type: Object,
      },
    ],
    sunday: [
      {
        type: Object,
      },
    ],
  },
});

// timeTable.statics.findByCredentials = async (email, password) => {
//   const user = await User.findOne({ email });
//   console.log(user.password);
//   if (!user) {
//     throw new Error("Unable to login");
//   }
//   const isMatch = await bcrypt.compare(password, user.password);

//   if (!isMatch) {
//     throw new Error("Unable to login");
//   }

//   return user;
// };

const time = mongoose.model("timeTable", timeTable);

module.exports = time;
