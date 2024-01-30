const categoriesContent = document.querySelector(".categories__content");
const dropdownContainer = document.querySelector(".dropdown");
const categories = [
  {
    imgUrl: "assets/images/categories/category1.svg",
    title: "Для женщин",
    text: "4 147 объявлений",
    subcategory: [
      {
        title: "Смартфоны",
        linkUrl: "#!",
        inner: {},
      },
      {
        title: "Фитнес браслеты",
        linkUrl: "#!",
        inner: {},
      },
      {
        title: "Аксессуары для смартфонов и телефонов",
        linkUrl: "#!",
        inner: {},
      },
      {
        title: "Аксессуары для смартфонов и телефонов",
        linkUrl: "#!",
        inner: {},
      },
      {
        title: "Ремешки для часов и смарт-часов",
        linkUrl: "#!",
        inner: {},
      },
      {
        title: "Смарт-часы",
        linkUrl: "#!",
        inner: {},
      },
      {
        title: "Запчасти для смартфонов",
        linkUrl: "#!",
        inner: {},
      },
    ],
  },
  {
    imgUrl: "assets/images/categories/category2.svg",
    title: "Красота",
    text: "574 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category3.svg",
    title: "Бытовая техника",
    text: "547 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category4.svg",
    title: "Для мужчин",
    text: "4 147 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category5.svg",
    title: "Здоровье",
    text: "4 147 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category6.svg",
    title: "Электроника",
    text: "4 147 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category7.svg",
    title: "Детские товары",
    text: "4 147 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category8.svg",
    title: "Украшения и бижутерия",
    text: "4 147 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category9.svg",
    title: "Домашняя утварь",
    text: "4 147 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category10.svg",
    title: "Обувь",
    text: "4 147 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category11.svg",
    title: "Канцелярия",
    text: "4 147 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category12.svg",
    title: "Спорт и отдых",
    text: "4 147 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category13.svg",
    title: "Автотовары",
    text: "4 147 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category14.svg",
    title: "Новые легковые автомобили",
    text: "4 147 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category15.svg",
    title: "Мототранспорт",
    text: "4 147 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category16.svg",
    title: "Дача, сады и огороды",
    text: "4 147 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category17.svg",
    title: "Личная гигиена",
    text: "4 147 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category18.svg",
    title: "Аксессуарлар",
    text: "4 147 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category19.svg",
    title: "Бытовая химия и личная гигиена",
    text: "4 147 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category20.svg",
    title: "Строительство и ремонт",
    text: "4 147 объявлений",
  },
  {
    imgUrl: "assets/images/categories/category21.svg",
    title: "Сумки и чемоданы",
    text: "4 147 объявлений",
  },
];

// categories template
const getCategoryTemplate = (category, index) => {
  return `
  <!-- categories-item -->
  <article class="categories__item h-[85px] relative item-border rounded-xl pr-3 pl-11 py-[22px] flex items-center justify-end gap-6 shadow-md w-[336px] cursor-pointer">
                
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
    <img src="assets/images/empty-category.png" alt="empty-category" />
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
