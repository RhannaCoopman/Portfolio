import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const elementsDown = gsap.utils.toArray("[data-animation='appear_down']");

export const appear_down = () => {
    if (elementsDown) {
        elementsDown.forEach( ()=>
            gsap.to('[data-animation="appear_down"] div div', {
                y: '20rem',
                duration: 2,
                stagger: {
                    amount: 0.3,
                },

            }
            )
        )
    }
};

const elementsDownTl = gsap.utils.toArray("[data-animation='appear_down_tl']");

export const appear_down_tl = () => {
    if (elementsDownTl) {
        elementsDownTl.forEach( ()=>
            gsap.to('[data-animation="appear_down_tl"] div div', {
                y: '20rem',
                duration: 2,
                stagger: {
                    amount: 0.3,
                },
            }
            )
        )
    }
};

const appearElements = gsap.utils.toArray("[data-animation='appear_to_right']");

export const appear_to_right = () => {
    if (appearElements) {
        appearElements.forEach(el =>
            gsap.from(el, {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 3,
                scrollTrigger: {
                    trigger: el,
                    start: "center 100%",
                }
            }
            )
        )
    }
};

export function animateTextGradient() {
    const gradientTexts = gsap.utils.toArray(".gradient-text");
  
    gradientTexts.forEach((element) => {
      gsap.to(element, {
        color: "#80D6BD", // Change to your ending color
        scrollTrigger: {
          trigger: element,
          start: "top 25%",
          scrub: true,
        },
      });
    });
  }