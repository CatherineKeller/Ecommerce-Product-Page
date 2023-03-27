const header = {
  toggleMenu: function(){
    header.menu.classList.toggle('menu-active');
  },
  init: function(){
    header.menu = document.getElementById('menu'); // Menu button
    
    // On menu btn
    header.menu.addEventListener('click', header.toggleMenu);
  },
};
document.addEventListener('DOMContentLoaded', header.init);