const hasTooltips = document.querySelectorAll(".has-tooltip");

hasTooltips.forEach((hasTooltip) => {
  hasTooltip.addEventListener("click", (e) => {
    e.preventDefault();

    const tooltip = document.querySelector(".tooltip");

    if (tooltip) {
      tooltip.remove();
    }

    const tooltipText = e.target.title;
    let tooltipPosition = e.target.getBoundingClientRect();
    let top = tooltipPosition.bottom;
    let left = tooltipPosition.left;

    e.target.insertAdjacentHTML(
      "afterend",
      `<div class="tooltip tooltip_active" style="top: ${top}px; left: ${left}px">${tooltipText}</div>`
    );
  });
});
