import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import gsap from 'gsap';
import {setOpenContactForm} from '../../../redux/slices/contactFormSlice';
import Button from '../../components/Button/Button';
import {TextLinesReveal} from '../../js/textLinesReveal';
import './styles.scss';

function ServicesList({services}) {
    const dispatch = useDispatch();
    const [openCard, setOpenCard] = useState(null);

    const handleOpenCard = (index) => {
        setOpenCard(openCard === index ? null : index);
    };

    useEffect(() => {
        const textSplitElements = document.querySelectorAll('.text-split');
        const textAnimation = new TextLinesReveal(
            Array.from(textSplitElements)
        );
    }, []);

    const lineToShowEllipsis = 4;

    React.useEffect(() => {
        const handleResize = () => {
            const textCutElements = document.querySelectorAll('.text-cut');
            textCutElements.forEach((element, index) => {
                const lineWrapperElements =
                    element.querySelectorAll('.line-wrapper');
                const lineCount = lineWrapperElements.length;

                if (index === openCard) {
                    const ellipsis = element.querySelector('.ellipsis');
                    if (ellipsis) {
                        ellipsis.remove();
                    }
                    for (let i = lineToShowEllipsis; i < lineCount; i++) {
                        lineWrapperElements[i].classList.remove(
                            'line-wrapper--hidden'
                        );
                    }
                } else {
                    for (let i = lineToShowEllipsis; i < lineCount; i++) {
                        lineWrapperElements[i].classList.add(
                            'line-wrapper--hidden'
                        );
                    }

                    if (lineCount > lineToShowEllipsis) {
                        const lastLineWords =
                            lineWrapperElements[
                                lineToShowEllipsis - 1
                            ].querySelectorAll('.word');
                        const lastWord =
                            lastLineWords[lastLineWords.length - 1];
                        if (lastWord) {
                            const existingEllipsis =
                                lastWord.nextElementSibling;
                            if (
                                !existingEllipsis ||
                                !existingEllipsis.classList.contains('ellipsis')
                            ) {
                                const ellipsis = document.createElement('span');
                                ellipsis.textContent = '...';
                                ellipsis.classList.add('ellipsis');
                                lastWord.insertAdjacentElement(
                                    'afterend',
                                    ellipsis
                                );
                            }
                        }
                    }
                }
            });
        };

        handleResize();

        const timeoutId = setTimeout(() => {
            handleResize();
        }, 500);

        const debouncedResize = () => {
            requestAnimationFrame(handleResize);
        };

        window.addEventListener('resize', debouncedResize);
        handleResize();

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', debouncedResize);
        };
    }, [openCard, lineToShowEllipsis]);

    useEffect(() => {
        const gsapItems = document.querySelectorAll('.services-list__item');
        gsapItems.forEach((element) => {
            const delay = setTimeout(() => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 70%',
                        toggleActions: 'play none none none',
                    },
                });
                tl.from(element.querySelector('.services-list__item-wrapper'), {
                    duration: 1,
                    x: '-100% ',
                }).from(
                    [
                        element.querySelectorAll('.services-list__button'),
                        element.querySelectorAll('.services-list__item .line'),
                    ],
                    {
                        duration: 1,
                        y: '500%',
                        rotate: '10deg',
                    }
                );
            }, 500);
            return () => clearTimeout(delay);
        });
    }, []);

    return (
        <ul className="services-list__list services-animation">
            {services.map((service, index) => (
                <li className="services-list__item" key={index}>
                    <div className="services-list__item-wrapper">
                        <h2 className="services-list__name text-split">
                            {service.name}
                        </h2>

                        <span className="services-list__time text-split">
                            {service.time}
                        </span>
                        <div
                            className={`services-list__info ${
                                openCard === index
                                    ? 'services-list__info--open'
                                    : ''
                            }`}
                        >
                            <p className="services-list__text text-split text-cut">
                                {service.info}
                            </p>
                            <button
                                className="services-list__button underline"
                                onClick={() => handleOpenCard(index)}
                            >
                                Per saperne di più
                            </button>
                            <img
                                className="services-list__info-img"
                                src={`./images/services/${service.img}.jpg`}
                                alt="services-photo"
                            />
                            <Button
                                text="ISCRIVITI"
                                className="services-list__info-button"
                                onClick={() =>
                                    dispatch(setOpenContactForm(true))
                                }
                            ></Button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ServicesList;
