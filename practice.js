function displayUsername() {
  let loginInfo = document.querySelector(".acc-info");
  loginInfo.innerHTML = localStorage.getItem("loggedInUserName");
}
displayUsername();

//* selection
let cs = "Computer Science";
let is = "Information Science";
let wt = "Web Technology";
let lg = "Language";

function booksCategory() {
  let cate = document.querySelector("#books").value.trim();
  console.log(cate);

  document
    .querySelectorAll(".cs, .is, .wt, .lg")
    .forEach((card) => (card.style.display = "none"));

  switch (cate) {
    case cs:
      document
        .querySelectorAll(".cs")
        .forEach((cs) => (cs.style.display = "block"));
      break;
    case is:
      document
        .querySelectorAll(".is")
        .forEach((is) => (is.style.display = "block"));
      break;
    case wt:
      document
        .querySelectorAll(".wt")
        .forEach((wt) => (wt.style.display = "block"));
      break;
    case lg:
      document
        .querySelectorAll(".lg")
        .forEach((lg) => (lg.style.display = "block"));
      break;
    default:
      document
        .querySelectorAll(".cs, .is, .wt, .lg")
        .forEach((card) => (card.style.display = "block"));
      break;
  }
}

document.querySelector("#books").addEventListener("change", booksCategory);

//* search
function search(e) {
  e.preventDefault();
        document
          .querySelectorAll(".cs, .is, .wt, .lg")
          .forEach((card) => (card.style.display = "block"));
  let searchBook = document.querySelector(".cform").value.trim().toLowerCase();
  console.log(searchBook);
  if (searchBook == "") {
    alert("Please enter something to search.");
    return;
  }
  if (cs.toLowerCase() == searchBook || searchBook == "computer" || searchBook == "science") {
    console.log("working");
    document
      .querySelectorAll(" .is, .wt, .lg")
      .forEach((card) => (card.style.display = "none"));
  } else {
  }
  if (is.toLowerCase() == searchBook || searchBook == "information" || searchBook == "computer") {
    console.log("working");
    document
      .querySelectorAll(" .cs, .wt, .lg")
      .forEach((card) => (card.style.display = "none"));
  }
  if (wt.toLowerCase() == searchBook || searchBook == "web" || searchBook == "technology") {
    console.log("working");
    document
      .querySelectorAll(" .is, .cs, .lg")
      .forEach((card) => (card.style.display = "none"));
  }
  if (lg.toLowerCase() == searchBook || searchBook == "english" || searchBook == "language") {
    console.log("working");
    document
      .querySelectorAll(" .is, .wt, .cs")
      .forEach((card) => (card.style.display = "none"));
  }
}

document.querySelector(".searchBtn").addEventListener("click", search);

//* card click
document.querySelectorAll(".cs, .is, .wt, .lg").forEach((card) =>
  card.addEventListener("click", (e) => {
    let bookTitle = card.querySelector(".book-fs").textContent.trim();
    sessionStorage.setItem("selectedBook", bookTitle);

    let bookAuthor = card.querySelector(".author").textContent.trim();
    sessionStorage.setItem("bookAuthor", bookAuthor);

    let category = card.querySelector(".category").textContent.trim();
    sessionStorage.setItem("bookCatego", category);

    window.location.href = "exercise.html";
  })
);
