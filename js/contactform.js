const openForm = document.querySelector('.cta-btn');
const popupContainer = document.querySelector(".popup-container");
const close = document.querySelector(".close-btn");

openForm.addEventListener('click', () => {
    popupContainer.classList.add('show');
});

close.addEventListener('click', function(){
    popupContainer.classList.remove('show');
});
