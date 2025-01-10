import React from 'react';

import './styles.scss';

import PartnerResultsResults from '../../components/PartnerResultsResults/PartnerResultsResults';
import GoToPage from '../../components/GoToPage/GoToPage';

const Results = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <GoToPage></GoToPage>
            <PartnerResultsResults />
        </>
    );
};
export default Results;
