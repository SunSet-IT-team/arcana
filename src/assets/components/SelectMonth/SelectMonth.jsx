import React from 'react';
import './styles.scss';

import SelectLabel from '../Select/Select';

function SelectMonth({
    selectedMonth2,
    selectedYear2,
    setSelectedMonth2,
    setSelectedYear2,
    minDate = 1990,
}) {
    const monthOptions = [
        {value: '1', label: 'ЯНВАРЬ'},
        {value: '2', label: 'ФЕВРАЛЬ'},
        {value: '3', label: 'МАРТ'},
        {value: '4', label: 'АПРЕЛЬ'},
        {value: '5', label: 'МАЙ'},
        {value: '6', label: 'ИЮНЬ'},
        {value: '7', label: 'ИЮЛЬ'},
        {value: '8', label: 'АВГУСТ'},
        {value: '9', label: 'СЕНТЯБРЬ'},
        {value: '10', label: 'ОКТЯБРЬ'},
        {value: '11', label: 'НОЯБРЬ'},
        {value: '12', label: 'ДЕКАБРЬ'},
    ];
    const yearOptions = Array.from({length: 61}, (_, index) => {
        const year = minDate + index;
        return {
            value: year.toString(),
            label: year.toString(),
        };
    });

    const handleMonthChange = (selectedMonth2) => {
        setSelectedMonth2(selectedMonth2);
    };

    const handleYearChange = (selectedYear2) => {
        setSelectedYear2(selectedYear2);
    };

    return (
        <ul className="select-month">
            <span className="select-month__item">выберите месяц и год</span>
            <li className="select-month__item">
                <SelectLabel
                    options={monthOptions}
                    placeholder="ЯНВАРЬ"
                    onChange={handleMonthChange}
                    value={selectedMonth2}
                />
            </li>
            <li className="select-month__item">
                <SelectLabel
                    options={yearOptions}
                    placeholder="1990"
                    onChange={handleYearChange}
                    value={selectedYear2}
                />
            </li>
        </ul>
    );
}

export default SelectMonth;
