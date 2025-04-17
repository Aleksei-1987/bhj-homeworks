const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    if (e.target.closest(".dropdown__link")) {
      e.preventDefault();
    }

    const dropdownItem = e.target.closest(".dropdown__item");
    const dropdownList = dropdown.querySelector(".dropdown__list");
    const dropdownValue = dropdown.querySelector(".dropdown__value");

    if (e.target.closest(".dropdown__value")) {
      dropdownList.classList.add("dropdown__list_active");
    }

    if (dropdownItem) {
      const selectedItem = dropdownItem.textContent;
      dropdownValue.textContent = selectedItem;
      dropdownList.classList.remove("dropdown__list_active");
    }
  });
});
