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

    useEffect(() => {
        storiesProp.length && setActiveLink(storiesProp[0].slug);
    }, []);

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
                    if (storiesProp[swiper.activeIndex]) {
                        setActiveLink(storiesProp[swiper.activeIndex].slug);
                    }
                }}
            >
                {storiesProp.map((story) => (
                    <SwiperSlide key={story.id} className="storys-demo__slide">
                        <li className="storys-demo__item">
                            <div className="storys-demo__body">
                                <div className="storys-demo__item-imgBox">
                                    <div className="storys-demo__item-imgBg">
                                        <div className="storys-demo__item-imgBl2">
                                            <img
                                                className="storys-demo__item-img"
                                                src={story.imgSrc}
                                                alt={story.name}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="storys-demo__item-content">
                                    <div className="storys-demo__item-tagbox">
                                        {story.tags.map((t) => (
                                            <span className="storys-demo__item-tag underline text-split">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="storys-demo__item-body">
                                        <h3 className="storys-demo__item-title text-split">
                                            {story.name}
                                        </h3>
                                        <p className="storys-demo__item-text text-split text-cut">
                                            {story.text}
                                        </p>
                                    </div>
                                    <LinkTo
                                        text="LEGGERE"
                                        className="storys-demo__item-link link--black"
                                        path={`story/${story.slug}`}
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
