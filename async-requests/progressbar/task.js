const progress = document.getElementById("progress");
const form = document.getElementById("form");
let xhr = new XMLHttpRequest();
const url = new URL("https://students.netoservices.ru/nestjs-backend/upload");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  xhr.open("POST", url);

  xhr.upload.addEventListener("progress", (e) => {
    if (e.lengthComputable) {
      progress.value = e.loaded / e.total;
    }
  });

  xhr.upload.addEventListener("error", () => {
    console.error("Ошибка загрузки");
  });

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE && xhr.status >= 200 && xhr.status <= 300) {
    }
  });

  xhr.send(formData);
});
