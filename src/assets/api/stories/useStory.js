import {useQuery} from '@tanstack/react-query';
import {BASE_API} from '../constants';

const fetchStoryBySlug = async (slug) => {
    const response = await fetch(
        `${BASE_API}/story?slug=${slug}&_embed&_t=${Date.now()}`
    );

    if (!response.ok) throw new Error('Ошибка загрузки записи');

    const posts = await response.json();

    if (!posts.length) throw new Error('Запись не найдена');

    const post = posts[0]; // Берем первую запись (slug уникален)

    // Форматируем данные в тот же формат, что и в fetchPosts
    const allTerms = post._embedded?.['wp:term']?.flat() || [];
    const tags = allTerms
        .filter((term) => term.taxonomy === 'tag_story')
        .map((term) => term.name);

    const postDate = new Date(post.date);
    const formattedDate = [
        postDate.getDate().toString().padStart(2, '0'),
        (postDate.getMonth() + 1).toString().padStart(2, '0'),
        postDate.getFullYear(),
    ].join('.');

    const decodeEntities = (str) => {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = str;
        return textarea.value;
    };

    return {
        id: post.id,
        name: decodeEntities(post.title.rendered),
        tags: tags,
        text: post.excerpt?.rendered
            ? post.excerpt.rendered.replace(/<[^>]+>/g, '').trim()
            : '',
        imgSrc:
            post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
            './images/default.jpg',
        date: formattedDate,
        slug: post.slug,
        content: post.content?.rendered.replace(/<p>\s*<\/p>/g, '<br/>') || '', // Добавляем полное содержание
    };
};

export const useStory = (slug) => {
    return useQuery({
        queryKey: ['wp-story', slug],
        queryFn: () => fetchStoryBySlug(slug),
        staleTime: 60 * 1000, // 1 минута кэширования
    });
};
