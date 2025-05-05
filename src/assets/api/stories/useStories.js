import {useInfiniteQuery} from '@tanstack/react-query';
import {BASE_API} from '../constants';

const fetchStories = async ({pageParam = 1, perPage = 10, tagIds = []}) => {
    const tagsQuery = tagIds.length > 0 ? `&tag_story=${tagIds.join(',')}` : '';
    const response = await fetch(
        `${BASE_API}/story?page=${pageParam}&per_page=${perPage}${tagsQuery}&_embed`
    );

    if (!response.ok) throw new Error('Ошибка загрузки записей');

    const posts = await response.json();

    const formattedPosts = posts.map((post) => {
        // Получаем ВСЕ термины (категории + теги)
        const allTerms = post._embedded?.['wp:term']?.flat() || [];

        // Фильтруем только теги (где taxonomy === 'tag_story')
        const tags = allTerms
            .filter((term) => term.taxonomy === 'tag_story')
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

export const useInfiniteStories = (params = {}) => {
    const {perPage = 30, tagIds = []} = params;
    return useInfiniteQuery({
        queryKey: ['wp-stories', {tagIds}],
        queryFn: ({pageParam = 1}) =>
            fetchStories({pageParam, perPage, tagIds}),
        getNextPageParam: (lastPage) => {
            return lastPage.currentPage < lastPage.totalPages
                ? lastPage.currentPage + 1
                : undefined;
        },
        keepPreviousData: true,
    });
};
