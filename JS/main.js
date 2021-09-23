
// selectors 
const mySections = document.querySelectorAll("section");
const myUl = document.querySelector("ul");


/* create navigation dynamically 
*  By using 'create element ' to create lists and links
*  and use apppendChild to add them to an empty ul 
*/

for(section of mySections){
    let myList = document.createElement("li");
    let myLink = document.createElement("a");
    myLink.textContent = section.dataset.nav;
    myList.appendChild(myLink);
    myUl.appendChild(myList);
}
 // adding new atribute to 'a'
let a = document.querySelectorAll("a");
a[0].setAttribute("data-link","section1") ;
a[1].setAttribute("data-link","section2") ;
a[2].setAttribute("data-link","section3") ;
a[3].setAttribute("data-link","section4") ;

// making loop in all links to achieve smooth scroll for page's sections 
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

// function to observe the section to specify which section on viewport

window.addEventListener("scroll", () => {
    let myPosition = "";
    mySections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop) {
        myPosition = section.getAttribute("id");
        }
    });
    // get actice link by using the id 
    // add active class to the class on viewport
    mySections.forEach((section) => {
        section.classList.remove("your-active-class");
        if (myPosition === section.getAttribute("id")) {
        document.getElementById(myPosition).classList.add("your-active-class");
        }
    });
    // add active link to section's link
    a.forEach((link) => {
        link.classList.remove("activeLink");
        if (myPosition === link.getAttribute("data-link")) {
        link.classList.add("activeLink");
        }
    });
});

/* creste button and append it sectio1
*  using create element and append child 
*  naming button 'Back to Top' using innerhtml 
*  making function to specify where button should appear ?
*  making function to achieve smooth scroll. 
*/
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