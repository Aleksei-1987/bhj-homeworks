const editor = document.getElementById("editor");
const saveText = localStorage.getItem("text");
const clear = document.getElementById("clear");

editor.value = saveText;

editor.addEventListener("input", () => {
  localStorage.setItem("text", editor.value);
});

clear.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("text");
  editor.value = "";
});
