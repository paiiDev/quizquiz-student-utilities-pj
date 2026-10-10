let newUserData = JSON.parse(localStorage.getItem("users")) || [];
const userEmail = document.querySelector(".userEmail");
const userPassword = document.querySelector(".userPassword");
let loginBtn = document.querySelector(".loginBtn");
let loginInfo = document.querySelector(".login-info");

function login(e) {
  e.preventDefault();
  let email = userEmail.value;
  let password = userPassword.value;
  if (email && password) {
    let found = newUserData.find(
      (obj) => obj.email == email && obj.password == password
    );
    if (found) {
      alert("Login successful!");
      localStorage.setItem("loggedInUserName", found.name);
      window.open("practice.html");
      loginInfo.innerHTML = "";
    } else {
      loginInfo.innerHTML = "Your email and password is incorrect!";
    }
  } else {
    loginInfo.innerHTML = "Please enter email and password!";
  }
}
loginBtn.addEventListener("click", login);
