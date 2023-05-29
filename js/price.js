let options = {
    rootMargin: "0px",
    threshold: 0.1,
};



function callback (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let animationClass = (entry.target.dataset.animationIndex % 2 === 0)
                ? "slide-in-left"
                : "slide-in-right";

            entry.target.classList.add(animationClass);
        }
    });
};

let observer = new IntersectionObserver(callback, options);
let elements = document.querySelectorAll(".intersection");

elements.forEach((element, index) => {
    element.dataset.animationIndex = index;
    observer.observe(element);
});