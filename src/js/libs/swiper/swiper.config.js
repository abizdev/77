import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';

import { productsArr } from "../../db";
import { getSlideTemplate } from "../../templates"

const swiperWrapper = document.querySelector('.swiper-wrapper')

const product = productsArr[0]

const renderSlides = () => {
    product.images.forEach((slide, index) => {
        swiperWrapper.innerHTML += getSlideTemplate(slide.imgUrl)
    })
}

// init Swiper:
const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
            return `<img url="${product.images[index]["imgUrl"]}" class="${className}" alt="${product.images[index]["imgAlt"]}">`
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// on load
renderSlides()