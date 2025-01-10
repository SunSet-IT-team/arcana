import React from 'react';

import './styles.scss';

import StorysStory from '../../components/StorysStory/StorysStory';
import GoToPage from '../../components/GoToPage/GoToPage';

const Storys = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <GoToPage></GoToPage>
            <StorysStory />
        </>
    );
};
export default Storys;
