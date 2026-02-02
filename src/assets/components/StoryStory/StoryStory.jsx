import React from 'react';

import './styles.scss';

import {useNavigate, useParams} from 'react-router-dom';
import {useStory} from '../../api/stories/useStory';
import {LoadingSpinner} from '../LoadingSpinner/LoadingSpinner';

function StoryStory() {
    const navigate = useNavigate();

    const {slug} = useParams();

    const {data: post, isPending} = useStory(slug);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!post || isPending) return <LoadingSpinner />;

    return (
        <section className="story">
            <div className="container">
                <div className="story__wrapper">
                    <button
                        className="story__back-link back-arrow"
                        onClick={() => navigate(-1)}
                    >
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
                        <span className="underline">Назад</span>
                    </button>
                    <h1 className="story__title title-1">{post.name}</h1>
                    <div className="story__info">
                        <ul className="story__tag-list">
                            {post.tags.map((tag) => (
                                <li className="story__tag-item">{tag}</li>
                            ))}
                        </ul>

                        <span className="story__date">{post.data}</span>
                    </div>
                    <div className="story__content">
                        <img
                            className="story__content-img"
                            src={post.imgSrc}
                            alt="content"
                        />
                        <div
                            className="story__body"
                            dangerouslySetInnerHTML={{__html: post.content}}
                        ></div>
                    </div>
                    <button className="story__up arrow" onClick={scrollToTop}>
                        <span className="underline">Вверх</span>
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
                    </button>
                </div>
            </div>
        </section>
    );
}

export default StoryStory;
