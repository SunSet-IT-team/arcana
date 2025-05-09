import React from 'react';

import './styles.scss';

import gsap from 'gsap';
import {Link} from 'react-router-dom';
import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll';
import ElementAnimation from '../../hooks/elementAnimation';

function MenuList() {
    const scrollToAbout = () => {
        const aboutElement = document.getElementById('about');
        if (aboutElement) {
            scroll.scrollTo(aboutElement.offsetTop, {
                smooth: true,
                duration: 500,
            });
        }
    };
    React.useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.menu__title',
                start: 'top 70%',
                toggleActions: 'play none none none',
                markers: false,
            },
        });
        const delay = setTimeout(() => {
            tl.from(
                '.menu-list__list',
                {
                    duration: 1,
                    x: '-100%',
                    opacity: 0,
                },
                '-=0.5'
            );
            tl.from(
                '.menu-list__link-wrapper',
                {
                    duration: 1,
                    stagger: {
                        amount: 0.5,
                    },
                    x: '-100%',
                    opacity: 0,
                },
                '-=1'
            );
            tl.from('.menu-list__link-span', {
                duration: 0.5,
                stagger: {
                    amount: 0.5,
                },
                y: 100,
            }).from(
                '.menu-list__link-svg',
                {
                    duration: 0.5,
                    stagger: {
                        amount: 0.5,
                    },
                    y: 100,
                },
                '-=1'
            );
        }, 300);
    }, []);
    return (
        <nav className="menu-list menu-animation">
            <ul className="menu-list__list">
                <li className="menu-list__item">
                    <div className="menu-list__link-wrapper">
                        <Link
                            to="/calculator"
                            className="menu-list__link arrow"
                        >
                            <ElementAnimation
                                tag="span"
                                className="menu-list__link-span text-split"
                            >
                                CALCOLATRICE PERSONALE
                            </ElementAnimation>
                            <svg
                                className="menu-list__link-svg"
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 0H0V1H19.29L0 20.29V21H0.71L1 20.71L1.71 20L20 1.71V21H21V0Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </Link>
                    </div>
                </li>
                <li className="menu-list__item">
                    <div className="menu-list__link-wrapper">
                        <Link
                            to="/partner-calculator"
                            className="menu-list__link arrow"
                        >
                            <ElementAnimation
                                tag="span"
                                className="menu-list__link-span text-split"
                            >
                                CALCOLATRICE DEL RAPPORTO TRA DUE PARTNER
                            </ElementAnimation>
                            <svg
                                className="menu-list__link-svg"
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 0H0V1H19.29L0 20.29V21H0.71L1 20.71L1.71 20L20 1.71V21H21V0Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </Link>
                    </div>
                </li>
                <li className="menu-list__item">
                    <div className="menu-list__link-wrapper">
                        <Link
                            to="/month-calculator"
                            className="menu-list__link arrow"
                        >
                            <ElementAnimation
                                tag="span"
                                className="menu-list__link-span text-split"
                            >
                                CALCOLATRICE DI PREVISIONI ANNO/MESE
                            </ElementAnimation>
                            <svg
                                className="menu-list__link-svg"
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 0H0V1H19.29L0 20.29V21H0.71L1 20.71L1.71 20L20 1.71V21H21V0Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </Link>
                    </div>
                </li>

                <li className="menu-list__item">
                    <div className="menu-list__link-wrapper">
                        <ScrollLink
                            to="about"
                            className="menu-list__link arrow"
                            smooth={true}
                            duration={500}
                        >
                            <ElementAnimation
                                tag="span"
                                className="menu-list__link-span text-split"
                            >
                                SU DI ME
                            </ElementAnimation>
                            <svg
                                className="menu-list__link-svg"
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 0H0V1H19.29L0 20.29V21H0.71L1 20.71L1.71 20L20 1.71V21H21V0Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </ScrollLink>
                    </div>
                </li>
                <li className="menu-list__item">
                    <div className="menu-list__link-wrapper">
                        <Link to="/services" className="menu-list__link arrow">
                            <ElementAnimation
                                tag="span"
                                className="menu-list__link-span text-split"
                            >
                                CONSULENZE
                            </ElementAnimation>

                            <svg
                                className="menu-list__link-svg"
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 0H0V1H19.29L0 20.29V21H0.71L1 20.71L1.71 20L20 1.71V21H21V0Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </Link>
                    </div>
                </li>
                <li className="menu-list__item">
                    <div className="menu-list__link-wrapper">
                        {' '}
                        <Link to="/storys" className="menu-list__link arrow">
                            <ElementAnimation
                                tag="span"
                                className="menu-list__link-span text-split"
                            >
                                STORIE DEI CLIENTI
                            </ElementAnimation>

                            <svg
                                className="menu-list__link-svg"
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 0H0V1H19.29L0 20.29V21H0.71L1 20.71L1.71 20L20 1.71V21H21V0Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </Link>
                    </div>
                </li>
                <li className="menu-list__item">
                    <div className="menu-list__link-wrapper">
                        <Link
                            to="/archetypes"
                            className="menu-list__link arrow"
                        >
                            <ElementAnimation
                                tag="span"
                                className="menu-list__link-span text-split"
                            >
                                22 ARCHETYPES
                            </ElementAnimation>

                            <svg
                                className="menu-list__link-svg"
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 0H0V1H19.29L0 20.29V21H0.71L1 20.71L1.71 20L20 1.71V21H21V0Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </Link>
                    </div>
                </li>
                <li className="menu-list__item">
                    <div className="menu-list__link-wrapper">
                        {' '}
                        <Link to="/blog" className="menu-list__link arrow">
                            <ElementAnimation
                                tag="span"
                                className="menu-list__link-span text-split"
                            >
                                BLOG
                            </ElementAnimation>
                            <svg
                                className="menu-list__link-svg"
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 0H0V1H19.29L0 20.29V21H0.71L1 20.71L1.71 20L20 1.71V21H21V0Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default MenuList;
