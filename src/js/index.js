//IMPORT STYLE CSS
// import './style/scroll.css'
// import './style/main.scss'
// import './style/tailwind.css'


//IMPORT JS LIBRARY
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import LocomotiveScroll from 'locomotive-scroll';

//IMPORT SCRIPT FILES
import { bro } from './main'
import './mouse.js'


//DOM FUNCTION & ANIMATION
document.querySelector('h3').textContent = bro(`how it's going`)


//INIT SCROLL 
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

//SCROLL & GSAP WORK TOGETHER
scroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy('[data-scroll-container]', {
  scrollTop(value) {
    return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();



//ANIMATION

const rotate = gsap.timeline({
    scrollTrigger: {
        trigger: 'header',
        scroller: "[data-scroll-container]",
    scrub: true,
    start: "top 50%",
    end:"10000"
    },
})
rotate.to('.circle', {rotate: "360deg" })
    
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.sct2',
        scroller: "[data-scroll-container]",
    scrub: true,
    start: "top 50%"
    },
})
tl.to('.sct2', { background: "#ff2600", duration: 4 })
    .add(function () { console.log('Woohoo!') })
    .to('.sct2 h2', { autoAlpha: 0, duration: 4 })



import Highway from '@dogstudio/highway';
import Fade from './transition'

const H = new Highway.Core({  
  transitions: {
    default: Fade
  }
});


