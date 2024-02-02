import { productsArr } from "./db";

const adsContent = document.querySelector(".ads__content");
const categoriesProducts = document.querySelector(".categories__products")

// product card
const getProductCardTemplate = (product) => {
  return `
  <!-- product card -->
  <article class="product-card">
    <button class="icon-heart text-3xl w-10 h-10 text-white"></button>
  
    <img src="${product.imgUrl}" class="product-card-img" alt="product-img">
    
    <div class="product-card__info">
      <span class="product-card__info-city">${product.city}</span>
      <a href="${product.productUrl}" class="product-card__info-name">${product.name}</a>
      <time class="product-card__info-date">${product.date}</time>
      <a href="tel:${product.phone}" class="product-card__info-phone">${product.phone}</a>
      <p class="product-card__info-price">${product.price} <span>UZS</span></p>
    </div>
    
  </article>
  `;
};

productsArr.forEach((product) => {
  adsContent.insertAdjacentHTML("beforeend", getProductCardTemplate(product));
  // categoriesProducts.insertAdjacentHTML("beforeend", getProductCardTemplate(product));
});
