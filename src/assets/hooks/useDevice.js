import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setDeviceType, setCurrentScreen} from '../../redux/slices/screenSlice';

export const useDevice = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const deviceType = useSelector((state) => state.screen.deviceType);
    const currentScreen = useSelector((state) => state.screen.currentScreen);

    useEffect(() => {
        const updateDeviceType = () => {
            const width = window.innerWidth;
            if (width < 768) dispatch(setDeviceType('mobile'));
            else if (width < 1024) dispatch(setDeviceType('tablet'));
            else dispatch(setDeviceType('desktop'));
        };

        updateDeviceType();
        window.addEventListener('resize', updateDeviceType);
        return () => window.removeEventListener('resize', updateDeviceType);
    }, [dispatch]);

    useEffect(() => {
        const screenName = location.pathname.split('/')[1] || 'home';
        dispatch(setCurrentScreen(screenName));
    }, [location.pathname, dispatch]);

    return {
        deviceType,
        currentScreen,
        isMobile: deviceType === 'mobile',
        isTablet: deviceType === 'tablet',
        isDesktop: deviceType === 'desktop',
        isNotDesktop: deviceType === 'mobile' || deviceType === 'tablet',
    };
};
