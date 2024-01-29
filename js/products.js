const adsContent = document.querySelector('.ads__content')

const productsArr = [
  {
    id: Math.random(),
    imgUrl: '../assets/images/products/card1.jpg',
    isLiked: false,
    city: 'г. Ташкент',
    name: 'Кепки Corneliani Diamond for him edition.',
    productUrl: '',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 2599000,
  },
  {
    id: Math.random(),
    imgUrl: '../assets/images/products/card2.jpg',
    isLiked: false,
    city: 'г. Самарканд',
    name: 'Chevrolet Onix 1.2 Turbo в наличии',
    productUrl: '',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 204000000
  },
  {
    id: Math.random(),
    imgUrl: '../assets/images/products/card3.jpg',
    isLiked: false,
    city: 'г. Ташкент',
    name: '7Saber Trucker Cap',
    productUrl: '',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 280000
  },
  {
    id: Math.random(),
    imgUrl: '../assets/images/products/card4.jpg',
    isLiked: false,
    city: 'г. Ташкент',
    name: 'Оригинальные кроссовки Nike Air Max Plus',
    productUrl: '',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 4820000
  },
  {
    id: Math.random(),
    imgUrl: '../assets/images/products/card5.jpg',
    isLiked: false,
    city: 'г. Ташкент',
    name: 'Оригинальные кроссовки Nike Air Max 97',
    productUrl: '',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 4820000
  },
  {
    id: Math.random(),
    imgUrl: '../assets/images/products/card6.jpg',
    isLiked: false,
    city: 'г. Ташкент',
    name: 'Apple Watch Series 8 - USA Non active',
    productUrl: '',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 4500000
  },
  {
    id: Math.random(),
    imgUrl: '../assets/images/products/card7.jpg',
    isLiked: false,
    city: 'г. Самарканд',
    name: 'Лучший кроссовер Geely Monjaro Limited Edition',
    productUrl: '',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 320000000
  },
  {
    id: Math.random(),
    imgUrl: '../assets/images/products/card8.jpg',
    isLiked: false,
    city: 'г. Ташкент',
    name: 'Стайлер для волос Dyson airwrap complete long',
    productUrl: '',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 500
  },
  {
    id: Math.random(),
    imgUrl: '../assets/images/products/card1.jpg',
    isLiked: false,
    city: 'г. Ташкент',
    name: 'Кепки Corneliani Diamond for him edition.',
    productUrl: '',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 2599000
  },
  {
    id: Math.random(),
    imgUrl: '../assets/images/products/card2.jpg',
    isLiked: false,
    city: 'г. Самарканд',
    name: 'Chevrolet Onix 1.2 Turbo в наличии',
    productUrl: '',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 204000000
  },
  {
    id: Math.random(),
    imgUrl: '../assets/images/products/card3.jpg',
    isLiked: false,
    city: 'г. Ташкент',
    name: '7Saber Trucker Cap',
    productUrl: '',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 280000
  },
  {
    id: Math.random(),
    imgUrl: '../assets/images/products/card4.jpg',
    isLiked: false,
    city: 'г. Ташкент',
    name: 'Оригинальные кроссовки Nike Air Max Plus',
    productUrl: '',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 4820000
  },
]
productsArr.forEach((product, index) => {
  // product card
  const productCard = `
  <!-- product card -->
  <article class="product-card">
    <button class="icon-heart text-3xl w-10 h-10 text-white"></button>
  
    <img src="${product.imgUrl}" class="product-card-img" alt="product-img">
    
    <div class="product-card__info">
      <span class="product-card__info-city">${product.city}</span>
      <a href="product.html" class="product-card__info-name">${product.name}</a>
      <time class="product-card__info-date">${product.date}</time>
      <a href="tel:${product.phone}" class="product-card__info-phone">${product.phone}</a>
      <p class="product-card__info-price">${product.price} <span>UZS</span></p>
    </div>
    
  </article>
  `
  adsContent.insertAdjacentHTML('beforeend', productCard)
})