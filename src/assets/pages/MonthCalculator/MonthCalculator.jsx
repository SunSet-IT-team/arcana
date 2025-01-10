import React from 'react';

import './styles.scss';

import MonthCalculatorCalculator from '../../components/MonthCalculatorCalculator/MonthCalculatorCalculator';
import GoToPage from '../../components/GoToPage/GoToPage';

const MonthCalculator = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <GoToPage></GoToPage>
            <MonthCalculatorCalculator />
        </>
    );
};
export default MonthCalculator;
