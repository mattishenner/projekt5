let options = {
    rootMargin: "0px",
    threshold: 1.0,
};

let i = 0;
let callback = (entries, observer) => {
    entries.forEach((entry) => {
        i++
        if (entry.isIntersecting) {
            if (i % 2 == 0)
                entry.target.classList.add("slide-in-left")
            else entry.target.classList.add("slide-in-right")
        }
    });
};

let observer = new IntersectionObserver(callback, options);
let target = document.querySelectorAll(".intersection");

target.forEach(t => {
    observer.observe(t);
})