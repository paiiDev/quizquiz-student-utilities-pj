//* for user profile
function displayUsername() {
  let loginInfo = document.querySelector(".acc-info");
  loginInfo.innerHTML = localStorage.getItem("loggedInUserName");
}
displayUsername();

let questionCountEle = document.querySelector(".questionCount");
let question = document.querySelector(".question");
let selectedBook = sessionStorage.getItem("selectedBook");
let questionCount = 0;
let score = 0;

const questionBox1 = [
  {
    question: "Q1:  HTML means Hyper Text Markup Language.",
    ans: "True",
  },
  {
    question: "Q2:  CSS means Custom Style Sheet.",
    ans: "False",
  },
  {
    question: "Q3:  <h1> tag is the smallest in heading.",
    ans: "False",
  },
  {
    question: "Q4:  <span> tag is an inline element.",
    ans: "True",
  },
  {
    question: "Q5:  <div> tag can't not set heignt and width",
    ans: "False",
  },
];

const questionBox2 = [
  {
    question: "Q1:  JavaScript is an interpreted language",
    ans: "True",
  },
  {
    question: "Q2:  JavaScript is the same as Java.",
    ans: "False",
  },
  {
    question:
      "Q3: In JavaScript, the `===` operator checks for both value and type equality.",
    ans: "True",
  },
  {
    question: "Q4: JavaScript can only be used in web browsers.",
    ans: "False",
  },
  {
    question: "Q5: JavaScript arrays can store different data types.",
    ans: "True",
  },
];

const questionBox3 = [
  {
    question: "Q1: Microcomputers process faster than mainframe computers.",
    ans: "False",
  },
  {
    question:
      "Q2: The operating system is an essential part of the system board.",
    ans: "False",
  },
  {
    question:
      "Q3: A dynamic IP address gives faster internet access than a static IP address.",
    ans: "False",
  },
  {
    question: "Q4: All operating systems are mutually compatible.",
    ans: "False",
  },
  {
    question: "Q5: Computer users need to be concerned about ergonomics.",
    ans: "True",
  },
  {
    question:
      "Q6: Frequency and amplitude are two characteristics of analog carrier waves.",
    ans: "True",
  },
  {
    question: "Q7: HDTV uses analog signals.",
    ans: "False",
  },
  {
    question:
      "Q8: The category of computer crimes includes dirty-data problems.",
    ans: "False",
  },
  {
    question: "Q9: C is an object-oriented programming language.",
    ans: "False",
  },
  {
    question:
      "Q10: In alpha testing, the program is tested with real-world data.",
    ans: "False",
  },
];

const questionBox4 = [
  {
    question:
      "Q1: A binary search tree is a type of data structure used for storing data in a sorted manner.",
    ans: "True",
  },
  {
    question:
      "Q2: In a linked list, elements are stored in contiguous memory locations.",
    ans: "False",
  },
  {
    question:
      "Q3: The time complexity of a binary search algorithm is O(log n).",
    ans: "True",
  },
  {
    question:
      "Q4: A stack data structure operates on a First In First Out (FIFO) principle.",
    ans: "False",
  },
  {
    question:
      "Q5: In a graph, a cycle is a path where the first and last vertices are the same.",
    ans: "True",
  },
];

const questionBox5 = [
  {
    question: "Q1: Software engineering is only about writing code.",
    ans: "False",
  },
  {
    question:
      "Q2: Agile development methodology emphasizes customer collaboration.",
    ans: "True",
  },
  {
    question:
      "Q3: Waterfall model is a linear and sequential approach to software development.",
    ans: "True",
  },
  {
    question:
      "Q4: Software testing is only required during the final stages of development.",
    ans: "False",
  },
  {
    question:
      "Q5: In software engineering, requirements gathering is the first phase of the software development life cycle (SDLC).",
    ans: "True",
  },
];

const questionBox6 = [
  {
    question:
      "Q1: Learning new vocabulary is crucial for mastering a language.",
    ans: "True",
  },
  {
    question:
      "Q2: Traveller B2 focuses primarily on advanced grammar structures rather than communication skills.",
    ans: "False",
  },
  {
    question:
      "Q3: Listening to native speakers is an effective way to improve pronunciation.",
    ans: "True",
  },
  {
    question:
      "Q4: Traveller B2 encourages students to memorize phrases instead of understanding their meaning.",
    ans: "False",
  },
  {
    question:
      "Q5: Practicing speaking regularly is not necessary for language fluency.",
    ans: "False",
  },
];


