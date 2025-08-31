const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper1 = new Swiper(".swiper1", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
  navigation: {
    nextEl: ".ration-slider__btn-next",
    prevEl: ".ration-slider__btn-prev",
  },
});

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
    modalDiscount.showModal();
    document.body.style.overflow = "hidden";
  })
  modalDiscount.addEventListener('click', (e) => {
    if (e.target === modalDiscount) modalDiscount.close()
      document.body.style.overflow = "";
  })
})

const programItem = document.querySelectorAll('.program__item');
const modalProgram = document.querySelector('.modal-program');
const imgFiles = document.querySelectorAll('.modal-program__img-title');
const programTitle = document.querySelector('.modal-program__title');
const programKalory = document.querySelector('.modal-program__kalory');
const programText = document.querySelector('.modal-program__text');
const ration = document.querySelector('.ration');
const programButton = document.querySelectorAll('.modal-program__btn');
const programRate = document.getElementById('programRate');


programItem.forEach((item) => {
  item.addEventListener('click', () => {
    let idItem = item.getAttribute("id");
    if (idItem === 'life'){
      programTitle.textContent = 'Не хочу готовить';
      programKalory.textContent = '1500 ккл';
      programText.textContent = 'LIFE-программа калорийностью 1400-1500 в день сделана специально для активных и жизнерадостных пользователей!';
      programRate.textContent = '6 Приемов пищи';
    }
    if (idItem === 'sport'){
      programTitle.textContent = 'Для спортсменов';
      programKalory.textContent = '1800 - 2000 ккл';
      programText.textContent = 'SPORT-программа 1900-2000 калорий позволит вам всегда оставаться в хорошей форме!';
      programRate.textContent = '7 Приемов пищи';
    }
    if (idItem === 'vegetarian'){
      programTitle.textContent = 'Исключаем мясо';
      programKalory.textContent = '1200 - 1500 ккл';
      programText.textContent = 'VEGETARIAN-программа, рассчитана на 1200-1300 калорий, позволяет питаться легко и без мяса!';
      programRate.textContent = '6 Приемов пищи';
    }
    if (idItem === 'fit'){
      programTitle.textContent = 'Хочу похудеть';
      programKalory.textContent = '1800 - 2000 ккл';
      programText.textContent = 'FIT - программа, рассчитаная на 1200-1300 калорий, с повышенным содержанием белка, позволит вам быстро, вкусно и безопасно достичь результата!';
      programRate.textContent = '5 Приемов пищи';
    }
    if (idItem === 'health'){
      programTitle.textContent = 'Нужна особая диета';
      programKalory.textContent = '';
      programText.textContent = 'HEATH-программа, разделенная на 15 диет, подбирается индивидуально в зависимости от болезни';
      programRate.textContent = '6 Приемов пищи';
    }
    if (idItem === 'detox'){
      programTitle.textContent = 'Чистим организм';
      programKalory.textContent = '';
      programText.innerHTML = `DETOX - рацион программы рассчитан на 1500 ккал в соотношении белков, жиров, углеводов.
      
      Те, кто предпочитает здоровый образ жизни, могут придерживаться этой диеты, которая позволит им есть вкусную и разнообразную пищу, не набирая вес.`;
      programRate.textContent = '3 Приема пищи';
    }
    
    document.querySelector('.modal-program__img-title').setAttribute('src', `images/modal/${idItem}.svg`);
    document.querySelector('.modal-program__img').setAttribute('src',`images/program/${idItem}.svg`);
    modalProgram.showModal();
  })
})

modalProgram.addEventListener('click', (e) => {
  if  (e.target === modalProgram) modalProgram.close();})
    programButton.forEach(item => {
    item.addEventListener('click',()=>{
      modalProgram.close();
      if (item.getAttribute('id')==='ration'){
        ration.scrollIntoView();
      }
    })
  });


let btnQuest = document.querySelectorAll('[data-btn-questions]');
let questionsAccordion = document.querySelectorAll('.questions__accordion');


btnQuest.forEach((item) =>{
  item.addEventListener('click', () => {
    document.querySelector('.questions__btn--active').classList.remove('questions__btn--active');
    item.classList.add('questions__btn--active');
    questionsAccordion.forEach((elem) => {
      elem.classList.add('hidden');
    })
    let btnAttr = item.dataset.btnQuestions;
    let openWin = document.querySelector(`#${btnAttr}`);
    openWin.classList.remove('hidden');
  })
})

const modalMenu = document.querySelector('.modal-menu');
const btnModalMenu = document.querySelector('.modal-program__btn-menu');
const btnModalMenuClose = document.querySelector('.modal-menu__close');

btnModalMenu.addEventListener('click', ()=>{
  modalMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
  window.scrollTo({top: 0});
})
btnModalMenuClose.addEventListener('click', () => {
  modalMenu.classList.remove('active');
  document.body.style.overflow = '';
  })







  











