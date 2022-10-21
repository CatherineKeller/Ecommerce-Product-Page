const cart = {
  show: function(){
    cart.content.classList.add('cart-active');
  },
  hide: function(){
    cart.content.classList.remove('cart-active');
  },
  init: function(){
    cart.btn = document.getElementById('cart');
    cart.content = document.querySelector('.cart-opened');

    // On cart icon
    cart.btn.addEventListener('mouseover', cart.show);
    cart.content.addEventListener('mouseover', cart.show);
    // On cart content (popup)
    cart.btn.addEventListener('mouseout', cart.hide);
    cart.content.addEventListener('mouseout', cart.hide);
  },
};
document.addEventListener('DOMContentLoaded', cart.init);