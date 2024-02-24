const BASE_URL = "https://77-dev.uicgroup.tech/api/v1";

const body = document.querySelector("body");
const loginBtn = document.querySelector(".login-btn");
const logUserBtn = document.querySelector(".log-user");

const modal = document.querySelector(".modal");
const modalWrapper = document.querySelector(".modal-wrapper");
const modalHeading = document.querySelector(".modal-heading");
const modalClose = document.querySelector(".modal-close");

const inputLogin = document.querySelector(".input-login input");
const inputPassword = document.querySelector(".input-password input");

let user = null

const toggleRegistrationModal = () => {
  if (modalWrapper.classList.contains("hidden")) {
    modalWrapper.classList.remove("hidden");
  } else {
    modalWrapper.classList.add("hidden");
  }
}

const loginUser = async (userData) => {
  const OPTIONS = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }

  try {
    const res = await fetch(`${BASE_URL}/accounts/login/`, OPTIONS)
    const data = await res.json()

    // check if data is correct
    if (!data.access_token && !data.refresh_token) {
      return new Error("error");
    }

    // set tokens to localStorage
    localStorage.setItem("access", data.access_token);
    localStorage.setItem("refresh", data.refresh_token);

    getUserData(data.access_token)
  } catch (error) {
    console.log("wooops error with data", error);
  }
}

const getUserData = async (token) => {
  const OPTIONS = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }

  try {
    const res = await fetch(`${BASE_URL}/accounts/me/`, OPTIONS)
    const data = await res.json()

    // set user info to localStorage
    localStorage.user = JSON.stringify(data)
  } catch (error) {
    console.log('woooops error in getting use info: ', error);
  }
}

loginBtn.addEventListener("click", (event) => {
  toggleRegistrationModal();
});

modalClose.addEventListener("click", (event) => {
  toggleRegistrationModal();
});

logUserBtn.addEventListener("click", () => {
  if (inputLogin.value.length >= 2 && inputPassword.value.length >= 1) {
    const userData = {
      phone_number: "+998911111111" /* inputLogin.value */,
      password: "parol123" /* inputPassword.value */,
    };

    loginUser(userData)

    toggleRegistrationModal();

  } else {
    alert("Данные не введены или мало данных");
  }
});
