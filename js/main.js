// menu mob

let menuBar = document.querySelector(".menu-bar");
let menuList = document.querySelector(".menu-mob");

menuBar.onclick = function () {
  if (menuList.classList.contains("menu-mob-hide")) {
    menuList.classList.replace("menu-mob-hide", "menu-mob-show");
  } else {
    menuList.classList.replace("menu-mob-show", "menu-mob-hide");
  }
};

// document.addEventListener("DOMContentLoaded", function () {
//   var stream = document.querySelector(".gallery__stream");
//   var items = document.querySelectorAll(".gallery__item");
//   var timeChange = 7000;

//   var prev = document.querySelector(".gallery__prev");
//   prev.addEventListener("click", function () {
//     stream.insertBefore(items[items.length - 1], items[0]);
//     items = document.querySelectorAll(".gallery__item");
//   });

//   let timeGallery = setInterval(function () {
//     var next = document.querySelector(".gallery__next");
//     stream.appendChild(items[0]);
//     items = document.querySelectorAll(".gallery__item");
//   }, timeChange);

//   var next = document.querySelector(".gallery__next");
//   next.addEventListener("click", function () {
//     stream.appendChild(items[0]);
//     items = document.querySelectorAll(".gallery__item");
//   });
// });

let scrollCenter = document.querySelector(".scroll-bar-center");
let innerDiv = document.querySelector(".scroll-bar-center > imgs");

scrollCenter.scrollLeft((innerDiv.width() - scrollCenter.width()) / 2);


