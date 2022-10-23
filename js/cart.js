const cart = {
  emptyCart: function(){
    cart.itemsContainer.innerHTML = '<p>Your cart ist empty.</p>';
    cart.checkoutBtn.style.display = 'none';
  },
  show: function(){
    cart.content.classList.add('cart-active');
  },
  hide: function(){
    cart.content.classList.remove('cart-active');
  },
  init: function(){
    cart.btn = document.getElementById('cart'); // Cart button
    cart.content = document.querySelector('.cart-opened'); // Cart Content
    cart.itemsContainer = document.querySelector('.cart-opened__content'); // Cart items Container
    cart.checkoutBtn = document.querySelector('.cart-opened__checkout'); // Button Checkout in Cart items Container

    // On cart icon
    cart.btn.addEventListener('mouseover', cart.show);
    cart.content.addEventListener('mouseover', cart.show);
    // On cart content (popup)
    cart.btn.addEventListener('mouseout', cart.hide);
    cart.content.addEventListener('mouseout', cart.hide);

    // Init empty cart
    cart.emptyCart();
  },
};
document.addEventListener('DOMContentLoaded', cart.init);