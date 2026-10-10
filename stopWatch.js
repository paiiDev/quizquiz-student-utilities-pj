const startBtn = document.querySelector(".startBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const continueBtn = document.querySelector(".continueBtn");
const stopBtn = document.querySelector(".stopBtn");
let seconds = 0, minutes = 0, hours = 0;
let intervalID;


function startStopWatch() {
 
 
    seconds += 1;   
   if(seconds === 60){
    seconds = 0;
    minutes += 1;
   }

    if(minutes === 60){
        minutes = 0;
        hours += 1;
    }

     const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
     const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes;
     const hoursText = hours < 10 ? + "0" + hours.toString() : hours;
    document.querySelector(".stopwatch").textContent = hoursText + ":" + minutesText + ":" + secondsText;
    
}

startBtn.addEventListener("click", () => {
   intervalID = setInterval(startStopWatch, 1000);

})

pauseBtn.addEventListener("click", () => {
    clearInterval(intervalID);
});

continueBtn.addEventListener("click", () => {
   intervalID = setInterval(startStopWatch, 1000);
    
});

// Stop functionality
stopBtn.addEventListener("click", () => {
    clearInterval(intervalID);
    seconds = 0;
    minutes = 0;
    hours = 0;
    ms = 0;
 
    document.querySelector(".stopwatch").textContent = "00:00:00"; 
});