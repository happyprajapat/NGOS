const Student = require("../models/User");
const Volunteer = require("../models/User");
const Problem = require("../models/User");
require("dotenv").config();

const nodemailer = require("nodemailer");

// const getUserData = async (req, res, next) => {
//   try {
//     const user = await User.find({});
//     // await sendWelcomeEmail("m3passkarvado@gmail.com");
//     res.json(user);
//   } catch (err) {
//     console.log(err.message);
//     res.status(402).send("ERROR");
//   }
// };

// const checkUser = async (req, res, next) => {
//   // try {
//   const user = await User.find({ email: req.body.email });
//   let a = 0;
//   // await sendWelcomeEmail("m3passkarvado@gmail.com");
//   console.log("Checkk");
//   console.log(user.length);
//   if (user.length != 0) {
//     console.log("User: ", true);
//     return res.json({ userExists: true });
//   } else {
//     console.log("User: ", false);
//     config.forEach((i) => {
//       if (i.email == req.body.email) {
//         a = 5;
//         req.session.role = i.role;
//         req.session.section = i.section;
//         if (i.role != "student") {
//           console.log("rolllee");
//           req.session.subject = i.subject;
//         }
//         return res.json({ userExists: false });
//       } else {
//         a = 9;
//       }
//     });
//     // if (a == 9) {
//     //   return res.json({ userExists: true });
//     // }
//   }

//   // const isUser = user ? true : false;
//   // } catch (err) {
//   //   console.log(err.message);
//   //   return res.status(402).send("ERROR");
//   // }
// };

// async function sendOtp(email) {
//   console.log(process.env.USERNAME);
//   const otp = Math.floor(100000 + Math.random() * 900000);
//   let transporter = nodemailer.createTransport({
//     host: process.env.HOST,
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.USERNAME,
//       pass: process.env.PASS,
//     },
//   });
//   let info = await transporter.sendMail({
//     from: process.env.USERNAME,
//     to: email,
//     subject: "Verification for Registeration at SyncU ✔",
//     // text: "Hello duniya?",
//     html: `Your OTP for verification at SyncU.me is <b>${otp}</b>`,
//   });

//   console.log("Message sent: %s", info.Accepted);
//   // req.session.otp = otp;
//   return otp;
// }
// async function sendWelcomeEmail(email) {
//   let transporter = nodemailer.createTransport({
//     host: process.env.HOST,
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.USERNAME,
//       pass: process.env.PASS,
//     },
//   });
//   let info = await transporter.sendMail({
//     from: process.env.USERNAME,
//     to: email,
//     subject: "Welcome to SyncU",
//     // text: "Hello duniya?",
//     html: `<p style="font-family: Helvetica;">Your account has been successfully created at <a href="https://syncu.me">SyncU</a></p>`,
//   });

//   console.log("Message sent: %s", info.Accepted);
//   // req.session.otp = otp;
//   // return otp;
// }

// const verifyOtp = async (req, res, next) => {
//   const { otp } = req.body;

//   console.log("Otp recieved: ", JSON.stringify(req.body));
//   console.log("Actual Otp: ", req.session.otp);
//   if (Number(otp) == Number(req.session.otp)) {
//     req.session.register = 3;
//     res.json({ isVerified: true });
//   } else {
//     res.json({ isVerified: false });
//   }
// };
// // main().catch(console.error);

const registerStudent = async (req, res, next) => {
  console.log("Hi");
  try {
    const user = new Student(req.body);
    // await sendMail(req.body.email);
    const token = await user.generateAuthToken();
    await user.save();
    return res.json(user, {}, {}, token);
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Error");
  }
};
const registerVolunteer = async (req, res, next) => {
  console.log("Hi");
  try {
    const user = new Volunteer(req.body);
    // await sendMail(req.body.email);
    const token = await user.generateAuthToken();
    await user.save();
    return res.json(user, {}, {}, token);
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Error");
  }
};

// const login = async (req, res, next) => {
//   console.log("Loginp : \n", req.session.currentUser);
//   console.log(req.body);
//   try {
//     const user = await User.findByCredentials(
//       req.body.email,
//       req.body.password
//     );
//     console.log("user: ", user);
//     const token = await user.generateAuthToken();
//     req.session.token = token;

//     req.session.user = await user;
//     // res.redirect("/profile");
//     req.session.login = true;
//     console.log("hnji");
//     return res.send(user);
//   } catch (err) {
//     // console.log(e);
//     res.status(400).send({ error: err.message });
//   }
// };
// const logout = async (req, res, next) => {
//   req.session.destroy();
//   res.redirect("/");
// };

// const registerMail = async (req, res, next) => {
//   const email = req.body.email;
//   // console.log(req.body.email);
//   console.log("Register Mail");
//   const otp = await sendOtp(email);
//   // console.log(otp);
//   req.session.otp = otp;
//   req.session.email = email;
//   req.session.register = 2;
//   // console.log("req: ", req.otp);
//   // next();
//   res.json({ done: true });
//   // res.redirect("/register");
// };

// const register = async (req, res, next) => {
//   try {
//     const firstName = req.body.firstName;
//     // const lastName = req.body.lastName;
//     const email = req.session.email;
//     const mobile = req.body.mobile;
//     const role = req.session.role;
//     const section = req.session.section;
//     const password = req.body.password;
//     console.log("boddyu: ", req.session);
//     const rollNo = role == "student" ? email.substr(0, email.indexOf(".")) : 0;
//     console.log(rollNo);
//     if (role == "student") {
//       var user = new User({
//         firstName: firstName,
//         // lastName: lastName,
//         email: email,
//         rollNo: rollNo,
//         mobileNumber: mobile,
//         role: role,
//         section: section,
//         password: password,
//       });
//     } else {
//       console.log("\nCC\n");
//       var user = new User({
//         firstName: firstName,
//         // lastName: lastName,

//         // rollNo: rollNo,
//         email: email,
//         subject: req.session.subject,
//         mobileNumber: mobile,
//         role: role,
//         section: section,
//         password: password,
//       });
//     }
//     req.session.user = await user;
//     await sendWelcomeEmail(email);
//     const token = await user.generateAuthToken();
//     req.session.token = token;
//     req.session.register = 4;
//     await user.save();
//     res.redirect("/dashboard");
//   } catch (err) {
//     console.log(err);
//   }
// };
// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find({}).sort({ rollNo: 1 });
//     console.log(users);
//     let user = [];
//     users.forEach((i) => {
//       if (i.role == "student" && i.section == req.session.user.section) {
//         user.push({
//           name: i.firstName,
//           rollNo: i.rollNo,
//         });
//       }
//     });
//     res.send(user);
//   } catch {
//     res.status(404).render("404.ejs");
//   }
// };
// const findName = async (req, res) => {
//   const user = await User.findOne({ rollNo: req.body.rollNo });
//   return res.send({
//     name: user.firstName,
//   });
// };
module.exports = {
  registerStudent,
  registerVolunteer,
};
