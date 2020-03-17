
var link = document.querySelector(".btn-contacts");

var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".close-modal");

var form = popup.querySelector("form");
var login = popup.querySelector("[name = username]");
var email = popup.querySelector("[name = email]");
var text = popup.querySelector("[name = textmail]");

var isStorageSupport = true;
var storage = "";
var emailStorage = "";

try {
  storage = localStorage.getItem("login");
  emailStorage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage && emailStorage) {
        login.value = storage;
        email.value = emailStorage;
        text.focus();
      } else if (storage) {
                login.value = storage;
                email.focus();
              } else {
                  login.focus();
                }
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !text.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
        login.style.background = "rgba(237, 181, 181, 0.5)";
        email.style.background = "rgba(237, 181, 181, 0.5)";
        text.style.background = "rgba(237, 181, 181, 0.5)";
    }
    else {
      if (isStorageSupport) {
          localStorage.setItem("login", login.value);
          localStorage.setItem("email", email.value);
        }
      }
  });


  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
    }
  }
  });
