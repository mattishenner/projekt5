const init = () => {
    const anchors = document.querySelectorAll('a:not(.no-transition)');
    const transitionEl = document.querySelector('.transition-element');
  
    setTimeout(() => {
      transitionEl.classList.remove('is-transitioning');
    }, 300);
  
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
  
      anchor.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target.href;
  
        transitionEl.classList.add('is-transitioning');
  
        setTimeout(() => {
          window.location.href = target;
        }, 300);
      })
    }
  }
  init();
  