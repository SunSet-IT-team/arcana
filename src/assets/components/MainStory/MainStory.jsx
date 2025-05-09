import {ScrollTrigger} from 'gsap/ScrollTrigger';
import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import LinkTo from '../../components/Link/Link';
import TitleAnimation from '../../hooks/titleAnimation';
import {TextLinesReveal} from '../../js/textLinesReveal';
import {useInfiniteStories} from '../../api/stories/useStories';
import {LoadingSpinner} from '../LoadingSpinner/LoadingSpinner';

import gsap from 'gsap';
import MainStoryMobile from './MainStoryMobile';
import './styles.scss';

function MainStory() {
    const dispatch = useDispatch();
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const textSplitElements = document.querySelectorAll('.text-split');
        const textAnimation = new TextLinesReveal(
            Array.from(textSplitElements)
        );
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            const storyItems = document.querySelectorAll('.storys-demo__item');
            storyItems.forEach((item) => {
                const width = item.offsetWidth;
                if (width > 767) {
                    item.classList.add('storys-demo__item--big');
                } else {
                    item.classList.remove('storys-demo__item--big');
                }
            });
        }, 100);
        return () => clearTimeout(timeoutId);
    }, []);

    const lineToShowEllipsis = 4;

    React.useEffect(() => {
        const handleResize = () => {
            setTimeout(() => {
                const items = document.querySelectorAll('.storys-demo__item');
                items.forEach((item) => {
                    const isBigCard = item.classList.contains(
                        'storys-demo__item--big'
                    );
                    const textCutElement = item.querySelector(
                        '.storys-demo__item-text'
                    );
                    if (textCutElement) {
                        const lineWrapperElements =
                            textCutElement.querySelectorAll('.line-wrapper');
                        const lineToShowEllipsis = isBigCard ? 2 : 4;

                        if (lineWrapperElements.length > lineToShowEllipsis) {
                            for (
                                let i = lineToShowEllipsis;
                                i < lineWrapperElements.length;
                                i++
                            ) {
                                if (lineWrapperElements[i]) {
                                    lineWrapperElements[i].classList.add(
                                        'line-wrapper--hidden'
                                    );
                                }
                            }

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
                                    !existingEllipsis.classList.contains(
                                        'ellipsis'
                                    )
                                ) {
                                    const ellipsis =
                                        document.createElement('span');
                                    ellipsis.textContent = '...';
                                    ellipsis.classList.add('ellipsis');
                                    lastWord.insertAdjacentElement(
                                        'afterend',
                                        ellipsis
                                    );
                                }
                            }
                        } else {
                            lineWrapperElements.forEach((lineWrapper) => {
                                lineWrapper.classList.remove(
                                    'line-wrapper--hidden'
                                );
                            });
                            const ellipsis =
                                textCutElement.querySelector('.ellipsis');
                            if (ellipsis) {
                                ellipsis.remove();
                            }
                        }
                    }
                });
            }, 500);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [lineToShowEllipsis]);

    gsap.registerPlugin(ScrollTrigger);

    React.useEffect(() => {
        const gsapItems = document.querySelectorAll('.storys-demo__item');
        gsapItems.forEach((element) => {
            const imgBg = element.querySelector('.storys-demo__item-imgBg');
            const imgBl = element.querySelector('.storys-demo__item-imgBl');
            const imgImg = element.querySelector('.storys-demo__item-img');
            const delay = setTimeout(() => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 70%',
                        toggleActions: 'play none none none',
                    },
                });
                tl.from(element.querySelector('.storys-demo__body'), {
                    duration: 1,
                    x: '-150% ',
                    opacity: '0',
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
                            clipPath:
                                'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
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
                    )

                    .from(
                        element.querySelectorAll('.storys-demo__item-tag'),
                        {
                            duration: 0.5,
                            x: '-150% ',
                        },
                        '-=3'
                    )
                    .from(
                        [
                            element.querySelectorAll(
                                '.storys-demo__item-tag .line'
                            ),
                            element.querySelectorAll(
                                '.storys-demo__item-title .line'
                            ),
                            element.querySelectorAll(
                                '.storys-demo__item-text .line'
                            ),
                        ],
                        {
                            duration: 1,
                            y: '500%',
                            rotate: '10deg',
                        },
                        '-=3'
                    )

                    .from(
                        element.querySelector('.storys-demo__item-link'),
                        {
                            duration: 0.5,
                            opacity: '0',
                        },
                        '-=2'
                    );
            }, 500);
            return () => clearTimeout(delay);
        });
    }, []);

    /**
     * Получение записей
     */
    const {
        data: posts,
        isPending: isPostPending,
        isFetchingNextPage,
    } = useInfiniteStories({perPage: 5});

    const allPosts = posts?.pages.flatMap((page) => page.posts) || [];
    return (
        <section className="storys-demo">
            <div className="container">
                <div className="storys-demo__wrapper">
                    <TitleAnimation
                        tag="h2"
                        className="storys-demo__title title title-2 title-animation"
                    >
                        <span>STORIE DEI CLIENTI</span>
                    </TitleAnimation>
                    {isMobile ? (
                        <MainStoryMobile />
                    ) : (
                        <>
                            <ul className="storys-demo__list storys-animation">
                                {allPosts &&
                                    allPosts.length &&
                                    allPosts.map((story) => {
                                        return (
                                            <li
                                                className="storys-demo__item"
                                                key={story.id}
                                            >
                                                <div className="storys-demo__body">
                                                    <div className="storys-demo__item-imgBox">
                                                        <div className="storys-demo__item-imgBg">
                                                            <div className="storys-demo__item-imgBl">
                                                                <img
                                                                    className="storys-demo__item-img"
                                                                    src={
                                                                        story.imgSrc
                                                                    }
                                                                    alt={`Story ${story.title}`}
                                                                    loading="lazy"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="storys-demo__item-content">
                                                        <div className="storys-demo__item-tagbox">
                                                            {story.tags.map(
                                                                (t) => (
                                                                    <span
                                                                        key={t}
                                                                        className="storys-demo__item-tag underline text-split"
                                                                    >
                                                                        {t}
                                                                    </span>
                                                                )
                                                            )}
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
                                        );
                                    })}

                                <Link
                                    to="/storys"
                                    className="storys-demo__link arrow"
                                    href="#"
                                >
                                    <span className="underline">
                                        Leggi tutte le storie
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
                            </ul>
                            {(isPostPending || isFetchingNextPage) && (
                                <LoadingSpinner />
                            )}
                            {!(isPostPending || isFetchingNextPage) &&
                                !allPosts.length && <h3>Nessun record</h3>}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default MainStory;
