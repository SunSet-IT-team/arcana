import React from 'react';
import {useDispatch} from 'react-redux';
import {setOpenContactForm} from '../../../redux/slices/contactFormSlice';

import {toRim, fixYear, fixDay, fixNegative} from '../../js/numberRim';

import './styles.scss';

import {Link} from 'react-router-dom';

import LinkTo from '../Link/Link';
import Button from '../../components/Button/Button';

import ResultsList from '../ResultsList/ResultsList';

function ResultsResults() {
    const [results, setResults] = React.useState(null);
    const dispatch = useDispatch();

    React.useEffect(() => {
        const savedData = localStorage.getItem('resultsData');
        if (savedData) {
            setResults(JSON.parse(savedData));
        }
    }, []);

    if (!results) {
        return <p>Загрузка...</p>;
    }

    const newDay = fixDay(Number(results.day));
    const newMonth = Number(results.month);
    const newYear = fixYear(Number(results.year));

    const pos1 = newDay;
    const pos2 = newMonth;
    const pos3 = newYear;

    const pos4 = fixDay(pos1 + pos2);
    const pos5 = fixDay(pos2 + pos3);
    const pos6 = fixDay(pos4 + pos5);
    const pos7 = fixDay(pos4 + pos3);
    const pos8 = fixDay(pos2 + pos6);
    const pos9 = fixNegative(pos2, pos1);
    const pos10 = fixNegative(pos3, pos2);
    const pos11 = fixNegative(pos9, pos10);
    const pos12 = fixDay(pos7 + pos8);
    const pos13 = fixDay(pos1 + pos4 + pos6);
    const pos14 = fixDay(pos3 + pos5 + pos6);
    const pos15 = fixDay(pos9 + pos10 + pos11);
    const posA = fixDay(pos1 + pos4);
    const posB = fixDay(pos2 + pos4);
    const posC = fixDay(pos2 + pos5);
    const posD = fixDay(pos3 + pos5);
    const posE = fixDay(pos4 + pos6);
    const posF = fixDay(pos5 + pos6);
    const posH = fixDay(posA + posE);
    const posG1 = fixDay(posB + posF);
    const posG2 = fixDay(posC + posD);

    const resultsData = [
        {
            num: '1',
            name: 'Базовые таланты',
            archetypeNum: toRim(pos1),
        },
        {
            num: '2',
            name: 'Уроки жизни',
            archetypeNum: toRim(pos2),
        },
        {
            num: '3',
            name: 'Экзамен',
            archetypeNum: toRim(pos3),
        },
        {
            num: '4',
            name: 'Эмоциональный комплекс',
            archetypeNum: toRim(pos4),
        },
        {
            num: '5',
            name: 'Ментальный комплекс',
            archetypeNum: toRim(pos5),
        },
        {
            num: '6',
            name: 'Основная тема',
            archetypeNum: toRim(pos6),
        },
        {
            num: '7',
            name: 'Предназначение',
            archetypeNum: toRim(pos7),
        },
        {
            num: '8',
            name: 'Скрытые способности',
            archetypeNum: toRim(pos8),
        },
        {
            num: '9',
            name: 'Генетический потенциал',
            archetypeNum: toRim(pos9),
        },
        {
            num: '10',
            name: 'Негативные паттерны',
            archetypeNum: toRim(pos10),
        },
        {
            num: '11',
            name: 'Кармический экзамен',
            archetypeNum: toRim(pos11),
        },
        {
            num: '12',
            name: 'Психологический комфорт',
            archetypeNum: toRim(pos12),
        },
        {
            num: '13',
            name: 'Самовосприятие',
            archetypeNum: toRim(pos13),
        },
        {
            num: '14',
            name: 'Восприятие другими',
            archetypeNum: toRim(pos14),
        },
        {
            num: 'A',
            name: 'Детская потребность',
            archetypeNum: toRim(posA),
        },
        {
            num: 'B',
            name: 'Детская травма',
            archetypeNum: toRim(posB),
        },
        {
            num: 'C',
            name: 'Испытание эго',
            archetypeNum: toRim(posC),
        },
        {
            num: 'D',
            name: 'Стресс',
            archetypeNum: toRim(posD),
        },
        {
            num: 'E',
            name: 'Разрушение',
            archetypeNum: toRim(posE),
        },
        {
            num: 'F',
            name: 'Божественный источник',
            archetypeNum: toRim(posF),
        },
        {
            num: 'H',
            name: 'Защитник',
            archetypeNum: toRim(posH),
        },
        {
            num: 'G1',
            name: 'Архетипическая мать',
            archetypeNum: toRim(posG1),
        },
        {
            num: 'G2',
            name: 'Архетипический отец',
            archetypeNum: toRim(posG2),
        },
    ];

    return (
        <section className="results">
            <div className="container">
                <div className="results__wrapper">
                    <Link
                        to="/calculator"
                        className="results__back-link back-arrow"
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
                    <h1 className="results__title title-1">
                        АРХЕТИПИЧЕСКАЯ КАРТА РОЖДЕНИЯ
                    </h1>
                    <div className="results__content">
                        <div className="results__body">
                            <p className="results__body-text">
                                Поздравляем! Ниже представлена архетипическая
                                карта рождения, рассчитанная на основе введённой
                                даты рождения. Нажимая на римскую цифру,
                                соответствующую архетипу каждой позиции карты,
                                вы найдёте описание основных характеристик этого
                                архетипа.
                            </p>
                            <div className="results__body-list">
                                <span className="results__body-date">
                                    {results.day} / {results.month} /{' '}
                                    {results.year}
                                </span>
                                <ResultsList
                                    pos1={pos1}
                                    pos2={pos2}
                                    pos3={pos3}
                                    pos4={pos4}
                                    pos5={pos5}
                                    pos6={pos6}
                                    pos7={pos7}
                                    pos8={pos8}
                                    pos9={pos9}
                                    pos10={pos10}
                                    pos11={pos11}
                                    pos12={pos12}
                                    pos13={pos13}
                                    pos14={pos14}
                                    pos15={pos15}
                                    posA={posA}
                                    posB={posB}
                                    posC={posC}
                                    posD={posD}
                                    posE={posE}
                                    posF={posF}
                                    posH={posH}
                                    posG1={posG1}
                                    posG2={posG2}
                                />
                            </div>
                        </div>

                        <div className="results__info">
                            <ul className="results__info-list">
                                <li className="results__info-item">
                                    <p className="results__info-number underline">
                                        НОМЕР
                                    </p>
                                    <p className="results__info-name underline">
                                        ПОЗИЦИЯ
                                    </p>
                                    <p className="results__info-archetype">
                                        <span className="underline">
                                            АРХЕТИП
                                        </span>
                                    </p>
                                </li>
                                {resultsData.map((result, index) => (
                                    <li
                                        className="results__info-item"
                                        key={index}
                                    >
                                        <span className="results__info-number">
                                            {result.num}
                                        </span>
                                        <p className="results__info-name">
                                            {result.name}
                                        </p>
                                        <Link
                                            className="results__info-archetype"
                                            to={`/archetypes/${result.archetypeNum}`}
                                        >
                                            {result.archetypeNum}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <p className="results__info-text">
                                Каждый архетип проявляется уникально в
                                зависимости от его позиции на карте. Его влияние
                                меняется со временем и может выражаться в зрелой
                                или искажённой форме в зависимости от ваших
                                выборов и вызовов. Чтобы понять, что вы
                                переживаете, нужен целостный взгляд: напряжения,
                                союзы и конфликты между внутренними силами
                                показывают, где вы находитесь, раскрывают
                                невидимые механизмы, дают смысл событиям и
                                помогают сориентироваться в переменах. Если
                                пришло время обратиться к тому, что
                                действительно важно, начните отсюда. Нажмите на
                                кнопку, чтобы записаться на консультацию.
                            </p>
                            <Button
                                text="ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ"
                                className="results__info-link"
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

export default ResultsResults;
