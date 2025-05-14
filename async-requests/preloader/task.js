const url = new URL(
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
const loader = document.getElementById("loader");
const items = document.getElementById("items");

let xhr = new XMLHttpRequest();

xhr.open("GET", url);

xhr.addEventListener("load", () => {
  const valute = JSON.parse(xhr.responseText).response.Valute;

  let htmlOutput = "";
  for (key in valute) {
    let charCode = valute[key].CharCode;
    let value = valute[key].Value;
    htmlOutput += `
      <div class="item">
        <div class="item__code">${charCode}</div>
        <div class="item__value">${value}</div>
        <div class="item__currency">руб.</div>
      </div>
    `;
  }

  items.innerHTML = htmlOutput;

  loader.classList.remove("loader_active");
});

xhr.send();
