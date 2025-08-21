
const btnOpen = document.querySelector('.header__btn-phone'); 
const modalPhone = document.getElementById('modal'); 

btnOpen.addEventListener('click', () =>{

  modalPhone.showModal()
})

modalPhone.addEventListener('click', (e) => {
  if (e.target === modalPhone) modalPhone.close()
})

 
