import {useEffect, useMemo, useState} from 'react';
import './styles.scss';

import {Link} from 'react-router-dom';

import Button from '../../components/Button/Button';
import BlogList from '../BlogList/BlogList';
import SelectLabel from '../Select/Select';

const blogOptions = [
    {value: 'TUTTI', label: 'TUTTI'},
    {value: 'ENERGIE BASE', label: 'ENERGIE BASE'},
    {value: 'ARHCETIPI', label: 'ARHCETIPI'},
    {value: 'PERSONE', label: 'PERSONE'},
    {value: 'VITA', label: 'VITA'},
    {value: 'PREVISIONI', label: 'PREVISIONI'},
    {value: 'EVENTI', label: 'EVENTI'},
    {value: 'MITI E FIABE', label: 'MITI E FIABE'},
];

const blogData = [
    {
        name: 'UNA STORIA DI GRANDE SUCCESSO PER UNA PICCOLA AZIENDA',
        tags: ['ENERGIE BASE', 'PREVISIONI'],
        text: "Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum. A differenza del lorem ipsum, il testo in russo riempirà qualsiasi spazio vuoto.",
        imgSrc: './images/storys/1.jpg',
        date: '05.04.2024',
    },
    {
        name: "UN'ALTRA STORIA DI SUCCESSO",
        tags: ['TECNOLOGIA', 'SVILUPPO'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisi nec lacinia luctus, metus nunc ultrices velit, at tincidunt mauris risus eget justo. Nulla sit amet scelerisque orci.',
        imgSrc: './images/storys/2.jpg',
        date: '05.04.2024',
    },
    {
        name: 'UNA STORIA DI GRANDE SUCCESSO PER UNA PICCOLA AZIENDA',
        tags: ['ENERGIE BASE', 'ARHCETIPI'],
        text: "Nella sua essenza, il testo ittico è un'alternativa al tradizionale lorem ipsum. A differenza del lorem ipsum, il testo in russo riempirà qualsiasi spazio vuoto.",
        imgSrc: './images/storys/1.jpg',
        date: '04.04.2024',
    },
    {
        name: "UN'ALTRA STORIA DI SUCCESSO",
        tags: ['TECNOLOGIA', 'SVILUPPO'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisi nec lacinia luctus, metus nunc ultrices velit, at tincidunt mauris risus eget justo. Nulla sit amet scelerisque orci.',
        imgSrc: './images/storys/2.jpg',
        date: '04.04.2024',
    },
    {
        name: "UN'ALTRA STORIA DI SUCCESSO",
        tags: ['TECNOLOGIA', 'VITA'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisi nec lacinia luctus, metus nunc ultrices velit, at tincidunt mauris risus eget justo. Nulla sit amet scelerisque orci.',
        imgSrc: './images/storys/2.jpg',
        date: '04.04.2024',
    },
    {
        name: "UN'ALTRA STORIA DI SUCCESSO",
        tags: ['TECNOLOGIA', 'SVILUPPO'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisi nec lacinia luctus, metus nunc ultrices velit, at tincidunt mauris risus eget justo. Nulla sit amet scelerisque orci.',
        imgSrc: './images/storys/2.jpg',
        date: '03.04.2024',
    },
    {
        name: "UN'ALTRA STORIA DI SUCCESSO",
        tags: ['TECNOLOGIA', 'SVILUPPO'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisi nec lacinia luctus, metus nunc ultrices velit, at tincidunt mauris risus eget justo. Nulla sit amet scelerisque orci.',
        imgSrc: './images/storys/2.jpg',
        date: '03.04.2024',
    },
    {
        name: "UN'ALTRA STORIA DI SUCCESSO",
        tags: ['TECNOLOGIA', 'SVILUPPO'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisi nec lacinia luctus, metus nunc ultrices velit, at tincidunt mauris risus eget justo. Nulla sit amet scelerisque orci.',
        imgSrc: './images/storys/2.jpg',
        date: '02.04.2024',
    },
    {
        name: "UN'ALTRA STORIA DI SUCCESSO",
        tags: ['TECNOLOGIA', 'SVILUPPO'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisi nec lacinia luctus, metus nunc ultrices velit, at tincidunt mauris risus eget justo. Nulla sit amet scelerisque orci.',
        imgSrc: './images/storys/2.jpg',
        date: '02.04.2024',
    },
    {
        name: "UN'ALTRA STORIA DI SUCCESSO",
        tags: ['TECNOLOGIA', 'SVILUPPO'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisi nec lacinia luctus, metus nunc ultrices velit, at tincidunt mauris risus eget justo. Nulla sit amet scelerisque orci.',
        imgSrc: './images/storys/2.jpg',
        date: '01.04.2024',
    },
    {
        name: "UN'ALTRA STORIA DI SUCCESSO",
        tags: ['TECNOLOGIA', 'SVILUPPO'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisi nec lacinia luctus, metus nunc ultrices velit, at tincidunt mauris risus eget justo. Nulla sit amet scelerisque orci.',
        imgSrc: './images/storys/2.jpg',
        date: '01.04.2024',
    },
];

function BlogBlog() {
    const [selectedBlogFilter, setSelectedBlogFilter] = useState('TUTTI');
    const [showCountArticles, setShowCountArticles] = useState(6);
    const [articles, setArticles] = useState(
        blogData.slice(0, showCountArticles)
    );
    const filteredArticles = useMemo(() => {
        return selectedBlogFilter === 'TUTTI'
            ? blogData
            : blogData.filter((item) => item.tags.includes(selectedBlogFilter));
    }, [selectedBlogFilter]);

    useEffect(() => {
        setArticles(filteredArticles.slice(0, showCountArticles));
    }, [filteredArticles, showCountArticles]);
    const handleShowMore = () => {
        setShowCountArticles((prev) => (prev += 2));
    };

    const handleBlogFilterChange = (selectedBlogFilter) => {
        setSelectedBlogFilter(selectedBlogFilter);
    };

    const hasMoreArticles = showCountArticles < filteredArticles.length;

    const BlogFilterItem = ({option, onClick}) => {
        return (
            <li
                className={`blog__filter-item underline ${selectedBlogFilter === option.value && 'blog__filter-item--active'}`}
                onClick={() => onClick(option.value)}
            >
                {option.label}
            </li>
        );
    };
    return (
        <section className="blog">
            <div className="container">
                <div className="blog__wrapper">
                    <Link
                        to="/"
                        className="blog__back-link back-arrow"
                        href="#"
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
                    </Link>
                    <h1 className="blog__title title-1">BLOG</h1>
                    <div className="blog__filter">
                        <ul className="blog__filter-list">
                            {blogOptions.map((option) => (
                                <BlogFilterItem
                                    key={option.value}
                                    option={option}
                                    onClick={handleBlogFilterChange}
                                />
                            ))}
                        </ul>
                        <SelectLabel
                            className="blog__filter-select"
                            options={blogOptions}
                            placeholder="TUTTI"
                            onChange={handleBlogFilterChange}
                            value={selectedBlogFilter}
                        />
                    </div>
                    <BlogList data={articles} />
                    {hasMoreArticles && (
                        <div className="blog__bottom" onClick={handleShowMore}>
                            <Button
                                text="VEDI ARTICOLI PRECEDENTI"
                                className="blog__button button--black blog__bottom-button"
                            ></Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default BlogBlog;
