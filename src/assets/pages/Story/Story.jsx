import React from 'react';

import './styles.scss';

import StoryStory from '../../components/StoryStory/StoryStory';
import GoToPage from '../../components/GoToPage/GoToPage';

const Story = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <GoToPage></GoToPage>
            <StoryStory />
        </>
    );
};
export default Story;
