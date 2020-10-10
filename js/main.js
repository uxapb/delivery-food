const modalClose = document.querySelector('#modal-close');
const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
function toggleModal(){
   modal.classList.toggle("modal--active");
}
cartButton.addEventListener('click', toggleModal);
modalClose.addEventListener('click', toggleModal);
new WOW().init();