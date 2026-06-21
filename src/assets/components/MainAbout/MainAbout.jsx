import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import './styles.scss';

import {setOpenProfileMethod} from '../../../redux/slices/profileMethodSlice';
import ElementAnimation from '../../hooks/elementAnimation';
import {useTextAnimation} from '../../hooks/textWhiteAnimation';
import TitleAnimation from '../../hooks/titleAnimation';

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
    `Мне немного за 40.`,
    `Я мама, жена, садовод и отличный друг.`,
    `Я работаю в найме в одной из крупных фармацевтических компаний, что приносит мне удовольствие и неплохой доход.`,
    `И примерно 2 года назад я открыла для себя метод работы с архетипами личности. Получила профессиональное образование в этой сфере и сделала его своим хобби. Я могу часами рассказывать об этом.`,
    `При знакомстве меня в первую очередь интересует дата рождения человека, а уже потом все остальные подробности.`,
    `Я слышу, как люди говорят своими архетипами. И после определенного времени, проведенного в обществе человека, не зная даты его рождения, могу предположить, какие именно архетипы «захватили власть» в нем.`,
    `Однако я никогда не работаю без запроса и не лезу с фразами «а у тебя тут неправильно уроки проходят». Я не буду рассказывать ничего человеку, говорящему: «Ну-ка скажи, что там у меня?!» на ходу и бегло.`,
    `Я уже знаю много, но ежедневно продолжаю изучать эту тему.`,
    `Если тебе интересно узнать себя поближе, я с огромной радостью помогу тебе в этом.`,
];

function MainAbout() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [textWhiteElement, setTextWhiteElement] = React.useState(null);
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

    useTextAnimation(textWhiteElement);

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
                                «АРХЕТИПИЧСКИЙ ПОРТРЕТ ЛИЧНОСТИ» С ДИПЛОМОМ
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
                                внутренней трансформации.
                                <br />
                                <br />
                                Та самая «подружка с картами».
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

                        <div
                            className="about__box"
                            ref={setTextWhiteElement}
                        >
                            {text.map((paragraph, idx) => (
                                <p
                                    className="about__box-text text-white"
                                    key={idx}
                                    style={{textTransform: 'uppercase'}}
                                >
                                    {[...paragraph].map((char, charIdx) => (
                                        <span
                                            key={`char-${idx}-${charIdx}`}
                                            className="word"
                                        >
                                            {char}
                                        </span>
                                    ))}
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
