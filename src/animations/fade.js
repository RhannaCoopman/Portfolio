import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const elements = gsap.utils.toArray("[data-animation='fade-in']");

export const fadeInScrollTrigger = () => {
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
