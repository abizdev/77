import { header, footer } from "./templates";

const body = document.querySelector('body')

body.insertAdjacentHTML('afterbegin', header)
body.insertAdjacentHTML('beforeend', footer)