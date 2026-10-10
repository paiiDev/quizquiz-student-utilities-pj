let newUserData = JSON.parse(localStorage.getItem("users")) || [];  //js database
let usrName = document.querySelector(".usrName");
let usrEmail = document.querySelector(".usrEmail");
let usrPassword = document.querySelector(".usrPassword");
let signUpBtn = document.querySelector(".signUpBtn");
let showInfo = document.querySelector("#showInfo");

// Email and password validation patterns
let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let re2 = /^[a-zA-Z0-9]{6,}$/; // Password must be at least 6 characters

function validate() {
  let mail = usrEmail.value;
  let pwd = usrPassword.value;
  let valid = true;

  // Validate email
  if (mail != "") {
    if (re.exec(mail)) {
      document.querySelector(
        ".email-info"
      ).innerHTML = `<span class="text-white">Email</span>`;
    } else {
      document.querySelector(
        ".email-info"
      ).innerHTML = `<span class="text-danger">Email is invalid</span>`;
      valid = false;
    }
  }

  // Validate password length
  if (pwd != "") {
    if (re2.test(pwd)) {
      document.querySelector(".pwd-info").innerHTML = `<span>Password</span>`;
    } else {
      document.querySelector(
        ".pwd-info"
      ).innerHTML = `<span class="text-danger">Password must be at least 6 characters</span>`;
      valid = false;
    }
  }

  return valid;
}

function createAcc(e) {
  e.preventDefault();
  let name = usrName.value;
  let email = usrEmail.value;
  let password = usrPassword.value;

  // Validate the email and password before creating an account
  if (!validate()) {
    showInfo.innerHTML = "Please correct the errors before submitting";
    return;
  }

  if (name != "" && email != "" && password != "") {
    let found = newUserData.find((obj) => obj.email == email);
    if (found) {
      showInfo.innerHTML = "Your email is already in use.";
    } else {
      let newUser = { name: name, email: email, password: password };
      newUserData.push(newUser);
      localStorage.setItem("users", JSON.stringify(newUserData));
      alert("Account created successfully!");
      console.log(newUserData);

      // Clear form after successful submission
      usrName.value = "";
      usrEmail.value = "";
      usrPassword.value = "";
      showInfo.innerHTML = "";
    }
  } else {
    showInfo.innerHTML = "Please fill out all fields";
  }
}

// Attach the event listener for form submission
signUpBtn.addEventListener("click", createAcc);
