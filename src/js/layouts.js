import { getHeader, footer } from "./templates";

const body = document.querySelector('body')

let user = null

const isUserLogedIn = () => {
  if(localStorage.user) {
    user = JSON.parse(localStorage.user)
  }
  body.insertAdjacentHTML('afterbegin', getHeader(user))
}

isUserLogedIn()
body.insertAdjacentHTML('beforeend', footer)