function loadQuestion() {
  if (selectedBook == "The Complete Reference HTML & CSS") {
    question.innerText = questionBox1[questionCount].question;
    questionCountEle.innerHTML = `Question ${questionCount + 1}/${
      questionBox1.length
    }`;
  }
  if (selectedBook == "ES6 & Beyond") {
    question.innerText = questionBox2[questionCount].question;
    questionCountEle.innerHTML = `Question ${questionCount + 1}/${
      questionBox2.length
    }`;
  }
  if (selectedBook == "Principles of Information Systems") {
    question.innerText = questionBox3[questionCount].question;
    questionCountEle.innerHTML = `Question ${questionCount + 1}/${
      questionBox3.length
    }`;
  }
  if (selectedBook == "Data Structures and Algorithms"){
        question.innerText = questionBox4[questionCount].question;
        questionCountEle.innerHTML = `Question ${questionCount + 1}/${
          questionBox4.length
        }`;
  }
    if (selectedBook == "Software Engineering") {
      question.innerText = questionBox5[questionCount].question;
      questionCountEle.innerHTML = `Question ${questionCount + 1}/${
        questionBox5.length
      }`;
    }
    if (selectedBook == "Traveller B2") {
      question.innerText = questionBox6[questionCount].question;
      questionCountEle.innerHTML = `Question ${questionCount + 1}/${
        questionBox6.length
      }`;
    }
}
loadQuestion();

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnValue = e.target.innerText.trim();
//* for html and css ------------------------------
    if (selectedBook == "The Complete Reference HTML & CSS") {
      if (btnValue == questionBox1[questionCount].ans) {
        score++;
      }
      questionCount++;

      if (questionCount < questionBox1.length) {
        loadQuestion();
      } else {
        questionCountEle.innerHTML = `<h2 class="mt-5">Your Score is</h2>
                        <h1>${score} / ${questionBox1.length}</h1>
                    `;
        document.querySelector(".d-grid").innerHTML = `
                        <button class="btn btn-primary p-2" type="button" onclick="location.reload()">Start Again</button>
                <button class="btn btn-primary p-2" type="button" onclick="location.href = 'exercise.html'">Exit</button>
                    `;

        question.style.display = "none";
        document.querySelectorAll(".b1, .b2").forEach((b) => {
          b.style.display = "none";
        });
      }
    }
    //* for js book ---------------------------------------------------
    if (selectedBook == "ES6 & Beyond") {
      if (btnValue == questionBox2[questionCount].ans) {
        score++;
      }
      questionCount++;

      if (questionCount < questionBox2.length) {
        loadQuestion();
      } else {
        questionCountEle.innerHTML = `<h2 class="mt-5">Your Score is</h2>
                        <h1>${score} / ${questionBox2.length}</h1>
                    `;
        document.querySelector(".d-grid").innerHTML = `
                        <button class="btn btn-primary p-2" type="button" onclick="location.reload()">Start Again</button>
                <button class="btn btn-primary p-2" type="button" onclick="location.href = 'exercise.html'">Exit</button>
                    `;

        question.style.display = "none";
        document.querySelectorAll(".b1, .b2").forEach((b) => {
          b.style.display = "none";
        });
      }
    }
    //* for PIT book ------------------------------------------
    if (selectedBook == "Principles of Information Systems") {
      if (btnValue == questionBox3[questionCount].ans) {
        score++;
      }
      questionCount++;

      if (questionCount < questionBox3.length) {
        loadQuestion();
      } else {
        questionCountEle.innerHTML = `<h2 class="mt-5">Your Score is</h2>
                        <h1>${score} / ${questionBox3.length}</h1>
                    `;
        document.querySelector(".d-grid").innerHTML = `
                        <button class="btn btn-primary p-2" type="button" onclick="location.reload()">Start Again</button>
                <button class="btn btn-primary p-2" type="button" onclick="location.href = 'exercise.html'">Exit</button>
                    `;

        question.style.display = "none";
        document.querySelectorAll(".b1, .b2").forEach((b) => {
          b.style.display = "none";
        });
      }
    }

    //*for dsa book --------------------------------------------
    if (selectedBook == "Data Structures and Algorithms") {
      if (btnValue == questionBox4[questionCount].ans) {
        score++;
      }
      questionCount++;

      if (questionCount < questionBox4.length) {
        loadQuestion();
      } else {
        questionCountEle.innerHTML = `<h2 class="mt-5">Your Score is</h2>
                        <h1>${score} / ${questionBox4.length}</h1>
                    `;
        document.querySelector(".d-grid").innerHTML = `
                        <button class="btn btn-primary p-2" type="button" onclick="location.reload()">Start Again</button>
                <button class="btn btn-primary p-2" type="button" onclick="location.href = 'exercise.html'">Exit</button>
                    `;

        question.style.display = "none";
        document.querySelectorAll(".b1, .b2").forEach((b) => {
          b.style.display = "none";
        });
      }
    }

    //*for se book--------------------------------------------------------
    if (selectedBook == "Software Engineering") {
      if (btnValue == questionBox5[questionCount].ans) {
        score++;
      }
      questionCount++;

      if (questionCount < questionBox5.length) {
        loadQuestion();
      } else {
        questionCountEle.innerHTML = `<h2 class="mt-5">Your Score is</h2>
                        <h1>${score} / ${questionBox5.length}</h1>
                    `;
        document.querySelector(".d-grid").innerHTML = `
                        <button class="btn btn-primary p-2" type="button" onclick="location.reload()">Start Again</button>
                <button class="btn btn-primary p-2" type="button" onclick="location.href = 'exercise.html'">Exit</button>
                    `;

        question.style.display = "none";
        document.querySelectorAll(".b1, .b2").forEach((b) => {
          b.style.display = "none";
        });
      }
    }

    //*for english book --------------------------------------------
    if (selectedBook == "Traveller B2") {
      if (btnValue == questionBox6[questionCount].ans) {
        score++;
      }
      questionCount++;

      if (questionCount < questionBox6.length) {
        loadQuestion();
      } else {
        questionCountEle.innerHTML = `<h2 class="mt-5">Your Score is</h2>
                        <h1>${score} / ${questionBox6.length}</h1>
                    `;
        document.querySelector(".d-grid").innerHTML = `
                        <button class="btn btn-primary p-2" type="button" onclick="location.reload()">Start Again</button>
                <button class="btn btn-primary p-2" type="button" onclick="location.href = 'exercise.html'">Exit</button>
                    `;

        question.style.display = "none";
        document.querySelectorAll(".b1, .b2").forEach((b) => {
          b.style.display = "none";
        });
      }
    }
  });
});
