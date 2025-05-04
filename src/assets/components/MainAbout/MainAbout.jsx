import React, {useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import './styles.scss';

import {setOpenProfileMethod} from '../../../redux/slices/profileMethodSlice';
import ElementAnimation from '../../hooks/elementAnimation';
import {useTextAnimation} from '../../hooks/textWhiteAnimation';
import TitleAnimation from '../../hooks/titleAnimation';

import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const text = [
    `Il Metodo del Profilo Archetipico, pur nella sua apparente semplicità, offre risultati rapidi ed efficaci, spesso più rapidi rispetto a quelli della terapia tradizionale. Fondato sulla struttura archetipica della personalità e sulla nostra costituzione psichica innata, il Metodo consente di portare alla luce tutto ciò che nella nostra psiche rimane nascosto: traumi, blocchi inconsci, talenti originali e molti altri aspetti finora sconosciuti. Avete mai immaginato di trovare le istruzioni d'uso per voi stessi e per la vostra vita? Questa è la mappa archetipica natale.`,
    `Il Metodo del Profilo Archetipico offre una diagnosi rapida e altamente precisa, aiutando a individuare i meccanismi nascosti che generano determinati stati e attraggono specifiche situazioni. Consente di uscire da schemi distruttivi, sbloccare il proprio potenziale, superare ostacoli invisibili e ottimizzare le risorse interne, migliorando non solo la vita personale, ma anche la performance professionale.`,
    `Studio e applico costantemente il Metodo con l’intento di farlo riconoscere come uno strumento indispensabile per chi desidera comprendere la propria natura unica, raggiungere il massimo del proprio potenziale, affrontare le sfide interiori e le situazioni difficili, superare limiti autoimposti e gestire con successo i momenti di cambiamento.
Non solo offro consulenze private, ma sono anche aperta a collaborazioni con esperti nei settori che spaziano dalla psicologia pratica all’educazione, dal coaching al mentoring, fino alla psicoanalisi del business. Ciò che conta davvero è orientare il processo verso una trasformazione positiva, una crescita solida e un benessere duraturo.`,
];

function MainAbout() {
    const [width, setWidth] = React.useState(window.innerWidth);
    useEffect(() => {
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

            tl.fromTo(
                imgBg,
                {
                    width: 0,
                },
                {
                    ease: 'expo.out',
                    width: '100%',
                    duration: 0.5,
                }
            )
                .to(
                    imgBl,

                    {
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                        ease: 'expo.out',
                        duration: 1.5,
                        delay: 0.5,
                    },
                    '-=0.5'
                )
                .from(
                    imgImg,

                    {
                        scale: 1.5,
                        filter: 'blur(15px)',
                        ease: 'expo.out',
                        duration: 5,
                    },
                    '-=1.7'
                );
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
                                ANALISTA DI PATTERN ARCHETIPICI, PSICOLOGA DELLA
                                DATA <br />
                                DI NASCITA
                            </p>
                        </div>

                        <div className="about__author-imgbox">
                            <div className="about__author-imgBg">
                                <div className="about__author-imgBl">
                                    <img
                                        className="about__author-img"
                                        src="/images/author.jpg"
                                        alt="author photo"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="about__author-wrapper">
                            <ElementAnimation
                                tag="p"
                                className="about__author-text1 text-split"
                            >
                                Olga Veda, antropologa culturale, è studiosa e
                                ricercatrice del Metodo del Profilo Archetipico:
                                un sistema integrato che favorisce una
                                comprensione profonda di sé e accompagna i
                                processi di trasformazione interiore ed
                                esteriore in ambito esistenziale, personale,
                                relazionale e professionale.
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
                            {text.map((item, index) => {
                                const words = item.split('');
                                return (
                                    <p
                                        className="about__box-text  text-white"
                                        key={`${item}-${index}`}
                                        style={{
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {words.map((word, index) => {
                                            return (
                                                <span
                                                    className="word"
                                                    key={`${word}-${index}`}
                                                >
                                                    {word}
                                                </span>
                                            );
                                        })}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainAbout;
