import React, {useEffect, useState} from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles-mobile.scss';
import {FreeMode, Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import LinkTo from '../../components/Link/Link';
import {Link} from 'react-router-dom';

function MainStoryMobile({storiesProp = []}) {
    const [activeLink, setActiveLink] = useState('/');
    const stories = [
        {
            id: 1,
            imgSrc: '/images/storys/1.jpg',
            tag: 'Crescita personale',
            title: 'LA STORIA DI UN UOMO CONFUSO',
            text: "Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.",
            link: 'storys/1',
        },
        {
            id: 2,
            imgSrc: '/images/storys/2.jpg',
            tag: 'Lavoro e professione',
            title: "UNA STORIA D'AMORE CHE HA SUPERATO LA PROVA DEL TEMPO",
            text: 'Una storia di amore che ha superato la prova del tempo.',
            link: 'storys/2',
        },
        {
            id: 3,
            imgSrc: '/images/storys/3.jpg',
            tag: 'Salute',
            title: 'RICETTA EDIFICANTE',
            text: 'Una ricetta edificante che offre nuova prospettiva sulla vita.',
            link: 'storys/3',
        },
        {
            id: 4,
            imgSrc: '/images/storys/4.jpg',
            tag: 'Crescita personale',
            title: 'MOTIVAZIONE PER LA VITA',
            text: "Un'esperienza che cambia completamente il modo di vedere le cose.",
            link: 'storys/4',
        },
        {
            id: 5,
            imgSrc: '/images/storys/5.jpg',
            tag: 'Crescita personale',
            title: 'VIAGGIO SPIRITUALE',
            text: 'Riflessioni su un viaggio interiore verso la pace.',
            link: 'storys/5',
        },
    ];

    useEffect(() => {
        setActiveLink(stories[0].link);
    }, []);

    const data = storiesProp.length > 0 ? storiesProp : stories;

    return (
        <>
            <Swiper
                modules={[FreeMode, Navigation]}
                spaceBetween={15}
                slidesPerView={1.65}
                slidesOffsetBefore={1}
                slidesOffsetAfter={1}
                loop={true}
                centeredSlides={true}
                className="storys-swiper"
                onSlideChange={(swiper) => {
                    if (stories[swiper.activeIndex]) {
                        setActiveLink(stories[swiper.activeIndex]);
                    }
                }}
            >
                {data.map((story, index) => (
                    <SwiperSlide key={index} className="storys-demo__slide">
                        <li className="storys-demo__item">
                            <div className="storys-demo__body">
                                <div className="storys-demo__item-imgBox">
                                    <div className="storys-demo__item-imgBg">
                                        <div className="storys-demo__item-imgBl2">
                                            <img
                                                className="storys-demo__item-img"
                                                src={story.imgSrc}
                                                alt={story.title}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="storys-demo__item-content">
                                    <div className="storys-demo__item-tagbox">
                                        <span className="storys-demo__item-tag underline text-split">
                                            {story.tag}
                                        </span>
                                    </div>
                                    <div className="storys-demo__item-body">
                                        <h3 className="storys-demo__item-title text-split">
                                            {story.title}
                                        </h3>
                                        <p className="storys-demo__item-text text-split text-cut">
                                            {story.text}
                                        </p>
                                    </div>
                                    <LinkTo
                                        text="LEGGERE"
                                        className="storys-demo__item-link link--black"
                                        path={story.link}
                                    />
                                </div>
                            </div>
                        </li>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Link
                to={activeLink}
                className="about__author-link storys-demo__bottom-link arrow"
            >
                <span className="underline">Leggi tutte le storie</span>
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
        </>
    );
}

export default MainStoryMobile;
