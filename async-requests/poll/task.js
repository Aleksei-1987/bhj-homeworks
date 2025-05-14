let xhr = new XMLHttpRequest();
const url = new URL("https://students.netoservices.ru/nestjs-backend/poll");
const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

xhr.open("GET", url);
xhr.send();

xhr.addEventListener("load", (e) => {
  const data = JSON.parse(xhr.responseText).data;
  pollTitle.textContent = data.title;

  data.answers.forEach(answer =>  {
    const btn = document.createElement("button");
    btn.className = "poll__answer";
    btn.textContent = answer;
    btn.addEventListener("click", () => {
      alert("Спасибо, ваш голос засчитан!");
    });
    pollAnswers.appendChild(btn);
  });
});

