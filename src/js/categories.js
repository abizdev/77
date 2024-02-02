import { categories } from "./db";
import { getCategoryTemplate, getDropdownTemplate } from "./templates";

const categoriesContent = document.querySelector(".categories__content");
const dropdownContainer = document.querySelector(".dropdown");

// toggle item visibility functions
const showEl = (el, display = 'hidden') => {
  el.classList.remove('hidden')

  if(display) {
    el.classList.add(display)
  }
}
const hideEl = (el, display = 'hidden') => {
  if(display) {
    el.classList.remove(...display)
  }
  el.classList.add('hidden')
}

categories.forEach((category, index) => {
  categoriesContent.insertAdjacentHTML(
    "beforeend",
    getCategoryTemplate(category, index)
  );
});

const setDropdownPosition = (category, index) => {
  const dropdownGridRow = Math.floor(index / 3) + 2;
  dropdownContainer.style.gridRow = dropdownGridRow
  
  showEl(dropdownContainer, 'dropdown-grid')

  getDropdownTemplate(category?.subcategory);

};

const categoriesItems = document.querySelectorAll(".categories__item");

categoriesItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // check if item contains active
    if (item.classList.contains("active")) {
      item.classList.remove("active");

      dropdownContainer.innerHTML = '';

      hideEl(dropdownContainer, ['dropdown-grid', 'dropdown-flex']);
    } else {
      // remove active from all categories items and dropdown then add to clicked item
      categoriesItems.forEach((item) => {
        item.classList.remove("active");

        dropdownContainer.innerHTML = ''

        hideEl(dropdownContainer, ['dropdown-grid', 'dropdown-flex'])
      });

      item.classList.toggle("active");
      setDropdownPosition(categories[index], index);
    }
  });
});
