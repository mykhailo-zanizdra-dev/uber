
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
  $(".header__menu li").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

window.addEventListener("DOMContentLoaded", function () {
  const makeRingBtn = document.querySelector(".submenu__btn");
  const makeRingPopUp = document.querySelector(".make-ring");
  const closePopUp = document.querySelector(".make-ring__form span");
  
    makeRingBtn.addEventListener("click", function() {
      makeRingPopUp.classList.toggle("_active");
    });
      closePopUp.addEventListener("click", function() {
        makeRingPopUp.classList.toggle("_active");
      });

});
