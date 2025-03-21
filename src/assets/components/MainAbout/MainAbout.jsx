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
    `IL METODO DEL PROFILO ARCHETIPICO, PUR NELLA SUA APPARENTE SEMPLICITÀ, PUÒ OFFRIRE RISULTATI PIÙ RAPIDI ED EFFICACI RISPETTO ALLA TERAPIA TRADIZIONALE. QUESTO PERCHÉ SI BASA SULLA STRUTTURA ARCHETIPICA DELLA PERSONALITÀ E SULLA NOSTRA COSTITUZIONE PSICHICA INNATA, PERMETTENDO DI PORTARE ALLA LUCE TRAUMI, PARTI INCONSCE E TALENTI ORIGINARI DI CUI POTREMMO NON ESSERE AFFATTO CONSAPEVOLI.`,
    `AVETE MAI IMMAGINATO A TROVARE LE "ISTRUZIONI D'USO" PER VOI STESSI E LA VOSTRA VITA? QUESTO È LA MAPPA ARCHETIPICA NATALE.`,
    `STUDIO E APPLICO COSTANTEMENTEIL METODO CON L’OBIETTIVO DI FARLO RICONOSCERE COME UNO STRUMENTO DIAGNOSTICO PRATICO, VELOCE ED ESTREMAMENTE EFFICACE. IL SUO POTENZIALE È ENORME, E IL MIO SCOPO È FAR SÌ CHE SEMPRE PIÙ PROBLEMI POSSANO ESSERE RISOLTI GRAZIE AL SUO UTILIZZO. PER QUESTO MOTIVO, SONO APERTA A COLLABORAZIONI CON ESPERTI NEI SETTORI LEGATI ALLA PSICOLOGIA. CIÒ CHE CONTA DAVVERO È INDIRIZZARLO VERSO IL BENESSERE PSICOLOGICO, LA TRASFORMAZIONE POSITIVA E LA GUARIGIONE.`,
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
                                DOTT.SSAOLGAVEDA, ANTROPOLOGA CULTURALE,
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
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="about__author-wrapper">
                            <ElementAnimation
                                tag="p"
                                className="about__author-text1 text-split"
                            >
                                Laureata in antropologia culturale, studiosa e
                                ricercatrice del Metodo del Profilo Archetipico
                                come strumento completo per la conoscenza di sé,
                                la diagnosi e l'assistenza nella risoluzione di
                                problemi psicologici ed esistenziali.
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
