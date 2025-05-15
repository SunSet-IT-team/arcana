import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {setOpenContactForm} from '../../../redux/slices/contactFormSlice';
import {
    profileMethod,
    setOpenProfileMethod,
} from '../../../redux/slices/profileMethodSlice';
import Button from '../../components/Button/Button';
import './styles.scss';
import gsap from 'gsap';

function ProfileMethod() {
    const dispatch = useDispatch();
    const isProfileMethodOpen = useSelector(profileMethod);
    const tl = useRef(null);

    useEffect(() => {
        if (!isProfileMethodOpen) return;

        tl.current = gsap.timeline();

        tl.current.fromTo(
            '.profile-method',
            {y: '100%', opacity: 0},
            {y: '0%', opacity: 1, duration: 0.4, ease: 'power2.out'}
        );

        tl.current.fromTo(
            '.profile-method__wrapper',
            {x: '100%'},
            {x: '0%', duration: 0.5, ease: 'power2.out'}
        );

        tl.current.fromTo(
            ['.profile-method__logo', '.profile-method__close'],
            {opacity: 0, y: 20},
            {opacity: 1, y: 0, duration: 0.4, stagger: 0.1}
        );

        tl.current.fromTo(
            '.profile-method__title',
            {x: -50, opacity: 0},
            {x: 0, opacity: 1, duration: 0.5}
        );

        tl.current.fromTo(
            '.profile-method__text-box',
            {opacity: 0, y: 30},
            {opacity: 1, y: 0, duration: 0.5}
        );

        tl.current.fromTo(
            '.profile-method__form-button',
            {autoAlpha: 0, y: 20},
            {autoAlpha: 1, y: 0, duration: 0.4}
        );

        document.body.classList.add('menu-open');

        return () => {
            tl.current.reverse();
            tl.current.eventCallback('onReverseComplete', () => {
                document.body.classList.remove('menu-open');
            });
        };
    }, [isProfileMethodOpen]);

    return (
        <div className="profile-method">
            <div className="profile-method__wrapper">
                <div className="container">
                    <div className="profile-method__top">
                        <Link className="profile-method__logo" to="/">
                            <img
                                src="./images/icons/logo-black.svg"
                                alt="logo"
                            />
                        </Link>
                        <div className="profile-method__close">
                            <button
                                className="close-button"
                                onClick={() =>
                                    dispatch(setOpenProfileMethod(false))
                                }
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
                    <div className="profile-method__content">
                        <h2 className="profile-method__title form-title">
                            ARCHETYPAL PSY PROFILE
                        </h2>
                        <div className="profile-method__text-box">
                            {[
                                'Il Metodo di Profilo Archetipico è un sistema complesso e integrato che combina diverse tecniche...',
                                'Si basa sullo studio degli algoritmi della mappa archetipica natale...',
                                'Il Metodo si articola in due componenti fondamentali: diagnostica e prognostica.',
                                'Diagnostica: questa analisi aiuta a comprendere come gli archetipi plasmino il nostro modo...',
                                'Prognostica: consente di analizzare il passato, comprendere il presente e delineare il futuro...',
                                'Il metodo si fonda su 22 archetipi degli Arcani Maggiori dei Tarocchi...',
                                'Attraverso questa diagnostica il consulente esplora complessi e meccanismi inconsci...',
                                'Il Metodo è al tempo stesso profondo e pratico, grazie alla sua precisione ed efficacia...',
                                'Attraverso questo approccio, è possibile rimodellare la propria esistenza...',
                                'Grazie alla sua versatilità, è utile in diversi ambiti: psicologia, educazione, coaching...',
                                'Gli archetipi vivono dentro di noi e si manifestano nella vita. Solo studiandoli possiamo trasformarli...',
                            ].map((text, i) => (
                                <p className="profile-method__text" key={i}>
                                    {text}
                                </p>
                            ))}

                            <div className="profile-method__form-bottom">
                                <Button
                                    text="CONTATTAMI"
                                    className="profile-method__form-button button--black"
                                    onClick={() =>
                                        dispatch(setOpenContactForm(true))
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileMethod;
