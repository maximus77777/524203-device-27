
var link = document.querySelector('.map a');

var map = document.querySelector('.modal-map');
var close = map.querySelector('.close-modal');



link.addEventListener('click', function(evt) {
  evt.preventDefault();
  map.classList.add('modal-show');
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  map.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map.classList.contains("modal-show")) {
      map.classList.remove("modal-show");
    }
  }
});
