
var link = document.querySelector('.btn-contacts');

var popup = document.querySelector('.modal-login');
var close = popup.querySelector('.close-modal');

var form = popup.querySelector('form');
var login = popup.querySelector('input[name = "username"]');
var email = popup.querySelector('input[name = "email"]');
var text = popup.querySelector('textarea[name = "textmail"]');

var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("username");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');

    if (storage) {
      username.value = storage;
      email.focus();
    } else {
      username.focus();
    }
  });

  close.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!username.value || !email.value || !text.value) {
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
          localStorage.setItem("username", username.value);
        }
      }
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
    }
  }
  });
