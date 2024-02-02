import { searchCategories } from "./db";


const body = document.querySelector('body')

// search form elements
const formBg = document.querySelector('.form-bg')
const searchWrapper = document.querySelector('.search-wrapper')
const searchForm = document.querySelector('.search-form')
const searchInput = document.querySelector('.search-form input')
const searchPopup= document.querySelector('.sear-form__popup')


const searchItemTemplate = (item) => {
  return `
    <!-- search item -->
    <div class="search-form__items-item bg-white p-4 flex items-center justify-between gap-2 icon-star before:text-xl before:w-6 before:h-6 before:text-yellow-500 hover:bg-slate-100 transition duration-300 cursor-pointer">
      <p class="flex-grow text-base text-black font-medium">${item.title}</p>
      <a href="${item.linkUrl}" class="icon-chevron-right"></a>
    </div>
  `
}

// search click
searchWrapper.addEventListener('click', (event) => {
  event.stopPropagation()
  searchInput.focus()

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