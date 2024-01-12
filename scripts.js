const hamburger = document.querySelector(".hamburger");
const navbarLinks = document.querySelector(".navbar-links");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbarLinks.classList.toggle("active");    
    navbar.classList.toggle("active");
})

document.querySelectorAll(".navbar-link").forEach(n =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navbarLinks.classList.remove("active");        
        navbar.classList.remove("active");
    }))