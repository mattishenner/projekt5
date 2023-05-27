var container = document.getElementById("lottie-container");

var animation = lottie.loadAnimation({
  container: container,
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "js/preloader.json"
});

function showPage() {
  var preloader = document.getElementById("preloader");
  var content = document.getElementById("preloader-content");

  // Slide up and fade out the preloader
  preloader.style.transform = 'translateY(-100%)';
  preloader.style.opacity = '0';

  // After the preloader has slid up, hide it and show the content
  setTimeout(function() {
    preloader.style.display = 'none';
    content.style.display = 'block';
  }, 1000); // Wait 1 second (should match transition in CSS)
}

if (!sessionStorage.getItem('alreadyLoaded')) {
  sessionStorage.setItem('alreadyLoaded', 'true');
  setTimeout(function() {
    animation.play();
    setTimeout(showPage, 3500);
  }, 0);
} else {
  var preloader = document.getElementById("preloader");
  var content = document.getElementById("preloader-content");
  preloader.style.display = 'none';
  content.style.display = 'block';
}
