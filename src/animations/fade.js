import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);


export const fadeInScrollTrigger = () => {
    const elements = gsap.utils.toArray("[data-animation='fade-in']");

    if (elements) {
        elements.forEach(el =>
            gsap.from(el, {
                opacity: 0,
                y: '10px',
                duration: 2,
                scrollTrigger: {
                    trigger: el,
                    start: "center 100%",
                    toggleActions: "play none none reverse",
                }
            }
            )
        )
    }
};

export const fadeInScrollTriggerStagger = () => {
    const elements = gsap.utils.toArray("[data-animation='fade-in-stagger']");
  
    if (elements) {
      gsap.from(elements, {
        opacity: 0,
        y: '20px',
        duration: 2,
        scrollTrigger: {
          trigger: elements[0], // Start the animation when the first element is in the viewport.
          start: "center 100%",
          toggleActions: "play none none reverse",
        },
        scrub: true,
        stagger: 0.2, // Adjust the stagger value to control the timing between each element.
      });
    }
  };

  export const fadeSideScrollTriggerStagger = () => {
    const elements = gsap.utils.toArray("[data-animation='fade-side-stagger']");
  
    if (elements) {
      gsap.from(elements, {
        opacity: 0,
        x: '50px',
        duration: 2,
        scrollTrigger: {
          trigger: elements[0], // Start the animation when the first element is in the viewport.
          start: "center 100%",
          toggleActions: "play none none reverse",
        },
        scrub: true,
        stagger: 0.2, // Adjust the stagger value to control the timing between each element.
      });
    }
  };

const semiFadeElements = gsap.utils.toArray("#hoverSemiFadeElement");

export const semiFadeAnimation = () => {
    if (semiFadeElements) {
        semiFadeElements.forEach(el =>
            gsap.to(el, {
                opacity: 0.5,
                duration: 1,
            }
            )
        )
    }
};


export const semiAppearAnimation = () => {
    if (semiFadeElements) {
        semiFadeElements.forEach(el =>
            gsap.to(el, {
                opacity: 1,
                duration: 1,
            }
            )
        )
    }
};
