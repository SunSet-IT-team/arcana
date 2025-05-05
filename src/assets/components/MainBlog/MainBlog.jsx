import React from 'react';

import TitleAnimation from '../../hooks/titleAnimation';

import './styles.scss';

import BlogList from '../BlogList/BlogList';
import Link from '../Link/Link';
import {useInfinitePosts} from '../../api/posts/usePosts';
import {LoadingSpinner} from '../LoadingSpinner/LoadingSpinner';

function MainBlog() {
    /**
     * Получение записей
     */
    const {data: posts, isPending} = useInfinitePosts();

    const allPosts = posts?.pages.flatMap((page) => page.posts) || [];

    return (
        <section className="blog-demo">
            <div className="container">
                <div className="blog-demo__wrapper">
                    <TitleAnimation
                        tag="h2"
                        className="blog-demo__title title title-2 title-animation"
                    >
                        <span>BLOG</span>
                    </TitleAnimation>

                    {allPosts && allPosts.length && (
                        <BlogList data={allPosts} isShowMore={false} />
                    )}
                    {isPending && <LoadingSpinner />}
                    <div className="blog-demo__link-wrapper">
                        <Link
                            text="TUTTI GLI ARTICOLI DEL BLOG"
                            className="blog-demo__link link--black"
                            path="blog"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainBlog;
