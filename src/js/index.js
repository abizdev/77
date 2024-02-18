import { searchCategories, categories } from "./db";
import { searchItemTemplate, getCategoryTemplate, getDropdownTemplate } from "./templates";

const body = document.querySelector('body')

// search form elements
const formBg = document.querySelector('.form-bg')
const searchWrapper = document.querySelector('.search-wrapper')
const searchForm = document.querySelector('.search-form')
const searchInput = document.querySelector('.search-form input')
const searchPopup= document.querySelector('.sear-form__popup')

// categories elements
const categoriesContent = document.querySelector(".categories__content");
const dropdownContainer = document.querySelector(".dropdown");

/* =================== SEARCH FUNCTIONALITY ===================== */

// search click
searchWrapper.addEventListener('click', (event) => {

  event.stopPropagation()
  searchInput.focus()
  console.log('wrapper cliked')

  // insert search categories
  searchCategories.forEach((item, key) => {
    searchPopup.innerHTML += searchItemTemplate(item)
  })

  searchForm.classList.add('border-blue-500')
  searchWrapper.classList.replace('z-0', 'z-[60]')
  searchPopup.classList.replace('hidden', 'flex')

  formBg.classList.replace('opacity-0', 'opacity-100')
  formBg.classList.replace('invisible', 'visible')

  body.style.cssText = 'overflow: hidden;'
})

// search close
body.addEventListener('click', (event) => {
  event.stopImmediatePropagation()

  searchForm.classList.add('remove')
  searchForm.classList.remove('border-blue-500')
  searchPopup.classList.replace('flex', 'hidden')
  searchWrapper.classList.replace('z-[60]', 'z-0')

  formBg.classList.replace('opacity-100', 'opacity-0')
  formBg.classList.replace('visible', 'invisible')

  searchPopup.innerHTML = ''

  body.removeAttribute('style')
})
/* =================== SEARCH FUNCTIONALITY END ===================== */

/* =================== CATEGORIES FUNCTIONALITY ===================== */

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

  getDropdownTemplate(dropdownContainer, category?.subcategory);

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

/* =================== CATEGORIES FUNCTIONALITY END ===================== */
