import {useInView} from 'react-intersection-observer';
import WaterWave from 'react-water-wave';
import {useMediaQuery} from 'react-responsive';

const WaterEffectWrapper = ({children}) => {
    const {ref, inView} = useInView({threshold: 0});
    const isMobile = useMediaQuery({maxWidth: 768});

    // Оптимизированные параметры для мобильных устройств
    const resolution = isMobile ? 128 : 256;
    const dropRadius = isMobile ? 10 : 20;
    const perturbance = isMobile ? 0.02 : 0.04;

    return (
        <WaterWave
            resolution={resolution}
            dropRadius={dropRadius}
            perturbance={perturbance}
        >
            {(methods) => {
                // Показываем эффект только, когда компонент в зоне видимости
                if (!inView) {
                    methods.hide();
                } else {
                    methods.show();
                }
                return <div ref={ref}>{children}</div>;
            }}
        </WaterWave>
    );
};

export default WaterEffectWrapper;
