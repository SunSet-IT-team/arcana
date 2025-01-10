import React from 'react';
import {useDispatch} from 'react-redux';
import {toRim, fixYear, fixDay, fixNegative} from '../../js/numberRim';
import {setOpenContactForm} from '../../../redux/slices/contactFormSlice';

import './styles.scss';

import {Link} from 'react-router-dom';

import LinkTo from '../Link/Link';
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
        return <p>Loading...</p>;
    }

    const newDay = Number(results.day);
    const newMonth = Number(results.month);
    const newYear = fixYear(Number(results.year));
    const newMonth2 = Number(results.month2);
    const newYear2 = fixYear(Number(results.year2));

    const pos1 = toRim(fixDay(newMonth + newMonth2));
    const pos2 = toRim(fixDay(newMonth + newMonth2 + newYear + newYear2));
    const pos3 = toRim(fixDay((newDay + 2) * (newYear2 + newMonth)));
    const pos4 = toRim(fixDay(newMonth + newYear2));
    const pos5 = toRim(fixDay((newMonth + 2) * (newYear2 + newYear)));
    const pos6 = toRim(fixDay(newYear + newYear2));

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
                        <span className="underline">Torna indietro</span>
                    </Link>
                    <span>
                        {newDay}, {newMonth}, {newYear}, {newMonth2}, {newYear2}
                    </span>
                    <h1 className="month-results__title title-1">
                        IL RISULTATO DEL CALCOLO DELL'ARCHETIPO
                    </h1>
                    <div className="month-results__content">
                        <span className="month-results__span">
                            Congratulazioni! Ora sai quali Archetipi si mostrano
                            in te. Queste sono le «lettere» che compongono le
                            parole e le frasi con quali stai scrivendo la storia
                            della tua vita. Cliccando su un numero romano che
                            indica l’Archetipo corrispondente ad ogni posizione
                            del tuo Profilo, troverai una descrizione delle
                            principali energie di questo Archetipo.
                        </span>
                        <div className="month-results__body">
                            <ul className="month-results__tables">
                                <li className="month-results__table">
                                    <ul className="month-results__table-contents month-results__table-contents--2">
                                        <li className="month-results__table-content month-results__table-content--is">
                                            Interno sentimento del mese (IS)
                                        </li>
                                        <li className="month-results__table-content">
                                            {pos1}
                                        </li>
                                        <li className="month-results__table-content month-results__table-content--ee">
                                            Esterno eventi esterni (EE)
                                        </li>
                                        <li className="month-results__table-content">
                                            {pos2}
                                        </li>
                                    </ul>
                                </li>
                                <li className="month-results__table">
                                    <ul className="month-results__table-contents month-results__table-contents--4">
                                        <li className="month-results__table-content month-results__table-content--s">
                                            Zona di stress per anno (S)
                                        </li>
                                        <li className="month-results__table-content">
                                            {pos3}
                                        </li>
                                        <li className="month-results__table-content month-results__table-content--r">
                                            Zona risorsa per anno (R)
                                        </li>
                                        <li className="month-results__table-content">
                                            {pos5}
                                        </li>
                                        <li className="month-results__table-content month-results__table-content--s2">
                                            Scuola dell'anno (S)
                                        </li>
                                        <li className="month-results__table-content">
                                            {pos4}
                                        </li>
                                        <li className="month-results__table-content month-results__table-content--e">
                                            Esame anni (E)
                                        </li>
                                        <li className="month-results__table-content">
                                            {pos6}
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <p className="month-results__body-text">
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
                            {/* <LinkTo
                text="CONSULTAZIONE"
                className="month-results__body-link"
              ></LinkTo> */}
                            <Button
                                text="CONSULTAZIONE"
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
