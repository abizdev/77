const BASE_URL = "https://77-dev.uicgroup.tech/api/v1";

const body = document.querySelector("body");
const loginBtn = document.querySelector(".login-btn");
const logUserBtn = document.querySelector(".log-user");

const modal = document.querySelector(".modal");
const modalWrapper = document.querySelector(".modal-wrapper");
const modalClose = document.querySelector(".modal-close");

const inputLogin = document.querySelector(".input-login input");
const inputPassword = document.querySelector(".input-password input");

function toggleRegistrationModal() {
  if (modalWrapper.classList.contains("hidden")) {
    modalWrapper.classList.remove("hidden");
  } else {
    modalWrapper.classList.add("hidden");
  }
}

loginBtn.addEventListener("click", (event) => {
  toggleRegistrationModal();
});
modalClose.addEventListener("click", (event) => {
  toggleRegistrationModal();
});

logUserBtn.addEventListener("click", () => {
  if (inputLogin.value.length >= 2 && inputPassword.value.length >= 8) {
    const userData = {
      phone_number: inputLogin.value,
      password: inputPassword.value,
    };

    fetch(`${BASE_URL}/accounts/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authentication: `Barer ${localStorage.refresh_token}`,
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.access_token && !data.refresh_token) {
          return new Error("error");
        }

        localStorage.setItem("access", JSON.stringify(data.access_token));
        localStorage.setItem("refresh", JSON.stringify(data.refresh_token));
      })
      .catch((error) => {
        console.log("wooops error with data", error);
      });
  } else {
    alert("Данные не введены или мало данных");
  }
});
