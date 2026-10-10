function displayUsername() {
  let loginInfo = document.querySelector(".acc-info");
  loginInfo.innerHTML = localStorage.getItem("loggedInUserName");
}
displayUsername();

document.querySelector(".typing-game").addEventListener("click", () => {
  window.location.href = "typingGame.html";
});

document.querySelector(".simon-game").addEventListener("click", () => {
  window.location.href = "simon-game.html";
});

document.querySelector(".math-game-1").addEventListener("click", () => {
  window.location.href = "mathGame1.html";
});

document.querySelector(".guess-the-number").addEventListener("click", () => {
  window.location.href = "guessTheNumber.html";
});

document.querySelector(".dice-game").addEventListener("click", () => {
  window.location.href = "dicee.html";
});

document.querySelector(".drums-kit-game").addEventListener("click", () => {
  window.location.href = "drumsKit.html";
});

document.querySelector(".toDoList").addEventListener("click", () => {
  window.location.href = "toDoList.html";
});

document.querySelector(".whoIsLucky").addEventListener("click", () => {
  window.location.href = "whoIsLucky.html";
});

document.querySelector(".calculator").addEventListener("click", () => {
  window.location.href = "Calculator.html";
});

document.querySelector(".stopWatch").addEventListener("click", () => {
  window.location.href = "stopWatch.html";
});

document.querySelector(".palindrome").addEventListener("click", () => {
  window.location.href = "Palinddrome.html";
});

document.querySelector(".wordCounter").addEventListener("click", () => {
  window.location.href = "wordCounter.html";
});
