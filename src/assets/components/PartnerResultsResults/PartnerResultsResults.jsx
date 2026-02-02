import React from 'react';

import {useDispatch} from 'react-redux';
import {setOpenContactForm} from '../../../redux/slices/contactFormSlice';

import {fixDay, fixNegative, fixYear, toRim} from '../../js/numberRim';

import './styles.scss';

import {Link} from 'react-router-dom';

import Button from '../../components/Button/Button';
import PartnerResultsList from '../PartnerResultsList/PartnerResultsList';
import ResultsList from '../ResultsList/ResultsList';

function PartnerResultsResults() {
    const [results, setResults] = React.useState(null);
    const dispatch = useDispatch();

    React.useEffect(() => {
        const savedData = localStorage.getItem('partnerResultsData');
        if (savedData) {
            setResults(JSON.parse(savedData));
        }
    }, []);

    if (!results) {
        return <p>Загрузка...</p>;
    }

    const newDay = Number(results.day);
    const newMonth = Number(results.month);
    const newYear = fixYear(Number(results.year));
    const newDay2 = Number(results.day2);
    const newMonth2 = Number(results.month2);
    const newYear2 = fixYear(Number(results.year2));

    const calculatePositions = (day, month, year) => {
        const pos1 = day;
        const pos2 = month;
        const pos3 = year;

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
        const posG1 = fixDay(posC + posD);
        const posG2 = fixDay(posB + posF);

        return {
            pos1,
            pos2,
            pos3,
            pos4,
            pos5,
            pos6,
            pos7,
            pos8,
            pos9,
            pos10,
            pos11,
            pos12,
            pos13,
            pos14,
            pos15,
            posA,
            posB,
            posC,
            posD,
            posE,
            posF,
        };
    };

    const results1 = calculatePositions(newDay, newMonth, newYear);
    const results2 = calculatePositions(newDay2, newMonth2, newYear2);

    const calculateJointPositions = (results1, results2) => {
        const jointPos1 = fixDay(results1.pos1 + results2.pos1);
        const jointPos2 = fixDay(results1.pos2 + results2.pos2);
        const jointPos3 = fixDay(results1.pos3 + results2.pos3);

        const jointPos4 = fixDay(results1.pos4 + results2.pos4);
        const jointPos5 = fixDay(results1.pos5 + results2.pos5);
        const jointPos6 = fixDay(results1.pos6 + results2.pos6);
        const jointPos7 = fixDay(results1.pos7 + results2.pos7);
        const jointPos8 = fixDay(results1.pos8 + results2.pos8);
        const jointPos9 = fixNegative(results1.pos9, results2.pos9);
        const jointPos10 = fixNegative(results1.pos10, results2.pos10);
        const jointPos11 = fixNegative(results1.pos11, results2.pos11);
        const jointPos12 = fixDay(results1.pos12 + results2.pos12);
        const jointPos13 = fixDay(results1.pos13 + results2.pos13);
        const jointPos14 = fixDay(results1.pos14 + results2.pos14);
        const jointPos15 = fixDay(results1.pos15 + results2.pos15);
        const jointPosA = fixDay(results1.posA + results2.posA);
        const jointPosB = fixDay(results1.posB + results2.posB);
        const jointPosC = fixDay(results1.posC + results2.posC);
        const jointPosD = fixDay(results1.posD + results2.posD);
        const jointPosE = fixDay(results1.posE + results2.posE);
        const jointPosF = fixDay(results1.posF + results2.posF);
        const jointPosH = fixDay(results1.posH + results2.posH);
        const jointPosG1 = fixDay(results1.posG1 + results2.posG1);
        const jointPosG2 = fixDay(results1.posG2 + results2.posG2);

        return {
            jointPos1,
            jointPos2,
            jointPos3,
            jointPos4,
            jointPos5,
            jointPos6,
            jointPos7,
            jointPos8,
            jointPos9,
            jointPos10,
            jointPos11,
            jointPos12,
            jointPos13,
            jointPos14,
            jointPos15,
            jointPosA,
            jointPosB,
            jointPosC,
            jointPosD,
            jointPosE,
            jointPosF,
        };
    };
    const jointResults = calculateJointPositions(results1, results2);

    const resultsData = [
        {
            num: '1',
            name: 'Встреча',
            archetypeNum: toRim(jointResults.jointPos1),
        },
        {
            num: '2',
            name: 'Сюжет отношений',
            archetypeNum: toRim(jointResults.jointPos2),
        },
        {
            num: '3',
            name: 'Зрелость отношений или разрыв',
            archetypeNum: toRim(jointResults.jointPos3),
        },
        {
            num: '4',
            name: 'Кризис',
            archetypeNum: toRim(jointResults.jointPos4),
        },
        {
            num: '5',
            name: 'Ожидания',
            archetypeNum: toRim(jointResults.jointPos5),
        },
        {
            num: '6',
            name: 'Основная тема',
            archetypeNum: toRim(jointResults.jointPos6),
        },
        {
            num: '7',
            name: 'Миссия',
            archetypeNum: toRim(jointResults.jointPos7),
        },
        {
            num: '8',
            name: 'Суперпотенциал',
            archetypeNum: toRim(jointResults.jointPos8),
        },
        {
            num: 'A',
            name: 'Конфликт',
            archetypeNum: toRim(jointResults.jointPosA),
        },
        {
            num: 'B',
            name: 'Разрушение',
            archetypeNum: toRim(jointResults.jointPosB),
        },
        {
            num: 'C',
            name: 'Слияние',
            archetypeNum: toRim(jointResults.jointPosC),
        },
        {
            num: 'D',
            name: 'Стресс',
            archetypeNum: toRim(jointResults.jointPosD),
        },
        {
            num: 'E',
            name: 'Защитник',
            archetypeNum: toRim(jointResults.jointPosE),
        },
        {
            num: 'F',
            name: 'Сила',
            archetypeNum: toRim(jointResults.jointPosF),
        },
    ];

    return (
        <section className="partner-results">
            <div className="container">
                <div className="partner-results__wrapper">
                    <Link
                        to="/partner-calculator"
                        className="partner-results__back-link back-arrow"
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

                    <h1 className="partner-results__title title-1">
                        РЕЗУЛЬТАТ РАСЧЁТА АРХЕТИПИЧЕСКОЙ КАРТЫ ОТНОШЕНИЙ
                    </h1>
                    <div className="partner-results__content">
                        <div className="partner-results__body-list">
                            <span className="partner-results__body-date">
                                {results.day} / {results.month} / {results.year}
                            </span>
                            <span className="partner-results__name-item-mobile">
                                АРХЕТИПИЧЕСКАЯ КАРТА ВТОРОГО ПАРТНЁРА
                            </span>
                            <ResultsList {...results1}></ResultsList>
                        </div>
                        <div className="partner-results__body-list">
                            <span className="partner-results__body-date">
                                {results.day2} / {results.month2} /{' '}
                                {results.year2}
                            </span>
                            <span className="partner-results__name-item-mobile">
                                АРХЕТИПИЧЕСКАЯ КАРТА ПЕРВОГО ПАРТНЁРА
                            </span>
                            <ResultsList {...results2}></ResultsList>
                        </div>

                        <div className="partner-results__text-wrapper">
                            <p className="partner-results__text">
                                В анализе отношений центральную роль играет
                                позиция "Сюжет отношений".
                            </p>
                            <p className="partner-results__text">
                                Внутри отношений каждый партнёр следует своему
                                личному уроку, который определяется его
                                архетипической картой, и совместному уроку,
                                представляющему путь психологического роста
                                пары.
                            </p>

                            <p className="partner-results__text">
                                В то время как личный урок остаётся постоянным
                                на протяжении всей жизни, совместный урок может
                                варьироваться от одних отношений к другим.
                            </p>

                            <p className="partner-results__text">
                                Архетип, занимающий позицию "Сюжет отношений",
                                всегда активирует как позитивные, так и
                                негативные сценарии. Партнёры сталкиваются с
                                конкретными вызовами, которые требуют научиться
                                тому, что особенно трудно именно в этих
                                отношениях. Если эти уроки не поняты и не
                                интегрированы, запускается негативный сценарий в
                                развитии отношений, который может привести к
                                глубоким конфликтам, трудностям в реляционных
                                динамиках и, в крайних случаях, к разрыву
                                отношений или их трагическому завершению.
                            </p>
                        </div>

                        <ul className="partner-results__name-list">
                            <li className="partner-results__name-item">
                                АРХЕТИПИЧЕСКАЯ КАРТА ВТОРОГО ПАРТНЁРА
                            </li>
                            <li className="partner-results__name-item">
                                АРХЕТИПИЧЕСКАЯ КАРТА ПЕРВОГО ПАРТНЁРА
                            </li>

                            <li className="partner-results__name-item">
                                АРХЕТИПИЧЕСКАЯ КАРТА ОТНОШЕНИЙ
                            </li>
                        </ul>
                        <div className="partner-results__body-list">
                            <span className="partner-results__body-date">
                                {results.day} / {results.month} / {results.year}{' '}
                                И {results.day2} / {results.month2} /{' '}
                                {results.year2}
                            </span>
                            <span className="partner-results__name-item-mobile">
                                АРХЕТИПИЧЕСКАЯ КАРТА ОТНОШЕНИЙ
                            </span>
                            <PartnerResultsList
                                {...jointResults}
                            ></PartnerResultsList>
                        </div>
                        <div className="partner-results__info">
                            <ul className="partner-results__info-list">
                                <li className="partner-results__info-item">
                                    <span className="partner-results__info-number underline">
                                        НОМЕР
                                    </span>
                                    <p className="partner-results__info-name underline">
                                        ПОЗИЦИЯ
                                    </p>
                                    <span className="partner-results__info-archetype">
                                        <span
                                            className="underline"
                                            style={{paddingBottom: 1}}
                                        >
                                            АРХЕТИП
                                        </span>
                                    </span>
                                </li>
                                {resultsData.map((result, index) => (
                                    <li
                                        className="partner-results__info-item"
                                        key={index}
                                    >
                                        <span className="partner-results__info-number">
                                            {result.num}
                                        </span>
                                        <p className="partner-results__info-name">
                                            {result.name}
                                        </p>
                                        <Link
                                            className="partner-results__info-archetype"
                                            to={`/archetypes/${result.archetypeNum}`}
                                        >
                                            {result.archetypeNum}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                text="ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ"
                                className="partner-results__info-link"
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

export default PartnerResultsResults;
