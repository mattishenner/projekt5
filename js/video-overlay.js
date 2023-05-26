const playBtn = document.querySelector('.btn-play');
const mobilePlayBtn = document.querySelector('.mobile-play');
const vidOverlay = document.querySelector('.video-overlay');
const vidEl = document.querySelector('.video-el');


playBtn.addEventListener('click', () => {
    vidOverlay.classList.add('show');
});

mobilePlayBtn.addEventListener('click', () => {
    vidOverlay.classList.add('show');
});

vidOverlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('video-overlay')) {
        vidOverlay.classList.remove('show');
        vidEl.pause();
    }
});