
// header
export const header = `
<!-- header -->
<header class=" py-3 md:py-5 sticky top-0 z-40 bg-white/[0.92] before:absolute before:top-0 before:z-[-1] before:w-full before:h-full before:backdrop-blur-[6px]">
  <div class="container">

    <!-- header content -->
    <div class="flex justify-between items-center">

      <!-- header contacts -->
      <div class="flex items-center gap-6">

        <div class="cursor-pointer relative icon-chevron-down group before:text-black before:w-6 before:h-6 text-sm/[130%] text-bold text-black flex flex-row-reverse items-center gap-1 hover:before:rotate-180 hover:before:text-blue-400 before:transition before:duration-300">
          <span class="text-sm font-medium hidden md:block">Русский</span>
          <img src="/public/images/ru-lang.png" alt="lang">
          <span class="text-sm font-medium uppercase md:hidden">Ру</span>

          <div class="lang-dropdown absolute top-[25px] left-[15px] w-[151px] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white rounded-lg pl-4 transition duration-300">
            <div class="lang-dropdown__item flex items-center gap-2">
              <img src="/public/images/ru-lang.png" alt="ru-lang" />
              <span class="flex-grow text-sm font-medium py-[11px] border-b border-slate-300">Русский</span>
            </div>
            <div class="lang-dropdown__item flex items-center gap-2">
              <img src="/public/images/uz-lang.png" alt="uz-lang" />
              <span class="flex-grow text-sm font-medium py-[11px]">O’zbekcha</span>
            </div>
          </div>
        </div>

        <a href="tel:+998885005000" class="hidden icon-phone before:text-slate-400 md:flex text-sm/[130%] text-bold text-black items-center gap-2">
          +998 88 500 50 00
        </a>

      </div>

      <!-- header logo -->
      <a href="#!" class="absolute left-[50%] -translate-x-[50%] translate-y-4 md:translate-y-3 px-3.5 p-3 md:py-4 bg-white border border-gray-200 rounded-[20px] md:rounded-b-[20px] md:rounded-t-none shadow-lg">
        <img src="/public/images/logo.png" class="w-24 md:w-full" alt="logo">
      </a>

      <!-- header links -->
      <div class="flex items-center gap-3 md:gap-4">
        <a href="#!" class="btn btn-secondary icon-heart before:text-blue-400 md:bg-transparent md:rounded-none md:p-0 hover:bg-transparent">
          <span class="hidden md:block">Избранные</span>
        </a>

        <span class="hidden md:block w-[1px] h-[32px] bg-gray-100 hidden md:block"></span>

        <a href="#!" class="btn btn-secondary icon-login before:text-black flex-row-reverse">
          <span class="hidden md:block">Войти</span>
        </a>
      </div>
    </div>
    <!-- header content -->
  </div>
</header>
<!-- header end -->
`

// footer
export const footer = `
<!-- footer -->
<footer class="w-full relative md:h-64 bg-white">
  <!-- footer background image -->
  <img src="/public/images/footer-bg.png" class="rounded-[10px] absolute top-0 left-0 w-full h-full object-cover" alt="footer-bg">

  <!-- footer content -->
  <div class="container relative flex flex-col h-full pt-14 pb-6 md:p-0 items-center justify-center text-center">

    <img src="/public/images/logo.png" class="w-[122px] absolute top-0 left-[47.5%] -translate-y-[50%] -translate-x-7 shadow-blue" alt="logo">

    <p class="text-sm md:text-base text-black max-w-[662px] w-full">77.uz marketplace - это виртуальная платформа в Узбекистане, которая облегчает покупки и продажи, связывая продавцов с потенциальными клиентами.</p>

    <!-- footer-list -->
    <nav class="mt-6">
      <ul class="flex flex-wrap items-center justify-center md:justify-center gap-4 md:gap-[50px]">

        <li class="flex items-center gap-1">
          <img src="/public/images/footer-symbol.svg" alt="symbol">
          <a href="#!" class="text-xl text-black font-semibold ">Доска объявлений</a>
        </li>

        <li class="flex items-center gap-1">
          <img src="/public/images/footer-symbol.svg" alt="symbol">
          <a href="#!" class="text-xl text-black font-semibold ">Условия пользования</a>
        </li>

        <li class="flex items-center gap-1">
          <img src="/public/images/footer-symbol.svg" alt="symbol">
          <a href="tel:+998885005000" class="text-xl text-black font-semibold ">+998 88 500 50 00</a>
        </li>

      </ul>
    </nav>
    <!-- footer-list end -->
  </div>
  <!-- footer content end -->

  <!-- footer-bottom -->
  <div class="relative border-t-[1px] py-[14px] border-gray-200 bg-white">
    <div class="container flex items-center justify-between">
      <p class="text-sm/[114%] text-black">© 77.uz 2023. Все права защищены</p>

      <a href="https://uic.group/" class="flex items-center gap-2 group">
        <img src="/public/images/uic-logo.svg" alt="uic-logo">
        <img src="/public/images/uic-logo-text.svg" class="hidden md:flex opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300" alt="uic-logo">
      </a>
    </div>
  </div>
  <!-- footer-bottom end -->
</footer>
<!-- footer end -->
`

// search popup item
export const searchItemTemplate = (item) => {
  return `
    <!-- search item -->
    <div class="search-form__items-item bg-white p-4 flex items-center justify-between gap-2 icon-star before:text-xl before:w-6 before:h-6 before:text-yellow-500 hover:bg-slate-100 transition duration-300 cursor-pointer">
      <p class="flex-grow text-base text-black font-medium">${item.title}</p>
      <a href="${item.linkUrl}" class="icon-chevron-right"></a>
    </div>
  `
}

// main category
export const getCategoryTemplate = (category, index) => {
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
export const getDropdownTemplate = (subcategories) => {
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

// product card
export const getProductCardTemplate = (product) => {
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