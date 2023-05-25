var container = document.getElementById("lottie-container");

var animation = lottie.loadAnimation({
  container: container,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "js/preloader.json"
});

function showPage() {
  var preloader = document.getElementById("preloader");
  var content = document.getElementById("preloader-content");

  // Lad preloaderen slide op og fade ud
  preloader.style.transform = 'translateY(-100%)';
  preloader.style.opacity = '0';

  // Efter preloaderen er væk, vis indhold og skjul preloader
  setTimeout(function() {
    preloader.style.display = 'none';
    content.style.display = 'block';
  }, 1000); // Vent 1 sekund (skal matche transition i CSS)
}

setTimeout(function() {
  animation.play();
  setTimeout(showPage, 3500);
}, 0);
