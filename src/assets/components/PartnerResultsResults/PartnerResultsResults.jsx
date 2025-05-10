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
        return <p>Loading...</p>;
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
            // posH,
            // posG1,
            // posG2,
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
            // jointPosH,
            // jointPosG1,
            // jointPosG2,
        };
    };
    const jointResults = calculateJointPositions(results1, results2);

    const resultsData = [
        {
            num: '1',
            name: 'Incontro',
            archetypeNum: toRim(jointResults.jointPos1),
        },
        {
            num: '2',
            name: 'Trama',
            archetypeNum: toRim(jointResults.jointPos2),
        },
        {
            num: '3',
            name: 'Campo del rapporto maturo o della rottura del rapporto',
            archetypeNum: toRim(jointResults.jointPos3),
        },
        {
            num: '4',
            name: 'Crisi',
            archetypeNum: toRim(jointResults.jointPos4),
        },
        {
            num: '5',
            name: 'Aspettative',
            archetypeNum: toRim(jointResults.jointPos5),
        },
        {
            num: '6',
            name: 'Tema principale',
            archetypeNum: toRim(jointResults.jointPos6),
        },
        {
            num: '7',
            name: 'Missione',
            archetypeNum: toRim(jointResults.jointPos7),
        },
        {
            num: '8',
            name: 'Superpotenziale',
            archetypeNum: toRim(jointResults.jointPos8),
        },
        // {
        //     num: '9',
        //     name: 'Conforto psicologico',
        //     archetypeNum: toRim(jointResults.jointPos9),
        // },
        // {
        //     num: '10',
        //     name: 'Disagio psicologico',
        //     archetypeNum: toRim(jointResults.jointPos10),
        // },
        // {
        //     num: '11',
        //     name: 'Percezione di “noi”',
        //     archetypeNum: toRim(jointResults.jointPos11),
        // }, //////////////////////////////////////////////
        // {
        //     num: '12',
        //     name: 'Percezione “noi” dagli altri',
        //     archetypeNum: toRim(jointResults.jointPos12),
        // },
        // {
        //     num: '13',
        //     name: 'Cosa pensi di te stesso',
        //     archetypeNum: toRim(jointResults.jointPos13),
        // },
        // {
        //     num: '14',
        //     name: 'Cosa pensano gli altri di voi',
        //     archetypeNum: toRim(jointResults.jointPos14),
        // },
        // {
        //     num: '15',
        //     name: "L'archetipo del disagio psicologico",
        //     archetypeNum: toRim(jointResults.jointPos15),
        // },
        //////////////////////////////////////////////
        // {
        //     num: ' ',
        //     name: ' ',
        //     archetypeNum: ' ',
        // },
        // {
        //     num: ' ',
        //     name: ' ',
        //     archetypeNum: ' ',
        // },
        // {
        //     num: ' ',
        //     name: ' ',
        //     archetypeNum: ' ',
        // },
        // {
        //     num: ' ',
        //     name: ' ',
        //     archetypeNum: ' ',
        // }, //////////
        {
            num: 'A',
            name: 'Conflitto',
            archetypeNum: toRim(jointResults.jointPosA),
        },
        {
            num: 'B',
            name: 'Distruzione', //???
            archetypeNum: toRim(jointResults.jointPosB),
        },
        {
            num: 'C',
            name: 'Fusione',
            archetypeNum: toRim(jointResults.jointPosC),
        },
        {
            num: 'D',
            name: 'Stress', //???
            archetypeNum: toRim(jointResults.jointPosD),
        },
        {
            num: 'E',
            name: 'Difensore',
            archetypeNum: toRim(jointResults.jointPosE),
        },
        {
            num: 'F',
            name: 'Forza',
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
                        <span className="underline">Torna indietro</span>
                    </Link>

                    <h1 className="partner-results__title title-1">
                        Risultato del calcolo della mappa archetipica del
                        rapporto
                    </h1>
                    <div className="partner-results__content">
                        <div className="partner-results__body-list">
                            <span className="partner-results__body-date">
                                {results.day} / {results.month} / {results.year}
                            </span>
                            <span className="partner-results__name-item-mobile">
                                LA MAPPA ARCHETIPICA DEL SECONDO PARTNER
                            </span>
                            <ResultsList {...results1}></ResultsList>
                        </div>
                        <div className="partner-results__body-list">
                            <span className="partner-results__body-date">
                                {results.day2} / {results.month2} /{' '}
                                {results.year2}
                            </span>
                            <span className="partner-results__name-item-mobile">
                                LA MAPPA ARCHETIPICA DEL PRIMO PARTNER
                            </span>
                            <ResultsList {...results2}></ResultsList>
                        </div>

                        <div className="partner-results__text-wrapper">
                            <p className="partner-results__text">
                                Nell’analisi del rapporto di coppia, un ruolo
                                centrale è svolto dalla Posizione "Trama del
                                rapporto".
                            </p>
                            <p className="partner-results__text">
                                All'interno di una relazione, ogni partner segue
                                la propria lezione personale, che è determinata
                                dalla propria mappa archetipica, e una lezione
                                congiunta, che rappresenta il percorso di
                                crescita psicologica della coppia.
                            </p>

                            <p className="partner-results__text">
                                Mentre la lezione personale rimane costante
                                durante tutta la vita, quella congiunta può
                                variare da una relazione all’altra.
                            </p>

                            <p className="partner-results__text">
                                L’archetipo che occupa la posizione della “Trama
                                del rapporto” attiva sempre sia scenari positivi
                                che negativi. I partner si trovano ad affrontare
                                sfide specifiche che richiedono di imparare ciò
                                che risulta particolarmente difficile proprio in
                                quella relazione. Se queste lezioni non vengono
                                comprese e integrate, si innesca uno scenario
                                negativo nel percorso del rapporto, che può
                                portare a conflitti profondi, difficoltà nelle
                                dinamiche relazionali e, nei casi più estremi,
                                alla rottura della relazione o alla sua
                                conclusione tragica.
                            </p>
                        </div>

                        <ul className="partner-results__name-list">
                            <li className="partner-results__name-item">
                                LA MAPPA ARCHETIPICA DEL SECONDO PARTNER
                            </li>
                            <li className="partner-results__name-item">
                                LA MAPPA ARCHETIPICA DEL PRIMO PARTNER
                            </li>

                            <li className="partner-results__name-item">
                                LA MAPPA ARCHETIPICA DEL RAPPORTO
                            </li>
                        </ul>
                        <div className="partner-results__body-list">
                            <span className="partner-results__body-date">
                                {results.day} / {results.month} / {results.year}{' '}
                                E {results.day2} / {results.month2} /{' '}
                                {results.year2}
                            </span>
                            <span className="partner-results__name-item-mobile">
                                LA MAPPA ARCHETIPICA DEL RAPPORTO
                            </span>
                            <PartnerResultsList
                                {...jointResults}
                            ></PartnerResultsList>
                        </div>
                        <div className="partner-results__info">
                            <ul className="partner-results__info-list">
                                <li className="partner-results__info-item">
                                    <span className="partner-results__info-number underline">
                                        NUMERO
                                    </span>
                                    <p className="partner-results__info-name underline">
                                        POSIZIONE
                                    </p>
                                    <span className="partner-results__info-archetype">
                                        <span
                                            className="underline"
                                            style={{paddingBottom: 1}}
                                        >
                                            ARCHETIPO
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
                                text="RICHIEDI UNA CONSULENZA"
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
