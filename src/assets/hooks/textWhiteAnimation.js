import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

export function useTextAnimation(textElement) {
    setTimeout(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            '.about__box .about__box-text .line-wrapper .word',
            {color: '#717171'},
            {
                color: '#ffffff',
                stagger: 0.4,
                scrollTrigger: {
                    trigger: '.about__box .word',
                    scrub: 5,
                },
            }
        );
    }, 500);

    return;
}
