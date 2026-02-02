import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    selectResults,
    setResults,
} from '../../../redux/slices/resultsMonthSlice';

import './styles.scss';

import {Link} from 'react-router-dom';

import LinkTo from '../Link/Link';

import SelectDate from '../SelectDate/SelectDate';
import SelectMonth from '../SelectMonth/SelectMonth';

function MonthCalculatorCalculator() {
    const dispatch = useDispatch();
    const results = useSelector(selectResults);

    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth2, setSelectedMonth2] = useState(
        (new Date().getMonth() + 1).toString()
    );
    const [selectedYear2, setSelectedYear2] = useState(
        new Date().getFullYear().toString()
    );
    const [isAllSelected, setIsAllSelected] = useState(false);

    const handleCalculateClick = () => {
        localStorage.setItem(
            'monthResultsData',
            JSON.stringify({
                day: selectedDay,
                month: selectedMonth,
                year: selectedYear,
                month2: selectedMonth2,
                year2: selectedYear2,
            })
        );
        dispatch(
            setResults({
                day: selectedDay,
                month: selectedMonth,
                year: selectedYear,
                month2: selectedMonth2,
                year2: selectedYear2,
            })
        );
    };

    useEffect(() => {
        setIsAllSelected(
            selectedDay !== '' &&
                selectedMonth !== '' &&
                selectedYear !== '' &&
                selectedMonth2 !== '' &&
                selectedYear2 !== ''
        );
    }, [
        selectedDay,
        selectedMonth,
        selectedYear,
        selectedMonth2,
        selectedYear2,
    ]);
    return (
        <section className="month-calculator">
            <div className="container">
                <div className="month-calculator__wrapper">
                    <Link
                        to="/"
                        className="month-calculator__back-link back-arrow"
                        href="#"
                    >
                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21 0H0V1H19.29L0 20.29V21H0.71L1 20.71L1.71 20L20 1.71V21H21V0Z"
                                fill="currentColor"
                            />
                        </svg>
                        <span className="underline">Назад</span>
                    </Link>
                    <h1 className="month-calculator__title title-1">
                        РАССЧИТАТЬ ПРОГНОЗЫ НА ГОД И МЕСЯЦ
                    </h1>
                    <div className="month-calculator__content">
                        <span className="month-calculator__span">
                            Узнайте, какие архетипические энергии влияют на вашу
                            жизнь, введя дату рождения и интересующий период.
                        </span>
                        <div className="month-calculator__body">
                            <div className="month-calculator__select-wrapper">
                                <SelectDate
                                    selectedDay={selectedDay}
                                    selectedMonth={selectedMonth}
                                    selectedYear={selectedYear}
                                    setSelectedDay={setSelectedDay}
                                    setSelectedMonth={setSelectedMonth}
                                    setSelectedYear={setSelectedYear}
                                ></SelectDate>
                            </div>
                            <div className="month-calculator__select-wrapper">
                                <SelectMonth
                                    selectedMonth2={selectedMonth2}
                                    selectedYear2={selectedYear2}
                                    setSelectedMonth2={setSelectedMonth2}
                                    setSelectedYear2={setSelectedYear2}
                                    minDate={2025}
                                ></SelectMonth>
                            </div>

                            <div
                                className={`month-calculator__link-wrapper ${
                                    isAllSelected
                                        ? ''
                                        : 'month-calculator__link-wrapper--disabled'
                                }`}
                                onClick={
                                    isAllSelected ? handleCalculateClick : null
                                }
                            >
                                <LinkTo
                                    text="РАССЧИТАТЬ"
                                    path="month-results"
                                    className="partner-calculator__body-link"
                                ></LinkTo>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MonthCalculatorCalculator;
