const nav = document.querySelector("nav");

//active link styling
const currentPage = window.location.pathname;
console.log(currentPage)

//array til nav items
let navItems = [
    {title: "Priser", path: "/price.html"},
    {title: "Om os", path: "/om-os.html"},
];


//opret logo
let logo = document.createElement("a");

logo.href = "/index.html";
logo.classList.add("logo");
logo.textContent = "KISS & Co.";

nav.appendChild(logo);


//opret ul
let ul = document.createElement("ul");
//i hver iteration af loopet, laves et list item med et anchor tag
navItems.forEach((navItem) => {
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.textContent = navItem.title;
    a.href = navItem.path;
    
    li.appendChild(a);
    ul.appendChild(li);

    if (navItem.path === (`${currentPage}`)){
        a.classList.add("active");
    }
})

nav.appendChild(ul);


//button
let button = document.createElement("button");

button.textContent = "Kontakt os";
button.classList.add("cta-btn");

nav.appendChild(button);


//margin
let marginDiv = document.createElement("div");
marginDiv.classList.add("nav-marg");
nav.appendChild(marginDiv);


