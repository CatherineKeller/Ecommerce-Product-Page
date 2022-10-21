const addtocart = {
  qtyPlus: function(){
    const newQty = addtocart.currentQty + 1;
    addtocart.currentQtyElmt.textContent = newQty;
    addtocart.currentQty++;
  },
  qtyMinus: function(){
    if(addtocart.currentQty > 0){
      const newQty = addtocart.currentQty - 1;
      addtocart.currentQtyElmt.textContent = newQty;
      addtocart.currentQty--;
    }
  },
  init: function(){
    // Update quantity : minus & plus
    addtocart.currentQtyElmt = document.querySelector('.product__addtocart-quantity-number');
    addtocart.currentQty = parseInt(addtocart.currentQtyElmt.textContent);
    addtocart.btnMinus = document.getElementById('product-qnt-minus');
    addtocart.btnPlus = document.getElementById('product-qnt-plus');
    addtocart.btnMinus.addEventListener('click', addtocart.qtyMinus);
    addtocart.btnPlus.addEventListener('click', addtocart.qtyPlus);
  },
};
document.addEventListener('DOMContentLoaded', addtocart.init);