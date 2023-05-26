
let openForm;

if (document.querySelector('.cta-placeholder')) {
    openForm = document.querySelectorAll('.cta-btn, .cta-placeholder');
} else {
    openForm = document.querySelectorAll('.cta-btn');
}

const popupContainer = document.querySelector(".popup-container");
const close = document.querySelector(".close-btn");

function openFormFunction() {
    popupContainer.classList.add('show');
}

openForm.forEach(btn => {
    btn.addEventListener('click', () => {
        openFormFunction();
    });
});

close.addEventListener('click', function() {
    popupContainer.classList.remove('show');
});

window.onclick = function(e) {
    if(e.target == popupContainer) {
        popupContainer.classList.remove('show');
    }
};
