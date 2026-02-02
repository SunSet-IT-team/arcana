import React from 'react';
import {useDispatch} from 'react-redux';
import {setOpenContactForm} from '../../../redux/slices/contactFormSlice';
import {fixDay, fixYear, toRim} from '../../js/numberRim';

import './styles.scss';

import {Link} from 'react-router-dom';

import Button from '../../components/Button/Button';

function MonthResultsResults() {
    const [results, setResults] = React.useState(null);
    const dispatch = useDispatch();

    React.useEffect(() => {
        const savedData = localStorage.getItem('monthResultsData');
        if (savedData) {
            setResults(JSON.parse(savedData));
        }
    }, []);

    if (!results) {
        return <p>Загрузка...</p>;
    }

    const birthDay = Number(results.day);
    const birthMonth = Number(results.month);
    const birthYear = fixYear(Number(results.year));
    const newMonth = Number(results.month2);
    const newYear = fixYear(Number(results.year2));

    const pos1 = fixDay(birthDay + newYear);
    const pos2 = fixDay(birthMonth + newYear);
    const pos3 = fixDay(birthYear + newYear);
    const pos4 = fixDay(pos1 + pos2);
    const pos5 = fixDay(pos2 + pos3);
    const pos6 = fixDay(
        birthDay + birthMonth + (birthMonth + birthYear) + newYear
    );
    const pos7 = fixDay(birthDay + birthMonth + newYear);

    const pos8 = fixDay(pos7 + pos4);
    const pos9 = fixDay(birthMonth + birthYear + newYear);
    const pos10 = fixDay(pos9 + pos5);
    const pos11 = fixDay(pos6 + pos2);
    const pos12 = fixDay(birthMonth + newMonth);
    const pos13 = fixDay(pos12 + pos3);

    return (
        <section className="month-results">
            <div className="container">
                <div className="month-results__wrapper">
                    <Link
                        to="/month-calculator"
                        className="month-results__back-link back-arrow"
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
                    <h1 className="month-results__title title-1">
                        РЕЗУЛЬТАТ РАСЧЁТА НА ВЫБРАННЫЙ МЕСЯЦ
                    </h1>
                    <div className="month-results__content">
                        <span className="month-results__span">
                            <p>
                                Поздравляем! Ниже представлена подробная таблица
                                архетипических энергий на запрашиваемый период.
                            </p>
                            <p>
                                Осознание энергий, на которых следует
                                сосредоточиться, даёт нам возможность проживать
                                каждый этап нашей жизни наиболее гармонично и
                                эффективно.
                            </p>
                        </span>
                        <div className="month-results__body">
                            <div class="month-results__tables">
                                <div class="month-results__table month-results__table-top">
                                    <div class="month-results__table-left">
                                        <div className="month-results__table-item">
                                            ВНУТРЕННЕЕ <br /> ЧУВСТВО <br />
                                            МЕСЯЦА
                                        </div>
                                        <div className="month-results__table-item">
                                            {toRim(pos12)}
                                        </div>
                                        <div className="month-results__table-item">
                                            ЛИЧНЫЙ <br /> ФОКУС <br /> МЕСЯЦА
                                        </div>
                                        <div className="month-results__table-item">
                                            {toRim(pos13)}
                                        </div>
                                    </div>
                                    <div class="month-results__table-right">
                                        <div className="month-results__table-item">
                                            РОСТ <br /> ГОДА
                                        </div>
                                        <div className="month-results__table-item">
                                            {toRim(pos1)}
                                        </div>
                                        <div className="month-results__table-item">
                                            ЭМОЦИОНАЛЬНОЕ <br /> НАПРЯЖЕНИЕ
                                        </div>
                                        <div className="month-results__table-item">
                                            {toRim(pos4)}
                                        </div>
                                        <div className="month-results__table-item">
                                            УРОКИ <br /> ГОДА
                                        </div>
                                        <div className="month-results__table-item">
                                            {toRim(pos2)}
                                        </div>
                                        <div className="month-results__table-item">
                                            НАПРЯЖЕНИЕ В <br /> ИЗМЕНЕНИИ <br />{' '}
                                            СОЗНАНИЯ
                                        </div>
                                        <div className="month-results__table-item">
                                            {toRim(pos5)}
                                        </div>
                                        <div className="month-results__table-item">
                                            ЭКЗАМЕН <br /> ГОДА
                                        </div>
                                        <div className="month-results__table-item">
                                            {toRim(pos3)}
                                        </div>
                                        <div className="month-results__table-item">
                                            ОСНОВНАЯ <br /> ТЕМА
                                        </div>
                                        <div className="month-results__table-item">
                                            {toRim(pos6)}
                                        </div>
                                    </div>
                                </div>
                                <div class="month-results__table month-results__table-bottom">
                                    <div class="month-results__table-left">
                                        <div className="month-results__table-item">
                                            ЛИЧНОЕ РУКОВОДСТВО
                                        </div>
                                        <div className="month-results__table-item">
                                            {toRim(pos11)}
                                        </div>
                                    </div>
                                    <div class="month-results__table-right">
                                        <div className="month-results__table-item">
                                            ЭМОЦИОНАЛЬНАЯ <br /> НЕСТАБИЛЬНОСТЬ
                                        </div>
                                        <div className="month-results__table-item">
                                            {toRim(pos7)}
                                        </div>
                                        <div className="month-results__table-item">
                                            РАСШИРЕНИЕ <br /> СОЗНАНИЯ
                                        </div>
                                        <div className="month-results__table-item">
                                            {toRim(pos9)}
                                        </div>
                                        <div className="month-results__table-item">
                                            РИСКИ
                                        </div>
                                        <div className="month-results__table-item">
                                            {toRim(pos8)}
                                        </div>
                                        <div className="month-results__table-item">
                                            ВОЗМОЖНОСТИ
                                        </div>
                                        <div className="month-results__table-item">
                                            {toRim(pos10)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="month-results__body-text">
                                Если вы хотите применить этот прогноз в своей
                                жизни, чтобы понять, какой период приближается,
                                какой путь выбрать и как лучше спланировать свои
                                цели, запишитесь на консультацию, нажав на
                                кнопку ниже.
                            </p>

                            <Button
                                text="ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ"
                                className="month-results__body-link"
                                onClick={() =>
                                    dispatch(setOpenContactForm(true))
                                }
                            ></Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MonthResultsResults;
