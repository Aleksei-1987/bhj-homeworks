const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab__content");

function switchTab() {
  tabs.forEach((tab) => {
    tab.classList.remove("tab_active");
  });

  contents.forEach((content) => {
    content.classList.remove("tab__content_active");
  });

  let index = Array.from(tabs).indexOf(this);

  this.classList.add("tab_active");

  contents[index].classList.add("tab__content_active");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", switchTab);
});
