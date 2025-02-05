import {useInView} from 'react-intersection-observer';
import {useMediaQuery} from 'react-responsive';
import {useEffect, useRef} from 'react';
import {ripple} from '../../js/ripple';

const WaterEffectWrapper = ({children}) => {
    const [ref, inView] = useInView({threshold: 0});
    const isMobile = useMediaQuery({maxWidth: 768});
    const elemRef = useRef(null);

    // Оптимизированные параметры для мобильных устройств
    const resolution = 256;
    const dropRadius = 20;
    const perturbance = 0.04;

    useEffect(() => {
        if (!elemRef || !elemRef.current) return;

        ripple(elemRef.current, {resolution, dropRadius, perturbance});
        if (!inView) {
            ripple(elemRef.current, 'hide');
        } else {
            ripple(elemRef.current, 'show');
        }
    }, [elemRef.current, inView]);

    return (
        <div ref={elemRef} className="ripples">
            <div className="ripples-child" ref={ref}>
                {children}
            </div>
        </div>
    );
};

export default WaterEffectWrapper;
