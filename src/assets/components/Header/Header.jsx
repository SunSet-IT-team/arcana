import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {setOpenContactForm} from '../../../redux/slices/contactFormSlice';

import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import './styles.scss';

function Header() {
    const dispatch = useDispatch();
    const menuTimeline = useRef(null);
    const [isHidden, setIsHidden] = useState(false);
    const lastScrollTop = useRef(0);

    const openMenu = () => {
        if (menuTimeline.current) {
            menuTimeline.current.play();
            if (!document.body.classList.contains('menu-open')) {
                document.body.classList.add('menu-open');
            }
        }
    };

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScroll =
                        window.pageYOffset ||
                        document.documentElement.scrollTop;

                    if (currentScroll > lastScrollTop.current) {
                        setIsHidden(true);
                    } else {
                        setIsHidden(false);
                    }

                    lastScrollTop.current = Math.max(currentScroll, 0);
                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isHidden ? 'header--hidden' : ''}`}>
            <BurgerMenu setTimeline={(tl) => (menuTimeline.current = tl)} />

            <div className="container">
                <div className="header__wrapper">
                    <Link className="header__logo" to="/">
                        <img src="/images/icons/logo.svg" alt="logo" />
                    </Link>

                    <button
                        className="header__link underline"
                        onClick={() => dispatch(setOpenContactForm(true))}
                    >
                        Contatti
                    </button>

                    <button className="header__button" onClick={openMenu}>
                        <span className="header__button-span"></span>
                        <span className="header__button-span"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
