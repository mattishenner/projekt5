let options = {
    rootMargin: "0px",
    threshold: 1.0,
};

let isAnimating = false;

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !isAnimating) {
            isAnimating = true;

            /* Ternary operator - if/else shorthand */
            let animationClass = (entry.target.dataset.animationIndex % 2 === 0)
                ? "slide-in-left"
                : "slide-in-right";

            entry.target.classList.add(animationClass);
            isAnimating = false;
        }
    });
};

let observer = new IntersectionObserver(callback, options);
let target = document.querySelectorAll(".intersection");

target.forEach((t, index) => {
    t.dataset.animationIndex = index;
    observer.observe(t);
});