
const btnPhoneOpen = document.querySelector('.header__btn-phone');
const modalPhone = document.getElementById('modal');

btnPhoneOpen.addEventListener('click', () => {
  modalPhone.showModal()
})
modalPhone.addEventListener('click', (e) => {
  if (e.target === modalPhone) modalPhone.close()
})

const btnDiscountOpen = document.querySelectorAll('.discount-btn');
const modalDiscount = document.querySelector('.modal-discount');

btnDiscountOpen.forEach(function (item) {
  item.addEventListener('click', () => {
    modalDiscount.showModal()
  })
  modalDiscount.addEventListener('click', (e) => {
    if (e.target === modalDiscount) modalDiscount.close()
  })
})

const programItem = document.querySelectorAll('.program__item');
const modalProgram = document.querySelector('.modal-program');
let imgFiles = document.querySelectorAll('.modal-program__img-title');

programItem.forEach((item) => {
  item.addEventListener('click', () => {
    let idItem = item.getAttribute("id");
    imgFiles.forEach((it) => {
      imgFile = it.getAttribute('src');
    })
    imgFile = `images/modal/${idItem}.svg`
    document.querySelector('.modal-program__img-title').setAttribute('src', `../${imgFile}`);

    console.log();
    console.log(idItem);
    
    modalProgram.showModal();

  })




   modalProgram.addEventListener('click', (e) => {
    if (e.target === modalProgram) modalProgram.close()
  })
})








