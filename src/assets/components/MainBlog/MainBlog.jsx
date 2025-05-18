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

    //Так попросила заказчица 🤷‍♂️
    const allPosts = posts?.pages.flatMap((page) => page.posts) || [];
    // const allPosts = [];

    const blogData = [
        // {
        //     name: 'UNA STORIA DI GRANDE SUCCESSO PER UNA PICCOLA AZIENDA',
        //     tags: ['ENERGIE BASE', 'PREVISIONI'],
        //     text: "Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum. A differenza del lorem ipsum, il testo in russo riempirà qualsiasi spazio vuoto.",
        //     imgSrc: './images/storys/1.jpg',
        //     date: '01.04.2024',
        // },
        // {
        //     name: "UN'ALTRA STORIA DI SUCCESSO",
        //     tags: ['TECNOLOGIA', 'SVILUPPO'],
        //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisi nec lacinia luctus, metus nunc ultrices velit, at tincidunt mauris risus eget justo. Nulla sit amet scelerisque orci.',
        //     imgSrc: './images/storys/2.jpg',
        //     date: '02.04.2024',
        // },
        // {
        //     name: 'UNA STORIA DI GRANDE SUCCESSO PER UNA PICCOLA AZIENDA',
        //     tags: ['ENERGIE BASE', 'PREVISIONI'],
        //     text: "Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum. A differenza del lorem ipsum, il testo in russo riempirà qualsiasi spazio vuoto.",
        //     imgSrc: './images/storys/1.jpg',
        //     date: '01.04.2024',
        // },
    ];

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

                    {allPosts && allPosts.length > 0 && (
                        <>
                            <BlogList data={allPosts} isShowMore={false} />
                            <div className="blog-demo__link-wrapper">
                                <Link
                                    text="TUTTI GLI ARTICOLI DEL BLOG"
                                    className="blog-demo__link link--black"
                                    path="blog"
                                />
                            </div>
                        </>
                    )}
                    {!allPosts.length && (
                        <h3 style={{textAlign: 'center'}}>Nessun record</h3>
                    )}
                </div>
            </div>
        </section>
    );
}

export default MainBlog;
