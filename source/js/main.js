
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var modalBlock = document.querySelector('.modal');
var modalBtn = document.querySelector('.btn--modal');
var formText = document.querySelector('.form__text');
  navMain.classList.remove('main-nav--nojs');
  navMain.classList.add('main-nav--closed');
  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  formText.addEventListener('error', function() {
      modal.classList.add('btn--modal-closed');
  });

  modalBtn.addEventListener('click', function() {
      modal.classList.remove('main-nav--closed');
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      modal.classList.remove('main-nav--closed');
    }
  });
