import React from "react";

import "./styles.scss";

import { Link } from "react-router-dom";

import LinkTo from "../Link/Link";
import SelectLabel from "../../components/Select/Select";

function StorysStory() {
  const [selectedStoryFilter, setSelectedStoryFilter] = React.useState("TUTTI");

  const handleStoryFilterChange = (selectedStoryFilter) => {
    setSelectedStoryFilter(selectedStoryFilter);
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      const storyItems = document.querySelectorAll(".storys__item");
      storyItems.forEach((item) => {
        const width = item.offsetWidth;
        if (width > 335) {
          item.classList.add("storys__item--big");
        } else {
          item.classList.remove("storys__item--big");
        }
      });
    }, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  const storyOptions = [
    { value: "TUTTI", label: "TUTTI" },
    { value: "CRESCITA PERSONALE", label: "CRESCITA PERSONALE" },
    { value: "RELAZIONI", label: "RELAZIONI" },
    { value: "LAVORO E PROFESSIONE", label: "LAVORO E PROFESSIONE" },
    { value: "FINANZE", label: "FINANZE" },
    { value: "SALUTESALUTE", label: "SALUTE" },
  ];
  return (
    <section className="storys">
      <div className="container">
        <div className="storys__wrapper">
          <Link to="/" className="storys__back-link back-arrow">
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
          <h1 className="storys__title title-1">STORIE DEI CLIENTI</h1>

          <div className="storys__filter">
            <ul className="storys__filter-list">
              <li className="storys__filter-item underline">TUTTI</li>
              <li className="storys__filter-item underline">
                CRESCITA PERSONALE
              </li>
              <li className="storys__filter-item underline">RELAZIONI</li>
              <li className="storys__filter-item underline">
                LAVORO E PROFESSIONE{" "}
              </li>
              <li className="storys__filter-item underline">FINANZE</li>
              <li className="storys__filter-item underline">SALUTE</li>
            </ul>
            <SelectLabel
              className="storys__filter-select"
              options={storyOptions}
              placeholder="TUTTI"
              onChange={handleStoryFilterChange}
              value={selectedStoryFilter}
            />
          </div>
          <ul className="storys__list">
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="story"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico. Nella
                    sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>{" "}
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico. Nella
                    sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>{" "}
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico. Nella
                    sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico. Nella
                    sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>{" "}
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico. Nella
                    sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>{" "}
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico. Nella
                    sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
            <li className="storys__item">
              <img
                className="storys__item-img"
                src="./images/storys/1.jpg"
                alt="#"
              />
              <div className="storys__item-content">
                <span className="storys__item-linkbox">
                  <a className="storys__item-tag underline" href="#">
                    Crescita personale
                  </a>
                </span>
                <div className="storys__item-body">
                  <h3 className="storys__item-title">RICETTA EDIFICANTE</h3>
                  <p className="storys__item-text">
                    Nella sua essenza, il testo ittico è un'alternativa al
                    tradizionale lorem ipsum, che in alcuni casi provoca
                    sconcerto quando si cerca di leggere il testo ittico.
                  </p>
                </div>

                <LinkTo
                  text="LEGGERE"
                  className="storys__item-link link--black"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default StorysStory;
