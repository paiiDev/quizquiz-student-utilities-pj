var userClickedPattern = [];

//tracking click and keypress
$ (".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level: " + level);
    nextSequence();
    started = true;
  }
});


//logic
var gamePattern = [];
var buttonColour = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
      console.log("success");
      if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function () {
          nextSequence();
        }, 1000);
      } 
      
    } else {

      console.log("worng");
      playSound("wrong");  
      $("body").addClass("game-over");
      setTimeout(function() {
          $("body").removeClass("game-over");
      }, 200);

      $("h1").text("Game over, Press Any Key to Restart")

      startOver();
    }
  }

  function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
  }

function nextSequence() {
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level: " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  //console.log(randomNumber);

  var randomChosenColour = buttonColour[randomNumber];
  //console.log(randomChosenColour);

  gamePattern.push(randomChosenColour);
  //console.log(gamePattern);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}



//animation
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
