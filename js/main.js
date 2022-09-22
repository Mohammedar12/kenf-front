let menuBar = document.querySelector(".menu-bar");
let menuList = document.querySelector(".menu-mob");

// transBg this to close menu and search bar

let transBg = document.createElement("div");
transBg.className = "trans-bg";
transBg.innerHTML = "";
document.body.appendChild(transBg);

menuBar.addEventListener("click", (e) => {
  menuList.classList.add("menu-mob-show");
  transBg.style.display = "block";
});
transBg.addEventListener("click", (e) => {
  menuList.classList.remove("menu-mob-show");
  transBg.style.display = "none";
});

// search box

let searchBox = document.querySelector(".search-box");
let searchInput = document.querySelector(".search");

searchBox.addEventListener("click", (e) => {
  searchInput.classList.add("focused");
  transBg.style.display = "block";
});

transBg.addEventListener("click", (e) => {
  searchInput.classList.remove("focused");
  transBg.style.display = "none";
});

// login madal

let loginModal = document.querySelector("#staticBackdrop");
let loginTitle = document.querySelector(".login-title");
let fieldEmail = document.querySelector(".field-email");
let fieldPhone = document.querySelector(".field-phone");
let modalFooter = document.querySelector(".modal-footer");
let countryCodes = document.querySelector(".iti--allow-dropdown ");
let verificationeMail = document.querySelector(".verification-email");
let verificationePhone = document.querySelector(".verification-phone");

function showEmail() {
  loginTitle.classList.add("hide-this");
  fieldEmail.classList.add("show-this-block");
  modalFooter.classList.add("hide-this");
}

function showPhone() {
  loginTitle.classList.add("hide-this");
  fieldPhone.classList.add("show-this-block");
  modalFooter.classList.add("hide-this");
}

function showEmailCode() {
  verificationeMail.classList.add("show-this-flex");
}

function showPhoneCode() {
  verificationePhone.classList.add("show-this-flex");
}

function restAll() {
  loginTitle.classList.remove("hide-this");
  fieldEmail.classList.remove("show-this-block");
  fieldPhone.classList.remove("show-this-block");
  modalFooter.classList.remove("hide-this");
  verificationeMail.classList.remove("show-this-flex");
  verificationePhone.classList.remove("show-this-flex");
}

// country codes 

$(function() {
  $("#country").change(function() {
    let countryCode = $(this).find('option:selected').data('country-code');
    let value = "+" + $(this).val();
    $('#txtPhone').val(value).intlTelInput("setCountry", countryCode);
  });
  
  var code = "+966";
  $('#txtPhone').val(code).intlTelInput();
});

