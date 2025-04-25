const rotators = document.querySelectorAll(".rotator");

rotators.forEach((rotator) => {
  let cases = Array.from(rotator.children);
  let i = 0;

  setInterval(() => {
    cases[i].classList.remove("rotator__case_active");

    i = (i + 1) % cases.length;

    cases[i].classList.add("rotator__case_active");

    rotator.querySelector(".rotator__case_active").style.color = rotator
      .querySelector(".rotator__case_active")
      .getAttribute("data-color");
  }, rotator.querySelector(".rotator__case_active").getAttribute("data-speed"));
});
