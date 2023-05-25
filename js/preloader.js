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

  preloader.style.display = "none";

  content.style.display = "block";
}

setTimeout(function() {
  animation.play();
  setTimeout(showPage, 3200);
}, 0);