const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const clickerCounterSpeed = document.getElementById("clicker__counter-speed");

let cookieSize = cookie.width;
let count = clickerCounter.textContent;
let startTime = null;
let click = 0;

let size = cookie.addEventListener("click", changeSize);
let counter = cookie.addEventListener("click", addCounter);
let clickerSpeed = cookie.addEventListener("click", clickPerSecond);

function changeSize() {
  if (cookieSize === cookie.width) {
    cookieSize *= 1.1;
  } else {
    cookieSize = cookieSize / 1.1;
  }
  cookie.width = cookieSize;
}

function addCounter() {
  count++;
  clickerCounter.textContent = count;
}

function clickPerSecond() {
  if (!startTime) {
    startTime = Date.now();
  }
  click++;

  const elapsedSeconds = (Date.now() - startTime) / 1000;
  const averageCPS = click / elapsedSeconds;

  clickerCounterSpeed.textContent = averageCPS.toFixed(2);
  
  click = 0;
  startTime = Date.now();
}
