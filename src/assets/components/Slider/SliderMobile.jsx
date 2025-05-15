import React, {useEffect, useRef, useState} from 'react';
import Marquee from 'react-fast-marquee';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from 'react-router-dom';
import './styles.scss';
import {archetypesData} from '../ArchetypesArchetypes/ArchetypesArchetypes';

const SliderMobile = ({archetypesProp = []}) => {
    const data = archetypesProp.length > 0 ? archetypesProp : archetypesData;

    const titleRefs = useRef([]);
    const [marqueeStates, setMarqueeStates] = useState([]);

    useEffect(() => {
        const newStates = titleRefs.current.map((ref) => {
            if (!ref || !ref.parentElement) return false;
            return ref.scrollWidth > ref.parentElement.offsetWidth;
        });
        setMarqueeStates(newStates);
    }, [data]);

    return (
        <Swiper
            // modules={[FreeMode, Navigation]}
            spaceBetween={15}
            slidesPerView={1.65}
            slidesOffsetBefore={1}
            slidesOffsetAfter={1}
            loop
            centeredSlides
            // className="storys-swiper"
        >
            {data.map((archetype, index) => (
                <SwiperSlide key={index}>
                    <div className="archetypes-demo__item-wrapper">
                        <div className="archetypes-demo__item-body">
                            {marqueeStates[index] ? (
                                <Marquee speed={30} gradient={false}>
                                    <h3
                                        ref={(el) =>
                                            (titleRefs.current[index] = el)
                                        }
                                        className="archetypes-demo__item-title"
                                    >
                                        {archetype.title}
                                    </h3>
                                </Marquee>
                            ) : (
                                <h3
                                    ref={(el) =>
                                        (titleRefs.current[index] = el)
                                    }
                                    className="archetypes-demo__item-title"
                                >
                                    {archetype.title}
                                </h3>
                            )}

                            <div className="archetypes-demo__item-tagbox">
                                <span className="archetypes-demo__item-tag underline">
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
                            <p className="archetypes-demo__item-text">
                                <span className="archetypes-demo__item-text-1">
                                    Energia:
                                </span>{' '}
                                <span className="archetypes-demo__item-text-2">
                                    {archetype.energy}
                                </span>
                            </p>
                            <p className="archetypes-demo__item-text">
                                <span className="archetypes-demo__item-text-1">
                                    Manifestazione positiva:
                                </span>{' '}
                                <span className="archetypes-demo__item-text-2">
                                    {archetype.positive}
                                </span>
                            </p>
                            <p className="archetypes-demo__item-text">
                                <span className="archetypes-demo__item-text-1">
                                    Manifestazione negativa:
                                </span>{' '}
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
    );
};

export default SliderMobile;
