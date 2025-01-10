import React, {useEffect, useRef} from 'react';

const AnimatedElement = ({tag: Tag = 'div', children, className}) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const {top} = elementRef.current.getBoundingClientRect();
            const isVisible = top < window.innerHeight * 1; // Проверяем, виден ли элемент на 90% экрана
            if (isVisible) {
                elementRef.current.classList.add('show'); // Добавляем класс при видимости элемента
                window.removeEventListener('scroll', handleScroll); // Удаляем обработчик события прокрутки
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Удаляем обработчик при размонтировании компонента
        };
    }, []); // Пустой массив зависимостей, чтобы эффект запускался только при монтировании компонента

    return (
        <Tag ref={elementRef} className={`${className} animated-element`}>
            {children}
        </Tag>
    );
};

export default AnimatedElement;
