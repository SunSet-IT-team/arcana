import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useEffect} from 'react';

export function useTextAnimation(textElement) {
    useEffect(() => {
        if (!textElement) return undefined;

        gsap.registerPlugin(ScrollTrigger);
        const words = [...textElement.querySelectorAll('.word')];

        if (!words.length) return undefined;

        const applyProgress = (progress) => {
            const activeCount = Math.round(progress * words.length);

            words.forEach((word, index) => {
                word.style.color =
                    index < activeCount ? '#ffffff' : '#717171';
            });
        };

        const trigger = ScrollTrigger.create({
            trigger: textElement,
            start: 'top center',
            end: 'bottom center',
            invalidateOnRefresh: true,
            onRefresh: ({progress}) => applyProgress(progress),
            onUpdate: ({progress}) => applyProgress(progress),
        });

        applyProgress(trigger.progress);

        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
            applyProgress(trigger.progress);
        });

        return () => {
            trigger.kill();
        };
    }, [textElement]);
}
