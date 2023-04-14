const User = require("../models/User");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  console.log(req.session);
  try {
    const token = req.session.token;
    const decoded = jwt.verify(token, process.env.SECRET);
    // console.log(decoded);
    const user = await User.findOne({ _id: decoded, token: token });
    console.log("heelo", user);
    // console.log("In the middleware");

    req.token = token;
    req.session.currentUser = user;
    next();
  } catch (er) {
    res.redirect("/login");
  }
};

module.exports = auth;
