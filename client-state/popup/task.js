const modal = document.getElementById("subscribe-modal");
const closeModals = document.querySelectorAll(".modal__close");

function setCookie(name, value) {
  document.cookie = name + "=" + encodeURIComponent(value);
}

function getCookie(name) {
  const pairs = document.cookie.split("; ");
  const cookie = pairs.find((p) => p.startsWith(name + "="));

  if (!cookie) {
    return "";
  }

  return cookie.substring(name.length + 1);
}

window.onload = () => {
  if (!getCookie("modal")) {
    modal.classList.add("modal_active");
  }
};

closeModals.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("modal_active");
    setCookie("modal", "modal__close");
  });
});
