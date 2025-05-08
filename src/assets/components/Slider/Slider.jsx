import React, {useState} from 'react';

import gsap from 'gsap';
import Marquee from 'react-fast-marquee';
import 'swiper/css';
import 'swiper/css/navigation';
import {FreeMode, Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import {Link} from 'react-router-dom';
import TitleAnimation from '../../hooks/titleAnimation';
import {TextLinesReveal} from '../../js/textLinesReveal';

import SliderMobile from './SliderMobile';
import './styles.scss';
import {archetypesData as archetypesData22} from '../ArchetypesArchetypes/ArchetypesArchetypes';
import {archetypesContent} from '../ArchetypeArchetype/ArchetypeArchetype';

// ДАННЫЕ ДЛЯ СЛАЙДЕРА
const archetypesData = [
    {
        title: 'IL MAGO',
        number: 'I',
        text: `L'Archetipo I il Mago incarna il potere della parola, dello studio e della comunicazione.
È l'energia giovanile che spinge a esplorare, imparare e sperimentare, ma spesso senza una chiara direzione o consapevolezza del "perché".
`,
        imgSrc: './images/archetypes/1.jpg',
        linkTo: '/archetypes/I',
    },
    {
        title: 'LA PAPESSA',
        number: 'II',
        text: `II La Papessa è una delle personificazioni della femminilità e dei segreti, di tutto ciò di cui non si parla nella società. II La Papessa protegge tutto ciò che ha bisogno di cure, ciò che è nascosto, ciò che non è stato ancora rivelato.
`,
        imgSrc: './images/archetypes/2.jpg',
        linkTo: '/archetypes/II',
    },
    {
        title: "L'IMPERATRICE",
        number: 'III',
        text: `È la personificazione della materia, della sessualità e della padronanza del mondo materiale.
III L’Imperatrice è l'incarnazione del desiderio inconscio di fecondazione, dell'energia della bellezza, della creazione e dell'abbondanza.

`,
        imgSrc: './images/archetypes/3.jpg',
        linkTo: '/archetypes/III',
    },
    {
        title: "L'IMPERATORE",
        number: 'IV',
        text: `L'Archetipo IV l’Imperatore è la personificazione del Re, del padrone, di un professionista.
È il Padre archetipico in termini di potere e controllo.
`,
        imgSrc: './images/archetypes/4.jpg',
        linkTo: '/archetypes/IV',
    },
    {
        title: 'IL PAPA',
        number: 'V',
        text: `V Il Papa è il Padre archetipico in termini di tutoraggio, potere genitoriale e autorità.
l'Archetipo V il Papa è la personificazione di un insegnante, di un mentore, delle tradizioni, della conoscenza tradizionale e dell’autorità della conoscenza.
`,
        imgSrc: './images/archetypes/5.jpg',
        linkTo: '/archetypes/V',
    },
    {
        title: "L'INNAMORATO",
        number: 'VI',
        text: `L'Archetipo VI l'Innamorato è la personificazione della scelta, della partnership e del triangolo della scelta.
L’essenza di questo Archetipo è proprio la Scelta.
`,
        imgSrc: './images/archetypes/6.jpg',
        linkTo: '/archetypes/VI',
    },
    {
        title: 'IL CARRO',
        number: 'VII',
        text: `L’Archetipo VII il Carro rappresenta l'energia pionieristica. È la personificazione del bersaglio, dell’impostazione degli obiettivi, della concorrenza, del leader e dell'attività.
`,
        imgSrc: './images/archetypes/7.jpg',
        linkTo: '/archetypes/VII',
    },
    {
        title: 'LA GIUSTIZIA',
        number: 'VIII',
        text: `L’Archetipo VIII la Giustizia, è la personificazione di società, regole, istruzioni, algoritmi e legge.
L'essenza dell'Archetipo VIII è l'equilibrio. Si tratta dell’equilibrio tra il mondo interiore e le regole sociali.

`,
        imgSrc: './images/archetypes/8.jpg',
        linkTo: '/archetypes/VIII',
    },
    {
        title: "L'EREMITA",
        number: 'IX',
        text: `L'Archetipo IX l'Eremita, è la personificazione di concetti come saggezza, esperienza, solitudine, connessioni tra generazioni e il cammino personale. IX l'Eremita è la Guida, il più alto livello di conoscenza.

`,
        imgSrc: './images/archetypes/9.jpg',
        linkTo: '/archetypes/IX',
    },
    {
        title: 'LA RUOTA DELLA FORTUNA',
        number: 'X',
        text: `L’Archetipo X la Ruota della Fortuna, è la personificazione dei propri bisogni, delle occasioni, delle finanze che circolano tra le persone e tra persone ed enti finanziari.
`,
        imgSrc: './images/archetypes/10.jpg',
        linkTo: '/archetypes/X',
    },
    {
        title: 'LA FORZA',
        number: 'XI',
        text: `L’Archetipo XI la Forza, rappresenta la personificazione della Forza in tutte le sue manifestazioni, simboleggiando il dominio sull'Ego regale attraverso la forza di volontà.
`,
        imgSrc: './images/archetypes/11.jpg',
        linkTo: '/archetypes/XI',
    },
    {
        title: "L'APPESO",
        number: 'XII',
        text: `L’Archetipo XII l’Appeso, rappresenta la personificazione del sacrificio volontario in nome di un grande obiettivo. XII L’Appeso è il simbolo di transizione.

`,
        imgSrc: './images/archetypes/12.jpg',
        linkTo: '/archetypes/XII',
    },
    {
        title: 'LA MORTE',
        number: 'XIII',
        text: `L’Archetipo XIII La Morte è la personificazione della Trasformazione e del cambiamento irrevocabile. La Morte trasforma in modo irreversibile: una volta che il cambiamento è avvenuto, non è possibile tornare indietro.
`,
        imgSrc: './images/archetypes/13.jpg',
        linkTo: '/archetypes/XIII',
    },
    {
        title: 'LA TEMPERANZA',
        number: 'XIV',
        text: `L'Archetipo XIV La Temperanza, è la personificazione della “sezione aurea” di Michelangelo, simboleggiando l'equilibrio e l'armonia tra il mondo terreno e quello spirituale.`,
        imgSrc: './images/archetypes/14.jpg',
        linkTo: '/archetypes/XIV',
    },
    {
        title: 'IL DIAVOLO',
        number: 'XV',
        text: `L'Archetipo XV, Il Diavolo, rappresenta la personificazione del piacere e simboleggia la libido. Qui, il piacere può facilmente trasformarsi in perversione.
`,
        imgSrc: './images/archetypes/15.jpg',
        linkTo: '/archetypes/XV',
    },
    {
        title: 'LA TORRE',
        number: 'XVI',
        text: `L’Archetipo XVI La Torre rappresenta la personificazione della struttura, della costruzione e della distruzione.
È uno stato in cui qualcosa di stabile diventa instabile.
`,
        imgSrc: './images/archetypes/16.jpg',
        linkTo: '/archetypes/XVI',
    },
    {
        title: 'LA STELLA',
        number: 'XVII',
        text: `L’Archetipo XVII La Stella rappresenta la personificazione dell'unicità, della creatività, della speranza e dei sogni. È l'Archetipo più complesso perché spesso viene divinizzato.`,
        imgSrc: './images/archetypes/17.jpg',
        linkTo: '/archetypes/XVII',
    },
    {
        title: 'LA LUNA',
        number: 'XVIII',
        text: `L'Archetipo XVIII La Luna rappresenta la personificazione dell'Anima, della psicologia e delle connessioni con l'inconscio. Questo è il dominio della psiche, un campo misterioso e ancora poco esplorato.`,
        imgSrc: './images/archetypes/18.jpg',
        linkTo: '/archetypes/XVIII',
    },
    {
        title: 'IL SOLE',
        number: 'XIX',
        text: `L'Archetipo XIX Il Sole rappresenta la personificazione dell'Ego e della coscienza, che si rafforzano grazie alla conoscenza. XIX Il Sole illumina ciò che prima era nascosto e le conoscenze acquisite espandono la coscienza umana.
`,
        imgSrc: './images/archetypes/19.jpg',
        linkTo: '/archetypes/XIX',
    },
    {
        title: 'IL GIUDIZIO',
        number: 'XX',
        text: `L'Archetipo XX Il Giudizio rappresenta la personificazione di un Egregor, cioè di un'entità collettiva che riflette i valori di un gruppo o di un sistema. L'Archetipo XX ci invita a riflettere sulla coerenza tra i propri valori personali e quelli del gruppo.`,
        imgSrc: './images/archetypes/20.jpg',
        linkTo: '/archetypes/XX',
    },
    {
        title: 'IL MONDO',
        number: 'XXI',
        text: `L'Archetipo XXI Il Mondo rappresenta la personificazione dei confini e della capacità di costruirli. Questo archetipo riguarda l'espansione e l'evoluzione dei propri limiti, sia fisici che mentali, e il modo in cui una persona si relaziona con il mondo e la propria consapevolezza.
`,
        imgSrc: './images/archetypes/21.jpg',
        linkTo: '/archetypes/XXI',
    },
    {
        title: 'IL MATTO',
        number: 'XXII',
        text: `L'Archetipo XXII, Il Matto, rappresenta l'improvvisazione, la purezza dell'inizio e l'energia del bambino curioso. È l’essenza di una creatura che sta iniziando il proprio cammino, come Pinocchio, completamente ignara di ciò che lo aspetta.`,
        imgSrc: './images/archetypes/22.jpg',
        linkTo: '/archetypes/XXII',
    },
];

export default function App() {
    const [onTitle, setOnTitle] = useState(false);
    const [realTr, setRealTr] = useState(0);
    const swiperRef = React.useRef(null);
    const [spaceBetween, setSpaceBetween] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(true);

    // РАЗБИВКА ТЕКСТА НА СЛОВА
    React.useEffect(() => {
        const textSplitElements = document.querySelectorAll('.text-split');
        const textAnimation = new TextLinesReveal(
            Array.from(textSplitElements)
        );
        // if (!isMobile) {
        playAnimation();
        // }

        const handleResize = () => {
            const width = window.innerWidth;

            if (width > 1024) {
                setSpaceBetween(20);
            } else if (width > 768 && width <= 1024) {
                setSpaceBetween(15);
            } else {
                setSpaceBetween(0);
            }
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 768);
            };
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // ПРИВЯЗКА К КНОПКАМ
    const goToNextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            rightSwipe();
            setTimeout(() => swiperRef.current.swiper.slideNext(), 1000);
        }
    };

    const goToPrevSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            leftSwipe();
            setTimeout(() => {
                swiperRef.current.swiper.setTranslate(realTr);
                swiperRef.current.swiper.slidePrev();
            }, 1000);
        }
    };

    // АНИМАЦИЯ ЛЕВОГО СДВИГА
    const leftSwipe = () => {
        reverseChangeSlide();
    };

    // АНИМАЦИЯ ПРАВОГО СДВИГА
    const rightSwipe = () => {
        reverseChangeSlide();
    };

    // АНИМАЦИЯ ПЕРЕКЛЮЧЕНИЯ
    const changeSlide = () => {
        let tl = gsap.timeline({});
        tl.to('.archetypes-demo__stub', {
            height: '130% ',
        });
        tl.to('.archetypes-demo__swiper', {
            opacity: 1,
            duration: 1,
        });

        tl.to(
            ['.archetypes-demo__item-number', '.archetypes-demo__item-title'],
            {
                x: '0',
                duration: 1,
            }
        )
            .to(
                '.archetypes-demo__item-title .line',
                {
                    y: '0',
                    rotate: '0',
                    duration: 1,
                },
                '-=1'
            )
            .to(
                '.archetypes-demo__item-imgBox',
                {
                    x: '0',
                    duration: 1,
                },
                '-=1'
            )
            .to(
                '.archetypes-demo__item-text .line',
                {
                    y: '0%',
                    rotate: '0deg',
                    duration: 1,
                },
                '-=1'
            )
            .to('.archetypes-demo__item-imgBl', {
                x: '0%',
                duration: 1,
            })
            .fromTo(
                '.archetypes-demo__item-img',
                {scale: 1.5, filter: 'blur(15px)'}, // Start
                {scale: 1, filter: 'blur(0px)', duration: 2}, // End
                '-=1'
            )
            .to(
                '.archetypes-demo__item-link',
                {
                    opacity: 1,
                    duration: 1,
                },
                '-=1'
            );
        tl.to('.archetypes-demo__stub', {
            height: '0% ',
        });
    };
    // Обратная анимация
    const reverseChangeSlide = () => {
        let tl = gsap.timeline({});
        tl.to(
            '.archetypes-demo__stub',
            {
                height: '130% ',
            },
            'start'
        );
        tl.to(
            ['.archetypes-demo__item-number', '.archetypes-demo__item-title'],
            {
                x: '-100%',
                duration: 1,
            },
            'start'
        )
            .to(
                '.archetypes-demo__item-title .line',
                {
                    y: '300%',
                    rotate: '10deg',
                    duration: 1,
                },
                'start'
            )
            .to(
                '.archetypes-demo__item-imgBox',
                {
                    x: '-120%',
                    duration: 1,
                },
                'start'
            )
            .to(
                '.archetypes-demo__item-text .line',
                {
                    y: '300%',
                    rotate: '10deg',
                    duration: 1,
                },
                'start'
            )
            .to(
                '.archetypes-demo__item-imgBl',
                {
                    x: '-120%',
                    duration: 1,
                },
                'start'
            )
            .fromTo(
                '.archetypes-demo__item-img',
                {scale: 1, filter: 'blur(0px)', duration: 0.4},
                {scale: 1.5, filter: 'blur(15px)'},
                'start'
            )
            .to(
                '.archetypes-demo__item-link',
                {
                    opacity: 0,
                    duration: 1,
                },
                'start'
            );
        tl.to(
            '.archetypes-demo__swiper',
            {
                opacity: 0,
                duration: 1,
            },
            'start'
        );
        tl.to(
            '.archetypes-demo__stub',
            {
                height: '0% ',
            },
            'start'
        );
        setTimeout(() => {
            changeSlide();
        }, 300);
    };

    // АНИМАЦИЯ ПОЯВЛЕНИЯ
    const playAnimation = () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.archetypes-demo__wrapper',
                start: 'top 70%',
                toggleActions: 'play none none none',
            },
        });
        const delay = setTimeout(() => {
            tl.to('.archetypes-demo__stub', {
                height: '130% ',
            })
                .from('.archetypes-demo__swiper', {
                    opacity: 0,
                    duration: 1,
                })
                .from(
                    [
                        '.archetypes-demo__item-number',
                        '.archetypes-demo__item-title .line',
                    ],
                    {
                        x: '-100%',
                        duration: 1,
                    },
                    '-=1'
                )
                .from(
                    '.archetypes-demo__item-title .line',
                    {
                        y: '300%',
                        rotate: '10deg',
                        duration: 1,
                    },
                    '-=1'
                )
                .fromTo(
                    '.archetypes-demo__item-imgBg',
                    {
                        width: 0,
                    },
                    {
                        ease: 'expo.out',
                        width: '100%',
                        duration: 1,
                    }
                )

                .to(
                    '.archetypes-demo__item-imgBl',
                    {
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                        ease: 'expo.out',
                        duration: 1.5,
                    },
                    '-=0.5'
                )
                .from(
                    '.archetypes-demo__item-img',
                    {
                        scale: 1.5,
                        filter: 'blur(15px)',
                        ease: 'expo.out',
                        duration: 4,
                    },
                    '-=1.7'
                )
                .from(
                    '.archetypes-demo__item-text .line',
                    {
                        y: '300%',
                        rotate: '10deg',
                        duration: 1,
                    },
                    '-=4'
                )
                .from(
                    '.archetypes-demo__item-link',
                    {
                        opacity: 0,
                        delay: 1,
                        duration: 1,
                    },
                    '-=4'
                );

            tl.from('.archetypes-demo__stub', {
                height: '130% ',
            });
        }, 300);
    };

    // Обработчик клика по карточке
    const handleClickSlide = (to) => {
        if (!swiperRef.current) return;

        const swiper = swiperRef.current.swiper;
        const currentRealIndex = swiper.realIndex;

        // Если уже активный, не делаем ничего
        if (currentRealIndex === to) return;

        rightSwipe();
        setTimeout(() => {
            swiper.slideToLoop(to);
        }, 1000);
    };

    return (
        <>
            <div className="archetypes-demo__slider-wrapper slider-animation">
                <div className="archetypes-demo__stub"></div>
                <div className="archetypes-demo__buttons">
                    <TitleAnimation
                        tag="h3"
                        className="archetypes-demo__buttons-title title-animation"
                    >
                        <span>(SCORRIMENTO)</span>
                    </TitleAnimation>
                    <button
                        className="archetypes-demo__button archetypes-demo__button--prev"
                        onClick={() => {
                            goToPrevSlide();
                        }}
                    ></button>
                    <button
                        className="archetypes-demo__button archetypes-demo__button--next"
                        onClick={() => {
                            goToNextSlide();
                        }}
                    ></button>
                </div>
                {isMobile ? (
                    <SliderMobile />
                ) : (
                    <Swiper
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                        className="archetypes-demo__swiper"
                        modules={[FreeMode, Navigation]}
                        loop={true}
                        slidesPerView={4}
                        centeredSlides={false}
                        slideToClickedSlide={false}
                        ref={swiperRef}
                        onSetTranslate={() => {
                            const w = document.querySelector('.swiper-wrapper');
                            w.style.transitionDuration = '300ms';
                        }}
                        onTransitionEnd={(swiper) => {
                            const pageWidth = window.innerWidth;
                            const slideGap = 20;
                            let slideWidth =
                                (pageWidth - 95 * 2 - 20 * 4) / 5 + slideGap;
                            const translate = swiper.getTranslate();
                            const wrapper =
                                document.querySelector('.swiper-wrapper');
                            const uncorrectSlideWidth =
                                document.querySelector('.swiper-slide').style
                                    .width;
                            let count =
                                -translate / uncorrectSlideWidth.slice(0, -2);

                            let newTranslate = 0;

                            while (newTranslate > translate) {
                                newTranslate -= slideWidth;
                            }
                            if (newTranslate !== 0) {
                                newTranslate += slideWidth;
                            }
                            setRealTr(translate);
                            swiper.setTranslate(-count * slideWidth);
                        }}
                    >
                        {archetypesData22.map((data, index) => (
                            <SwiperSlide
                                key={index}
                                onClick={() => {
                                    handleClickSlide(index);
                                }}
                            >
                                <div
                                    className={`archetypes-demo__item-wrapper`}
                                >
                                    <div className="archetypes-demo__item-body">
                                        <span className="archetypes-demo__item-number">
                                            {data.number}
                                        </span>
                                        <h3
                                            className={`archetypes-demo__item-title text-split `}
                                            onMouseEnter={() =>
                                                setOnTitle(true)
                                            }
                                            onMouseLeave={() =>
                                                setOnTitle(false)
                                            }
                                        >
                                            <Marquee
                                                play={
                                                    index + 1 === 10 && onTitle
                                                }
                                                className="marguee"
                                            >
                                                {data.title}
                                            </Marquee>
                                        </h3>
                                        <div className="archetypes-demo__item-imgBox">
                                            <div className="archetypes-demo__item-imgBg">
                                                <div className="archetypes-demo__item-imgBl">
                                                    <img
                                                        className="archetypes-demo__item-img"
                                                        src={`/images/archetypes/${data.number}.webp`}
                                                        alt="archetype photo"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="archetypes-demo__item-info">
                                        <p
                                            className={`archetypes-demo__item-text text-split`}
                                        >
                                            {/* {data.number + ' ' + data.title}
                                             */}
                                            {archetypesData[index].text}
                                        </p>
                                        <p
                                            className={`archetypes-demo__item-text text-split`}
                                        >
                                            {data.text}
                                        </p>
                                        <Link
                                            to={data.linkTo}
                                            className="archetypes-demo__item-link arrow"
                                        >
                                            <span className="underline">
                                                Per saperne di più
                                            </span>{' '}
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </>
    );
}
