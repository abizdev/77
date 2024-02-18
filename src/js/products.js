import { productsArr } from "./db";
import { getProductCardTemplate } from "./templates";

const productsContent = document.querySelector(".products-content");

productsArr.forEach((product) => {
  productsContent.insertAdjacentHTML("beforeend", getProductCardTemplate(product));
});
