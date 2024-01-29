window.addEventListener("DOMContentLoaded", function () {
    const navigation = document.querySelector(".navigation"),
        navLink = document.querySelectorAll(".nav-link"),
        menu = document.querySelector(".menu"),
        scrollTop_Btn = document.querySelector(".scrollTop-btn"),
        header = document.querySelector("header");

    // for scrolled events
    window.addEventListener("scroll", function () {
        // Change header section color
        header.classList.toggle("sticky", window.scrollY > 0);

        // add scroll top button and remove
        scrollTop_Btn.classList.toggle("active", window.scrollY > 400);

        // for animation contents
        const reveals = document.querySelectorAll(".reveal");

        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const contentTop = reveals[i].getBoundingClientRect().top;
            const revelPoint = 50;

            if (contentTop < windowHeight - revelPoint) {
                reveals[i].classList.add("active");
            }
            if (contentTop > windowHeight) {
                reveals[i].classList.remove("active");
            }
        }
    });

    // open end close menu section
    menu.addEventListener("click", function () {
        menu.classList.toggle("active");
        navigation.classList.toggle("active");
    });
    navLink.forEach((link) => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
            navigation.classList.remove("active");
        });
    });

    scrollTop_Btn.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
