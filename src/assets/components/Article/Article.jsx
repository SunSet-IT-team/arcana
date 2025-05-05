import React from 'react';

import './styles.scss';

import {useNavigate, useParams} from 'react-router-dom';
import {usePost} from '../../api/posts/usePost';
import {LoadingSpinner} from '../LoadingSpinner/LoadingSpinner';

function Article() {
    const navigate = useNavigate();

    const {slug} = useParams();

    const {data: post, isPending} = usePost(slug);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!post || isPending) return <LoadingSpinner />;

    return (
        <section className="article">
            <div className="container">
                <div className="article__wrapper">
                    <button
                        className="article__back-link back-arrow"
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
                        <span className="underline">Torna indietro</span>
                    </button>
                    <h1 className="article__title title-1">{post.name}</h1>
                    <div className="article__info">
                        <ul className="article__tag-list">
                            {post.tags.map((tag) => (
                                <li className="article__tag-item">{tag}</li>
                            ))}
                        </ul>
                        <span className="article__date">{post.data}</span>
                    </div>
                    <div className="article__content">
                        <img
                            className="article__content-img"
                            src={post.imgSrc}
                            alt="content"
                        />
                        <div
                            className="article__body"
                            dangerouslySetInnerHTML={{__html: post.content}}
                        />
                    </div>
                    <button className="article__up arrow" onClick={scrollToTop}>
                        <span className="underline">Sopra</span>
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

export default Article;
