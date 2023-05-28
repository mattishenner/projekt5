// Hent 'popup-container' i dokument-objektet og gem det i variablen popupContainer
const popupContainer = document.querySelector(".popup-container");
// Samme som ovenover basically
const close = document.querySelector(".close-btn");

// Lav variabelen openForm som vi tilføjer en værdi til senere
let openForm;
// Hvis der findes et element med klassen 'cta-placeholder' i dokumentet (den findes kun på forsiden)
if (document.querySelector('.cta-placeholder')) {
    // Sæt openForm til at være alle elementer med klassen 'cta-btn' og 'cta-placeholder' (fordi at placeholder bruges som knap på mobil-versionen)
    openForm = document.querySelectorAll('.cta-btn, .cta-placeholder');
} else {
    // Ellers, sæt openForm til at være alle elementer med klassen 'cta-btn' (hvis vi er på en underside for at vi ikke får fejl, fordi at placeholder ikke findes)
    openForm = document.querySelectorAll('.cta-btn');
}

// Definér openFormFunction, der tilføjer class 'show' til popupContainer når den kaldes
function openFormFunction() {
    popupContainer.classList.add('show');
}

// For hver 'btn' i openForm - tilføj en click event listener, der kalder funktionen openFormFunction (som gør popupContainer synlig)

// Her bruger vi NodeList, som ligner en array i JavaScript, 
// men den er principielt ikke en array. 
// Man kan stadig bruge nogle metoder, der er almindelige med arrays på en NodeList, 
// som for eksempel forEach() metoden, der bruges til at iterere over 
// hver knap i NodeListen og tilføje en eventListener til hver knap. 
// Dette er essentielt det samme som at gå gennem hvert element i 
// en array med en for loop. 
// Dog har en NodeList ikke alle arraymetoder, såsom map, reduce eller filter.
openForm.forEach(btn => {
    btn.addEventListener('click', () => {
        openFormFunction();
    });
});

// Tilføj en click event listener til close knappen, der fjerner klassen 'show' fra popupContainer
close.addEventListener('click', function() {
    popupContainer.classList.remove('show');
});

// Tilføj en click event listener til hele vinduet, der fjerner klassen 'show' fra popupContainer
// hvis det element, der blev klikket på, er popupContainer
window.onclick = function(e) {
    if(e.target == popupContainer) {
        popupContainer.classList.remove('show');
    }
};


