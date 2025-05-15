import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import {useDevice} from './useDevice';

const FooterAnimation = () => {
    const tl = useRef(null);
    const {isNotDesktop} = useDevice();

    useEffect(() => {
        if (isNotDesktop) return;

        const topEl = document.querySelector('.footer__wrapper .footer__top');
        const privacy = document.querySelector('.footer__privacy-button');
        const menu = document.querySelector('.footer__menu-link');
        const contact = document.querySelector('.footer__contact-link');

        if (!topEl || !privacy || !menu || !contact) return;

        tl.current = gsap.timeline({paused: true});

        tl.current.from(topEl, {
            duration: 1,
            x: '-100%',
        });

        tl.current.from([privacy, menu, contact], {
            duration: 1,
            stagger: {
                amount: 0.5,
            },
            y: '500%',
            rotate: '10deg',
        });
    }, [isNotDesktop]);

    useEffect(() => {
        if (isNotDesktop || !tl.current) return;

        const onEntry = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    tl.current.play();
                }
            });
        };

        const observer = new IntersectionObserver(onEntry, {
            threshold: 0.25,
        });

        const el = document.querySelector('.footer-animation');
        if (el) observer.observe(el);

        return () => observer.disconnect();
    }, [isNotDesktop]);

    return null;
};

export default FooterAnimation;
