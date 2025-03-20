import {useEffect, useState} from 'react';

import './styles.scss';

import {Link} from 'react-router-dom';

import SelectLabel from '../../components/Select/Select';
import LinkTo from '../Link/Link';
import MainStoryMobile from '../MainStory/MainStoryMobile';

const storysData = [
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'RELAZIONI',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'Crescita personale',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'RELAZIONI',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'RELAZIONI',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'Crescita personale',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'LAVORO E PROFESSIONE',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'LAVORO E PROFESSIONE',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'LAVORO E PROFESSIONE',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'Crescita personale',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'FINANZE',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'FINANZE',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'FINANZE',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'FINANZE',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'SALUTE',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'SALUTE',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'SALUTE',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'SALUTE',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'Crescita personale',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'Crescita personale',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'Crescita personale',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'Crescita personale',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'Crescita personale',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'Crescita personale',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
    {
        title: 'RICETTA EDIFICANTE',
        text: `Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum, che in alcuni casi provoca sconcerto quando si cerca di leggere il testo ittico.`,
        tag: 'Crescita personale',
        link: 'storys/1',
        imgSrc: './images/storys/1.jpg',
    },
];

const storyOptions = [
    {value: 'TUTTI', label: 'TUTTI'},
    {value: 'CRESCITA PERSONALE', label: 'CRESCITA PERSONALE'},
    {value: 'RELAZIONI', label: 'RELAZIONI'},
    {value: 'LAVORO E PROFESSIONE', label: 'LAVORO E PROFESSIONE'},
    {value: 'FINANZE', label: 'FINANZE'},
    {value: 'SALUTE', label: 'SALUTE'},
];

function StorysStory() {
    const [selectedStoryFilter, setSelectedStoryFilter] = useState('TUTTI');
    const [filteredStorys, setFilteredStorys] = useState(storysData);
    const [isMobile, setIsMobile] = useState(false);

    const handleFilterStorys = () => {
        setFilteredStorys(
            storysData.filter(
                (story) =>
                    story.tag.toUpperCase() === selectedStoryFilter ||
                    selectedStoryFilter === 'TUTTI'
            )
        );
    };

    const handleStoryFilterChange = (selectedStoryFilter) => {
        setSelectedStoryFilter(selectedStoryFilter);
    };

    useEffect(() => {
        handleFilterStorys();
    }, [selectedStoryFilter]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const storyItems = document.querySelectorAll('.storys__item');
            storyItems.forEach((item) => {
                const width = item.offsetWidth;
                if (width > 335) {
                    item.classList.add('storys__item--big');
                } else {
                    item.classList.remove('storys__item--big');
                }
            });
        }, 500);
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 425);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <section className="storys">
            <div className="container">
                <div className="storys__wrapper">
                    <Link to="/" className="storys__back-link back-arrow">
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
                        <span className="underline">Torna indietro</span>
                    </Link>
                    <h1 className="storys__title title-1">
                        STORIE DEI CLIENTI
                    </h1>

                    <div className="storys__filter">
                        <ul className="storys__filter-list">
                            {storyOptions.map((option) => {
                                return (
                                    <li
                                        className={`storys__filter-item underline ${selectedStoryFilter === option.value && 'storys__filter-item--active'}`}
                                        onClick={() =>
                                            handleStoryFilterChange(
                                                option.value
                                            )
                                        }
                                        key={option.value}
                                    >
                                        {option.label}
                                    </li>
                                );
                            })}
                        </ul>
                        <SelectLabel
                            className="storys__filter-select"
                            options={storyOptions}
                            placeholder="TUTTI"
                            onChange={handleStoryFilterChange}
                            value={selectedStoryFilter}
                        />
                    </div>
                    {isMobile ? (
                        <MainStoryMobile storiesProp={filteredStorys} />
                    ) : (
                        <ul className="storys__list">
                            {filteredStorys.map((story, index) => {
                                return (
                                    <li
                                        className="storys__item"
                                        key={story.title + index}
                                    >
                                        <img
                                            className="storys__item-img"
                                            src={story.imgSrc}
                                            alt={`Story ${story.title}`}
                                        />
                                        <div className="storys__item-content">
                                            <span className="storys__item-linkbox">
                                                <a
                                                    className="storys__item-tag underline"
                                                    href="#"
                                                >
                                                    {story.tag}
                                                </a>
                                            </span>
                                            <div className="storys__item-body">
                                                <h3 className="storys__item-title">
                                                    {story.title}
                                                </h3>
                                                <p className="storys__item-text">
                                                    {story.text}
                                                </p>
                                            </div>

                                            <LinkTo
                                                text="LEGGERE"
                                                path={story.link}
                                                className="storys__item-link link--black"
                                            />
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}

export default StorysStory;
