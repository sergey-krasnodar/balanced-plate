
const btnPhoneOpen = document.querySelector('.header__btn-phone'); 
const modalPhone = document.getElementById('modal'); 

btnPhoneOpen.addEventListener('click', () =>{
  modalPhone.showModal()
})
modalPhone.addEventListener('click', (e) => {
  if (e.target === modalPhone) modalPhone.close()
})

const btnDiscountOpen = document.querySelectorAll('.discount-btn'); 
const modalDiscount = document.querySelector('.modal-discount'); 

btnDiscountOpen.forEach(function (item) {
  item.addEventListener('click', () =>{
    modalDiscount.showModal()
  })
  modalDiscount.addEventListener('click', (e) => {
    console.log(e);
    if (e.target === modalDiscount) modalDiscount.close()
  })
})

import Swiper from 'swiper';
import 'swiper/css';
const swiper = new Swiper({
  
});



 
