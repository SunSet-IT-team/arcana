import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import {FreeMode, Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from 'react-router-dom';
import Marquee from 'react-fast-marquee';
const archetypesData = [
    {
        title: 'IL MAGO',
        number: 'I',
        positive: 'PAROLA',
        negative: 'PROMESSE VUOTE',
        imgSrc: './images/archetypes/1.jpg',
        linkTo: '/archetypes/I',
    },
    {
        title: 'LA PAPESSA',
        number: 'II',
        positive: 'CURATELA',
        negative: 'SUPER TUTELA',
        imgSrc: './images/archetypes/2.jpg',
        linkTo: '/archetypes/II',
    },
    {
        title: "L'IMPERATRICE",
        number: 'III',
        positive: 'BELLEZZA',
        negative: 'BRUTTEZZA',
        imgSrc: './images/archetypes/3.jpg',
        linkTo: '/archetypes/III',
    },
    {
        title: "L'IMPERATORE",
        number: 'IV',
        positive: 'AUTORITÀ',
        negative: 'DISPOTISMO',
        imgSrc: './images/archetypes/4.jpg',
        linkTo: '/archetypes/IV',
    },
    {
        title: 'IL PAPA',
        number: 'V',
        positive: 'CONOSCENZA',
        negative: 'STUPIDITÀ',
        imgSrc: './images/archetypes/5.jpg',
        linkTo: '/archetypes/V',
    },
    {
        title: "L'INNAMORATO",
        number: 'VI',
        positive: 'SCELTA',
        negative: 'ROMPERE LE RELAZIONI',
        imgSrc: './images/archetypes/6.jpg',
        linkTo: '/archetypes/VI',
    },
    {
        title: 'IL CARRO',
        number: 'VII',
        positive: 'OBIETTIVO',
        negative: 'INUTILITÀ',
        imgSrc: './images/archetypes/7.jpg',
        linkTo: '/archetypes/VII',
    },
    {
        title: 'LA GIUSTIZIA',
        number: 'VIII',
        positive: 'REGOLE',
        negative: 'INIQUITÀ',
        imgSrc: './images/archetypes/8.jpg',
        linkTo: '/archetypes/VIII',
    },
    {
        title: "L'EREMITA",
        number: 'IX',
        positive: 'SAGGEZZA',
        negative: 'MODO STRANIERO',
        imgSrc: './images/archetypes/9.jpg',
        linkTo: '/archetypes/IX',
    },
    {
        title: 'LA RUOTA DELLA FORTUNA',
        number: 'X',
        positive: 'I TUOI BISOGNI',
        negative: 'DEBITI',
        imgSrc: './images/archetypes/10.jpg',
        linkTo: '/archetypes/X',
    },
    {
        title: 'LA FORZA',
        number: 'XI',
        positive: 'PRODEZZA',
        negative: 'VIOLENZA',
        imgSrc: './images/archetypes/11.jpg',
        linkTo: '/archetypes/XI',
    },
    {
        title: "L'APPESO",
        number: 'XII',
        positive: 'SACRIFICIO VOLONTARIO',
        negative: 'SACRIFICIO INESTIMABILE',
        imgSrc: './images/archetypes/12.jpg',
        linkTo: '/archetypes/XII',
    },
    {
        title: 'LA MORTE',
        number: 'XIII',
        positive: 'MODIFICA',
        negative: 'STAGNAZIONE',
        imgSrc: './images/archetypes/13.jpg',
        linkTo: '/archetypes/XIII',
    },
    {
        title: 'LA TEMPERANZA',
        number: 'XIV',
        positive: 'EQUILIBRIO',
        negative: 'ESTREMO',
        imgSrc: './images/archetypes/14.jpg',
        linkTo: '/archetypes/XIV',
    },
    {
        title: 'IL DIAVOLO',
        number: 'XV',
        positive: 'DIVERTIMENTO',
        negative: 'DIPENDENZE',
        imgSrc: './images/archetypes/15.jpg',
        linkTo: '/archetypes/XV',
    },
    {
        title: 'LA TORRE',
        number: 'XVI',
        positive: 'COSTRUZIONE',
        negative: 'DISTRUZIONE',
        imgSrc: './images/archetypes/16.jpg',
        linkTo: '/archetypes/XVI',
    },
    {
        title: 'LA STELLA',
        number: 'XVII',
        positive: 'AMICIZIA',
        negative: 'TRADIMENTO',
        imgSrc: './images/archetypes/17.jpg',
        linkTo: '/archetypes/XVII',
    },
    {
        title: 'LA LUNA',
        number: 'XVIII',
        positive: 'EMPATIA',
        negative: 'PAURE',
        imgSrc: './images/archetypes/18.jpg',
        linkTo: '/archetypes/XVIII',
    },
    {
        title: 'IL SOLE',
        number: 'XIX',
        positive: 'VITTORIA',
        negative: 'INCENERIMENTO',
        imgSrc: './images/archetypes/19.jpg',
        linkTo: '/archetypes/XIX',
    },
    {
        title: 'IL GIUDIZIO',
        number: 'XX',
        positive: 'I SUOI VALORI',
        negative: 'DIPENDENZA DAI VALORI ALTRUI',
        imgSrc: './images/archetypes/20.jpg',
        linkTo: '/archetypes/XX',
    },
    {
        title: 'IL MONDO',
        number: 'XXI',
        positive: 'INFINITÀ',
        negative: 'VIOLAZIONE DEI CONFINI',
        imgSrc: './images/archetypes/21.jpg',
        linkTo: '/archetypes/XXI',
    },
    {
        title: 'IL MATTO',
        number: 'XXII',
        positive: 'GIOCO',
        negative: 'IRRESPONSABILITÀ',
        imgSrc: './images/archetypes/22.jpg',
        linkTo: '/archetypes/XXII',
    },
];

function SliderMobile({archetypesProp = []}) {
    const [shouldMarquee, setShouldMarquee] = React.useState(false);
    const titleRef = React.useRef(null);

    React.useEffect(() => {
        if (titleRef.current) {
            const titleWidth = titleRef.current.offsetWidth;
            const containerWidth = titleRef.current.parentElement.offsetWidth;
            if (titleWidth > containerWidth) {
                setShouldMarquee(true);
            } else {
                setShouldMarquee(false);
            }
        }
    }, []);

    const data = archetypesProp.length > 0 ? archetypesProp : archetypesData;

    return (
        <Swiper
            modules={[FreeMode, Navigation]}
            spaceBetween={15}
            slidesPerView={1.65}
            slidesOffsetBefore={1}
            slidesOffsetAfter={1}
            loop={true}
            centeredSlides={true}
            className="storys-swiper"
        >
            {data.map((archetype, index) => (
                <SwiperSlide key={index}>
                    <div className="archetypes-demo__item-wrapper">
                        <div className="archetypes-demo__item-body">
                            {shouldMarquee ? (
                                <Marquee gradient={false} speed={30}>
                                    <h3
                                        ref={titleRef}
                                        className="archetypes-demo__item-title text-split"
                                    >
                                        {archetype.title}
                                    </h3>
                                </Marquee>
                            ) : (
                                <h3
                                    ref={titleRef}
                                    className="archetypes-demo__item-title text-split"
                                >
                                    {archetype.title}
                                </h3>
                            )}
                            <div className="archetypes-demo__item-tagbox">
                                <span className="archetypes-demo__item-tag underline text-split">
                                    {archetype.number}
                                </span>
                            </div>
                            <div className="archetypes-demo__item-imgBox">
                                <div className="archetypes-demo__item-imgBg">
                                    <div className="archetypes-demo__item-imgBl">
                                        <img
                                            className="archetypes-demo__item-img"
                                            src={`/images/archetypes/${archetype.number}.webp`}
                                            alt={archetype.title}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="archetypes-demo__item-info">
                            <p className="archetypes-demo__item-text text-split text-cut">
                                <span className="archetypes-demo__item-text-1">
                                    Manifestazione positiva:
                                </span>
                                <span className="archetypes-demo__item-text-2">
                                    {archetype.positive}
                                </span>
                            </p>
                            <p className="archetypes-demo__item-text text-split text-cut">
                                <span className="archetypes-demo__item-text-1">
                                    Manifestazione positiva:
                                </span>
                                <span className="archetypes-demo__item-text-2">
                                    {archetype.negative}
                                </span>
                            </p>
                            <Link
                                to={archetype.linkTo}
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
    );
}

export default SliderMobile;
