import { header, footer } from "./templates";

const body = document.querySelector('body')

body.insertAdjacentHTML('beforebegin', header)
body.insertAdjacentHTML('beforeend', footer)