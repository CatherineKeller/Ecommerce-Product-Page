const header = {
  toggleMenu: function(){
    header.menu.classList.toggle('menu-active');
    header.overlay.classList.toggle('active');
  },
  init: function(){
    header.menu = document.getElementById('menu'); // Menu button
    header.overlay = document.getElementById('overlay');
    
    // On menu btn
    header.menu.addEventListener('click', header.toggleMenu);
  },
};
document.addEventListener('DOMContentLoaded', header.init);