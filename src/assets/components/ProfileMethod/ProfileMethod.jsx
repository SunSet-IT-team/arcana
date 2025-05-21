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
                                complesso e integrato che combina diverse tecniche \
                                di conoscenza di sé e del proprio percorso di vita. \
                                Pur nella sua struttura relativamente semplice, si \
                                distingue come uno degli strumenti più trasformativi, \
                                rapidi ed efficaci nel processo di crescita personale e \
                                sociale.',
                                'Si basa sullo studio degli algoritmi della mappa \
                                archetipica natale, costruita a partire dalla data \
                                di nascita di ciascuna persona. Al cuore del metodo \
                                vi è il concetto di archetipo, introdotto da Carl \
                                Gustav Jung, che parlava di immagini, simboli e strutture \
                                universali presenti in ognuno di noi. Non nasciamo come \
                                fogli bianchi, ma già predisposti a certi ruoli ed \
                                esperienze. La nostra data di nascita diventa una chiave \
                                per esplorare questi “programmi interiori” rappresentati \
                                dagli archetipi.',
                                'Il Metodo si articola in due componenti fondamentali: \
                                diagnostica e prognostica.',
                                'Diagnostica: questa analisi aiuta a comprendere come \
                                gli archetipi plasmino il nostro modo di pensare, sentire, \
                                comunicare e agire. Analizzando l’interazione tra i pattern \
                                archetipici nella loro complessità, emergono le strutture \
                                profonde della psiche che influenzano carattere, aspirazioni, \
                                paure e blocchi interiori. È uno specchio che ci mostra chi \
                                siamo e quali schemi inconsciamente ripetiamo — nelle \
                                relazioni, nel lavoro, nelle scelte. Una volta riconosciuti, \
                                possiamo trasformarli.',
                                'Prognostica: consente di analizzare il passato, comprendere \
                                il presente — il punto in cui ci troviamo — e delineare lo \
                                scenario più favorevole per il futuro. È uno strumento \
                                prezioso per interpretare l’ambiente circostante e gli \
                                eventi lungo l’arco della vita, facilitando un cammino \
                                consapevole e mirato verso un cambiamento positivo.',
                                'Il metodo si fonda su 22 archetipi degli Arcani \
                                Maggiori dei Tarocchi, un sistema simbolico che \
                                Carl Gustav Jung considerava un autentico \
                                “alfabeto archetipico”. Questi archetipi rappresentano \
                                strutture mentali, tratti psicologici, pattern di \
                                comportamento, ma anche dinamiche di vita e fasi \
                                di trasformazione.',
                                'Attraverso questa diagnostica basata su immagini \
                                archetipiche e pattern universali, il consulente \
                                esplora complessi, sub-personalità e parti \
                                profonde della psiche di chi cerca aiuto, \
                                portando alla coscienza i meccanismi nascosti \
                                che generano stati interiori o situazioni \
                                problematiche. Il consulente agisce come guida, \
                                accompagnando il cliente nell’esplorazione dei \
                                labirinti della propria interiorità. Grazie alla \
                                mappa archetipica natale, questo percorso \
                                simbolico permette di illuminare dinamiche \
                                interne e favorire una maggiore consapevolezza \
                                di sé, degli altri e del mondo circostante.',
                                'Il Metodo di Profilo Archetipico è al tempo \
                                stesso profondo e pratico, grazie alla sua \
                                semplicità, precisione ed efficacia. Permette di \
                                esplorare i processi inconsci che ci ostacolano \
                                e affrontare in modo più “ecologico” le nostre \
                                lezioni di maturazione psicologica e spirituale \
                                nel mondo materiale, adempiendo ai compiti con \
                                cui siamo venuti al mondo per realizzare \
                                l’individuazione.',
                                'Attraverso questo approccio, è possibile \
                                rimodellare la propria esistenza, trasformando \
                                le sfide in opportunità di evoluzione e \
                                attivando le risorse interiori necessarie per \
                                raggiungere il successo e lo status desiderato. \
                                Le energie archetipiche personali diventano così \
                                una guida preziosa per realizzare il proprio \
                                potenziale e vivere in armonia con il proprio \
                                scopo.',
                                'Grazie alla sua versatilità, il Metodo si rivela \
                                estremamente utile in diversi ambiti: dalla \
                                psicologia pratica all’educazione, dal coaching',
                                'Anche se non ne siamo consapevoli, gli archetipi \
                                vivono dentro di noi e si manifestano nelle \
                                circostanze della nostra vita. Solo attraverso \
                                lo studio di questi potenti meccanismi \
                                invisibili possiamo renderli visibili e \
                                trasformarli in alleati strategici per \
                                raggiungere i nostri obiettivi. Che si tratti di \
                                realizzazione personale, successo professionale, \
                                crescita economica o relazioni soddisfacenti, \
                                comprendere gli archetipi è la chiave per \
                                sbloccare il nostro vero potenziale e vivere la \
                                vita che desideriamo.',
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
