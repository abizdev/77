(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();const d=document.querySelector("body"),m=`
<!-- header -->
<header class=" py-3 md:py-5 sticky top-0 z-40 bg-white/[0.92] before:absolute before:top-0 before:z-[-1] before:w-full before:h-full before:backdrop-blur-[6px]">
  <div class="container">

    <!-- header content -->
    <div class="flex justify-between items-center">

      <!-- header contacts -->
      <div class="flex items-center gap-6">

        <div class="cursor-pointer relative icon-chevron-down group before:text-black before:w-6 before:h-6 text-sm/[130%] text-bold text-black flex flex-row-reverse items-center gap-1 hover:before:rotate-180 hover:before:text-blue-400 before:transition before:duration-300">
          <span class="text-sm font-medium hidden md:block">Русский</span>
          <img src="/assets/images/ru-lang.png" alt="lang">
          <span class="text-sm font-medium uppercase md:hidden">Ру</span>

          <div class="lang-dropdown absolute top-[10px] left-[15px] shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white rounded-lg pl-4 transition duration-300">
            <div class="lang-dropdown__item flex items-center gap-2">
              <img src="/assets/images/ru-lang.png" alt="ru-lang" />
              <span class="text-sm font-medium py-[11px] border-b border-slate-300">Русский</span>
            </div>
            <div class="lang-dropdown__item flex items-center gap-2">
              <img src="/assets/images/uz-lang.png" alt="uz-lang" />
              <span class="text-sm font-medium py-[11px]">O’zbekcha</span>
            </div>
          </div>
        </div>

        <a href="tel:+998885005000" class="hidden icon-phone before:text-slate-400 md:flex text-sm/[130%] text-bold text-black items-center gap-2">
          +998 88 500 50 00
        </a>

      </div>

      <!-- header logo -->
      <a href="#!" class="absolute left-[50%] -translate-x-[50%] translate-y-4 md:translate-y-3 px-3.5 p-3 md:py-4 bg-white border border-gray-200 rounded-[20px] md:rounded-b-[20px] md:rounded-t-none shadow-lg">
        <img src="/assets/images/logo.png" class="w-24 md:w-full" alt="logo">
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
`,p=`
<!-- footer -->
<footer class="w-full relative md:h-64 bg-white">
  <!-- footer background image -->
  <img src="assets/images/footer-bg.png" class="rounded-[10px] absolute top-0 left-0 w-full h-full object-cover" alt="footer-bg">

  <!-- footer content -->
  <div class="container relative flex flex-col h-full pt-14 pb-6 md:p-0 items-center justify-center text-center">

    <img src="assets/images/logo.png" class="w-[122px] absolute top-0 left-[47.5%] -translate-y-[50%] -translate-x-7 shadow-blue" alt="logo">

    <p class="text-sm md:text-base text-black max-w-[662px] w-full">77.uz marketplace - это виртуальная платформа в Узбекистане, которая облегчает покупки и продажи, связывая продавцов с потенциальными клиентами.</p>

    <!-- footer-list -->
    <nav class="mt-6">
      <ul class="flex flex-wrap items-center justify-center md:justify-center gap-4 md:gap-[50px]">

        <li class="flex items-center gap-1">
          <img src="assets/images/footer-symbol.svg" alt="symbol">
          <a href="#!" class="text-xl text-black font-semibold ">Доска объявлений</a>
        </li>

        <li class="flex items-center gap-1">
          <img src="assets/images/footer-symbol.svg" alt="symbol">
          <a href="#!" class="text-xl text-black font-semibold ">Условия пользования</a>
        </li>

        <li class="flex items-center gap-1">
          <img src="assets/images/footer-symbol.svg" alt="symbol">
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
        <img src="assets/images/uic-logo.svg" alt="uic-logo">
        <img src="assets/images/uic-logo-text.svg" class="hidden md:flex opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300" alt="uic-logo">
      </a>
    </div>
  </div>
  <!-- footer-bottom end -->
</footer>
<!-- footer end -->
`;d.insertAdjacentHTML("beforebegin",m);d.insertAdjacentHTML("beforeend",p);alert("foo");const g=[{imgUrl:"assets/images/categories/category1.svg",title:"Для женщин",text:"4 147 объявлений",subcategory:[{title:"Смартфоны",linkUrl:"#!",inner:{}},{title:"Фитнес браслеты",linkUrl:"#!",inner:{}},{title:"Аксессуары для смартфонов и телефонов",linkUrl:"#!",inner:{}},{title:"Аксессуары для смартфонов и телефонов",linkUrl:"#!",inner:{}},{title:"Ремешки для часов и смарт-часов",linkUrl:"#!",inner:{}},{title:"Смарт-часы",linkUrl:"#!",inner:{}},{title:"Запчасти для смартфонов",linkUrl:"#!",inner:{}}]},{imgUrl:"assets/images/categories/category2.svg",title:"Красота",text:"574 объявлений"},{imgUrl:"assets/images/categories/category3.svg",title:"Бытовая техника",text:"547 объявлений"},{imgUrl:"assets/images/categories/category4.svg",title:"Для мужчин",text:"4 147 объявлений"},{imgUrl:"assets/images/categories/category5.svg",title:"Здоровье",text:"4 147 объявлений"},{imgUrl:"assets/images/categories/category6.svg",title:"Электроника",text:"4 147 объявлений"},{imgUrl:"assets/images/categories/category7.svg",title:"Детские товары",text:"4 147 объявлений"},{imgUrl:"assets/images/categories/category8.svg",title:"Украшения и бижутерия",text:"4 147 объявлений"},{imgUrl:"assets/images/categories/category9.svg",title:"Домашняя утварь",text:"4 147 объявлений"},{imgUrl:"assets/images/categories/category10.svg",title:"Обувь",text:"4 147 объявлений"},{imgUrl:"assets/images/categories/category11.svg",title:"Канцелярия",text:"4 147 объявлений"},{imgUrl:"assets/images/categories/category12.svg",title:"Спорт и отдых",text:"4 147 объявлений"},{imgUrl:"assets/images/categories/category13.svg",title:"Автотовары",text:"4 147 объявлений"},{imgUrl:"assets/images/categories/category14.svg",title:"Новые легковые автомобили",text:"4 147 объявлений"},{imgUrl:"assets/images/categories/category15.svg",title:"Мототранспорт",text:"4 147 объявлений"},{imgUrl:"assets/images/categories/category16.svg",title:"Дача, сады и огороды",text:"4 147 объявлений"},{imgUrl:"assets/images/categories/category17.svg",title:"Личная гигиена",text:"4 147 объявлений"},{imgUrl:"assets/images/categories/category18.svg",title:"Аксессуарлар",text:"4 147 объявлений"},{imgUrl:"assets/images/categories/category19.svg",title:"Бытовая химия и личная гигиена",text:"4 147 объявлений"},{imgUrl:"assets/images/categories/category20.svg",title:"Строительство и ремонт",text:"4 147 объявлений"},{imgUrl:"assets/images/categories/category21.svg",title:"Сумки и чемоданы",text:"4 147 объявлений"}],f=[{id:Math.random(),imgUrl:"../assets/images/products/card1.jpg",isLiked:!1,city:"г. Ташкент",name:"Кепки Corneliani Diamond for him edition.",productUrl:"../../pages/product.html",date:"Вчера, 19:20",phone:"+998712007007",price:2599e3},{id:Math.random(),imgUrl:"../assets/images/products/card2.jpg",isLiked:!1,city:"г. Самарканд",name:"Chevrolet Onix 1.2 Turbo в наличии",productUrl:"../../pages/product.html",date:"Вчера, 19:20",phone:"+998712007007",price:204e6},{id:Math.random(),imgUrl:"../assets/images/products/card3.jpg",isLiked:!1,city:"г. Ташкент",name:"7Saber Trucker Cap",productUrl:"../../pages/product.html",date:"Вчера, 19:20",phone:"+998712007007",price:28e4},{id:Math.random(),imgUrl:"../assets/images/products/card4.jpg",isLiked:!1,city:"г. Ташкент",name:"Оригинальные кроссовки Nike Air Max Plus",productUrl:"../../pages/product.html",date:"Вчера, 19:20",phone:"+998712007007",price:482e4},{id:Math.random(),imgUrl:"../assets/images/products/card5.jpg",isLiked:!1,city:"г. Ташкент",name:"Оригинальные кроссовки Nike Air Max 97",productUrl:"../../pages/product.html",date:"Вчера, 19:20",phone:"+998712007007",price:482e4},{id:Math.random(),imgUrl:"../assets/images/products/card6.jpg",isLiked:!1,city:"г. Ташкент",name:"Apple Watch Series 8 - USA Non active",productUrl:"../../pages/product.html",date:"Вчера, 19:20",phone:"+998712007007",price:45e5},{id:Math.random(),imgUrl:"../assets/images/products/card7.jpg",isLiked:!1,city:"г. Самарканд",name:"Лучший кроссовер Geely Monjaro Limited Edition",productUrl:"../../pages/product.html",date:"Вчера, 19:20",phone:"+998712007007",price:32e7},{id:Math.random(),imgUrl:"../assets/images/products/card8.jpg",isLiked:!1,city:"г. Ташкент",name:"Стайлер для волос Dyson airwrap complete long",productUrl:"../../pages/product.html",date:"Вчера, 19:20",phone:"+998712007007",price:500},{id:Math.random(),imgUrl:"../assets/images/products/card1.jpg",isLiked:!1,city:"г. Ташкент",name:"Кепки Corneliani Diamond for him edition.",productUrl:"../../pages/product.html",date:"Вчера, 19:20",phone:"+998712007007",price:2599e3},{id:Math.random(),imgUrl:"../assets/images/products/card2.jpg",isLiked:!1,city:"г. Самарканд",name:"Chevrolet Onix 1.2 Turbo в наличии",productUrl:"../../pages/product.html",date:"Вчера, 19:20",phone:"+998712007007",price:204e6},{id:Math.random(),imgUrl:"../assets/images/products/card3.jpg",isLiked:!1,city:"г. Ташкент",name:"7Saber Trucker Cap",productUrl:"../../pages/product.html",date:"Вчера, 19:20",phone:"+998712007007",price:28e4},{id:Math.random(),imgUrl:"../assets/images/products/card4.jpg",isLiked:!1,city:"г. Ташкент",name:"Оригинальные кроссовки Nike Air Max Plus",productUrl:"../../pages/product.html",date:"Вчера, 19:20",phone:"+998712007007",price:482e4}],u=document.querySelector(".categories__content"),a=document.querySelector(".dropdown"),h=(e,t)=>`
  <!-- categories-item -->
  <article class="categories__item h-[85px] relative item-border rounded-xl pr-3 pl-11 py-[22px] flex items-center justify-end gap-6 shadow-md w-[336px] cursor-pointer">
                
    <div class="categories__item--img absolute top-[50%] -left-9 -translate-y-[50%] w-16 h-16 item-border rounded-xl flex items-center justify-center shadow-md transition duration-300">
      <img src="${e.imgUrl}" alt="category">
    </div>

    <div class="categories__item--info flex flex-col flex-grow gap-1">
      <h4 class="text-base/[119%] font-semibold">${e.title}</h4>
      <p class="text-sm text-gray-300">${e.text}</p>
    </div>

    <button class="icon-chevron-right transition duration-300 before:text-slate-300"></button>

  </article>
  `,x=e=>{if(!e){a.classList.replace("dropdown-grid","dropdown-flex"),a.innerHTML+=`
    <img src="assets/images/empty-category.png" alt="empty-category" />
    <h4 class="text-lg/[140%] text-black">Подкатегорий нет</h4>
    <p class="text-sm text-gray-400 mt-1">В этой категории нет подкатегорий</p>
    `;return}e.forEach(t=>{a.classList.replace("dropdown-flex","dropdown-grid"),a.innerHTML+=`
    <a href="${t.linkUrl}" class="dropdown__item icon-chevron-right p-3 flex flex-row-reverse items-center gap-[10px]">
      <h5 class="flex-grow text-sm text-black font-medium">${t.title}</h5>
    </a>
    `})},b=(e,t="hidden")=>{e.classList.remove("hidden"),t&&e.classList.add(t)},c=(e,t="hidden")=>{t&&e.classList.remove(...t),e.classList.add("hidden")};g.forEach((e,t)=>{u.insertAdjacentHTML("beforeend",h(e))});const v=(e,t)=>{const i=Math.floor(t/3)+2;a.style.gridRow=i,b(a,"dropdown-grid"),x(e==null?void 0:e.subcategory)},n=document.querySelectorAll(".categories__item");n.forEach((e,t)=>{e.addEventListener("click",()=>{e.classList.contains("active")?(e.classList.remove("active"),a.innerHTML="",c(a,["dropdown-grid","dropdown-flex"])):(n.forEach(i=>{i.classList.remove("active"),a.innerHTML="",c(a,["dropdown-grid","dropdown-flex"])}),e.classList.toggle("active"),v(g[t],t))})});const y=document.querySelector(".ads__content"),U=e=>`
  <!-- product card -->
  <article class="product-card">
    <button class="icon-heart text-3xl w-10 h-10 text-white"></button>
  
    <img src="${e.imgUrl}" class="product-card-img" alt="product-img">
    
    <div class="product-card__info">
      <span class="product-card__info-city">${e.city}</span>
      <a href="product.html" class="product-card__info-name">${e.name}</a>
      <time class="product-card__info-date">${e.date}</time>
      <a href="tel:${e.phone}" class="product-card__info-phone">${e.phone}</a>
      <p class="product-card__info-price">${e.price} <span>UZS</span></p>
    </div>
    
  </article>
  `;f.forEach(e=>{y.insertAdjacentHTML("beforeend",U(e))});
