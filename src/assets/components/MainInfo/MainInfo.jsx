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
                        “La Mappa Archetipica natale è una guida accurata alla
                        tua personalità, che illustra in modo completo le tue
                        aspirazioni e le cause dei tuoi problemi, ti permette di
                        scoprire letteralmente tutto: su te stesso, sulla tua
                        vita, sul tuo ambiente, e non solo scoprirlo, ma trovare
                        ed iniziare il movimento lungo il percorso dei
                        cambiamenti positivi. Sarà l'inizio del tuo Cammino
                        verso te stesso e tua vera vita...”
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
