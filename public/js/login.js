const email = document.querySelector("#email");
const password = document.querySelector("#password");

console.log("hello");

let url;
const a = window.location.href;
if (a.includes("academer")) {
  url = "https://cgc.academer.co";
} else {
  url = "http://localhost:3000";
}
const checkData = async (email, password) => {
  try {
    console.log("email: ", email, "\npassword: ", password);
    const res = await fetch(url + "/api/loginStudent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    console.log("klj", data);
    return data;
  } catch (error) {
    console.log("issue with api");
    // const error = await err.json();
    // console.log(error.message);
    return error;
  }
};

const error = document.querySelector(".error");
// console.log(bx);
document.querySelector(".loginbtn").addEventListener("click", async (el) => {
  el.preventDefault();
  console.log(email.value, password.value);
  const d = await checkData(email.value, password.value);
  console.log("hello : ", d);
  if (d.error) {
    error.textContent = "Error";
    error.classList.remove("none");
    setInterval(() => {
      error.textContent = "";
      error.classList.add("none");
    }, 4000);
    // alert("Error");
  } else {
    console.log("Logged In");
    error.textContent = "Logged In";
    error.classList.remove("none");
    setInterval(() => {
      //   error.textContent = "";
      error.classList.add("none");
    }, 2000);
    window.location.href = "/";
  }
});
