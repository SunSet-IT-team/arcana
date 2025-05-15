import React from 'react';
import gsap from 'gsap';

const MenuAnimation = () => {
    const tl = React.useRef(null);

    React.useEffect(() => {
        tl.current = gsap.timeline({paused: true});
    }, []);

    React.useEffect(() => {
        const onMenuEntry = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    tl.current?.play();
                }
            });
        };

        const menuObserver = new IntersectionObserver(onMenuEntry, {
            threshold: 0.5,
        });

        const menuElements = document.querySelectorAll('.menu-animation');
        menuElements.forEach((element) => menuObserver.observe(element));

        // Отписка от наблюдателей при размонтировании компонента
        return () => {
            menuObserver.disconnect();
        };
    }, []);

    return null; // Мы не рендерим ничего, так как это компонент для выполнения побочных эффектов
};

export default MenuAnimation;
