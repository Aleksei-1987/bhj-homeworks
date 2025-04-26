const bookControls = document.querySelectorAll(".book__control");
const book = document.getElementById("book");
const controls = document.querySelectorAll(".font-size");
const textColors = document.querySelectorAll(".book__control_color > a");
const bgColors = document.querySelectorAll(".book__control_background > a");

bookControls.forEach((bookControl) => {
  controls.forEach((control) => {
    control.addEventListener("click", (e) => {
      e.preventDefault();

      controls.forEach((control) => {
        control.classList.remove("font-size_active");
      });

      control.classList.add("font-size_active");

      let newSize = control.dataset.size;

      book.classList.remove("book_fs-big", "book_fs-small");
      book.classList.add(`book_fs-${newSize}`);
    });
  });

  textColors.forEach((color) => {
    color.addEventListener("click", (e) => {
      e.preventDefault();

      textColors.forEach((color) => {
        color.classList.remove("color_active");
      });

      color.classList.add("color_active");

      let newColor = color.dataset.textColor;

      book.classList.remove(
        "book_color-gray",
        "book_color-whitesmoke",
        "text_color_black"
      );
      book.classList.add(`book_color-${newColor}`);
    });
  });

  bgColors.forEach((bgColor) => {
    bgColor.addEventListener("click", (e) => {
      e.preventDefault();

      bgColors.forEach((bgColor) => {
        bgColor.classList.remove("color_active");
      });

      bgColor.classList.add("color_active");

      let newBgColor = bgColor.dataset.bgColor;

      book.classList.remove(
        "bg_color_gray",
        "bg_color_black",
        "bg_color_white"
      );
      book.classList.add(`bg_color_${newBgColor}`);
    });
  });
});
