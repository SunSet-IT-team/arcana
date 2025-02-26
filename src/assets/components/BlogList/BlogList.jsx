import React from 'react';

import {TextLinesReveal} from '../../js/textLinesReveal';

import gsap from 'gsap';
import {Link} from 'react-router-dom';
import './styles.scss';

function BlogList({data}) {
    // РАЗДЕЛЕНИЕ ТЕКСТА НА СЛОВА
    React.useEffect(() => {
        const textSplitElements = document.querySelectorAll('.text-split');
        const textAnimation = new TextLinesReveal(
            Array.from(textSplitElements)
        );
    }, []);
    // ОБРЕЗКА ТЕКСТА
    React.useEffect(() => {
        const lineToShowEllipsis = 7;

        const timeoutId = setTimeout(() => {
            const textSplitElements = document.querySelectorAll('.text-cut');
            textSplitElements.forEach((element) => {
                const lineWrapperElements =
                    element.querySelectorAll('.line-wrapper');
                const lineCount = lineWrapperElements.length;
                if (lineCount > lineToShowEllipsis) {
                    for (let i = lineToShowEllipsis; i < lineCount; i++) {
                        lineWrapperElements[i].classList.add(
                            'line-wrapper--hidden'
                        );
                    }
                    const lastHiddenLine =
                        lineWrapperElements[lineToShowEllipsis - 1];
                    const textNode = document.createElement('span');
                    textNode.textContent = '...';
                    textNode.classList.add('ellipsis');
                    lastHiddenLine.appendChild(textNode);
                }
            });
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    // Обрезка заголовка
    React.useEffect(() => {
        const lineToShowEllipsis = 3;

        const timeoutId = setTimeout(() => {
            const textSplitElements =
                document.querySelectorAll('.text-cut-title');
            textSplitElements.forEach((element) => {
                const lineWrapperElements =
                    element.querySelectorAll('.line-wrapper');
                const lineCount = lineWrapperElements.length;
                if (lineCount > lineToShowEllipsis) {
                    for (let i = lineToShowEllipsis; i < lineCount; i++) {
                        lineWrapperElements[i].classList.add(
                            'line-wrapper--hidden'
                        );
                    }
                    const lastHiddenLine =
                        lineWrapperElements[lineToShowEllipsis - 1];
                    const line = lastHiddenLine.querySelector('.line');

                    const textNode = document.createElement('span');
                    textNode.textContent = '...';
                    textNode.classList.add('ellipsis');
                    line.appendChild(textNode);
                }
            });
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);
    // АНИМАЦИЯ
    React.useEffect(() => {
        const gsapItems = document.querySelectorAll('.blog-list__item');
        gsapItems.forEach((element) => {
            const imgBg = element.querySelector('.blog-list__imgBg');
            const imgBl = element.querySelector('.blog-list__imgBl');
            const imgImg = element.querySelector('.blog-list__img');
            const imgBox = element.querySelector('.blog-list__imgBox');
            const delay = setTimeout(() => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 70%',
                        toggleActions: 'play none none none',
                    },
                });
                tl.from(element.querySelector('.blog-list__item-wrapper'), {
                    duration: 1,
                    x: '-100% ',
                })

                    .from(
                        [
                            element.querySelectorAll('.blog-list__tag'),
                            element.querySelectorAll('.blog-list__item .line'),
                            element.querySelectorAll('.blog-list__link'),
                        ],
                        {
                            duration: 2,
                            y: '500%',
                            rotate: '10deg',
                            delay: 0.5,
                        },
                        0
                    )
                    .from(
                        imgBox,
                        {
                            width: 0,
                            duration: 1.5,
                            delay: 1,
                        },
                        0
                    )
                    .fromTo(
                        imgBg,
                        {
                            width: 0,
                        },
                        {
                            ease: 'expo.out',
                            width: '100%',
                            duration: 0.5,
                            delay: 1.5,
                        },
                        0
                    )
                    .to(
                        imgBl,

                        {
                            clipPath:
                                'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                            ease: 'expo.out',
                            duration: 1.5,
                            delay: 2,
                        },
                        0
                    )
                    .from(
                        imgImg,

                        {
                            scale: 1.5,
                            filter: 'blur(15px)',
                            ease: 'expo.out',
                            duration: 5,
                            delay: 2,
                        },
                        0
                    );
            }, 500);
            return () => clearTimeout(delay);
        });
    }, []);

    return (
        <>
            <ul className="blog-list__list blog-animation">
                {data.map((blog, index) => (
                    <li className="blog-list__item" key={index}>
                        <div className="blog-list__item-wrapper">
                            <div className="blog-list__main-info">
                                <h3 className="blog-list__name text-1 text-split text-cut-title">
                                    {blog.name}
                                </h3>
                                <ul className="blog-list__tags">
                                    {blog.tags.map((tag, index) => (
                                        <li
                                            className="blog-list__tag"
                                            key={index}
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="blog-list__text-wrapper">
                                <p className="blog-list__text text-split text-cut">
                                    {blog.text}
                                </p>
                            </div>
                            <div className="blog-list__imgBox">
                                <div className="blog-list__imgBg">
                                    <div className="blog-list__imgBl">
                                        <img
                                            className="blog-list__img"
                                            src={blog.imgSrc}
                                            alt="author photo"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="blog-list__info">
                                <span className="blog-list__date text-split">
                                    {blog.date}
                                </span>
                                <Link
                                    to={`/blog/${index + 1}`}
                                    className="blog-list__link arrow"
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
                    </li>
                ))}
            </ul>
        </>
    );
}

export default BlogList;
