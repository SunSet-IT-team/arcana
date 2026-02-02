import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import LinkTo from '../../components/Link/Link';
import {useInfiniteStories} from '../../api/stories/useStories';
import {LoadingSpinner} from '../LoadingSpinner/LoadingSpinner';
import MainStoryMobile from './MainStoryMobile';
import TitleAnimation from '../../hooks/titleAnimation'; // можешь тоже удалить, если хочешь без него
import './styles.scss';

function MainStory() {
    const dispatch = useDispatch();
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                        <span>ИСТОРИИ КЛИЕНТОВ</span>
                    </TitleAnimation>

                    {isMobile ? (
                        <MainStoryMobile storiesProp={allPosts} />
                    ) : (
                        <>
                            <ul className="storys-demo__list">
                                {allPosts &&
                                    allPosts.length >= 0 &&
                                    allPosts.map((story) => (
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
                                                        {story.tags.map((t) => (
                                                            <span
                                                                key={t}
                                                                className="storys-demo__item-tag underline"
                                                            >
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    <div className="storys-demo__item-body">
                                                        <h3 className="storys-demo__item-title">
                                                            {story.name}
                                                        </h3>
                                                        <p className="storys-demo__item-text">
                                                            {story.text}
                                                        </p>
                                                    </div>

                                                    <LinkTo
                                                        text="ЧИТАТЬ"
                                                        className="storys-demo__item-link link--black"
                                                        path={`story/${story.slug}`}
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                    ))}

                                <Link
                                    to="/storys"
                                    className="storys-demo__link arrow"
                                >
                                    <span className="underline">
                                        Читать все истории
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
                                !allPosts.length && (
                                    <h3 style={{textAlign: 'center'}}>
                                        Нет записей
                                    </h3>
                                )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default MainStory;
