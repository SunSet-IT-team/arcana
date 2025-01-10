import React from 'react';

import './styles.scss';

import ArchetypeArchetype from '../../components/ArchetypeArchetype/ArchetypeArchetype';
import GoToPage from '../../components/GoToPage/GoToPage';

const Archetype = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <GoToPage></GoToPage>
            <ArchetypeArchetype />
        </>
    );
};
export default Archetype;
