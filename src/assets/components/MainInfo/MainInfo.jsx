import React from 'react';
import Link from '../../components/Link/Link';
import './styles.scss';

function MainInfo() {
    return (
        <section className="info">
            <div className="container">
                <div className="info__wrapper">
                    <h1 className="info__title title-1">
                        CALCOLA LA TUA MAPPA ARCHETIPICA E SCOPRI I TUOI
                        ARCHETIPI
                    </h1>

                    <p className="info__text">
                        La Mappa Archetipica Natale rivela le energie
                        archetipiche intrinseche alla nostra psiche. È una
                        rappresentazione simbolica del viaggio della nostra
                        anima, che mostra i modelli archetipici personali
                        attraverso i quali percorriamo il cammino
                        dell’individuazione.
                        <br /> <br />
                        Siamo conduttori attraverso cui queste forze si
                        esprimono, influenzando non solo la nostra vita
                        interiore, ma anche gli eventi e l’ambiente
                        circostante.Quando le riconosciamo e le esprimiamo nella
                        loro forma più autentica, possiamo raggiungere il
                        benessere interiore, l’autorealizzazione personale e il
                        successo sociale. <br /> <br /> Il Profilo Archetipico è
                        una bussola che ti aiuta a comprendere la tua
                        personalità e il tuo percorso di vita. Rivela le tue
                        aspirazioni più profonde, fa luce sulle cause delle
                        difficoltà che incontri e ti offre una prospettiva
                        chiara su te stesso e sull’ambiente che ti circonda. Ma
                        soprattutto, non si limita alla conoscenza: è uno
                        strumento concreto per avviare un processo di
                        cambiamento positivo e trasformare la tua vita.
                    </p>

                    <Link
                        text="CALCOLARE"
                        className="info__link link--black"
                        path="calculator"
                    />
                </div>
            </div>
        </section>
    );
}

export default MainInfo;
