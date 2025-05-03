const form = document.forms[0];
const input = document.getElementById("task__input");
const output = document.getElementById("tasks__list");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((taskText) => {
    addTaskToDOM(taskText);
  });
}

function addTaskToDOM(taskText) {
  output.insertAdjacentHTML(
    "beforeend",
    `<div class="task">
      <div class="task__title">${taskText}</div>
      <a href="#" class="task__remove">&times;</a>
      </div>      `
  );
  saveTasks();
}

function saveTasks() {
  const taskElements = Array.from(output.querySelectorAll(".task"));
  const tasksArray = taskElements.map(
    (el) => el.querySelector(".task__title").innerText
  );
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value) {
    addTaskToDOM(input.value);
  }

  form.reset();
});

output.addEventListener("click", (e) => {
  let target = e.target;

  if (target.classList.contains("task__remove")) {
    target.parentElement.remove();
    saveTasks();
  }
});

loadTasks();
