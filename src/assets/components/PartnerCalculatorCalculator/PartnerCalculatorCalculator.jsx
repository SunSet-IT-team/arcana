import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    selectResults,
    setResults,
} from '../../../redux/slices/resultsMonthSlice';

import './styles.scss';

import {Link} from 'react-router-dom';

import LinkTo from '../Link/Link';
import {
    default as SelectDate,
    default as SelectDate2,
} from '../SelectDate/SelectDate';

function PartnerCalculatorCalculator() {
    const dispatch = useDispatch();
    const results = useSelector(selectResults);

    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedDay2, setSelectedDay2] = useState('');
    const [selectedMonth2, setSelectedMonth2] = useState('');
    const [selectedYear2, setSelectedYear2] = useState('');
    const [isAllSelected, setIsAllSelected] = useState(false);

    const handleCalculateClick = () => {
        localStorage.setItem(
            'partnerResultsData',
            JSON.stringify({
                day: selectedDay,
                month: selectedMonth,
                year: selectedYear,
                day2: selectedDay2,
                month2: selectedMonth2,
                year2: selectedYear2,
            })
        );
        dispatch(
            setResults({
                day: selectedDay,
                month: selectedMonth,
                year: selectedYear,
                day2: selectedDay2,
                month2: selectedMonth2,
                year2: selectedYear2,
            })
        );
        console.log('данные переданы');
    };

    useEffect(() => {
        setIsAllSelected(
            selectedDay !== '' &&
                selectedMonth !== '' &&
                selectedYear !== '' &&
                selectedDay2 !== '' &&
                selectedMonth2 !== '' &&
                selectedYear2 !== ''
        );
    }, [
        selectedDay,
        selectedMonth,
        selectedYear,
        selectedDay2,
        selectedMonth2,
        selectedYear2,
    ]);

    return (
        <section className="partner-calculator">
            <div className="container">
                <div className="partner-calculator__wrapper">
                    <Link
                        to="/"
                        className="partner-calculator__back-link back-arrow"
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
                        <span className="underline">Torna indietro</span>
                    </Link>
                    <h1 className="partner-calculator__title title-1">
                        CALCOLARE LA COMPATIBILITÀ DEL PARTNER
                    </h1>
                    <div className="partner-calculator__content">
                        <span className="partner-calculator__span">
                            Inserite la data di nascita vostra e del vostro
                            partner
                        </span>
                        <div className="partner-calculator__body">
                            <h2 className="partner-calculator__body-title">
                                CALCOLARE LA COMPATIBILITÀ DELLE RELAZIONI DI
                                COPPIA IN BASE AGLI ARCHETIPI
                            </h2>
                            <div className="partner-calculator__select-wrapper">
                                <SelectDate
                                    selectedDay={selectedDay}
                                    selectedMonth={selectedMonth}
                                    selectedYear={selectedYear}
                                    setSelectedDay={setSelectedDay}
                                    setSelectedMonth={setSelectedMonth}
                                    setSelectedYear={setSelectedYear}
                                ></SelectDate>
                            </div>
                            <div className="partner-calculator__select-wrapper">
                                <SelectDate2
                                    selectedDay={selectedDay2}
                                    selectedMonth={selectedMonth2}
                                    selectedYear={selectedYear2}
                                    setSelectedDay={setSelectedDay2}
                                    setSelectedMonth={setSelectedMonth2}
                                    setSelectedYear={setSelectedYear2}
                                ></SelectDate2>
                            </div>
                            <div
                                className={`partner-calculator__link-wrapper ${
                                    isAllSelected
                                        ? ''
                                        : 'partner-calculator__link-wrapper--disabled'
                                }`}
                                onClick={
                                    isAllSelected ? handleCalculateClick : null
                                }
                            >
                                <LinkTo
                                    text="CALCOLARE"
                                    path="partner-results"
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

export default PartnerCalculatorCalculator;
