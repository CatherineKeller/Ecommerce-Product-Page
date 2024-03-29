const addtocart = {
  currentItemsInCartNumber: 0,
  currentQty: 0,
  qtyPlus: function(){
    addtocart.currentQty++;
    addtocart.currentQtyElmt.textContent = addtocart.currentQty;
    if(addtocart.currentQty > 0){
      addtocart.btnMinus.classList.remove('inactive');
      addtocart.addBtn.disabled = false;
    }
    console.log("plus");
  },
  qtyMinus: function(){
    if(addtocart.currentQty > 0){
      addtocart.currentQty--;
      addtocart.currentQtyElmt.textContent = addtocart.currentQty;
      if(addtocart.currentQty === 0){
        addtocart.btnMinus.classList.add('inactive');
        addtocart.addBtn.disabled = true;
      }
    }
    console.log("minus");
  },
  createItem: function(){
    // cart item container
    addtocart.createItem.container = document.createElement('div');
    addtocart.createItem.container.classList.add('cart-item');

    // cart item img
    addtocart.createItem.img = document.createElement('img');
    addtocart.createItem.img.classList.add('cart-item__img');

    // cart item descr
    const cartItemDescr = document.createElement('div');
    cartItemDescr.classList.add('cart-item__descr');
    addtocart.createItem.title = document.createElement('div');
    addtocart.createItem.title.classList.add('cart-item__descr-title');
    const cartItemDescrPrice = document.createElement('div');
    cartItemDescrPrice.classList.add('cart-item__descr-price');
    
    addtocart.createItem.price = document.createElement('span');
    addtocart.createItem.price.classList.add('cart-item__descr-price-unique');
    addtocart.createItem.qty = document.createElement('span');
    addtocart.createItem.qty.classList.add('cart-item__descr-price-qty');
    addtocart.createItem.total = document.createElement('span');
    addtocart.createItem.total.classList.add('cart-item__descr-price-total');

    // cart item remove
    const cartItemRemove = document.createElement('div');
    cartItemRemove.classList.add('cart-item__remove');
    const cartItemRemoveImg= document.createElement('img');
    cartItemRemoveImg.src = 'images/icon-delete.svg';

    // Ajout dans le DOM
    addtocart.cartItemsContainer.append(addtocart.createItem.container);
    addtocart.createItem.container.append(this.createItem.img);

    addtocart.createItem.container.append(cartItemDescr);
    cartItemDescr.append(addtocart.createItem.title);
    cartItemDescr.append(cartItemDescrPrice);
    cartItemDescrPrice.append(addtocart.createItem.price);
    cartItemDescrPrice.append(addtocart.createItem.qty);
    cartItemDescrPrice.append(addtocart.createItem.total);

    addtocart.createItem.container.append(cartItemRemove);
    cartItemRemove.append(cartItemRemoveImg);

    // Item delete
    cart.btnDelete = document.querySelectorAll('.cart-item__remove');
    for (const btnDelete of cart.btnDelete ) {
      btnDelete.addEventListener('click', addtocart.removeItem);
    }
  },
  addItem: function(){
    addtocart.createItem.container.dataset.product = product.id;
    addtocart.createItem.img.src = product.image[0];
    addtocart.createItem.title.textContent = product.title;
    // Calcul new price
    let productPrice = '';
    if(product.reduce !== 0 || ''){
      productPrice = product.price * product.reduce / 100;
    } else {
      console.log('else');
      productPrice = product.price;
    }
    addtocart.createItem.price.textContent = `${product.devise}${productPrice}`;
    addtocart.createItem.qty.textContent = `x ${addtocart.currentQty}`;
    addtocart.createItem.total.textContent = product.devise + productPrice * addtocart.currentQty;

    addtocart.currentItemsInCartNumber++;
  },
  removeItem: function(event){
    const item = event.target.parentNode.parentNode;
    item.remove();

    // Info cart empty
    addtocart.currentItemsInCartNumber--;

    if(addtocart.currentItemsInCartNumber < 1) {
      cart.emptyCart();
    }
  },
  init: function(){
    // Elements
    addtocart.addBtn = document.querySelector('.product__addtocart-btn'); // Button "Add to cart"
    addtocart.currentQtyElmt = document.querySelector('.product__addtocart-quantity-number'); // Quantité container
    addtocart.btnMinus = document.getElementById('product-qnt-minus'); // Button minus
    addtocart.btnPlus = document.getElementById('product-qnt-plus'); // Button plus
    
    // Event Listeners : btn plus & minus
    addtocart.btnMinus.addEventListener('click', addtocart.qtyMinus); // On click Button minus
    addtocart.btnPlus.addEventListener('click', addtocart.qtyPlus); // On click Button plus

    // Init btnMinus & addtocart
    addtocart.btnMinus.classList.add('inactive');
    addtocart.addBtn.disabled = true;
    // Init the displayed quantity
    addtocart.currentQtyElmt.textContent = addtocart.currentQty;

    addtocart.cartItemsContainer = document.querySelector('.cart-opened__content');
    addtocart.addBtn.addEventListener('click', function() {
      if(addtocart.currentItemsInCartNumber < 1) {
        addtocart.cartItemsContainer.innerHTML = '';
      }
      addtocart.createItem();
      addtocart.addItem();
    });
   
  },
};
document.addEventListener('DOMContentLoaded', addtocart.init);