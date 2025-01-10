import React from 'react';
import './styles.scss';

import SelectLabel from '../Select/Select';

function SelectMonth({
    selectedMonth2,
    selectedYear2,
    setSelectedMonth2,
    setSelectedYear2,
}) {
    const monthOptions = [
        {value: '1', label: 'GENNAIO'},
        {value: '2', label: 'FEBBRAIO'},
        {value: '3', label: 'MARZO'},
        {value: '4', label: 'APRILE'},
        {value: '5', label: 'MAGGIO'},
        {value: '6', label: 'GIUGNO'},
        {value: '7', label: 'LUGLIO'},
        {value: '8', label: 'AGOSTO'},
        {value: '9', label: 'SETTEMBRE'},
        {value: '10', label: 'OTTOBRE'},
        {value: '11', label: 'NOVEMBRE'},
        {value: '12', label: 'DICEMBRE'},
    ];
    const yearOptions = Array.from({length: 61}, (_, index) => {
        const year = 1990 + index;
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
            <span className="select-month__item">selezionare il mese/anno</span>
            <li className="select-month__item">
                <SelectLabel
                    options={monthOptions}
                    placeholder="GENNAIO"
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
