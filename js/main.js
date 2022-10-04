let menuBar = document.querySelector(".bar");
let menuList = document.querySelector(".menu-mob");

// transBg this to close menu and search bar

let transBg = document.createElement("div");
transBg.className = "trans-bg";
transBg.innerHTML = "";
document.body.appendChild(transBg);
transBg.style.display = "none";

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

var input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function (callback) {
    $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
      var countryCode = resp && resp.country ? resp.country : "us";
      callback(countryCode);
    });
  },
  utilsScript: "../../build/js/utils.js", // just for formatting/placeholders etc
});

// centering the kenf collection

window.addEventListener("load", () => {
  let scrollElement = document.querySelector(".scroll-bar-center");
  scrollElement.scrollLeft =
    (scrollElement.scrollWidth - scrollElement.clientWidth) / 2;
});

// change input upload photo to the uploaded photo

let inputUpload = document.querySelector(".Ticket_form .upload #file");
let labelPhoto = document.querySelector(".Ticket_form .upload img");
let spanlInput = document.querySelector(".Ticket_form .upload span");

inputUpload.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const result = reader.result;
      labelPhoto.src = result;
    });
    reader.readAsDataURL(file);
  }
  spanlInput.textContent = "change image";
});

// review tickets

let review = document.querySelectorAll("#review");
let ticketReview = document.querySelector(".ticket-review .ticket-modal");
let backDrop = document.querySelector(".back-drop");
let closeReview = document.querySelector(".ticket-review #close-review");

// review.addEventListener("click", () => {
//   console.log("d");
//   ticketReview.style.display = "block";
// });

review.forEach((ticket) => {
  ticket.addEventListener("click", () => {
    ticketReview.style.display = "block";
    backDrop.style.display = "block";
    scrollTo(top);
  });
});

backDrop.addEventListener("click", () => {
  ticketReview.style.display = "none";
  backDrop.style.display = "none";
});

closeReview.addEventListener("click", () => {
  ticketReview.style.display = "none";
  backDrop.style.display = "none";
});

let answered = document.querySelectorAll("#answered");
let ticketAnswered = document.querySelector(".ticket-answered .ticket-modal");
let closeAnswered = document.querySelector(".ticket-answered #close-answered");

answered.forEach((ticket) => {
  ticket.addEventListener("click", () => {
    ticketAnswered.style.display = "block";
    backDrop.style.display = "block";
    scrollTo(top);
  });
});

backDrop.addEventListener("click", () => {
  ticketAnswered.style.display = "none";
  backDrop.style.display = "none";
});

closeAnswered.addEventListener("click", () => {
  ticketAnswered.style.display = "none";
  backDrop.style.display = "none";
});
