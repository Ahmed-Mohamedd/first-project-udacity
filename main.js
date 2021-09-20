const mySections = document.querySelectorAll("section");
const myUl = document.querySelector("ul");






for(section of mySections){
    let myList = document.createElement("li");
    let myLink = document.createElement("a");
    myLink.textContent = section.dataset.nav;
    myList.appendChild(myLink);
    myUl.appendChild(myList);
}
let a = document.querySelectorAll("a");
a[0].setAttribute("data-link","section1") ;
a[1].setAttribute("data-link","section2") ;
a[2].setAttribute("data-link","section3") ;
a[3].setAttribute("data-link","section4") ;

a.forEach((link) => {
    link.addEventListener("click", function () {
        const element = document.getElementById(link.getAttribute("data-link"));
        element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        });
    });
});

window.addEventListener("scroll", () => {
    let myPosition = "";
    mySections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop) {
        myPosition = section.getAttribute("id");
        }
    });
    mySections.forEach((section) => {
        section.classList.remove("your-active-class");
        if (myPosition === section.getAttribute("id")) {
        document.getElementById(myPosition).classList.add("your-active-class");
        }
    });
    a.forEach((link) => {
        link.classList.remove("activeLink");
        if (myPosition === link.getAttribute("data-link")) {
        link.classList.add("activeLink");
        }
    });
});

document
    .getElementById("section1")
    .appendChild(document.createElement("button"));
const myButton = document.querySelector("button");

myButton.innerHTML = "Back to Top";
myButton.classList.add("btn");
window.onscroll = () => {
    if (window.pageYOffset >= 500) {
        myButton.classList.add("btn-show");
    } else {
        myButton.classList.remove("btn-show");
    }
};
document.querySelector("main header").setAttribute("id", "header");

myButton.addEventListener("click", () => {
    document.getElementById("header").scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "end",
    });
});