let options = {
    rootMargin: "0px",
    threshold: 0.1,
};

let isAnimating = false;

let callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !isAnimating) {
            isAnimating = true;

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