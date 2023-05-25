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
  var content = document.getElementById("content");

  // begin sliding up the preloader
  preloader.style.transform = 'translateY(-100%)';
  preloader.style.opacity = '0';

  // after the preloader has slid up, hide it and show the content
  setTimeout(function() {
    preloader.style.display = 'none';
    content.style.display = 'block';
  }, 1000); // match this to the transition duration in the CSS
}

setTimeout(function() {
  animation.play();
  setTimeout(showPage, 4000);
}, 0);
