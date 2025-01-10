import React from 'react';

import './styles.scss';

import ArchetypesArchetypes from '../../components/ArchetypesArchetypes/ArchetypesArchetypes';

import GoToPage from '../../components/GoToPage/GoToPage';

const Archetypes = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <GoToPage></GoToPage>

            <ArchetypesArchetypes />
        </>
    );
};
export default Archetypes;
