function toggleMenu() {

    const nav = document.querySelector("nav");

    nav.classList.toggle("show");

}

document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        const nav = document.querySelector("nav");

        nav.classList.remove("show");

    });

});
