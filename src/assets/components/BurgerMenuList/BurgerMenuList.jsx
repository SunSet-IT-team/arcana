import React from 'react';

import './styles.scss';

import {Link, useLocation} from 'react-router-dom';
import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll';

function BurgerMenuList({menuClose}) {
    const location = useLocation();
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
        if (location.hash === '#about') {
            scrollToAbout();
        }
    }, [location.hash]);

    return (
        <nav className="menu-list">
            <ul className="menu-list__list">
                <li className="menu-list__item">
                    <div className="menu-list__link-wrapper">
                        <Link
                            to="/calculator"
                            className="menu-list__link arrow"
                            onClick={() => menuClose()}
                        >
                            <span className="menu-list__link-span">
                                ЛИЧНЫЙ КАЛЬКУЛЯТОР
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
                            onClick={() => menuClose()}
                        >
                            <span className="menu-list__link-span">
                                КАЛЬКУЛЯТОР ОТНОШЕНИЙ
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
                            onClick={() => menuClose()}
                        >
                            <span className="menu-list__link-span">
                                ПРОГНОЗ ГОД/МЕСЯЦ
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
                        {location.pathname === '/' ? (
                            <ScrollLink
                                to="about"
                                className="menu-list__link arrow"
                                smooth={true}
                                duration={500}
                                onClick={() => menuClose()}
                            >
                                <span className="menu-list__link-span">
                                    ОБО МНЕ
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
                        ) : (
                            <Link
                                to="/#about"
                                className="menu-list__link arrow"
                                onClick={
                                    (() => scrollToAbout(), () => menuClose())
                                }
                            >
                                <span className="menu-list__link-span">
                                    ОБО МНЕ
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
                        )}
                    </div>
                </li>
                <li className="menu-list__item">
                    <div className="menu-list__link-wrapper">
                        <Link
                            to="/services"
                            className="menu-list__link arrow"
                            onClick={() => menuClose()}
                        >
                            <span className="menu-list__link-span">
                                КОНСУЛЬТАЦИИ
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
                            to="/storys"
                            className="menu-list__link arrow"
                            onClick={() => menuClose()}
                        >
                            <span className="menu-list__link-span">
                                ИСТОРИИ КЛИЕНТОВ
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
                            to="/archetypes"
                            className="menu-list__link arrow"
                            onClick={() => menuClose()}
                        >
                            <span className="menu-list__link-span">
                                22 АРХЕТИПА
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
                            to="/blog"
                            className="menu-list__link arrow"
                            onClick={() => menuClose()}
                        >
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

export default BurgerMenuList;
