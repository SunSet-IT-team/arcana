import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';

const AnimatedElement = ({tag: Tag = 'span', children, className}) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const el = elementRef.current;

        if (!el) return;

        const target = el.querySelector('span') || el;

        const animation = gsap.timeline({paused: true});
        animation.from(target, {
            duration: 1,
            y: 200,
            opacity: 0,
            rotate: 15,
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animation.play();
                        observer.unobserve(entry.target);
                    }
                });
            },
            {threshold: 0.5}
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
            animation.kill();
        };
    }, []);

    return (
        <Tag ref={elementRef} className={className}>
            {children}
        </Tag>
    );
};

export default AnimatedElement;
