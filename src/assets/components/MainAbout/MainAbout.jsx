import React, {useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import './styles.scss';

import ElementAnimation from '../../hooks/elementAnimation';
import {useTextAnimation} from '../../hooks/textWhiteAnimation';
import TitleAnimation from '../../hooks/titleAnimation';

import {setOpenProfileMethod} from '../../../redux/slices/profileMethodSlice';
import {TextLinesReveal} from '../../js/textLinesReveal';

import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

function MainAbout() {
    const [width, setWidth] = React.useState(window.innerWidth);
    useEffect(() => {
        const textSplitElements = document.querySelectorAll('.text-white');
        const textAnimation = new TextLinesReveal(
            Array.from(textSplitElements)
        );

        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const dispatch = useDispatch();

    const textWhiteRef = useRef(null);
    useTextAnimation(textWhiteRef.current);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const gsapItems = document.querySelectorAll('.about__author-imgbox');
        gsapItems.forEach((element) => {
            const imgBg = element.querySelector('.about__author-imgBg');
            const imgBl = element.querySelector('.about__author-imgBl');
            const imgImg = element.querySelector('.about__author-img');

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: 'top 70%',
                    toggleActions: 'play none none none',
                    markers: false,
                },
            });
            tl.from(imgBg, {
                width: 0,
                duration: 0.5,
            });
            tl.from(imgBl, {
                width: 0,
                duration: 0.4,
            });
            tl.from(imgImg, {
                scale: 1.5,
                filter: 'blur(15px)',
                duration: 1,
            });
        });
    }, []);
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about__wrapper">
                    <TitleAnimation
                        tag="h2"
                        className="about__title title title-2 title-animation"
                    >
                        <span>SU DI ME</span>
                    </TitleAnimation>

                    <div className="about__content">
                        <div className="about__info-wrapper">
                            <ElementAnimation
                                tag="p"
                                className="about__info-text text-split"
                            >
                                <span className="about__text-span text-span">
                                    LA PRIMA ESPERTA
                                </span>
                                <br />
                                DEL PROFILO ARCHETIPICO DELLA PERSONALITÀ IN
                                ITALIA.
                            </ElementAnimation>

                            <p className="about__info-subtext">
                                DOTT.SSA OLGA VEDA, ANTROPOLOGA CULTURALE,
                                ANALISTA DI PATTERN ARCHETIPICI, RICERCATRICE DI
                                MAPPA ARCHETIPICA NATALE
                            </p>
                        </div>

                        <div className="about__author-imgbox">
                            <div className="about__author-imgBg">
                                <div className="about__author-imgBl">
                                    <img
                                        className="about__author-img"
                                        src="/images/author.jpg"
                                        alt="author photo"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="about__author-wrapper">
                            <ElementAnimation
                                tag="p"
                                className="about__author-text1 text-split"
                            >
                                <span>
                                    Studia la Mappa Archetipica natale, basata
                                    sulle energie archetipiche degli Arcani
                                    Maggiori dei Tarocchi e sulle loro
                                    caratteristiche psichiche, calcolata per
                                    data di nascita, che è un codice
                                    crittografato per il percorso di vita tipico
                                    dell'anima sulla terra.
                                </span>
                            </ElementAnimation>

                            {/* <span> </span> */}

                            <ElementAnimation
                                tag="p"
                                className="about__author-text2 text-split"
                            >
                                <span>
                                    Attraverso la diffusione del metodo e le
                                    consulenze private, aiuta tutti coloro che
                                    ricercano consapevolezza e un vettore
                                    positivo nella propria vita a comprendere
                                    profondamente se stessi, la propria alterità
                                    e il percorso di maturazione psicologica e
                                    sociale, nel rispetto delle forme archetipe
                                    a seconda della data di nascita e lo
                                    sviluppo delle energie archetipiche per la
                                    loro manifestazione più armoniosa.
                                </span>
                            </ElementAnimation>
                            <div className="about__author-linkbox">
                                <Link
                                    to="/"
                                    className="about__author-link arrow"
                                    onClick={() =>
                                        dispatch(setOpenProfileMethod(true))
                                    }
                                >
                                    <span className="underline">
                                        Descrizione metodo
                                    </span>
                                    <svg
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
                        </div>

                        <div className="about__box" ref={textWhiteRef}>
                            <p className="about__box-text text-split text-white">
                                {width <= 375 ? (
                                    <>
                                        <span className="about__box-span">
                                            IL METODO, PUR NELLA SUA {''}
                                        </span>
                                        <br />
                                        RELATIVA SEMPLICITÀ, PUÒ SOSTITUIRE IL
                                    </>
                                ) : width <= 1024 && width > 375 ? (
                                    <>
                                        <span className="about__box-span">
                                            IL METODO, PUR NELLA SUA {''}
                                        </span>
                                        <br />
                                        RELATIVA SEMPLICITÀ, PUÒ SOSTITUIRE IL
                                    </>
                                ) : (
                                    <>
                                        <span className="about__box-span">
                                            IL METODO, PUR NELLA SUA RELATIVA
                                            SEMPLICITÀ, PUÒ SOSTITUIRE IL
                                            {''}
                                        </span>
                                    </>
                                )}
                                LAVORO CON UNO PSICOLOGO, DANDO RISULTATI PIÙ
                                RAPIDI ED EFFICACI PROPRIO PERCHÉ È RADICATO
                                NELL'ESSENZA DELLA PERSONA, NELLA SUA INNATA
                                COSTITUZIONE PSICOLOGICA ED È IN GRADO DI FAR
                                LUCE SUI TRAUMI DELLA PERSONA, CHE POTREBBE NON
                                ESSERNE AFFATTO CONSAPEVOLE.
                            </p>

                            <p className="about__box-text text-split text-white">
                                {width <= 375 ? (
                                    <>
                                        <span className="about__box-span">
                                            POTETE IMMAGINARE A {''}
                                        </span>
                                        <br />
                                        TROVARE LE "ISTRUZIONI D'USO" PER VOI
                                    </>
                                ) : width <= 1024 && width > 375 ? (
                                    <>
                                        <span className="about__box-span">
                                            POTETE IMMAGINARE A TROVARE {''}
                                        </span>
                                        <br />
                                        LE "ISTRUZIONI D'USO" PER VOI
                                    </>
                                ) : (
                                    <>
                                        <span className="about__box-span">
                                            POTETE IMMAGINARE A TROVARE LE
                                            "ISTRUZIONI D'USO" PER VOI
                                            {''}
                                        </span>
                                    </>
                                )}
                                STESSI E LA VOSTRA VITA? QUESTO È LA MAPPA
                                ARCHETIPICA NATALE.
                            </p>
                            <p className="about__box-text text-split text-white">
                                {width <= 375 ? (
                                    <>
                                        <span className="about__box-span">
                                            PORTERÒ AVANTI I MIEI {''}
                                        </span>
                                        <br />
                                        STUDI DI QUESTO METODO CON L'OBIETTIVO
                                        DI
                                    </>
                                ) : width <= 1024 && width > 375 ? (
                                    <>
                                        <span className="about__box-span">
                                            PORTERÒ AVANTI I MIEI STUDI DI {''}
                                        </span>
                                        <br />
                                        QUESTO METODO CON L'OBIETTIVO DI
                                    </>
                                ) : (
                                    <>
                                        <span className="about__box-span">
                                            PORTERÒ AVANTI I MIEI STUDI DI
                                            QUESTO METODO CON L'OBIETTIVO DI{' '}
                                            {''}
                                        </span>
                                    </>
                                )}
                                RENDERLO UNO STRUMENTO RICONOSCIUTO. QUESTO
                                METODO HA UN POTERE ENORME ED È IMPORTANTE CHE
                                SIA MIRATO ALLA GUARIGIONE E ALLA TRASFORMAZIONE
                                POSITIVA DEL DESTINO UMANO.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainAbout;
