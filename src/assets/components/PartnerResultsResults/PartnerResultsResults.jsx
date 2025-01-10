import React from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectResults } from "../../../redux/slices/resultsPartnerSlice";
import { setOpenContactForm } from "../../../redux/slices/contactFormSlice";


import { toRim, fixYear, fixDay, fixNegative } from "../../js/numberRim";

import "./styles.scss";

import { Link } from "react-router-dom";

import LinkTo from "../Link/Link";
import Button from "../../components/Button/Button";
import ResultsList from "../ResultsList/ResultsList";
import PartnerResultsList from "../PartnerResultsList/PartnerResultsList";

function PartnerResultsResults() {
  const [results, setResults] = React.useState(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const savedData = localStorage.getItem("partnerResultsData");
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
      posH,
      posG1,
      posG2,
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
      jointPosH,
      jointPosG1,
      jointPosG2,
    };
  };
  const jointResults = calculateJointPositions(results1, results2);

  const resultsData = [
    {
      num: "1",
      name: "Talenti e modelli comportamentali di base",
      archetypeNum: toRim(jointResults.jointPos1),
    },
    {
      num: "2",
      name: "L'archetipo delle lezioni e la maturazione psicologica",
      archetypeNum: toRim(jointResults.jointPos2),
    },
    {
      num: "3",
      name: "Un'abilità che deve essere acquisita e migliorata",
      archetypeNum: toRim(jointResults.jointPos3),
    },
    {
      num: "4",
      name: "Paure, complessi",
      archetypeNum: toRim(jointResults.jointPos4),
    },
    {
      num: "5",
      name: "Aree di autorealizzazione",
      archetypeNum: toRim(jointResults.jointPos5),
    },
    {
      num: "6",
      name: "Superpoteri",
      archetypeNum: toRim(jointResults.jointPos6),
    },
    {
      num: "7",
      name: "Scopo previsto",
      archetypeNum: toRim(jointResults.jointPos7),
    },
    {
      num: "8",
      name: "Abilità che facilitano l'ingresso nel piano degli obiettivi",
      archetypeNum: toRim(jointResults.jointPos8),
    },
    {
      num: "9",
      name: "Abilità genetica (karmica)",
      archetypeNum: toRim(jointResults.jointPos9),
    },
    {
      num: "10",
      name: "Abilità genetica (karmica) negativa",
      archetypeNum: toRim(jointResults.jointPos10),
    },
    {
      num: "11",
      name: "Destino karmico",
      archetypeNum: toRim(jointResults.jointPos11),
    },
    {
      num: "12",
      name: "L'archetipo del comfort psicologico",
      archetypeNum: toRim(jointResults.jointPos12),
    },
    {
      num: "13",
      name: "Cosa pensi di te stesso",
      archetypeNum: toRim(jointResults.jointPos13),
    },
    {
      num: "14",
      name: "Cosa pensano gli altri di voi",
      archetypeNum: toRim(jointResults.jointPos14),
    },
    {
      num: "15",
      name: "L'archetipo del disagio psicologico",
      archetypeNum: toRim(jointResults.jointPos15),
    },
    {
      num: "A",
      name: "Il bambino interiore",
      archetypeNum: toRim(jointResults.jointPosA),
    },
    {
      num: "B",
      name: "Parte sjointResults.jointPostata",     //???
      archetypeNum: toRim(jointResults.jointPosB),
    },
    {
      num: "C",
      name: "L'anelito dell'anima",
      archetypeNum: toRim(jointResults.jointPosC),
    },
    {
      num: "D",
      name: "jointResults.jointPosizione di stress", //???
      archetypeNum: toRim(jointResults.jointPosD),
    },
    {
      num: "E",
      name: 'Adulto interno ("protettore")',
      archetypeNum: toRim(jointResults.jointPosE),
    },
    {
      num: "F",
      name: "Fonte di forza",
      archetypeNum: toRim(jointResults.jointPosF),
    },
    {
      num: "H",
      name: "Il regno della distruzione personale",
      archetypeNum: toRim(jointResults.jointPosH),
    },
    {
      num: "G1",
      name: "Trasmissione di segnali",
      archetypeNum: toRim(jointResults.jointPosG1),
    },
    {
      num: "G2",
      name: "Assistenza alla realizzazione sociale",
      archetypeNum: toRim(jointResults.jointPosG2),
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
          {/* <span>
            {newDay}, {newMonth}, {newYear}, {newDay2},{newMonth2}, {newYear2}
          </span> */}
          <h1 className="partner-results__title title-1">
            IL RISULTATO DEL CALCOLO DELL'ARCHETIPO
          </h1>
          <div className="partner-results__content">
            <div className="partner-results__body-list">
              <span className="partner-results__body-date">
                {results.day} / {results.month} / {results.year}
              </span>
              <ResultsList {...results1}></ResultsList>
              {/* <span className="partner-results__body-name  partner-results__body-name--1">
                UN GRAFICO DEL VOSTRO ARCHETIPO
              </span> */}
            </div>
            <div className="partner-results__body-list">
              <span className="partner-results__body-date">
                {results.day2} / {results.month2} / {results.year2}
              </span>
              <ResultsList {...results2}></ResultsList>
              {/* <span className="partner-results__body-name partner-results__body-name--2">
                IL GRAFICO DELL'ARCHETIPO DEL VOSTRO PARTNER
              </span> */}
            </div>

            <div className="partner-results__text-wrapper">
              <p className="partner-results__text">
                LA POSIZIONE CENTRALE NELL'ANALISI DELLE RELAZIONI È CONSIDERATA
                LA POSIZIONE 2 - NARRAZIONE DELLA RELAZIONE.
              </p>
              <p className="partner-results__text">
                Quando si vive la seconda posizione, ogni partner passa la
                lezione personale della propria scuola di maturazione
                psicologica e la lezione congiunta, attraverso la quale prosegue
                la maturazione psicologica della coppia. E se la lezione
                personale è unica per tutta la vita, la lezione congiunta è di
                solito diversa in ogni relazione.
              </p>
              <p className="partner-results__text">
                Nella compatibilità archetipica dei partner nati il{" "}
                <span>
                  {results.day} / {results.month} / {results.year}
                </span>{" "}
                e l'{" "}
                <span>
                  {results.day2} / {results.month2} / {results.year2}
                </span>{" "}
                sulla posizione del Soggetto delle relazioni sia positive che
                negative compare l'archetipo Morte XIII. L'unione di
                trasformazione reciproca attraverso un forte cambiamento.
                Cambiamento sia esterno che interno. La trama sotto il controllo
                dell'archetipo Morte cambierà entrambi irrevocabilmente, e li
                cambierà costantemente. Bisogna imparare ad accettare questi
                cambiamenti. Non ci deve essere stagnazione nella relazione. Uno
                scenario negativo è il desiderio di cambiare l'altro, mentre si
                resiste a qualsiasi cambiamento. C'è una crescente irritazione
                reciproca, scandali e processi. E poi ci sono molti malesseri in
                campo. La coppia è in crisi".
              </p>
            </div>

            <ul className="partner-results__name-list">
              <li className="partner-results__name-item">
                IL GRAFICO DELL'ARCHETIPO DEL VOSTRO PARTNER
              </li>
              <li className="partner-results__name-item">
                UN GRAFICO DEL VOSTRO ARCHETIPO
              </li>

              <li className="partner-results__name-item">
                IL VOSTRO ARCHETIPO (premere il numero)
              </li>
            </ul>
            <div className="partner-results__body-list">
              <span className="partner-results__body-date">
                {results.day} / {results.month} / {results.year} E{results.day2}{" "}
                / {results.month2} / {results.year2}
              </span>
              <PartnerResultsList {...jointResults}></PartnerResultsList>
              {/* <span className="partner-results__body-name partner-results__body-name--3">
                COMPATIBILITÀ 24.03.1909 E 1.10.1910
              </span> */}
            </div>
            <div className="partner-results__info">
              <ul className="partner-results__info-list">
                <li className="partner-results__info-item">
                  <span className="partner-results__info-number underline">
                    NUMERO
                  </span>
                  <p className="partner-results__info-name underline">
                    VALORE DELLA POSIZIONE
                  </p>
                  <span className="partner-results__info-archetype underline">
                    IL VOSTRO ARCHETIPO (premere il numero)
                  </span>
                </li>
                {resultsData.map((result, index) => (
                  <li className="partner-results__info-item" key={index}>
                    <span className="partner-results__info-number">
                      {result.num}
                    </span>
                    <p className="partner-results__info-name">{result.name}</p>
                    <Link
                      className="partner-results__info-archetype"
                      to={`/archetypes/${result.archetypeNum}`}
                    >
                      {result.archetypeNum}
                    </Link>
                    {/* <span className="partner-results__info-archetype">
                      {result.archetypeNum}
                    </span> */}
                  </li>
                ))}
              </ul>

              {/* <LinkTo
                text="CONSULTAZIONE"
                className="partner-results__info-link"
              ></LinkTo> */}
                     <Button
                text="CONSULTAZIONE"
                className="partner-results__info-link"
                onClick={() => dispatch(setOpenContactForm(true))}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnerResultsResults;
