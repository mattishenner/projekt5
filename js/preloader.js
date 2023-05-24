var animation = bodymovin.loadAnimation({
    container: document.getElementById('preloader-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/preloader.json'
  });

  window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader-container');
    preloader.style.display = 'none';
  });