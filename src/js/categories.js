import { categories } from "./db";

const categoriesContent = document.querySelector(".categories__content");
const dropdownContainer = document.querySelector(".dropdown");

// categories template
const getCategoryTemplate = (category, index) => {
  return `
  <!-- categories-item -->
  <article class="categories__item h-[85px] relative item-border rounded-xl pr-3 pl-11 py-[22px] flex items-center justify-end gap-6 shadow-md col-span-1 w-11/12 xl:w-[336px] w-full cursor-pointer">
                
    <div class="categories__item--img absolute top-[50%] -left-9 -translate-y-[50%] w-16 h-16 item-border rounded-xl flex items-center justify-center shadow-md transition duration-300">
      <img src="${category.imgUrl}" alt="category">
    </div>

    <div class="categories__item--info flex flex-col flex-grow gap-1">
      <h4 class="text-base/[119%] font-semibold">${category.title}</h4>
      <p class="text-sm text-gray-300">${category.text}</p>
    </div>

    <button class="icon-chevron-right transition duration-300 before:text-slate-300"></button>

  </article>
  `;
};
// dropdown template
const getDropdownTemplate = (subcategories) => {
  if (!subcategories) {
    dropdownContainer.classList.replace('dropdown-grid', 'dropdown-flex')
    dropdownContainer.innerHTML +=  `
    <img src="/public/images/empty-category.png" alt="empty-category" />
    <h4 class="text-lg/[140%] text-black">Подкатегорий нет</h4>
    <p class="text-sm text-gray-400 mt-1">В этой категории нет подкатегорий</p>
    `;
    return
  }
  
  subcategories.forEach((item) => {
    dropdownContainer.classList.replace('dropdown-flex', 'dropdown-grid')
    dropdownContainer.innerHTML += `
    <a href="${item.linkUrl}" class="dropdown__item icon-chevron-right p-3 flex flex-row-reverse items-center gap-[10px]">
      <h5 class="flex-grow text-sm text-black font-medium">${item.title}</h5>
    </a>
    `;
  });
};

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
