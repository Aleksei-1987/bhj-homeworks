const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

let cookieSize = cookie.width;
let count = clickerCounter.textContent;

let size = cookie.addEventListener("click", changeSize);
let counter = cookie.addEventListener("click", addCounter);

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
