import {useQuery} from '@tanstack/react-query';
import {BASE_API} from '../constants';

const fetchAllStoryTags = async () => {
    const response = await fetch(
        `${BASE_API}/tag_story?per_page=20&orderby=count&order=desc`
    );
    if (!response.ok) throw new Error('Ошибка загрузки тегов');
    return response.json();
};

export const useStoryTags = () => {
    return useQuery({
        queryKey: ['wp-story-tags'],
        queryFn: fetchAllStoryTags,
        staleTime: 60 * 1000, // 1 минута кэширования
        select: (data) => {
            return [
                {label: 'TUTTI', value: 0},
                ...data.map((tag) => ({
                    value: tag.id, // используем ID как значение
                    label: tag.name, // используем название как метку
                })),
            ];
        },
    });
};
