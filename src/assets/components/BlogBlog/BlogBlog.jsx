import {useState} from 'react';
import './styles.scss';

import {Link} from 'react-router-dom';

import Button from '../../components/Button/Button';
import BlogList from '../BlogList/BlogList';
import SelectLabel from '../Select/Select';
import {useTags} from '../../api/tags/useTags';
import {useInfinitePosts} from '../../api/posts/usePosts';
import {LoadingSpinner} from '../LoadingSpinner/LoadingSpinner';

function BlogBlog() {
    const [isShowClipPath, setIsShowClipPath] = useState(false);
    const [selectedBlogFilter, setSelectedBlogFilter] = useState({
        label: 'TUTTI',
        value: 0,
    });

    /**
     * Получение тегов
     */
    const {data: tags, isPending: isTagPending} = useTags();

    const tagIds = [selectedBlogFilter.value].filter((el) => el > 0);

    /**
     * Получение записей
     */
    const {
        data: posts,
        isPending: isPostPending,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfinitePosts({
        tagIds,
    });

    /**
     * Показать больше
     */
    const handleShowMore = () => {
        fetchNextPage();
        if (!isShowClipPath) {
            setIsShowClipPath(true);
        }
    };

    /**
     * При изменении фильтра блога
     */
    const handleBlogFilterChange = (selectedBlogFilterValue) => {
        setSelectedBlogFilter(
            tags.find((el) => el.value == selectedBlogFilterValue) || null
        );
        if (!isShowClipPath) {
            setIsShowClipPath(true);
        }
    };

    const BlogFilterItem = ({option, onClick}) => {
        return (
            <li
                className={`blog__filter-item underline ${selectedBlogFilter.value === option.value && 'blog__filter-item--active'}`}
                onClick={() => onClick(option.value)}
            >
                {option.label}
            </li>
        );
    };

    const allPosts = posts?.pages.flatMap((page) => page.posts) || [];

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
                            {[...tags].slice(0, 8).map((option) => (
                                <BlogFilterItem
                                    key={option.value}
                                    option={option}
                                    onClick={handleBlogFilterChange}
                                />
                            ))}
                        </ul>
                        <SelectLabel
                            className="blog__filter-select"
                            options={tags}
                            placeholder="TUTTI"
                            onChange={handleBlogFilterChange}
                            value={selectedBlogFilter.value}
                        />
                    </div>

                    <BlogList data={allPosts} isShowClipPath={isShowClipPath} />
                    {(isPostPending || isFetchingNextPage) && (
                        <LoadingSpinner />
                    )}

                    {!(isPostPending || isFetchingNextPage) &&
                        !allPosts.length && <h3>Nessun record</h3>}

                    {hasNextPage && (
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
