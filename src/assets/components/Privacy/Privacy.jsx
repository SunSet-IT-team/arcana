import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {privacy, setOpenPrivacy} from '../../../redux/slices/privacySlice';

import './styles.scss';
import {Link} from 'react-router-dom';
import gsap from 'gsap';
import {privacyData} from './data';

function Privacy() {
    const dispatch = useDispatch();
    const isFormOpen = useSelector(privacy);
    const tl = useRef(null);

    useEffect(() => {
        if (!isFormOpen) return;

        // Инициализация GSAP анимации
        tl.current = gsap.timeline();

        tl.current.fromTo(
            '.privacy',
            {y: '100%', opacity: 0},
            {y: '0%', opacity: 1, duration: 0.5, ease: 'power2.out'}
        );

        tl.current.fromTo(
            '.privacy__wrapper',
            {x: '100%'},
            {x: '0%', duration: 0.5, ease: 'power2.out'}
        );

        tl.current.fromTo(
            ['.privacy__logo', '.privacy__close'],
            {opacity: 0},
            {opacity: 1, duration: 0.4, stagger: 0.1}
        );

        // Добавляем класс блокировки прокрутки
        const isNested = document.body.classList.contains('menu-open');
        if (!isNested) {
            document.body.classList.add('menu-open');
        }

        return () => {
            // Удаляем прокрутку и убираем анимации
            if (tl.current) {
                tl.current.reverse();
                tl.current.eventCallback('onReverseComplete', () => {
                    if (!isNested) {
                        document.body.classList.remove('menu-open');
                    }
                });
            }
        };
    }, [isFormOpen]);

    return (
        <div className="privacy">
            <div className="privacy__wrapper">
                <div className="container">
                    <div className="privacy__top">
                        <Link className="privacy__logo" to="/">
                            <img
                                src="/images/icons/logo-black.svg"
                                alt="logo"
                            />
                        </Link>
                        <div className="privacy__close">
                            <button
                                className="close-button"
                                onClick={() => dispatch(setOpenPrivacy(false))}
                            >
                                <div className="in">
                                    <div className="close-button-block"></div>
                                    <div className="close-button-block"></div>
                                </div>
                                <div className="out">
                                    <div className="close-button-block"></div>
                                    <div className="close-button-block"></div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="privacy__content">
                        <h2 className="privacy__title form-title">
                            INFORMATIVA SULLA PRIVACY
                        </h2>
                        <div className="privacy__text-box">
                            {privacyData.map((text, i) => (
                                <p className="privacy__text" key={i}>
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Privacy;
