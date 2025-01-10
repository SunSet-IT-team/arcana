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

    const resultsData = [
        {
            num: '1',
            name: 'Talenti e modelli comportamentali di base',
            archetypeNum: toRim(pos1),
        },
        {
            num: '2',
            name: "L'archetipo delle lezioni e la maturazione psicologica",
            archetypeNum: toRim(pos2),
        },
        {
            num: '3',
            name: "Un'abilità che deve essere acquisita e migliorata",
            archetypeNum: toRim(pos3),
        },
        {
            num: '4',
            name: 'Paure, complessi',
            archetypeNum: toRim(pos4),
        },
        {
            num: '5',
            name: 'Aree di autorealizzazione',
            archetypeNum: toRim(pos5),
        },
        {
            num: '6',
            name: 'Superpoteri',
            archetypeNum: toRim(pos6),
        },
        {
            num: '7',
            name: 'Scopo previsto',
            archetypeNum: toRim(pos7),
        },
        {
            num: '8',
            name: "Abilità che facilitano l'ingresso nel piano degli obiettivi",
            archetypeNum: toRim(pos8),
        },
        {
            num: '9',
            name: 'Abilità genetica (karmica)',
            archetypeNum: toRim(pos9),
        },
        {
            num: '10',
            name: 'Abilità genetica (karmica) negativa',
            archetypeNum: toRim(pos10),
        },
        {
            num: '11',
            name: 'Destino karmico',
            archetypeNum: toRim(pos11),
        },
        {
            num: '12',
            name: "L'archetipo del comfort psicologico",
            archetypeNum: toRim(pos12),
        },
        {
            num: '13',
            name: 'Cosa pensi di te stesso',
            archetypeNum: toRim(pos13),
        },
        {
            num: '14',
            name: 'Cosa pensano gli altri di voi',
            archetypeNum: toRim(pos14),
        },
        {
            num: '15',
            name: "L'archetipo del disagio psicologico",
            archetypeNum: toRim(pos15),
        },
        {
            num: 'A',
            name: 'Il bambino interiore',
            archetypeNum: toRim(posA),
        },
        {
            num: 'B',
            name: 'Parte spostata',
            archetypeNum: toRim(posB),
        },
        {
            num: 'C',
            name: "L'anelito dell'anima",
            archetypeNum: toRim(posC),
        },
        {
            num: 'D',
            name: 'Posizione di stress',
            archetypeNum: toRim(posD),
        },
        {
            num: 'E',
            name: 'Adulto interno ("protettore")',
            archetypeNum: toRim(posE),
        },
        {
            num: 'F',
            name: 'Fonte di forza',
            archetypeNum: toRim(posF),
        },
        {
            num: 'H',
            name: 'Il regno della distruzione personale',
            archetypeNum: toRim(posH),
        },
        {
            num: 'G1',
            name: 'Trasmissione di segnali',
            archetypeNum: toRim(posG1),
        },
        {
            num: 'G2',
            name: 'Assistenza alla realizzazione sociale',
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
                        IL RISULTATO DEL CALCOLO DELL'ARCHETIPO
                    </h1>
                    <div className="results__content">
                        <div className="results__body">
                            <p className="results__body-text">
                                Congratulazioni! Ora sai quali Archetipi si
                                mostrano in te. Queste sono le «lettere» che
                                compongono le parole e le frasi con quali stai
                                scrivendo la storia della tua vita. Cliccando su
                                un numero romano che indica l’Archetipo
                                corrispondente ad ogni posizione del tuo
                                Profilo, troverai una descrizione delle
                                principali energie di questo Archetipo.
                            </p>
                            <div className="results__body-list">
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
                                    <span className="results__info-number underline">
                                        NUMERO
                                    </span>
                                    <p className="results__info-name underline">
                                        VALORE DELLA POSIZIONE
                                    </p>
                                    <span className="results__info-archetype underline">
                                        IL VOSTRO ARCHETIPO (premere il numero)
                                    </span>
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
                                Tuttavia, in ogni singola posizione, lo stesso
                                Archetipo si comporta in modo diverso,
                                influenzando gli Archetipi nelle posizioni
                                circostanti in un modo specifico e questo crea
                                il disegno della personalità unico per ciascuno
                                di noi. Per collegare gli Archetipi tutti
                                insieme per una comprensione profonda e olistica
                                della tua vita che ti aiuterà a comprendere
                                meglio sé stesso, il proprio carattere, a
                                trovare le risposte alle tue domande chiedi una
                                consultazione, cliccando bottone sotto.
                            </p>
                            {/* <LinkTo text="CONSULTAZIONE"
                className="results__info-link"
              /> */}
                            <Button
                                text="CONSULTAZIONE"
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
