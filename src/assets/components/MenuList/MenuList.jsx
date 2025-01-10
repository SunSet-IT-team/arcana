import React from 'react';

import './styles.scss';

import {Link} from 'react-router-dom';
import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll';
import gsap from 'gsap';

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
                            <span className="menu-list__link-span">
                                CALCOLATRICE PERSONALE
                            </span>
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
                            <span className="menu-list__link-span">
                                CALCOLATRICE DEL RAPPORTO TRA DUE PARTNER
                            </span>
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
                            <span className="menu-list__link-span">
                                CALCOLATRICE DI PREVISIONI ANNO/MESE
                            </span>
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
                            <span className="menu-list__link-span">
                                SU DI ME
                            </span>
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
                            <span className="menu-list__link-span">
                                CONSULENZE
                            </span>

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
                            <span className="menu-list__link-span">
                                STORIE DEI CLIENTI
                            </span>

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
                        <Link
                            to="/archetypes"
                            className="menu-list__link arrow"
                        >
                            <span className="menu-list__link-span">
                                22 ARCHETYPES
                            </span>
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
                            <span className="menu-list__link-span">BLOG</span>
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
