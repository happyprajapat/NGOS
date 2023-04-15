const registerVolunteer = (req, res) => {
  res.render("registerVolunteer");
};
const registerStudent = (req, res) => {
  res.render("registerStudent");
};
const loginVolunteer = (req, res) => {
  res.render("loginVolunteer");
};
const loginStudent = (req, res) => {
  res.render("loginStudent");
};

module.exports = {
  registerVolunteer,
  registerStudent,
  loginStudent,
  loginVolunteer,
};
