const nav = document.querySelector("nav");

//active link styling
const currentPage = window.location.pathname;

//array til nav items
let navItems = [
    {title: "Priser", path: "/price.html"},
    {title: "Om os", path: "/om-os.html"}
];


//opret logo
let logo = document.createElement("a");

logo.href = "/index.html";
logo.classList.add("logo");
logo.textContent = "KISS & Co.";

nav.appendChild(logo);


//opret container til nav-items

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
let buttonLi = document.createElement("li");
let button = document.createElement("button");

buttonLi.appendChild(button);


button.textContent = "Kontakt os";
button.classList.add("cta-btn");

ul.appendChild(buttonLi);


//menu icon
let openMenuIcon = document.createElement("div");
openMenuIcon.classList.add("open-menu-icon");

let iconSpan = document.createElement("span");
iconSpan.classList.add("icon-line");


let iconSpan2 = document.createElement("span");
iconSpan2.classList.add("icon-line");


openMenuIcon.appendChild(iconSpan);
openMenuIcon.appendChild(iconSpan2);

nav.appendChild(openMenuIcon);


openMenuIcon.addEventListener("click", handleMenuClick);

function handleMenuClick() {
    ul.classList.toggle("open-menu");
    iconSpan.classList.toggle("close");
    iconSpan2.classList.toggle("close");
}