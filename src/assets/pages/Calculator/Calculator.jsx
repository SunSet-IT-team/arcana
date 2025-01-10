import React from 'react';

import './styles.scss';

import CalculatorCalculator from '../../components/CalculatorCalculator/CalculatorCalculator';
import GoToPage from '../../components/GoToPage/GoToPage';

const Calculator = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <GoToPage></GoToPage>
            <CalculatorCalculator />
        </>
    );
};
export default Calculator;
