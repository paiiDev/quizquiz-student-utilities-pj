
function displayUsername() {
  let loginInfo = document.querySelector(".acc-info");
  loginInfo.innerHTML = localStorage.getItem("loggedInUserName");
}
displayUsername();

let selectedBook = sessionStorage.getItem("selectedBook");
let questionCount = 0;
  let currentQuestionBox;


let card = document.querySelector(".card-inner");
card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

 const questionBox1 = [
   {
     question: "What does HTML stand for?",
     ans: "Hyper Text Markup Language",
   },
   {
     question: "What does CSS stand for?",
     ans: "Cascading Style Sheets",
   },
   {
     question: "Which tag is used for the largest heading in HTML?",
     ans: "<h1>",
   },
   {
     question: "Is <span> an inline element?",
     ans: "Yes, <span> is an inline element.",
   },
   {
     question: "Can the <div> tag set height and width?",
     ans: "Yes, the <div> tag can set height and width.",
   },
 ];

 const questionBox2 = [
   {
     question: "Is JavaScript a compiled language?",
     ans: "No, JavaScript is an interpreted language.",
   },
   {
     question: "Is JavaScript the same as Java?",
     ans: "No, JavaScript is not the same as Java.",
   },
   {
     question: "What does the `===` operator do in JavaScript?",
     ans: "The `===` operator compares both value and type.",
   },
   {
     question: "Can JavaScript only be used in web browsers?",
     ans: "No, JavaScript can be used both in browsers and on servers.",
   },
   {
     question: "Can JavaScript arrays store different data types?",
     ans: "Yes, JavaScript arrays can store different data types.",
   },
 ];

 const questionBox3 = [
   {
     question: "Do microcomputers process faster than mainframe computers?",
     ans: "No, microcomputers do not process faster than mainframe computers.",
   },
   {
     question: "Is the operating system an essential part of the system board?",
     ans: "No, the operating system is not an essential part of the system board.",
   },
   {
     question:
       "Does a dynamic IP address give faster internet access than a static IP address?",
     ans: "No, a dynamic IP address does not give faster internet access than a static IP address.",
   },
   {
     question: "Are all operating systems mutually compatible?",
     ans: "No, all operating systems are not mutually compatible.",
   },
   {
     question: "Should computer users be concerned about ergonomics?",
     ans: "Yes, computer users should be concerned about ergonomics.",
   },
 ];

 const questionBox4 = [
   {
     question:
       "Is a binary search tree used for storing data in a sorted manner?",
     ans: "Yes, a binary search tree is used for storing data in a sorted manner.",
   },
   {
     question:
       "Are elements in a linked list stored in contiguous memory locations?",
     ans: "No, elements in a linked list are not stored in contiguous memory locations.",
   },
   {
     question: "What is the time complexity of a binary search algorithm?",
     ans: "The time complexity of a binary search algorithm is O(log n).",
   },
   {
     question:
       "Does a stack data structure operate on a First In First Out (FIFO) principle?",
     ans: "No, a stack data structure operates on a Last In First Out (LIFO) principle.",
   },
   {
     question: "In a graph, what is a cycle?",
     ans: "A cycle in a graph is a path where the first and last vertices are the same.",
   },
 ];

 const questionBox5 = [
   {
     question: "Is software engineering only about writing code?",
     ans: "No, software engineering is not only about writing code.",
   },
   {
     question:
       "Does Agile development methodology emphasize customer collaboration?",
     ans: "Yes, Agile development methodology emphasizes customer collaboration.",
   },
   {
     question:
       "Is the Waterfall model a linear and sequential approach to software development?",
     ans: "Yes, the Waterfall model is a linear and sequential approach to software development.",
   },
   {
     question:
       "Is software testing only required during the final stages of development?",
     ans: "No, software testing is not only required during the final stages of development.",
   },
   {
     question:
       "Is requirements gathering the first phase of the software development life cycle (SDLC)?",
     ans: "Yes, requirements gathering is the first phase of the software development life cycle (SDLC).",
   },
 ];

 questionBox6 = [
   {
     question: "Is learning new vocabulary crucial for mastering a language?",
     ans: "Yes, learning new vocabulary is crucial for mastering a language.",
   },
   {
     question:
       "Does Traveller B2 focus primarily on advanced grammar structures rather than communication skills?",
     ans: "No, Traveller B2 focuses on both grammar structures and communication skills.",
   },
   {
     question:
       "Is listening to native speakers an effective way to improve pronunciation?",
     ans: "Yes, listening to native speakers is an effective way to improve pronunciation.",
   },
   {
     question:
       "Does Traveller B2 encourage students to memorize phrases instead of understanding their meaning?",
     ans: "No, Traveller B2 encourages understanding the meaning of phrases.",
   },
   {
     question:
       "Is practicing speaking regularly necessary for language fluency?",
     ans: "Yes, practicing speaking regularly is necessary for language fluency.",
   },
 ];

function loadQuestion() {
  if (selectedBook == "The Complete Reference HTML & CSS") {
    currentQuestionBox = questionBox1;
  } else if (selectedBook == "ES6 & Beyond") {
    currentQuestionBox = questionBox2;
  } else if (selectedBook == "Principles of Information Systems") {
    currentQuestionBox = questionBox3;
  } else if (selectedBook == "Data Structures and Algorithms") {
    currentQuestionBox = questionBox4;
  } else if (selectedBook === "Software Engineering") {
    currentQuestionBox = questionBox5;
    console.log("currentbox: " + currentQuestionBox);
  } else if (selectedBook == "Traveller B2") {
    currentQuestionBox = questionBox6;
  }

  if(selectedBook){
    document.querySelector(".question").innerText = currentQuestionBox[questionCount].question;
    document.querySelector(".definition").innerText = currentQuestionBox[questionCount].ans;
  }
}
loadQuestion();

let nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", () => {
     

  if(questionCount < currentQuestionBox.length){

     questionCount++;
     console.log(questionCount);

     if(questionCount < currentQuestionBox.length){
     loadQuestion();
     } else {

    document.querySelector(
      ".info"
    ).innerHTML = `
                        <button class="btn btn-primary p-2 mb-2" type="button" onclick="location.reload()">Start Again</button>
                <button class="btn btn-primary p-2" type="button" onclick="location.href = 'exercise.html'">Exit</button>
                    `;
  }
}
})