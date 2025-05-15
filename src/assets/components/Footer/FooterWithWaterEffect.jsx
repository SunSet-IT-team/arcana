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
            <WaterEffectWrapper>
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
                                        POLITICA SULLA RISERVATEZZA
                                    </button>
                                </span>
                            </div>
                            <div className="footer__menu-block">
                                <TitleAnimation
                                    tag="h3"
                                    className="footer__menu-title title-animation"
                                >
                                    <span>MENÙ</span>
                                </TitleAnimation>

                                <nav className="footer__menu">
                                    <ul className="footer__menu-list">
                                        <div className="footer__menu-column">
                                            <li className="footer__menu-item">
                                                <Link
                                                    to="/calculator"
                                                    className="footer__menu-link"
                                                >
                                                    CALC. PERSONALE
                                                </Link>
                                            </li>

                                            <li className="footer__menu-item">
                                                <Link
                                                    to="/partner-calculator"
                                                    className="footer__menu-link"
                                                >
                                                    CALC. DELRAPPORTO TRA DUE
                                                    PARTNER
                                                </Link>
                                            </li>
                                            <li className="footer__menu-item">
                                                <Link
                                                    to="/month-calculator"
                                                    className="footer__menu-link"
                                                >
                                                    CALC. DIPREVISIONI ANNO/MESE
                                                </Link>
                                            </li>

                                            <li className="footer__menu-item">
                                                <Link
                                                    to="/#about"
                                                    className="footer__menu-link"
                                                >
                                                    SU DI ME
                                                </Link>
                                            </li>
                                        </div>
                                        <div className="footer__menu-column">
                                            <li className="footer__menu-item">
                                                <Link
                                                    to="/services"
                                                    className="footer__menu-link"
                                                >
                                                    CONSULENZE
                                                </Link>
                                            </li>

                                            <li className="footer__menu-item">
                                                <Link
                                                    to="/storys"
                                                    className="footer__menu-link"
                                                >
                                                    STORIE DEI CLIENTI
                                                </Link>
                                            </li>

                                            <li className="footer__menu-item">
                                                <Link
                                                    to="/archetypes"
                                                    className="footer__menu-link"
                                                >
                                                    22 ARCHETYPES
                                                </Link>
                                            </li>

                                            <li className="footer__menu-item">
                                                <Link
                                                    to="/blog"
                                                    className="footer__menu-link"
                                                >
                                                    BLOG
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
                                    <span>CONTATTI</span>
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
                            <div className="footer__ingria">
                                <span className="footer__ingria-text">
                                    Sviluppo del sito web
                                </span>
                                <img
                                    src="/images/icons/ingria-logo.svg"
                                    alt="ingria logo"
                                    className="footer__ingria-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <FooterAnimation> </FooterAnimation> */}
            </WaterEffectWrapper>
        </footer>
    );
}

export default FooterWithWaterEffect;
