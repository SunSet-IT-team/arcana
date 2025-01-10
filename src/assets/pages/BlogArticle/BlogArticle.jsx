import React from 'react';

import Article from '../../components/Article/Article';
import GoToPage from '../../components/GoToPage/GoToPage';

const BlogArticle = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <GoToPage></GoToPage>
            <Article />
        </>
    );
};
export default BlogArticle;
