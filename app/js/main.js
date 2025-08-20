
const btnOpen = document.querySelector('.header__btn-phone'); 
const modalPhone = document.getElementById('modal'); 

btnOpen.addEventListener('click', () =>{

  modalPhone.showModal()
})

modalPhone.addEventListener('click', (e) => {
  if (e.target === modalPhone) modalPhone.close()
})

 const liveDefs = document.querySelector('.program__live');
 const idLive = liveDefs.document.getElementById('live');

  console.log(idLive);
