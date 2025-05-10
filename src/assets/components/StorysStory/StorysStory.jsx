import {useEffect, useState} from 'react';

import './styles.scss';

import {Link} from 'react-router-dom';

import SelectLabel from '../../components/Select/Select';
import LinkTo from '../Link/Link';
import MainStoryMobile from '../MainStory/MainStoryMobile';

import {useStoryTags} from '../../api/storyTags/useStoryTags';
import {useInfiniteStories} from '../../api/stories/useStories';
import {LoadingSpinner} from '../LoadingSpinner/LoadingSpinner';

function StorysStory() {
    const [selectedStoryFilter, setSelectedStoryFilter] = useState({
        label: 'TUTTI',
        value: 0,
    });

    /**
     * Получение тегов
     */
    const {data: tags, isPending: isTagPending} = useStoryTags();

    const tagIds = [selectedStoryFilter.value].filter((el) => el > 0);

    const [isMobile, setIsMobile] = useState(false);

    /**
     * Изменение тега
     */
    const handleStoryFilterChange = (selectedStoryFilterValue) => {
        setSelectedStoryFilter(
            tags.find((el) => el.value == selectedStoryFilterValue) || null
        );
    };

    /**
     * Получение записей
     */
    const {
        data: posts,
        isPending: isPostPending,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteStories({
        tagIds,
    });

    // const allPosts = posts?.pages.flatMap((page) => page.posts) || [];
    const allPosts = [];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const storyItems = document.querySelectorAll('.storys__item');
            storyItems.forEach((item) => {
                const width = item.offsetWidth;
                if (width > 424) {
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

                    {tags && tags.length && (
                        <div className="storys__filter">
                            <ul className="storys__filter-list">
                                {tags.map((option) => {
                                    return (
                                        <li
                                            className={`storys__filter-item underline ${selectedStoryFilter.value === option.value && 'storys__filter-item--active'}`}
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
                                options={tags}
                                placeholder="TUTTI"
                                onChange={handleStoryFilterChange}
                                value={selectedStoryFilter.value}
                            />
                        </div>
                    )}
                    {isMobile ? (
                        <MainStoryMobile storiesProp={allPosts} />
                    ) : (
                        <ul className="storys__list">
                            {allPosts &&
                                allPosts.length <= 0 &&
                                allPosts.map((story) => {
                                    return (
                                        <li
                                            className="storys__item"
                                            key={story.id}
                                        >
                                            <img
                                                className="storys__item-img"
                                                src={story.imgSrc}
                                                alt={`Story ${story.title}`}
                                            />
                                            <div className="storys__item-content">
                                                <span className="storys__item-linkbox">
                                                    {story.tags.map((t) => (
                                                        <a
                                                            className="storys__item-tag underline"
                                                            href="#"
                                                        >
                                                            {t}
                                                        </a>
                                                    ))}
                                                </span>
                                                <div className="storys__item-body">
                                                    <h3 className="storys__item-title">
                                                        {story.name}
                                                    </h3>
                                                    <p className="storys__item-text">
                                                        {story.text}
                                                    </p>
                                                </div>

                                                <LinkTo
                                                    text="LEGGERE"
                                                    path={`story/${story.slug}`}
                                                    className="storys__item-link link--black"
                                                />
                                            </div>
                                        </li>
                                    );
                                })}
                        </ul>
                    )}
                    {(isPostPending || isFetchingNextPage) && (
                        <LoadingSpinner />
                    )}

                    {!(isPostPending || isFetchingNextPage) &&
                        !allPosts.length > 0 && <h3>Nessun record</h3>}
                </div>
            </div>
        </section>
    );
}

export default StorysStory;
