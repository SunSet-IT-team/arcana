import {useEffect, useRef} from 'react';
import gsap from 'gsap';

const AnimatedCursor = () => {
    const cursorRef = useRef(null);
    const auraRef = useRef(null);

    useEffect(() => {
        if (window.innerWidth < 768 || !auraRef?.current || !cursorRef?.current)
            return;

        const links = document.querySelectorAll('a');
        const buttons = document.querySelectorAll('button');

        let mouseX = 0;
        let mouseY = 0;
        let posX = 0;
        let posY = 0;

        const mouseMoveHandler = (e) => {
            mouseX = e.pageX;
            mouseY = e.pageY;
            cursorRef.current.classList.remove('hidden');
            auraRef.current.classList.remove('hidden');
        };

        const hideCursor = () => {
            cursorRef.current.classList.add('hidden');
            auraRef.current.classList.add('hidden');
        };

        const showCursor = () => {
            cursorRef.current.classList.add('hidden');
            auraRef.current.classList.add('hidden');
        };

        const addHoverListeners = (elements) => {
            elements.forEach((el) => {
                el.addEventListener('mouseover', hideCursor);
                el.addEventListener('mouseout', showCursor);
            });
        };

        document.addEventListener('mousemove', mouseMoveHandler);

        let animationFrameId;

        const animate = () => {
            posX += (mouseX - posX) / 5;
            posY += (mouseY - posY) / 5;

            gsap.set(cursorRef.current, {left: mouseX, top: mouseY});
            gsap.set(auraRef.current, {left: posX - 24, top: posY - 24});

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        addHoverListeners(links);
        addHoverListeners(buttons);
        document.addEventListener('mouseout', hideCursor);

        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseout', hideCursor);
            cancelAnimationFrame(animationFrameId);
        };
    }, [auraRef, cursorRef]);

    return (
        <>
            <div ref={cursorRef} className="cursor"></div>
            <div ref={auraRef} className="aura"></div>
        </>
    );
};

export default AnimatedCursor;
