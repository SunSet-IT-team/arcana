import React from "react";

import "./styles.scss";

import { Link } from "react-router-dom";

import SelectLabel from "../../components/Select/Select";

function ArchetypesArchetypes() {
  const [selectedArchetypesFilter, setSelectedArchetypesFilter] =
    React.useState("TUTTI");

  const handleArchetypesFilterChange = (selectedArchetypesFilter) => {
    setSelectedArchetypesFilter(selectedArchetypesFilter);
  };

  React.useEffect(() => {
    const handleResize = () => {
      const storyItems = document.querySelectorAll(".storys__item");
      storyItems.forEach((item) => {
        if (item.offsetWidth > 335) {
          item.classList.add("storys__item--big");
        } else {
          item.classList.remove("storys__item--big");
        }
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const archetypesData = [
    {
      title: "IL MAGO",
      number: "I",
      positive: "PAROLA",
      negative: "PROMESSE VUOTE",
    },
    {
      title: "LA PAPESSA",
      number: "II",
      positive: "CURATELA",
      negative: "SUPER TUTELA",
    },
    {
      title: "L'IMPERATRICE",
      number: "III",
      positive: "BELLEZZA",
      negative: "BRUTTEZZA",
    },
    {
      title: "L'IMPERATORE",
      number: "IV",
      positive: "AUTORITÀ",
      negative: "DISPOTISMO",
    },
    {
      title: "IL PAPA",
      number: "V",
      positive: "CONOSCENZA",
      negative: "STUPIDITÀ",
    },
    {
      title: "L'INNAMORATO",
      number: "VI",
      positive: "SCELTA",
      negative: "ROMPERE LE RELAZIONI",
    },
    {
      title: "IL CARRO",
      number: "VII",
      positive: "OBIETTIVO",
      negative: "INUTILITÀ",
    },
    {
      title: "LA GIUSTIZIA",
      number: "VIII",
      positive: "REGOLE",
      negative: "INIQUITÀ",
    },
    {
      title: "L'EREMITA",
      number: "IX",
      positive: "SAGGEZZA",
      negative: "MODO STRANIERO",
    },
    {
      title: "LA RUOTA DELLA FORTUNA",
      number: "X",
      positive: "I TUOI BISOGNI",
      negative: "DEBITI",
    },
    {
      title: "LA FORZA",
      number: "XI",
      positive: "PRODEZZA",
      negative: "VIOLENZA",
    },
    {
      title: "L'APPESO",
      number: "XII",
      positive: "SACRIFICIO VOLONTARIO",
      negative: "SACRIFICIO INESTIMABILE",
    },
    {
      title: "LA MORTE",
      number: "XIII",
      positive: "MODIFICA",
      negative: "STAGNAZIONE",
    },
    {
      title: "LA TEMPERANZA",
      number: "XIV",
      positive: "EQUILIBRIO",
      negative: "ESTREMO",
    },
    {
      title: "IL DIAVOLO",
      number: "XV",
      positive: "DIVERTIMENTO",
      negative: "DIPENDENZE",
    },
    {
      title: "LA TORRE",
      number: "XVI",
      positive: "COSTRUZIONE",
      negative: "DISTRUZIONE",
    },
    {
      title: "LA STELLA",
      number: "XVII",
      positive: "AMICIZIA",
      negative: "TRADIMENTO",
    },
    {
      title: "LA LUNA",
      number: "XVIII",
      positive: "EMPATIA",
      negative: "PAURE",
    },
    {
      title: "IL SOLE",
      number: "XIX",
      positive: "VITTORIA",
      negative: "INCENERIMENTO",
    },
    {
      title: "IL GIUDIZIO",
      number: "XX",
      positive: "I SUOI VALORI",
      negative: "DIPENDENZA DAI VALORI ALTRUI",
    },
    {
      title: "IL MONDO",
      number: "XXI",
      positive: "INFINITÀ",
      negative: "VIOLAZIONE DEI CONFINI",
    },
    {
      title: "IL MATTO",
      number: "XXII",
      positive: "GIOCO",
      negative: "IRRESPONSABILITÀ",
    },
  ];
  const archetypesOptions = [
    { value: "TUTTI", label: "TUTTI" },
    { value: "I", label: "I" },
    { value: "II", label: "II" },
    { value: "III", label: "III" },
    { value: "IV", label: "IV" },
    { value: "V", label: "V" },
    { value: "VI", label: "VI" },
    { value: "VII", label: "VII" },
    { value: "VIII", label: "VIII" },
    { value: "IX", label: "IX" },
    { value: "X", label: "X" },
    { value: "XI", label: "XI" },
    { value: "XII", label: "XII" },
    { value: "XIII", label: "XIII" },
    { value: "XIV", label: "XIV" },
    { value: "XV", label: "XV" },
    { value: "VI", label: "VI" },
    { value: "VII", label: "VII" },
    { value: "VIII", label: "VIII" },
    { value: "XIX", label: "XIX" },
    { value: "XX", label: "XX" },
    { value: "XXI", label: "XXI" },
    { value: "XXII", label: "XXII" },
  ];
  return (
    <section className="archetypes">
      <div className="container">
        <div className="archetypes__wrapper">
          <Link to="/" className="archetypes__back-link back-arrow" href="#">
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
          <h1 className="archetypes__title title-1">22 ARCHETYPES</h1>

          <div className="archetypes__filter">
            <ul className="archetypes__filter-list">
              <li className="archetypes__filter-item underline">TUTTI</li>
              {archetypesData.map((archetype, index) => (
                <li className="archetypes__filter-item underline">
                  {archetype.number}
                </li>
              ))}
            </ul>
            <SelectLabel
              className="archetypes__filter-select"
              options={archetypesOptions}
              placeholder="TUTTI"
              onChange={handleArchetypesFilterChange}
              value={selectedArchetypesFilter}
            />
          </div>
          <ul className="archetypes__list">
            {archetypesData.map((archetype, index) => (
              <li className="archetypes__item" key={index}>
                <h2 className="archetypes__item-title">{archetype.title}</h2>
                <div className="archetypes__item-content">
                  <img
                    className="archetypes__item-img"
                    src={`../images/archetypes/${archetype.number}.webp`}
                    alt="#"
                  />
                  <div className="archetypes__item-info">
                    <span className="archetypes__item-number">
                      {archetype.number}
                    </span>
                    <p className="archetypes__item-positive">
                      Manifestazione positiva:
                      <span className="archetypes__item-span">
                        {archetype.positive}
                      </span>
                    </p>
                    <p className="archetypes__item-negative">
                      Manifestazione negativa:
                      <span className="archetypes__item-span">
                        {archetype.negative}
                      </span>
                    </p>

                    <Link
                      to={`/archetypes/${archetype.number}`}
                      className="archetypes__item-link arrow"
                      href="#"
                    >
                      <span className="underline">Più dettagli</span>
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
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ArchetypesArchetypes;
