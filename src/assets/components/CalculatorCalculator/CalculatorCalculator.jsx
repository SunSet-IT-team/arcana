import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectResults, setResults} from '../../../redux/slices/resultsSlice';

import './styles.scss';

import {Link} from 'react-router-dom';
import LinkTo from '../Link/Link';
import SelectDate from '../SelectDate/SelectDate';

function CalculatorCalculator() {
    const dispatch = useDispatch();
    const results = useSelector(selectResults);

    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [isAllSelected, setIsAllSelected] = useState(false);

    const handleCalculateClick = () => {
        localStorage.setItem(
            'resultsData',
            JSON.stringify({
                day: selectedDay,
                month: selectedMonth,
                year: selectedYear,
            })
        );
        dispatch(
            setResults({
                day: selectedDay,
                month: selectedMonth,
                year: selectedYear,
            })
        );
    };

    useEffect(() => {
        setIsAllSelected(selectedDay && selectedMonth && selectedYear);
    }, [selectedDay, selectedMonth, selectedYear]);

    return (
        <section className="calculator">
            <div className="container">
                <div className="calculator__wrapper">
                    <Link
                        to="/"
                        className="calculator__back-link back-arrow"
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

                    <h1 className="calculator__title title-1">
                        CALCOLA LA MAPPA ARCHETIPICA
                    </h1>
                    <div className="calculator__content">
                        <span className="calculator__span">
                            Inserire la data di nascita
                        </span>
                        <div className="calculator__body">
                            <h2 className="calculator__body-title">
                                Decifra la tua mappa archetipica
                            </h2>
                            <SelectDate
                                selectedDay={selectedDay}
                                selectedMonth={selectedMonth}
                                selectedYear={selectedYear}
                                setSelectedDay={setSelectedDay}
                                setSelectedMonth={setSelectedMonth}
                                setSelectedYear={setSelectedYear}
                            ></SelectDate>
                            <div
                                className={`calculator__link-wrapper ${
                                    isAllSelected
                                        ? ''
                                        : 'calculator__link-wrapper--disabled'
                                }`}
                                onClick={
                                    isAllSelected ? handleCalculateClick : null
                                }
                            >
                                <LinkTo
                                    text="CALCOLARE"
                                    path="results"
                                    className="calculator__body-link"
                                    // className="partner-calculator__body-link"
                                ></LinkTo>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CalculatorCalculator;
