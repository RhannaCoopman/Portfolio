import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const zoomOutElements = gsap.utils.toArray("[data-animation='zoom_out']");

export const zoom_out = () => {
    if (zoomOutElements) {
        zoomOutElements.forEach(el =>
            gsap.to(el, {
                scale: '1.3',
                duration: 2,
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    scrub: true,
                },
            }
            )
        )
    }
};
const zoomInElements = gsap.utils.toArray("[data-animation='zoom_in']");

export const zoom_in = () => {
    if (zoomInElements) {
        zoomInElements.forEach(el =>
            gsap.from(el, {
                scale: '1.1',
                duration: 2,
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    scrub: true,
                },
            }
            )
        )
    }
};


const zoomInElementsTl = gsap.utils.toArray("[data-animation='zoom_in_tl']");

export const zoom_in_tl = () => {
    if (zoomInElementsTl) {
        zoomInElementsTl.forEach(el =>
            gsap.from(el, {
                scale: '1.1',
                duration: 2,
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                },
            }
            )
        )
    }
};

const zoomInAndStayElements = gsap.utils.toArray("[data-animation='zoom_in_and_stay']");

export const zoom_in_and_stay = () => {
    if (zoomInAndStayElements) {
        zoomInAndStayElements.forEach(el =>
            gsap.from(el, {
                scale: '1.1',
                duration: 2,
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    scrub: true,
                },
            }
            )
        )
    }
};