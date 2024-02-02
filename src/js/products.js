import { productsArr } from "./db";
import { getProductCardTemplate } from "./templates";

const adsContent = document.querySelector(".ads__content");
const categoriesProducts = document.querySelector(".categories__products")

productsArr.forEach((product) => {
  adsContent.insertAdjacentHTML("beforeend", getProductCardTemplate(product));
  // categoriesProducts.insertAdjacentHTML("beforeend", getProductCardTemplate(product));
});
