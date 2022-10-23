const product = {
  id: 0,
  title: 'Fall Limited Edition Sneakers',
  description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  brand: 'Sneaker Company',
  devise: '$',
  price: 250.00,
  reduce: 50,
  image: [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg',
  ],
  thumbs:[
    'image-product-1-thumbnail.jpg',
    'image-product-2-thumbnail.jpg',
    'image-product-3-thumbnail.jpg',
    'image-product-4-thumbnail.jpg',
  ],
  insertProduct: function(){
    product.titleContainer = document.querySelector('h1'); // H1
    product.titleContainer.textContent = product.title;

    product.brandContainer = document.querySelector('h2');
    product.brandContainer.textContent = product.brand;

    product.descriptionContainer = document.querySelector('.product__resume'); // H1
    product.descriptionContainer.textContent = product.description;

    product.priceValidContainer = document.querySelector('.product__price-valid'); // Price
    product.priceReduceContainer = document.querySelector('.product__price-reduce');
    product.priceOldContainer = document.querySelector('.product__price-old');
    product.priceOldContainer.textContent = `$${product.price}`;
    product.priceReduceContainer.textContent = `${product.reduce}%`;
    product.priceValidContainer.textContent = `$${product.price * product.reduce / 100}`;

    product.mainImage = document.querySelector('.product__image-main img'); // main image
    product.mainImage.src = product.image[0];

    // thumbs
  },
  init: function(){
    product.insertProduct();
  },
};
document.addEventListener('DOMContentLoaded', product.init);