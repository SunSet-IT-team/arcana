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

// ДАННЫЕ ДЛЯ СЛАЙДЕРА
const archetypesData = [
    {
        title: 'IL MAGO',
        number: 'I',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio, temporibus, quaerat quasi ducimus et, deserunt repudiandae eligendi reiciendis earum odit architecto pariatur laboriosam mollitia voluptate illo! Eos, numquam vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio, temporibus, quaerat quasi ducimus et, deserunt repudiandae eligendi reiciendis earum odit architecto pariatur laboriosam mollitia voluptate illo! Eos, numquam vitae.',
        imgSrc: './images/archetypes/1.jpg',
        linkTo: '/archetypes/I',
    },
    {
        title: 'LA PAPESSA',
        number: 'II',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio, temporibus, quaerat quasi ducimus et, deserunt repudiandae eligendi reiciendis earum odit architecto pariatur laboriosam mollitia voluptate illo! Eos, numquam vitae.',
        imgSrc: './images/archetypes/2.jpg',
        linkTo: '/archetypes/II',
    },
    {
        title: "L'IMPERATRICE",
        number: 'III',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio, temporibus, quaerat quasi ducimus et, deserunt repudiandae eligendi reiciendis earum odit architecto pariatur laboriosam mollitia voluptate illo! Eos, numquam vitae.',
        imgSrc: './images/archetypes/3.jpg',
        linkTo: '/archetypes/III',
    },
    {
        title: "L'IMPERATORE",
        number: 'IV',
        text: 'Se avete trovatoLorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio, temporibus, quaerat quasi ducimus et, deserunt repudiandae eligendi reiciendis earum odit architecto pariatur laboriosam mollitia voluptate illo! Eos, numquam vitae.',
        imgSrc: './images/archetypes/4.jpg',
        linkTo: '/archetypes/IV',
    },
    {
        title: 'IL PAPA',
        number: 'V',
        text: 'Se avete trovatoLorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio, temporibus, quaerat quasi ducimus et, deserunt repudiandae eligendi reiciendis earum odit architecto pariatur laboriosam mollitia voluptate illo! Eos, numquam vitae.',
        imgSrc: './images/archetypes/5.jpg',
        linkTo: '/archetypes/V',
    },
    {
        title: "L'INNAMORATO",
        number: 'VI',
        text: 'Se avete trovatoLorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio, temporibus, quaerat quasi ducimus et, deserunt repudiandae eligendi reiciendis earum odit architecto pariatur laboriosam mollitia voluptate illo! Eos, numquam vitae.',
        imgSrc: './images/archetypes/6.jpg',
        linkTo: '/archetypes/VI',
    },
    {
        title: 'IL CARRO',
        number: 'VII',
        text: 'Se avete trovato',
        imgSrc: './images/archetypes/7.jpg',
        linkTo: '/archetypes/VII',
    },
    {
        title: 'LA GIUSTIZIA',
        number: 'VIII',
        text: 'Se avete trovato',
        imgSrc: './images/archetypes/8.jpg',
        linkTo: '/archetypes/VIII',
    },
    {
        title: "L'EREMITA",
        number: 'IX',
        text: 'Se avete trovato',
        imgSrc: './images/archetypes/9.jpg',
        linkTo: '/archetypes/IX',
    },
    {
        title: 'LA RUOTA DELLA FORTUNA',
        number: 'X',
        text: 'Se avete trovato',
        imgSrc: './images/archetypes/10.jpg',
        linkTo: '/archetypes/X',
    },
    {
        title: 'LA FORZA',
        number: 'XI',
        text: 'Se avete trovato',
        imgSrc: './images/archetypes/11.jpg',
        linkTo: '/archetypes/XI',
    },
    {
        title: "L'APPESO",
        number: 'XII',
        text: 'Se avete trovato',
        imgSrc: './images/archetypes/12.jpg',
        linkTo: '/archetypes/XII',
    },
    {
        title: 'LA MORTE',
        number: 'XIII',
        text: 'Se avete trovato',
        imgSrc: './images/archetypes/13.jpg',
        linkTo: '/archetypes/XIII',
    },
    {
        title: 'LA TEMPERANZA',
        number: 'XIV',
        text: 'Se avete trovato',
        imgSrc: './images/archetypes/14.jpg',
        linkTo: '/archetypes/XIV',
    },
    {
        title: 'IL DIAVOLO',
        number: 'XV',
        text: 'Se avete trovato',
        imgSrc: './images/archetypes/15.jpg',
        linkTo: '/archetypes/XV',
    },
    {
        title: 'LA TORRE',
        number: 'XVI',
        text: 'Se avete trovato',
        imgSrc: './images/archetypes/16.jpg',
        linkTo: '/archetypes/XVI',
    },
    {
        title: 'LA STELLA',
        number: 'XVII',
        text: 'Se avete trovato',
        imgSrc: './images/archetypes/17.jpg',
        linkTo: '/archetypes/XVII',
    },
    {
        title: 'LA LUNA',
        number: 'XVIII',
        text: 'Se avete trovato',
        imgSrc: './images/archetypes/18.jpg',
        linkTo: '/archetypes/XVIII',
    },
    {
        title: 'IL SOLE',
        number: 'XIX',
        text: 'Se avete trovato',
        imgSrc: './images/archetypes/19.jpg',
        linkTo: '/archetypes/XIX',
    },
    {
        title: 'IL GIUDIZIO',
        number: 'XX',
        text: 'Se avete trovato',
        imgSrc: './images/archetypes/20.jpg',
        linkTo: '/archetypes/XX',
    },
    {
        title: 'IL MONDO',
        number: 'XXI',
        text: 'Se avete trovato',
        imgSrc: './images/archetypes/21.jpg',
        linkTo: '/archetypes/XXI',
    },
    {
        title: 'IL MATTO',
        number: 'XXII',
        text: 'Se avete trovato',
        imgSrc: './images/archetypes/22.jpg',
        linkTo: '/archetypes/XXII',
    },
];

export default function App() {
    const [onTitle, setOnTitle] = useState(false);
    const [realTr, setRealTr] = useState(0);
    const swiperRef = React.useRef(null);
    const [spaceBetween, setSpaceBetween] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(false);

    // РАЗБИВКА ТЕКСТА НА СЛОВА
    React.useEffect(() => {
        const textSplitElements = document.querySelectorAll('.text-split');
        const textAnimation = new TextLinesReveal(
            Array.from(textSplitElements)
        );
        playAnimation();

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
                        {archetypesData.map((data, index) => (
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
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="archetypes-demo__item-info">
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
