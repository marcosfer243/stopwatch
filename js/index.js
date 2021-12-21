console.log("Hello world");

const minutes = document.getElementById("minutes");
const secs = document.getElementById("secs");
const tens = document.getElementById("tens");
const start = document.getElementById("start");
const restart = document.getElementById("restart");
const pause = document.getElementById("pause");
const timesList = document.getElementById("times");
const checkpoint = document.getElementById("checkpoint");
const eraser = document.getElementById("eraser");
const reload = document.getElementById("reload");

let arrayTimes = [];

let ten;
let sec;

let min;
let timeTen = 0;
let timeSec = 1;
let timeMin = 1;

//Stopwatch function

function stopwatch() {
  // Interval tens
  const myIntervalTens = setInterval(() => {
    ten = timeTen++;
    if (ten < 10) {
      tens.innerHTML = `0${ten}`;
    } else {
      tens.innerHTML = `${ten}`;
    }
  }, 10);

  const intervalTen = setInterval(() => {
    timeTen = 0;
  }, 999);

  // Interval seconds

  const myIntervalSecs = setInterval(() => {
    sec = timeSec++;
    if (sec < 10) {
      secs.innerHTML = `0${sec}:`;
    } else {
      secs.innerHTML = `${sec}:`;
    }
  }, 1000);

  const intervalSixty = setInterval(() => {
    timeSec = 0;
  }, 59999);

  //Interval minutes

  const myIntervalMin = setInterval(() => {
    min = timeMin++;
    if (min < 10) {
      minutes.innerHTML = `0${min}:`;
    } else {
      minutes.innerHTML = `${min}:`;
    }
  }, 60000);

  //Restart stopwatch

  restart.addEventListener("click", () => {
    pause.classList.add("hidden");
    start.classList.remove("hidden");
    clearInterval(myIntervalTens);
    clearInterval(myIntervalMin);
    clearInterval(myIntervalSecs);
    tens.innerText = "00";
    minutes.innerText = "00:";
    secs.innerText = "00:";
  });

  //Pause stopwatch

  function pauseStopwatch(event) {
    pause.classList.add("hidden");
    start.classList.remove("hidden");
    clearInterval(myIntervalTens);
    clearInterval(myIntervalMin);
    clearInterval(myIntervalSecs);

    let tensNow = Number(tens.innerText);
    let secsNow = Number(secs.innerText);
    let minutesNow = Number(minutes.innerText);

    cent = tensNow;
    sec = secsNow;
    min = minutesNow;

    const btn = event.currentTarget;
    console.log(btn);
    pause.removeEventListener("click", pauseStopwatch);
    start.addEventListener("click", startStopwatch);
  }

  pause.addEventListener("click", pauseStopwatch);

  //Delete all time list items

  eraser.addEventListener("click", () => {
    timesList.innerHTML = "";
  });

  //Set a stopwatch checpoint

  function checkpointSet() {
    let timesRecord = {
      tens: tens.innerText,
      secs: secs.innerText,
      minutes: minutes.innerText,
    };

    //arrayTimes.push(timesRecord);
    //console.log(arrayTimes);

    for (let i = 0; i <= 0; i++) {
      timesList.innerHTML += `<li>${timesRecord.minutes}${timesRecord.secs}${timesRecord.tens}</li>`;
    }
  }

  checkpoint.addEventListener("click", checkpointSet);
}

//---------------
//Event listeners
//---------------

//Start the stopwatch

function startStopwatch() {
  start.classList.add("hidden");
  pause.classList.remove("hidden");
  stopwatch();
  start.removeEventListener("click", startStopwatch);
}

start.addEventListener("click", startStopwatch);

//Reload button
reload.addEventListener("click", () => {
  window.location.reload();
});
