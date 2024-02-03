import { productsArr } from "./db";
import { getProductCardTemplate } from "./templates";

const adsContent = document.querySelector(".ads__content");
productsArr.forEach((product) => {
  adsContent.insertAdjacentHTML("beforeend", getProductCardTemplate(product));
});
