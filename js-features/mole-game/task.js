const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let countDead = dead.textContent;
let countLost = lost.textContent;

const holeGame = document.querySelectorAll(".hole");

holeGame.forEach((hole) => {
  hole.addEventListener("click", () => {
    if (hole.classList.contains("hole_has-mole")) {
      countDead++;
      checkWin();
    } else {
      countLost++;
      checkLose();
    }
    updateCounter();
  });
});

function checkWin() {
  if (countDead === 10) {
    alert("Вы победили!");
    resetCounter();
  }
}

function checkLose() {
  if (countLost === 5) {
    alert("Вы проиграли!");
    resetCounter();
  }
}

function updateCounter() {
  dead.textContent = countDead;
  lost.textContent = countLost;
}

function resetCounter() {
  countDead = 0;
  countLost = 0;
  updateCounter();
}
