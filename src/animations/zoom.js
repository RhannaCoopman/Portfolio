import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Define your animation functions
export const zoomIn = (element) => {
  gsap.from(element, {
    scale: '1.3',
    duration: 2,
    scrollTrigger: {
      trigger: element,
      start: 'top 90%',
      scrub: true,
    },
  });
};

