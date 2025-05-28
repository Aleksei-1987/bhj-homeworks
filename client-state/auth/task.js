const signin = document.querySelector("#signin");
const signinForm = document.querySelector("#signin__form");
const signinButton = document.querySelector("#signin__btn");
const welcome = document.querySelector("#welcome");
const user = document.querySelector("#user_id");
const url = "https://students.netoservices.ru/nestjs-backend/auth";

window.addEventListener("DOMContentLoaded", () => {
  const storedUserID = localStorage.getItem("user_id");
  if (storedUserID) {
    removeActiveWelcomeAddActiveSignin();
    user.textContent = storedUserID;
    addLogoutBtn();
  }
});

signinButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const formData = new FormData(signinForm);
  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!result.success) {
      alert("Неверный логин/пароль");
    }

    if (result.success) {
      localStorage.setItem("user_id", result.user_id);
      signin.classList.remove("signin_active");
      welcome.classList.add("welcome_active");
      user.textContent = result.user_id;
      addLogoutBtn();
    }

    signinForm.reset();
  } catch (error) {
    console.error("Ошибка отправки запроса:", error);
  }
});

function addLogoutBtn() {
  const oldOutBtn = document.querySelector("#out__btn");
  if (oldOutBtn) {
    oldOutBtn.parentNode.remove();
  }

  welcome.insertAdjacentHTML(
    "beforeend",
    `<div>
            <button class="btn" id="out__btn">Выйти</button>
        </div>`
  );

  const outBtn = document.querySelector("#out__btn");

  outBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("user_id");
    removeActiveWelcomeAddActiveSignin();
  });
}

function removeActiveWelcomeAddActiveSignin() {
  welcome.classList.remove("welcome_active");
  signin.classList.add("signin_active");
}
