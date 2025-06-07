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
                                'Il Metodo di Profilo Archetipico è un sistema \
                                strutturato che integra diverse tecniche di analisi \
                                personale. Si distingue come uno degli strumenti più \
                                trasformativi, rapidi ed efficaci nei processi di \
                                crescita personale e professionale.',

                                'Alla base del metodo c’è la mappa archetipica: uno \
                                schema costruito a partire dalla data di nascita, che \
                                rivela le dinamiche interiori e i pattern ricorrenti \
                                della persona. Al centro è il concetto di archetipo, \
                                introdotto da Carl Gustav Jung come immagine primordiale, \
                                simbolo universale inscritto nell’inconscio collettivo. \
                                Non nasciamo come fogli bianchi, ma con una predisposizione \
                                verso determinati ruoli, esperienze e sfide. La data di \
                                nascita diventa così una chiave per esplorare questi \
                                “programmi interiori” rappresentati dagli archetipi.',

                                'Il metodo è composto da due parti: diagnostica e prognostica.',

                                'La parte diagnostica aiuta a comprendere come gli archetipi \
                                influenzano il modo in cui pensiamo, comunichiamo, agiamo e \
                                ci relazioniamo. Rileva con precisione le strutture profonde \
                                della psiche che condizionano carattere, scelte, paure e \
                                conflitti. Rende visibile ciò che spesso opera in automatico. \
                                Una volta portati alla luce, questi schemi possono essere \
                                trasformati in modo consapevole.',

                                'La parte prognostica restituisce una visione chiara del \
                                percorso fatto, del contesto presente e delle dinamiche future. \
                                È uno strumento strategico, utile in momenti di crisi, \
                                cambiamento o ridefinizione, ma anche solo per comprendere gli \
                                eventi accaduti in infanzia. Aiuta a orientarti con più \
                                coerenza, a prendere decisioni più solide, a muoverti avanti \
                                con lucidità.',

                                'Il metodo si fonda su 22 archetipi degli Arcani Maggiori dei \
                                Tarocchi, utilizzati come sistema di rappresentazione \
                                psichica — lo stesso Jung li definiva un linguaggio simbolico \
                                universale. Questi archetipi rappresentano strutture mentali, \
                                tratti di personalità, dinamiche comportamentali, fasi di \
                                trasformazione ed eventi che riscontriamo.',

                                'Il Profilo Archetipico è uno strumento chiaro, profondo, \
                                concreto. La sua forza sta nella capacità di portare alla luce \
                                i meccanismi invisibili che guidano le nostre decisioni, i \
                                comportamenti e, di conseguenza, i risultati. È pensato per \
                                chi cerca spiegazioni chiare, risposte pratiche e una \
                                comprensione profonda di sé, dei propri punti di forza e delle \
                                dinamiche che attraversa.',

                                'Grazie alla sua flessibilità, il metodo si applica in ambiti \
                                diversi: psicologia applicata, educazione, mentoring, coaching, \
                                psicoanalisi del business. Gli archetipi agiscono dentro di noi, \
                                anche quando non li vediamo. Conoscerli significa renderli visibili \
                                e trasformarli in alleati strategici.',

                                'Per prendere decisioni più mature.',

                                'Per ritrovare una direzione.',

                                'Per costruire una vita coerente con ciò che sei davvero.',
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
