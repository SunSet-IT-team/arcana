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
        return <p>Loading...</p>;
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
    const posG1 = fixDay(posC + posD);
    const posG2 = fixDay(posB + posF);

    // const resultsData = [
    //     {
    //         num: '1',
    //         name: 'Talenti e modelli comportamentali di base',
    //         archetypeNum: toRim(pos1),
    //     },
    //     {
    //         num: '2',
    //         name: "L'archetipo delle lezioni e la maturazione psicologica",
    //         archetypeNum: toRim(pos2),
    //     },
    //     {
    //         num: '3',
    //         name: "Un'abilità che deve essere acquisita e migliorata",
    //         archetypeNum: toRim(pos3),
    //     },
    //     {
    //         num: '4',
    //         name: 'Paure, complessi',
    //         archetypeNum: toRim(pos4),
    //     },
    //     {
    //         num: '5',
    //         name: 'Aree di autorealizzazione',
    //         archetypeNum: toRim(pos5),
    //     },
    //     {
    //         num: '6',
    //         name: 'Superpoteri',
    //         archetypeNum: toRim(pos6),
    //     },
    //     {
    //         num: '7',
    //         name: 'Scopo previsto',
    //         archetypeNum: toRim(pos7),
    //     },
    //     {
    //         num: '8',
    //         name: "Abilità che facilitano l'ingresso nel piano degli obiettivi",
    //         archetypeNum: toRim(pos8),
    //     },
    //     {
    //         num: '9',
    //         name: 'Abilità genetica (karmica)',
    //         archetypeNum: toRim(pos9),
    //     },
    //     {
    //         num: '10',
    //         name: 'Abilità genetica (karmica) negativa',
    //         archetypeNum: toRim(pos10),
    //     },
    //     {
    //         num: '11',
    //         name: 'Destino karmico',
    //         archetypeNum: toRim(pos11),
    //     },
    //     {
    //         num: '12',
    //         name: "L'archetipo del comfort psicologico",
    //         archetypeNum: toRim(pos12),
    //     },
    //     {
    //         num: '13',
    //         name: 'Cosa pensi di te stesso',
    //         archetypeNum: toRim(pos13),
    //     },
    //     {
    //         num: '14',
    //         name: 'Cosa pensano gli altri di voi',
    //         archetypeNum: toRim(pos14),
    //     },
    //     {
    //         num: '15',
    //         name: "L'archetipo del disagio psicologico",
    //         archetypeNum: toRim(pos15),
    //     },
    //     {
    //         num: 'A',
    //         name: 'Il bambino interiore',
    //         archetypeNum: toRim(posA),
    //     },
    //     {
    //         num: 'B',
    //         name: 'Parte spostata',
    //         archetypeNum: toRim(posB),
    //     },
    //     {
    //         num: 'C',
    //         name: "L'anelito dell'anima",
    //         archetypeNum: toRim(posC),
    //     },
    //     {
    //         num: 'D',
    //         name: 'Posizione di stress',
    //         archetypeNum: toRim(posD),
    //     },
    //     {
    //         num: 'E',
    //         name: 'Adulto interno ("protettore")',
    //         archetypeNum: toRim(posE),
    //     },
    //     {
    //         num: 'F',
    //         name: 'Fonte di forza',
    //         archetypeNum: toRim(posF),
    //     },
    //     {
    //         num: 'H',
    //         name: 'Il regno della distruzione personale',
    //         archetypeNum: toRim(posH),
    //     },
    //     {
    //         num: 'G1',
    //         name: 'Trasmissione di segnali',
    //         archetypeNum: toRim(posG1),
    //     },
    //     {
    //         num: 'G2',
    //         name: 'Assistenza alla realizzazione sociale',
    //         archetypeNum: toRim(posG2),
    //     },
    // ];

    const resultsData = [
        {
            num: '1',
            name: 'Energia di base',
            archetypeNum: toRim(pos1),
        },
        {
            num: '2',
            name: 'Lezioni',
            archetypeNum: toRim(pos2),
        },
        {
            num: '3',
            name: 'Esame',
            archetypeNum: toRim(pos3),
        },
        {
            num: '4',
            name: 'Complesso emotivo',
            archetypeNum: toRim(pos4),
        },
        {
            num: '5',
            name: 'Complesso mentale',
            archetypeNum: toRim(pos5),
        },
        {
            num: '6',
            name: 'Tema principale',
            archetypeNum: toRim(pos6),
        },
        {
            num: '7',
            name: 'Сompito della vita',
            archetypeNum: toRim(pos7),
        },
        {
            num: '8',
            name: 'Сapacità potenziali',
            archetypeNum: toRim(pos8),
        },
        {
            num: '9',
            name: 'Potenziale genetico',
            archetypeNum: toRim(pos9),
        },
        {
            num: '10',
            name: 'Abilità genetica negativa',
            archetypeNum: toRim(pos10),
        },
        {
            num: '11',
            name: 'Esame Karmico',
            archetypeNum: toRim(pos11),
        },
        {
            num: '12',
            name: 'Conforto psicologico',
            archetypeNum: toRim(pos12),
        },
        {
            num: '13',
            name: 'Percezione di sé',
            archetypeNum: toRim(pos13),
        },
        {
            num: '14',
            name: 'Percezione dagli altri',
            archetypeNum: toRim(pos14),
        },
        {
            num: 'A',
            name: 'Bisogno infantile',
            archetypeNum: toRim(posA),
        },
        {
            num: 'B',
            name: 'Trauma infantile',
            archetypeNum: toRim(posB),
        },
        {
            num: 'C',
            name: "Prova dell'ego",
            archetypeNum: toRim(posC),
        },
        {
            num: 'D',
            name: 'Stress',
            archetypeNum: toRim(posD),
        },
        {
            num: 'E',
            name: 'Distruzione',
            archetypeNum: toRim(posE),
        },
        {
            num: 'F',
            name: 'Fonte Divina',
            archetypeNum: toRim(posF),
        },
        {
            num: 'H',
            name: 'Difensore',
            archetypeNum: toRim(posH),
        },
        {
            num: 'G1',
            name: 'Madre archetipica',
            archetypeNum: toRim(posG1),
        },
        {
            num: 'G2',
            name: 'Padre archetipico',
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
                        <span className="underline">Torna indietro</span>
                    </Link>
                    <h1 className="results__title title-1">
                        {/* IL RISULTATO DEL CALCOLO DELL'ARCHETIPO */}
                        LA MAPPA ARCHETIPICA NATALE
                    </h1>
                    <div className="results__content">
                        <div className="results__body">
                            <p className="results__body-text">
                                Congratulazioni! Sotto si trova la mappa
                                archetipica natale calcolata dalla data di
                                nascita inserita. Cliccando sul numero romano
                                che indica archetipo corrispondente ad ogni
                                posizione della mappa, troverai la descrizione
                                di alcune delle principali caratteristiche
                                dell'archetipo.
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
                                        {/* Numero */}
                                        NUMERO
                                    </p>
                                    <p className="results__info-name underline">
                                        {/* Valore della posizione */}
                                        POSIZIONE
                                    </p>
                                    <p className="results__info-archetype">
                                        {/* Il vostro archetipo (premere il numero) */}
                                        <span className="underline">
                                            ARCHETIPO
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
                                Ogni archetipo si manifesta in modo unico, a
                                seconda della sua posizione nella mappa. La sua
                                influenza cambia nel tempo e può esprimersi in
                                forma matura o distorta, a seconda delle tue
                                scelte e sfide. Per capire ciò che vivi serve
                                uno sguardo d’insieme: tensioni, alleanze e
                                conflitti tra le forze interiori mostrano dove
                                sei, rivelano meccanismi invisibili, danno senso
                                agli eventi e aiutano a orientarti nel
                                cambiamento. Se è il momento di voltarti verso
                                ciò che conta davvero, inizia da qui. Clicca sul
                                bottone per fissare la tua consulenza.
                            </p>
                            {/* <LinkTo text="CONSULTAZIONE"
                className="results__info-link"
              /> */}
                            <Button
                                text="RICHIEDI UNA CONSULENZA"
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
