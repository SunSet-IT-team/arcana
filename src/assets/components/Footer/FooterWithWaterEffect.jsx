import React from 'react';
import {useDispatch} from 'react-redux';

import {setOpenPrivacy} from '../../../redux/slices/privacySlice';

// import FooterAnimation from '../../hooks/footerAnimation';

import TitleAnimation from '../../hooks/titleAnimation';

import {Link} from 'react-router-dom';

import WaterEffectWrapper from '../WatterEffectWrapper/WaterEffectWrapper';
import Popups from './Popups';
import './styles.scss';

function FooterWithWaterEffect() {
    const dispatch = useDispatch();

    return (
        <footer className="footer footer-animation">
            {/* <WaterEffectWrapper> */}
            <Popups />

            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__top">
                        <div className="footer__logo-block">
                            <img
                                className="footer__logo"
                                src="/images/icons/logo.svg"
                                alt="logo"
                            />
                            <span className="footer__privacy">
                                <button
                                    className="footer__privacy-button"
                                    onClick={() =>
                                        dispatch(setOpenPrivacy(true))
                                    }
                                >
                                    ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
                                </button>
                            </span>
                        </div>
                        <div className="footer__menu-block">
                            <TitleAnimation
                                tag="h3"
                                className="footer__menu-title title-animation"
                            >
                                <span>МЕНЮ</span>
                            </TitleAnimation>

                            <nav className="footer__menu">
                                <ul className="footer__menu-list">
                                    <div className="footer__menu-column">
                                        <li className="footer__menu-item">
                                            <Link
                                                to="/calculator"
                                                className="footer__menu-link"
                                            >
                                                ЛИЧНЫЙ КАЛЬКУЛЯТОР
                                            </Link>
                                        </li>

                                        <li className="footer__menu-item">
                                            <Link
                                                to="/partner-calculator"
                                                className="footer__menu-link"
                                            >
                                                КАЛЬКУЛЯТОР ОТНОШЕНИЙ
                                            </Link>
                                        </li>
                                        <li className="footer__menu-item">
                                            <Link
                                                to="/month-calculator"
                                                className="footer__menu-link"
                                            >
                                                ПРОГНОЗ ГОД/МЕСЯЦ
                                            </Link>
                                        </li>

                                        <li className="footer__menu-item">
                                            <Link
                                                to="/#about"
                                                className="footer__menu-link"
                                            >
                                                ОБО МНЕ
                                            </Link>
                                        </li>
                                    </div>
                                    <div className="footer__menu-column">
                                        <li className="footer__menu-item">
                                            <Link
                                                to="/services"
                                                className="footer__menu-link"
                                            >
                                                КОНСУЛЬТАЦИИ
                                            </Link>
                                        </li>

                                        <li className="footer__menu-item">
                                            <Link
                                                to="/storys"
                                                className="footer__menu-link"
                                            >
                                                ИСТОРИИ КЛИЕНТОВ
                                            </Link>
                                        </li>

                                        <li className="footer__menu-item">
                                            <Link
                                                to="/archetypes"
                                                className="footer__menu-link"
                                            >
                                                22 АРХЕТИПА
                                            </Link>
                                        </li>

                                        <li className="footer__menu-item">
                                            <Link
                                                to="/blog"
                                                className="footer__menu-link"
                                            >
                                                БЛОГ
                                            </Link>
                                        </li>
                                    </div>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer__contact-block">
                            <TitleAnimation
                                tag="h3"
                                className="footer__menu-title title-animation"
                            >
                                <span>КОНТАКТЫ</span>
                            </TitleAnimation>

                            <ul className="footer__contact-list">
                                <li className="footer__contact-item">
                                    <a
                                        className="footer__contact-link"
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                    >
                                        INSTAGRAM
                                    </a>
                                </li>

                                <li className="footer__contact-item">
                                    <a
                                        className="footer__contact-link line"
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                    >
                                        FACEBOOK
                                    </a>
                                </li>

                                <li className="footer__contact-item">
                                    <a
                                        className="footer__contact-link line"
                                        href="https://www.youtube.com/"
                                        target="_blank"
                                    >
                                        YOUTUBE
                                    </a>
                                </li>

                                <li className="footer__contact-item">
                                    <a
                                        className="footer__contact-link line"
                                        href="https://www.tiktok.com/"
                                        target="_blank"
                                    >
                                        TIKTOK
                                    </a>
                                </li>

                                <li className="footer__contact-item">
                                    <a
                                        className="footer__contact-link line"
                                        href="mailto:22archetypes@gmail.com"
                                    >
                                        22archetypes@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <span className="footer__copyright">
                            Copyright © 2023 Olga Veda. All Rights Reserved
                        </span>
                        <div className="footer__sunset">
                            <span className="footer__sunset-text">
                                Разработка сайта
                            </span>
                            <img
                                src="/images/icons/sunset-logo.svg"
                                alt="sunset logo"
                                className="footer__sunset-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <FooterAnimation> </FooterAnimation> */}
            {/* </WaterEffectWrapper> */}
        </footer>
    );
}

export default FooterWithWaterEffect;
