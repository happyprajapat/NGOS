module.exports = async (req, res, next) => {
  console.log("Hello Log\n\n");
  console.log(req.session);
  if (req.session.user) {
    console.log("Logged In");
    req.isLoggedIn = true;
    res.redirect("/profile");
  } else {
    console.log("Not Logged In");
    req.isLoggedIn = false;
  }
  next();
};
