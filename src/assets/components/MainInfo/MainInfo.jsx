import React from 'react';
import Link from '../../components/Link/Link';
import './styles.scss';

function MainInfo() {
    return (
        <section className="info info_main">
            <div className="container">
                <div className="info__wrapper">
                    <h1 className="info__title title-1">
                        CALCOLA LA TUA MAPPA ARCHETIPICA E SCOPRI I TUOI
                        ARCHETIPI
                    </h1>

                    <p className="info__text">
                        La Mappa Archetipica Natale rivela le energie
                        archetipiche intrinseche alla nostra psiche che
                        influenzano le esperienze che attraiamo e l’ambiente che
                        ci circonda. È una rappresentazione simbolica del
                        viaggio della nostra anima, che mostra i modelli
                        archetipici personali attraverso i quali percorriamo il
                        cammino dell’individuazione.
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
