'use strict'

import { gsap } from "gsap";

gsap.from(".topnav__el", { y: 25, rotateX: 45, opacity: 0 });
gsap.to(".topnav__el", { y: 0, rotateX: 0, opacity: 1, duration: 1.5 });

gsap.from("h1", { x: 1000, opacity: -0.4, delay: 1, });
gsap.to("h1", { opacity: 1, duration: 4 });
gsap.to("h1", { y: 0, duration: 5 });

gsap.from(".header__bouton", { opacity: 0, delay: 2 });
gsap.to(".header__bouton", { opacity: 1, duration: 2, delay: 2 })
