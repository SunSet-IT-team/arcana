import React, {
    useRef,
    useState,
    useLayoutEffect,
    useEffect,
    useMemo,
} from 'react';
import Marquee from 'react-fast-marquee';
import {Link} from 'react-router-dom';

import './styles.scss';
import {archetypesData} from '../ArchetypesArchetypes/ArchetypesArchetypes';

const SliderMobile = ({archetypesProp = []}) => {
    const data = archetypesProp.length > 0 ? archetypesProp : archetypesData;
    const displayData = useMemo(
        () => (data.length > 1 ? [...data, ...data, ...data] : data),
        [data]
    );

    const sliderRef = useRef(null);
    const titleRefs = useRef([]);
    const [marqueeStates, setMarqueeStates] = useState([]);

    // Сбрасываем лишние refs при смене data
    useEffect(() => {
        titleRefs.current = titleRefs.current.slice(0, displayData.length);
    }, [displayData]);

    const scrollToChildCenter = (child, behavior = 'auto') => {
        const slider = sliderRef.current;
        if (!slider || !child) return;

        slider.scrollTo({
            left:
                child.offsetLeft - (slider.clientWidth - child.clientWidth) / 2,
            behavior,
        });
    };

    useLayoutEffect(() => {
        const slider = sliderRef.current;
        if (!slider || data.length <= 1) return;

        const target = slider.children[data.length];
        if (!target) return;

        requestAnimationFrame(() => {
            scrollToChildCenter(target);
        });
    }, [data.length, displayData]);

    const handleScroll = () => {
        const slider = sliderRef.current;
        if (!slider || data.length <= 1) return;

        const firstSetStart = slider.children[0];
        const secondSetStart = slider.children[data.length];
        const thirdSetStart = slider.children[data.length * 2];
        if (!firstSetStart || !secondSetStart || !thirdSetStart) return;

        const segmentWidth =
            secondSetStart.offsetLeft - firstSetStart.offsetLeft;
        const middleStart =
            secondSetStart.offsetLeft -
            (slider.clientWidth - secondSetStart.clientWidth) / 2;
        const middleEnd =
            thirdSetStart.offsetLeft -
            (slider.clientWidth - thirdSetStart.clientWidth) / 2;

        if (slider.scrollLeft < middleStart) {
            slider.scrollLeft += segmentWidth;
        }

        if (slider.scrollLeft > middleEnd) {
            slider.scrollLeft -= segmentWidth;
        }
    };

    // После рендера проверяем ширину заголовков
    useLayoutEffect(() => {
        const newStates = titleRefs.current.map((ref) => {
            if (!ref || !ref.parentElement) return false;
            return ref.scrollWidth > ref.parentElement.offsetWidth;
        });
        setMarqueeStates(newStates);
    }, [displayData]);

    return (
        <div
            className="archetypes-demo__mobile-swiper"
            ref={sliderRef}
            onScroll={handleScroll}
        >
            {displayData.map((archetype, index) => (
                <div
                    className="archetypes-demo__mobile-slide"
                    key={`${archetype.number}-${index}`}
                >
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
                                            draggable="false"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="archetypes-demo__item-info">
                            <p className="archetypes-demo__item-text">
                                <span className="archetypes-demo__item-text-2">
                                    {archetype.energy}
                                </span>
                            </p>
                            <p className="archetypes-demo__item-text">
                                <span className="archetypes-demo__item-text-1">
                                    Позитивное проявление:
                                </span>{' '}
                                <span className="archetypes-demo__item-text-2">
                                    {archetype.positive}
                                </span>
                            </p>
                            <p className="archetypes-demo__item-text">
                                <span className="archetypes-demo__item-text-1">
                                    Негативное проявление:
                                </span>{' '}
                                <span className="archetypes-demo__item-text-2">
                                    {archetype.negative}
                                </span>
                            </p>
                            <Link
                                to={archetype.linkTo}
                                className="archetypes-demo__item-link arrow"
                            >
                                <span className="underline">Подробнее</span>
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
                </div>
            ))}
        </div>
    );
};

export default SliderMobile;
