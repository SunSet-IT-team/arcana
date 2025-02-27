import React from 'react';

import TitleAnimation from '../../hooks/titleAnimation';

import './styles.scss';

import Link from '../../components/Link/Link';
import ServicesList from '../ServicesList/ServicesList';

function MainServices() {
    const servicesData = [
        {
            name: 'PERSONALITÀ',
            time: '60 – 90 min',
            info: (
                <>
                    <p className="text-split">
                        Se sei stanco di investire senza risultati in corsi di
                        crescita personale, ma non riesci ancora a comprendere
                        la tua unicità e a trovare una direzione positiva per la
                        tua vita.
                        <br />È possibile lavorare sia con una richiesta
                        specifica che con un interesse generale per questo
                        argomento.
                    </p>
                    <h3 className="text-split">Analizzeremo:</h3>
                    <ul className="text-split">
                        <li className="text-split">
                            - qualità caratteriali inerenti alla nascita;
                        </li>
                        <li className="text-split">
                            - lezioni di vita e esamida superare;
                        </li>
                        <li className="text-split">
                            - potenziale da rilevare nei diversi periodi della
                            vita;
                        </li>
                        <li className="text-split">- paure e complessi;</li>
                        <li className="text-split">- il compito della vita.</li>
                    </ul>

                    <p className="text-split">
                        Ealtri momenti importanti secondo la tua richiesta per
                        questa sessione.
                    </p>
                    <p className="text-split">
                        Dopo la consulenza riceverai una scheda con informazioni
                        utili a seconda degli argomenti affrontati durante la
                        consulenza, suggerimenti e consigli pratici per
                        migliorare la tua vita.
                    </p>
                </>
            ),
            img: '1',
            price: 90,
        },
        {
            name: 'Guida all’Archetipo di Base ',
            time: 'PDF - file',
            info: (
                <>
                    <p className="text-split">
                        Se desideri conoscere la descrizione dell'energia
                        archetipica di base innata (la prima posizione della
                        mappa archetipica natale). Questa posizione riflette
                        l’archetipo che rappresenta la forza principale, il
                        nucleo fondamentale della tua personalità. Essa svela le
                        caratteristiche primarie, i talenti naturali e le
                        inclinazioni che ti accompagnano fin dalla nascita.
                        Comprendere questa energia ti permette di scoprire quale
                        parte di te stesso agisce come la tua base, il punto di
                        partenza da cui si sviluppano tutte le altre
                        potenzialità e sfaccettature della tua vita.
                    </p>
                    <h3 className="text-split">Troverai:</h3>
                    <ul className="text-split">
                        <li className="text-split">
                            - significato dell’energia archetipica;
                        </li>
                        <li className="text-split">
                            - descrizione dell'energia in armonia;
                        </li>
                        <li className="text-split">
                            - descrizione dell’energia in carenza;
                        </li>
                        <li className="text-split">
                            - descrizione dell'energia in eccesso;
                        </li>
                        <li className="text-split">
                            - comportamento nella relazione di coppia;
                        </li>
                        <li className="text-split">
                            - aree di sviluppo professionale;
                        </li>
                        <li className="text-split">- entrate finanziarie;</li>
                        <li className="text-split">
                            - problemi di salute psicosomatici;
                        </li>
                        <li className="text-split">
                            - domande per aiutare a determinare come si sta
                            vivendo l'energia (in armonia, in carenza, in
                            eccesso);
                        </li>
                        <li className="text-split">
                            - citazioni che riflettono l’energiaarchetipica;
                        </li>
                        <li className="text-split">
                            - personaggi famosi con l'energia base di questo
                            Archetipo.
                        </li>
                    </ul>
                </>
            ),
            img: '2',
            price: 12,
        },
        {
            name: 'Relazioni di coppia',
            time: '90 – 120 min',
            info: (
                <>
                    <p className="text-split">
                        Se desideri comprendere meglio la tua relazione di
                        coppia, affrontare problemi che sembrano insuperabili e
                        sogni una relazione armoniosa basata sulla comprensione
                        reciproca, sul rispetto dei bisogni e delle aspirazioni
                        di entrambi.
                    </p>
                    <p className="text-split">
                        È possibile lavorare sia con una richiesta specifica che
                        con un interesse generale per questo argomento.
                    </p>
                    <h3 className="text-split">Analizzeremo:</h3>
                    <ul className="text-split">
                        <li className="text-split">
                            - trama principale del rapporto;
                        </li>
                        <li className="text-split">- possibili scenari;</li>
                        <li className="text-split">
                            - punti di forza e di debolezza;
                        </li>
                        <li className="text-split">
                            - conflitti e incomprensioni e come evitarli;
                        </li>
                        <li className="text-split">
                            - obiettivie intenzioni comuni che rafforzeranno il
                            rapporto;
                        </li>
                        <li className="text-split">
                            - aspettative reciproche (anche se sono inconsce);
                        </li>
                        <li className="text-split">
                            - lezione personale in questa relazione.
                        </li>
                    </ul>
                    <p className="text-split">
                        Ealtri momenti importanti secondo la tua richiesta per
                        questa sessione. Dopo la consulenza riceverai una scheda
                        con informazioni utili a seconda degli argomenti
                        affrontati durante la consulenza, suggerimenti e
                        consigli pratici per migliorare la tua vita di coppia.
                    </p>
                </>
            ),
            img: '3',
            price: 120,
        },
    ];

    return (
        <section className="services-demo">
            <div className="container">
                <div className="services-demo__wrapper">
                    <TitleAnimation
                        tag="h2"
                        className="services-demo__title title title-2 title-animation"
                    >
                        <span>CONSULENZE</span>
                    </TitleAnimation>

                    <ServicesList services={servicesData} />
                    <Link
                        text="ELENCO COMPLETO DELLE CONSULENZE"
                        className="services-demo__link link--black"
                        path="services"
                    />
                </div>
            </div>
        </section>
    );
}

export default MainServices;
