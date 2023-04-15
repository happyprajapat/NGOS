const registerVolunteer = (req, res) => {
  res.render("registerVolunteer");
};
const registerStudent = (req, res) => {
  res.render("registerStudent");
};

module.exports = {
  registerVolunteer,
  registerStudent,
};
