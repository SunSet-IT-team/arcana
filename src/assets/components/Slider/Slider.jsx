import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Navigation} from 'swiper/modules';
import {Link} from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';

import './styles.scss';
import SliderMobile from './SliderMobile';
import {archetypesData} from '../ArchetypesArchetypes/ArchetypesArchetypes';
import {archetypesContent} from '../ArchetypeArchetype/ArchetypeArchetype';
import {useDevice} from '../../hooks/useDevice';

export default function ArchetypesSlider() {
    const swiperRef = useRef(null);

    const {isNotDesktop, isMobile} = useDevice();

    const handleClickSlide = (to) => {
        if (!swiperRef.current) return;
        const swiper = swiperRef.current.swiper;
        swiper.slideToLoop(to);
    };

    return (
        <div className="archetypes-demo__slider-wrapper">
            <div className="archetypes-demo__buttons">
                <h3 className="archetypes-demo__buttons-title">
                    (SCORRIMENTO)
                </h3>
                <button
                    className="archetypes-demo__button archetypes-demo__button--prev"
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                />
                <button
                    className="archetypes-demo__button archetypes-demo__button--next"
                    onClick={() => swiperRef.current.swiper.slideNext()}
                />
            </div>

            {isMobile ? (
                <SliderMobile archetypesProp={archetypesData} />
            ) : (
                <Swiper
                    navigation={{
                        prevEl: '.archetypes-demo__button--prev',
                        nextEl: '.archetypes-demo__button--next',
                    }}
                    className="archetypes-demo__swiper"
                    modules={[FreeMode, Navigation]}
                    loop={true}
                    slidesPerView={'auto'}
                    spaceBetween={20}
                    centeredSlides={false}
                    slideToClickedSlide={true}
                    ref={swiperRef}
                >
                    {archetypesData.map((data, index) => (
                        <SwiperSlide
                            key={index}
                            // onClick={() => handleClickSlide(index)}
                        >
                            <div className="archetypes-demo__item-wrapper">
                                <div className="archetypes-demo__item-body">
                                    <span className="archetypes-demo__item-number">
                                        {data.number}
                                    </span>
                                    <h3 className="archetypes-demo__item-title">
                                        {data.title}
                                    </h3>
                                    <div className="archetypes-demo__item-imgBox">
                                        <div className="archetypes-demo__item-imgBg">
                                            <div className="archetypes-demo__item-imgBl">
                                                <img
                                                    className="archetypes-demo__item-img"
                                                    src={`/images/archetypes/${data.number}.webp`}
                                                    alt={data.title}
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="archetypes-demo__item-info">
                                    <p className="archetypes-demo__item-text">
                                        {
                                            archetypesContent[data.number]
                                                ?.content
                                        }
                                    </p>
                                    <Link
                                        to={data.linkTo}
                                        className="archetypes-demo__item-link arrow"
                                    >
                                        <span className="underline">
                                            Per saperne di più
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}
