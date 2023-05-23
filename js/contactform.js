const openForm = document.getElementById('.cta-btn')
const popupContainer = document.querySelector(".popup-container");
const close = document.querySelector(".close-btn");

openForm.addEventListener('click', () => {
    popupContainer.classList.add('show');
});

close.addEventListener('click', function(){
    popupContainer.classList.remove('show');
});
