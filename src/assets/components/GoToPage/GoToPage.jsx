import gsap from 'gsap';
import {useEffect, useRef} from 'react';
import {useDevice} from '../../hooks/useDevice'; // хук, который ты уже используешь

import './styles.scss';

function GoToPage() {
    const tl = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const loading = document.getElementById('loading');
        const wrapper = document.getElementById('loading-wrapper');

        if (!loading || !wrapper) return; // ⛔ элемент не найден — не играем

        tl.current = gsap.timeline({paused: true});

        tl.current.to(loading, {
            duration: 0.9,
            y: '-100%',
        });

        tl.current.to(wrapper, {
            duration: 2.5,
            x: '100%',
        });

        timeoutRef.current = setTimeout(() => {
            tl.current?.play();
        }, 1500);

        return () => {
            clearTimeout(timeoutRef.current);
            tl.current?.kill();
        };
    }, []);

    return (
        <div id="loading-wrapper">
            <div id="loading"></div>
        </div>
    );
}

export default GoToPage;
