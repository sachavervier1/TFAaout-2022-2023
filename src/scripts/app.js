'use strict'

import { gsap } from "gsap";

gsap.from(".topnav__el", { y: 20, opacity: 0, delay: 1 });
gsap.to(".topnav__el", { y: 0, opacity: 1, duration: 1, delay: 1 });

gsap.from("h1", { x: 100, opacity: 0, delay: 1.5 });
gsap.to("h1", { x: 0, opacity: 1, duration: 1, delay: 1.5 });


gsap.from(".header__bouton", { opacity: 0, delay: 2 });
gsap.to(".header__bouton", { opacity: 1, duration: 2, delay: 2 });

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 300;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


const menuburger = document.querySelector(".topnav__burger");
const menu = document.querySelector(".topnav");
const menuburgeroff = document.querySelector(".topnav__liste");
menuburger.addEventListener("click", function () {
    menu.classList.toggle("topnav--open");
});

menuburgeroff.addEventListener("click", function () {
    menu.classList.remove("topnav--open")
});