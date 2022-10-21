const cart = {
  show: function(){
    cart.content.classList.add('cart-active');
  },
  hide: function(){
    cart.content.classList.remove('cart-active');
  },
  removeItem: function(event){
    const item = event.target.parentNode.parentNode;
    item.remove();
  },
  init: function(){
    cart.btn = document.getElementById('cart'); // Cart button
    cart.content = document.querySelector('.cart-opened'); // Cart Content

    // On cart icon
    cart.btn.addEventListener('mouseover', cart.show);
    cart.content.addEventListener('mouseover', cart.show);
    // On cart content (popup)
    cart.btn.addEventListener('mouseout', cart.hide);
    cart.content.addEventListener('mouseout', cart.hide);

    // Item delete button
    cart.btnDelete = document.querySelector('.cart-item__remove');
    cart.btnDelete.addEventListener('click', cart.removeItem);
  },
};
document.addEventListener('DOMContentLoaded', cart.init);