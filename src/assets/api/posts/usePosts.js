import {useInfiniteQuery} from '@tanstack/react-query';
import {BASE_API} from '../constants';

const fetchPosts = async ({pageParam = 1, perPage = 10, tagIds = []}) => {
    const tagsQuery = tagIds.length > 0 ? `&tags=${tagIds.join(',')}` : '';
    const response = await fetch(
        `${BASE_API}/posts?page=${pageParam}&per_page=${perPage}${tagsQuery}&_embed`
    );

    if (!response.ok) throw new Error('Ошибка загрузки записей');

    const posts = await response.json();

    const formattedPosts = posts.map((post) => {
        // Получаем ВСЕ термины (категории + теги)
        const allTerms = post._embedded?.['wp:term']?.flat() || [];

        // Фильтруем только теги (где taxonomy === 'post_tag')
        const tags = allTerms
            .filter((term) => term.taxonomy === 'post_tag')
            .map((term) => term.name);

        // Форматируем дату без внешних библиотек
        const postDate = new Date(post.date);
        const formattedDate = [
            postDate.getDate().toString().padStart(2, '0'),
            (postDate.getMonth() + 1).toString().padStart(2, '0'),
            postDate.getFullYear(),
        ].join('.');

        // Декодируем HTML-сущности в заголовке
        const decodeEntities = (str) => {
            const textarea = document.createElement('textarea');
            textarea.innerHTML = str;
            return textarea.value;
        };

        const title = decodeEntities(post.title.rendered);

        return {
            id: post.id,
            name: title,
            tags: tags,
            text: post.excerpt?.rendered
                ? post.excerpt.rendered.replace(/<[^>]+>/g, '').trim()
                : '',
            imgSrc:
                post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
                './images/default.jpg',
            date: formattedDate,
            slug: post.slug,
        };
    });

    return {
        posts: formattedPosts,
        totalPages: Number(response.headers.get('X-WP-TotalPages')) || 1,
        totalItems: Number(response.headers.get('X-WP-Total')) || 0,
        currentPage: pageParam,
    };
};

export const useInfinitePosts = (params = {}) => {
    const {perPage = 10, tagIds = []} = params;
    return useInfiniteQuery({
        queryKey: ['wp-posts', {tagIds}],
        queryFn: ({pageParam = 1}) => fetchPosts({pageParam, perPage, tagIds}),
        getNextPageParam: (lastPage) => {
            return lastPage.currentPage < lastPage.totalPages
                ? lastPage.currentPage + 1
                : undefined;
        },
        keepPreviousData: true,
    });
};
