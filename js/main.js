const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__mobile');
const closeBtn = document.querySelector('.header__mobile-btn--button');
const curtain = document.querySelector('.curtain');

hamburger.addEventListener('click', (e) => {
    menu.classList.add('header__mobile--on');
    curtain.classList.add('curtain--on')
})

closeBtn.addEventListener('click', () => {
  menu.classList.remove('header__mobile--on')
  curtain.classList.remove('curtain--on')
})



const hambur = document.querySelector('.ham-menu');
const mobmenu = document.querySelector('.header__mobile320');
const closBtn = document.querySelector('.header__mobile320-btn--button');


hambur.addEventListener('click', (e) => {
    mobmenu.classList.add('header__mobile320--on');
   
})

closBtn.addEventListener('click', () => {
    mobmenu.classList.remove('header__mobile320--on')

})