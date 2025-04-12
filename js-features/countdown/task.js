const timer = document.getElementById("timer");
let startTimer = timer.textContent;

function countDown() {
  if (startTimer > 0) {
    let hours = Math.floor(startTimer / 3600);
    let minutes = Math.floor((startTimer % 3600) / 60);
    let seconds = startTimer % 60;

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    startTimer--;

    timer.textContent = `${hours}:${minutes}:${seconds}`;
    setTimeout(countDown, 1000);
  } else {
    alert("Вы победили в конкурсе!");
  }
}

countDown();
