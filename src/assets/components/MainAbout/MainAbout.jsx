import React, {useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import './styles.scss';

import {setOpenProfileMethod} from '../../../redux/slices/profileMethodSlice';
import ElementAnimation from '../../hooks/elementAnimation';
import {useTextAnimation} from '../../hooks/textWhiteAnimation';
import TitleAnimation from '../../hooks/titleAnimation';
import parse from 'html-react-parser';

import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

// const text = [
//     `Il Metodo del Profilo Archetipico, pur nella sua apparente semplicità, offre risultati rapidi ed efficaci, spesso più rapidi rispetto a quelli della terapia tradizionale. Fondato sulla struttura archetipica della personalità e sulla nostra costituzione psichica innata, il Metodo consente di portare alla luce tutto ciò che nella nostra psiche rimane nascosto: traumi, blocchi inconsci, talenti originali e molti altri aspetti finora sconosciuti.`,
//     ` Avete mai immaginato di trovare le istruzioni d'uso per voi stessi e per la vostra vita? Questa è la mappa archetipica natale.`,
//     `Il Metodo del Profilo Archetipico offre una diagnosi rapida e altamente precisa, aiutando a individuare i meccanismi nascosti che generano determinati stati e attraggono specifiche situazioni. Consente di uscire da schemi distruttivi, sbloccare il proprio potenziale, superare ostacoli invisibili e ottimizzare le risorse interne, migliorando non solo la vita personale, ma anche la performance professionale.`,
//     `Studio e applico costantemente il Metodo con l’intento di farlo riconoscere come uno strumento indispensabile per chi desidera comprendere la propria natura unica, raggiungere il massimo del proprio potenziale, affrontare le sfide interiori e le situazioni difficili, superare limiti autoimposti e gestire con successo i momenti di cambiamento.`,
//     `Non solo offro consulenze private, ma sono anche aperta a collaborazioni con esperti nei settori che spaziano dalla psicologia pratica all’educazione, dal coaching al mentoring, fino alla psicoanalisi del business. Ciò che conta davvero è orientare il processo verso una trasformazione positiva, una crescita solida e un benessere duraturo.`,
// ];

const text = [
    `Мы рождаемся не «чистым листом». С самого начала в нас заложены определённые внутренние сценарии: роли, через которые мы проявляемся, опыты, которые проживаем, испытания, с которыми сталкиваемся, и трансформации, к которым приходим.`,
    // `Мы рождаемся не как чистые листы, а уже предрасположенными к определённым <b class="about__b">ролям, опытам, битвам</b> и <b class="about__b">трансформациям</b>. Архетипический Профиль — это <b class="about__b">инструмент</b>, который помогает понять <b class="about__b">, кто мы есть</b>, какие <b class="about__b">вызовы</b> встречаем и как <b class="about__b">осознанно с ними справляться</b>.`,

    `Работа со своими архетипами помогает лучше понять, кто мы есть, с какими жизненными вызовами сталкиваемся и как проходить их более осознанно.`,
    `Архетипическая карта работает как внутренний компас, направляющий наш путь.`,
    // `<b class="about__b">Архетипическая карта</b> работает как <b class="about__b">компас</b>, который <b class="about__b">направляет наш путь</b>.`,

    `Через архетипический анализ становится понятнее, какие события мы склонны притягивать, какие внутренние процессы в нас происходят и почему одни и те же ситуации повторяются в жизни — как в личной сфере, так и в профессиональной.`,
    // `Через <b class="about__b">архетипический анализ</b> мы можем понять <b class="about__b">события, которые притягиваем</b>, <b class="about__b">внутренние транзакции</b> и <b class="about__b">повторяющиеся динамики</b> в нашей жизни: от <b class="about__b">личных блоков</b> до <b class="about__b">профессиональных</b>.`,

    `Этот подход помогает увидеть свои сильные стороны, скрытые ресурсы, влияние внешней среды, а также убеждения и модели поведения, которые нас ограничивают. Осознание этих факторов поддерживает принятие взвешенных решений, особенно в периоды неопределённости и кризиса.`,
    // `Она позволяет выявить <b class="about__b">сильные стороны</b>, <b class="about__b">скрытые ресурсы</b>, <b class="about__b">внешние влияния</b>, наши <b class="about__b">убеждения</b> и <b class="about__b">поведения, которые нас ограничивают</b>, помогая <b class="about__b">принимать осознанные решения</b>, даже в <b class="about__b">моменты кризиса</b>.`,

    `Архетипический профиль — это быстрый и эффективный инструмент для преодоления личных и профессиональных кризисов, улучшения отношений и достижения целей с большей ясностью и внутренней опорой, помогая заново почувствовать смысл собственного пути.`,
    // `Архетипический Профиль — это <b class="about__b">быстрый и эффективный инструмент</b> для <b class="about__b">преодоления личных и профессиональных кризисов, улучшения отношений</b> и <b class="about__b">достижения целей</b> с <b class="about__b">решимостью</b>, открывая <b class="about__b">смысл этого путешествия</b>.`,
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

    // const textWhiteRef = useRef(null);
    // useTextAnimation(textWhiteRef.current);

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
                        <span>ОБО МНЕ</span>
                    </TitleAnimation>

                    <div className="about__content">
                        <div className="about__info-wrapper">
                            <ElementAnimation
                                tag="p"
                                className="about__info-text text-split"
                            >
                                <span className="about__text-span text-span">
                                    УВЛЕЧЕННЫЙ ИССЛЕДОВАТЕЛЬ АРХЕТИПИЧЕСКИХ
                                    ПАТТЕРНОВ ПОВЕДЕНИЯ ЛЮДЕЙ
                                </span>
                            </ElementAnimation>

                            <p className="about__info-subtext">
                                КРИСТИНА ЗАВАРУЕВА, ПСИХОЛОГ, КОНСУЛЬТАНТ МЕТОДА
                                «АРХЕТИПИЧСКИЙ ПОРТРЕТ ЛИЧНОСТИ»
                            </p>
                        </div>

                        <div className="about__author-imgbox">
                            <div className="about__author-imgBg">
                                <div className="about__author-imgBl">
                                    <img
                                        className="about__author-img"
                                        src="/images/author.jpg"
                                        alt="фото автора"
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
                                Специализируюсь на работе с архетипами личности
                                — практическом инструменте для глубокого
                                самопознания и ориентирования в процессах
                                внутренней трансформации. Метод применим в
                                личной, межличностной, профессиональной и
                                экзистенциальной сферах.
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
                                        Описание метода
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

                        {/* <div className="about__box" ref={textWhiteRef}> */}
                        <div className="about__box">
                            {text.map((paragraph, idx) => (
                                <p
                                    className="about__box-text text-white"
                                    key={idx}
                                    style={{textTransform: 'uppercase'}}
                                >
                                    {parse(paragraph, {
                                        replace: (domNode) => {
                                            if (domNode.type === 'text') {
                                                return [...domNode.data].map(
                                                    (char, charIdx) => (
                                                        <span
                                                            key={`char-${idx}-${charIdx}`}
                                                            className="word"
                                                        >
                                                            {char}
                                                        </span>
                                                    )
                                                );
                                            }

                                            if (
                                                domNode instanceof Element &&
                                                domNode.name === 'b'
                                            ) {
                                                return (
                                                    <b
                                                        className="info__b"
                                                        key={`b-${idx}`}
                                                    >
                                                        {domToReact(
                                                            domNode.children,
                                                            {
                                                                replace: (
                                                                    inner
                                                                ) => {
                                                                    if (
                                                                        inner.type ===
                                                                        'text'
                                                                    ) {
                                                                        return [
                                                                            ...inner.data,
                                                                        ].map(
                                                                            (
                                                                                char,
                                                                                charIdx
                                                                            ) => (
                                                                                <span
                                                                                    key={`b-${idx}-${charIdx}`}
                                                                                    className="word"
                                                                                >
                                                                                    {
                                                                                        char
                                                                                    }
                                                                                </span>
                                                                            )
                                                                        );
                                                                    }
                                                                },
                                                            }
                                                        )}
                                                    </b>
                                                );
                                            }
                                        },
                                    })}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainAbout;
