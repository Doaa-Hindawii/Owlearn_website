const closeButton = document.querySelector(".nav-toggle"),
    navLinks = document.querySelector(".nav-links");

closeButton.addEventListener("click", function () {
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove("show");
    }
    else {
        navLinks.classList.add("show");
    }
});
