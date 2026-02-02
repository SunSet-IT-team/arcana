import React, {useState, useEffect} from 'react';
import './styles.scss';

import SelectLabel from '../../components/Select/Select';

function SelectDate({
    selectedDay,
    selectedMonth,
    selectedYear,
    setSelectedDay,
    setSelectedMonth,
    setSelectedYear,
}) {
    const calculateDaysInMonth = (month, year) => {
        switch (month) {
            case '1':
            case '3':
            case '5':
            case '7':
            case '8':
            case '10':
            case '12':
                return 31;
            case '4':
            case '6':
            case '9':
            case '11':
                return 30;
            case '2':
                return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
                    ? 29
                    : 28;
            default:
                return 31;
        }
    };

    const daysInMonth = calculateDaysInMonth(selectedMonth, selectedYear);

    useEffect(() => {
        if (selectedDay && daysInMonth < parseInt(selectedDay)) {
            setSelectedDay('');
        }
    }, [selectedMonth, selectedYear, selectedDay]);

    // setting the current date
    useEffect(() => {
        const today = new Date();
        const currentDay = today.getDate().toString();
        const currentMonth = (today.getMonth() + 1).toString();
        const currentYear = today.getFullYear().toString();

        setSelectedDay(currentDay);
        setSelectedMonth(currentMonth);
        setSelectedYear(currentYear);
    }, [setSelectedDay, setSelectedMonth, setSelectedYear]);

    const dateOptions = Array.from({length: daysInMonth}, (_, index) => ({
        value: (index + 1).toString(),
        label: (index + 1).toString(),
    }));

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

    const yearOptions = Array.from({length: 121}, (_, index) => {
        const year = 1930 + index;
        return {
            value: year.toString(),
            label: year.toString(),
        };
    });

    const handleDayChange = (selectedDay) => {
        setSelectedDay(selectedDay);
    };

    const handleMonthChange = (selectedMonth) => {
        setSelectedMonth(selectedMonth);
    };

    const handleYearChange = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    return (
        <ul className="select-date">
            <li className="select-date__item">
                <SelectLabel
                    options={dateOptions}
                    placeholder="01"
                    onChange={handleDayChange}
                    value={selectedDay}
                />
            </li>
            <li className="select-date__item">
                <SelectLabel
                    options={monthOptions}
                    placeholder="ЯНВАРЬ"
                    onChange={handleMonthChange}
                    value={selectedMonth}
                />
            </li>
            <li className="select-date__item">
                <SelectLabel
                    options={yearOptions}
                    placeholder="1930"
                    onChange={handleYearChange}
                    value={selectedYear}
                />
            </li>
        </ul>
    );
}

export default SelectDate;
