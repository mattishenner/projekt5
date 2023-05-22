const ctaBtn = document.querySelector('.cta-btn');
const ctaPlaceholder = document.querySelector('.cta-placeholder');

function setButtonPosition() {
  let rect = ctaPlaceholder.getBoundingClientRect();
  ctaBtn.style.top = rect.top + "px";
}

let transitionTimeout;

window.addEventListener('scroll', function() {
  clearTimeout(transitionTimeout);

  // Hvis vi er scrollet længere ned end 1/3 af vinduet 
  // Tilføj .scrolled & .transition class
  if (window.scrollY > window.innerHeight / 3) {
    ctaBtn.classList.add('scrolled');
    ctaBtn.style.top = 0+"px";
    ctaBtn.classList.add('transition');
  } else {
    ctaBtn.classList.remove('scrolled');
    setButtonPosition();

    // Fjern transition class efter 750ms
    transitionTimeout = setTimeout(function() {
      ctaBtn.classList.remove('transition');
    }, 750);
  }
});

window.addEventListener('resize', setButtonPosition);
setButtonPosition();
