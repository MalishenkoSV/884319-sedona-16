
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var modalBlock = document.querySelector(".modal");
var modalBtn = document.querySelector(".btn--modal");
var formText = document.querySelector(".form__text");
var formBtn = document.querySelector(".btn__form");
var modalError = document.querySelector(".modal--error");
var errorBtn = document.querySelector(".btn--error");

navMain.classList.remove("main-nav--nojs");
navMain.classList.add("main-nav--closed");
navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});
if (formBtn) {
  formBtn.addEventListener("click", function() {
    modalBlock.classList.add("modal__closed");
  });
}

if (modalBtn) {
  modalBtn.addEventListener("click", function() {
    modalBlock.classList.add("modal__closed");
    modalBlock.classList.remove("modal__closed");
  });
}

if (errorBtn) {
  errorBtn.addEventListener("click", function() {
    modalError.classList.remove("modal__closed");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    navMain.classList.remove("main-nav--closed");
    modalBlock.classList.remove("modal__closed");
  }
});
