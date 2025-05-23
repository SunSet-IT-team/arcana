// FullPageRippleBackground.jsx
import {useEffect, useRef} from 'react';
import {ripple} from '../../hooks/rippleSafe';

const FullPageRippleBackground = () => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        ripple(el, {
            resolution: 256,
            dropRadius: 20,
            perturbance: 0.04,
            interactive: true,
        });
        ripple(el, 'show');

        const handleDestroy = () => ripple(el, 'destroy');
        window.addEventListener('beforeunload', handleDestroy);
        return () => {
            ripple(el, 'hide');
            handleDestroy();
            window.removeEventListener('beforeunload', handleDestroy);
        };
    }, []);

    return (
        <div className="ripple-wrapper">
            <div ref={ref} className="ripple-bg" />
        </div>
    );
};

export default FullPageRippleBackground;
