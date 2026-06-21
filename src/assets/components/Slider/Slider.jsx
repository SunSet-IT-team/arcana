import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Link} from 'react-router-dom';

import './styles.scss';
import SliderMobile from './SliderMobile';
import {archetypesData as archetypesData_} from '../ArchetypesArchetypes/ArchetypesArchetypes';
import {archetypesContent} from '../ArchetypeArchetype/ArchetypeArchetype';
import {useDevice} from '../../hooks/useDevice';

export default function ArchetypesSlider() {
    const sliderRef = useRef(null);
    const dragStartX = useRef(null);
    const isDragging = useRef(false);
    const dragWasMoved = useRef(false);
    const capturedPointerId = useRef(null);
    const dragFrame = useRef(null);
    const pendingDragOffset = useRef(0);

    const [activeIndex, setActiveIndex] = useState(0);
    const [animation, setAnimation] = useState(null);
    const [isDragActive, setIsDragActive] = useState(false);

    const {isMobile} = useDevice();

    useEffect(
        () => () => {
            if (dragFrame.current !== null) {
                cancelAnimationFrame(dragFrame.current);
            }
        },
        []
    );

    const getLoopIndex = (index) => {
        const length = archetypesData_.length;
        return ((index % length) + length) % length;
    };

    const setDragCssOffset = (offset) => {
        pendingDragOffset.current = offset;

        if (dragFrame.current !== null) return;

        dragFrame.current = requestAnimationFrame(() => {
            sliderRef.current?.style.setProperty(
                '--drag-offset',
                `${pendingDragOffset.current}px`
            );
            dragFrame.current = null;
        });
    };

    const resetDragCssOffset = () => {
        if (dragFrame.current !== null) {
            cancelAnimationFrame(dragFrame.current);
            dragFrame.current = null;
        }

        pendingDragOffset.current = 0;
        sliderRef.current?.style.setProperty('--drag-offset', '0px');
    };

    const slidePrev = () => {
        if (animation) return;
        setAnimation({
            direction: 'prev',
            step: 1,
            targetIndex: getLoopIndex(activeIndex - 1),
        });
    };

    const slideNext = () => {
        if (animation) return;
        setAnimation({
            direction: 'next',
            step: 1,
            targetIndex: getLoopIndex(activeIndex + 1),
        });
    };

    const slideToVisibleIndex = (index) => {
        if (animation || index === 1) return;

        const direction = index === 0 ? 'prev' : 'next';
        const step = direction === 'prev' ? 1 : index - 1;
        setAnimation({
            direction,
            step,
            targetIndex: getLoopIndex(
                activeIndex + (direction === 'next' ? step : -step)
            ),
        });
    };

    const desktopArchetypesData = useMemo(
        () =>
            Array.from(
                {length: Math.min(archetypesData_.length, 12)},
                (_, i) => {
                    const dataIndex = getLoopIndex(activeIndex + i - 1);
                    return {
                        ...archetypesData_[dataIndex],
                        dataIndex,
                    };
                }
            ),
        [activeIndex]
    );

    const handlePointerDown = (event) => {
        if (animation) return;
        dragStartX.current = event.clientX;
        isDragging.current = true;
        dragWasMoved.current = false;
        setIsDragActive(true);
        resetDragCssOffset();
    };

    const handlePointerMove = (event) => {
        if (!isDragging.current || dragStartX.current === null || animation)
            return;

        const nextDragOffset = event.clientX - dragStartX.current;
        if (Math.abs(nextDragOffset) > 8) {
            dragWasMoved.current = true;

            if (capturedPointerId.current === null) {
                event.currentTarget.setPointerCapture?.(event.pointerId);
                capturedPointerId.current = event.pointerId;
            }
        }
        setDragCssOffset(nextDragOffset);
    };

    const handlePointerUp = (event) => {
        if (dragStartX.current === null) return;

        const deltaX = event.clientX - dragStartX.current;
        dragStartX.current = null;
        isDragging.current = false;
        dragWasMoved.current = Math.abs(deltaX) > 8;
        setIsDragActive(false);
        resetDragCssOffset();
        if (capturedPointerId.current !== null) {
            event.currentTarget.releasePointerCapture?.(capturedPointerId.current);
            capturedPointerId.current = null;
        }

        if (Math.abs(deltaX) < 40) return;
        if (deltaX < 0) slideNext();
        else slidePrev();
    };

    const handlePointerCancel = (event) => {
        dragStartX.current = null;
        isDragging.current = false;
        dragWasMoved.current = false;
        setIsDragActive(false);
        resetDragCssOffset();
        if (capturedPointerId.current !== null) {
            event.currentTarget.releasePointerCapture?.(capturedPointerId.current);
            capturedPointerId.current = null;
        }
    };

    const handleTrackTransitionEnd = (event) => {
        if (event.target !== event.currentTarget || !animation) return;

        setActiveIndex(animation.targetIndex);
        setAnimation(null);
    };

    const activeSlideIndex =
        animation?.direction === 'prev'
            ? 0
            : animation?.direction === 'next'
              ? 1 + animation.step
              : 1;
    const activeDesktopData = desktopArchetypesData[activeSlideIndex];
    const currentDesktopData = desktopArchetypesData[1];
    const infoItems =
        animation && currentDesktopData && activeDesktopData
            ? [
                  {
                      data: currentDesktopData,
                      className:
                          'archetypes-demo__desktop-info archetypes-demo__desktop-info--out',
                  },
                  {
                      data: activeDesktopData,
                      className:
                          'archetypes-demo__desktop-info archetypes-demo__desktop-info--in',
                  },
              ]
            : activeDesktopData
              ? [
                    {
                        data: activeDesktopData,
                        className: 'archetypes-demo__desktop-info',
                    },
                ]
              : [];
    const slideShift = `calc(${Array.from(
        {length: animation?.step || 1},
        () => 'var(--small-slide-width) + var(--slide-gap)'
    ).join(' + ')})`;

    return (
        <div className="archetypes-demo__slider-wrapper">
            <div className="archetypes-demo__buttons">
                <h3 className="archetypes-demo__buttons-title">(ПРОКРУТКА)</h3>
                <button
                    className="archetypes-demo__button archetypes-demo__button--prev"
                    type="button"
                    onClick={slidePrev}
                />
                <button
                    className="archetypes-demo__button archetypes-demo__button--next"
                    type="button"
                    onClick={slideNext}
                />
            </div>

            {isMobile ? (
                <SliderMobile archetypesProp={archetypesData_} />
            ) : (
                <div
                    ref={sliderRef}
                    className={`archetypes-demo__swiper archetypes-demo__desktop-swiper swiper ${
                        animation
                            ? `archetypes-demo__desktop-swiper--${animation.direction}`
                            : ''
                    } ${
                        isDragActive
                            ? 'archetypes-demo__desktop-swiper--dragging'
                            : ''
                    }`}
                    style={{
                        '--slide-shift': slideShift,
                        '--drag-offset': '0px',
                    }}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerCancel}
                >
                    <div
                        key={activeIndex}
                        className="archetypes-demo__desktop-track"
                        onTransitionEnd={handleTrackTransitionEnd}
                    >
                        {desktopArchetypesData.map((data, index) => (
                            <div
                                className={`swiper-slide ${
                                    index === activeSlideIndex
                                        ? 'swiper-slide-active'
                                        : ''
                                }`}
                                key={`${data.number}-${index}`}
                                onClick={() => {
                                    if (dragWasMoved.current) {
                                        dragWasMoved.current = false;
                                        return;
                                    }
                                    slideToVisibleIndex(index);
                                }}
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
                                                        draggable="false"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="archetypes-demo__item-info">
                                        <div className="archetypes-demo__item-text">
                                            {
                                                archetypesContent[data.number]
                                                    ?.content
                                            }
                                        </div>
                                        <Link
                                            to={data.linkTo}
                                            className="archetypes-demo__item-link arrow"
                                        >
                                            <span className="underline">
                                                Подробнее
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
                            </div>
                        ))}
                    </div>
                    {infoItems.map(({data, className}) => (
                        <div
                            key={`${data.number}-${className}`}
                            className={className}
                        >
                            <div className="archetypes-demo__item-text">
                                {
                                    archetypesContent[data.number]?.content
                                }
                            </div>
                            <Link
                                to={data.linkTo}
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
                    ))}
                </div>
            )}
        </div>
    );
}
