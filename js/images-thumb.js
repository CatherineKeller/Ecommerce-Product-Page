const thumbs = {
  imgThumbCurrent: null,
  handleImgThumb: function(event){
    const imgThumb = event.currentTarget; // image sélectionnée
    thumbs.imgThumbCurrent = imgThumb.dataset.image; // récup id de l'image sélectionnée
    for (const imgThumb of thumbs.imgThumbs) {
      imgThumb.parentNode.classList.remove('image-active'); // init classes
    }
    imgThumb.parentNode.classList.add('image-active'); // add active
    thumbs.mainImage.src = `images/image-product-${thumbs.imgThumbCurrent}.jpg`; // ajouter l'image sélectionnée
  },
  init: function(){
    thumbs.mainImage = document.querySelector('.product__image-main img'); // image principale
    thumbs.imgThumbs = document.querySelectorAll('.product__image-thumbs-container img'); // tableau thumbs containers
    // for (const imgThumb of thumbs.imgThumbs) {
    //   imgThumb.addEventListener('click', thumbs.handleImgThumb); // ajout écouteur onclick sur thumb
    // }
    thumbs.imgThumbs.forEach(imgThumb => {
      imgThumb.addEventListener('click', thumbs.handleImgThumb); // ajout écouteur onclick sur thumb
    });
  },
};
document.addEventListener('DOMContentLoaded', thumbs.init);