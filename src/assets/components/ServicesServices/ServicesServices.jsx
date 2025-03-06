import React from 'react';

import './styles.scss';

import {Link} from 'react-router-dom';

import ServicesList from '../ServicesList/ServicesList';

export const servicesData = [
    {
        name: 'PERSONALITÀ',
        time: '60 – 90 min',
        info: (
            <>
                <p className="text-split">
                    Se sei stanco di investire senza risultati in corsi di
                    crescita personale, ma non riesci ancora a comprendere la
                    tua unicità e a trovare una direzione positiva per la tua
                    vita.
                    <br />È possibile lavorare sia con una richiesta specifica
                    che con un interesse generale per questo argomento.
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
                        - potenziale da rilevare nei diversi periodi della vita;
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
                    consulenza, suggerimenti e consigli pratici per migliorare
                    la tua vita.
                </p>
            </>
        ),
        img: '1. personalità',
        price: 90,
    },
    {
        name: 'Guida all’Archetipo di Base ',
        time: 'PDF - file',
        info: (
            <>
                <p className="text-split">
                    Se desideri conoscere la descrizione dell'energia
                    archetipica di base innata (la prima posizione della mappa
                    archetipica natale). Questa posizione riflette l’archetipo
                    che rappresenta la forza principale, il nucleo fondamentale
                    della tua personalità. Essa svela le caratteristiche
                    primarie, i talenti naturali e le inclinazioni che ti
                    accompagnano fin dalla nascita. Comprendere questa energia
                    ti permette di scoprire quale parte di te stesso agisce come
                    la tua base, il punto di partenza da cui si sviluppano tutte
                    le altre potenzialità e sfaccettature della tua vita.
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
                        - domande per aiutare a determinare come si sta vivendo
                        l'energia (in armonia, in carenza, in eccesso);
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
        img: '2. guida',
        price: 12,
    },
    {
        name: 'Relazioni di coppia',
        time: '90 – 120 min',
        info: (
            <>
                <p className="text-split">
                    Se desideri comprendere meglio la tua relazione di coppia,
                    affrontare problemi che sembrano insuperabili e sogni una
                    relazione armoniosa basata sulla comprensione reciproca, sul
                    rispetto dei bisogni e delle aspirazioni di entrambi.
                </p>
                <p className="text-split">
                    È possibile lavorare sia con una richiesta specifica che con
                    un interesse generale per questo argomento.
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
                    questa sessione. Dopo la consulenza riceverai una scheda con
                    informazioni utili a seconda degli argomenti affrontati
                    durante la consulenza, suggerimenti e consigli pratici per
                    migliorare la tua vita di coppia.
                </p>
            </>
        ),
        img: '3. relazione di coppia',
        price: 120,
    },

    {
        name: 'Rapporti Sociali ',
        time: '60 – 90 min',
        info: (
            <>
                <p className="text-split">
                    Se desideri "leggere" gli altri come un libro aperto,
                    comprendere se una persona è adatta a un'interazione
                    significativa con te — che si tratti di un socio in affari,
                    un dipendente, un collega, un amico, un compagno di viaggio
                    o altro — o se vuoi approfondire la conoscenza di un
                    familiare per migliorare la comunicazione e costruire un
                    rapporto più armonioso.
                </p>
                <h3 className="text-split">Analizzeremo: </h3>
                <ul className="text-split">
                    <li className="text-split">
                        - caratteristicheindividuali di persona interessata;
                    </li>
                    <li className="text-split">
                        - trama principale del rapporto;
                    </li>
                    <li className="text-split">- possibili scenari;</li>
                    <li className="text-split">
                        - punti di forza e di debolezza;
                    </li>
                    <li className="text-split">
                        - insidie e le situazioni di crisi, come superarle;
                    </li>
                    <li className="text-split">
                        - obiettivi e approccio che rafforzeranno il rapporto;
                    </li>
                    <li className="text-split">
                        - aspettative reciproche (anche se sono inconsce);
                    </li>
                    <li className="text-split">
                        - lezioneper entrambi i partner di questo rapporto.
                    </li>
                </ul>
                <p className="text-split">
                    Ealtri momenti importanti secondo la tua richiesta per
                    questa sessione.
                </p>
                <p className="text-split">
                    Dopo la consulenza riceverai una scheda con informazioni
                    utili a seconda degli argomenti affrontati durante la
                    consulenza, suggerimenti e consigli pratici.
                </p>
            </>
        ),
        img: '4. rapporti sociali',
        price: 110,
    },

    {
        name: 'Maturazione Psicologica e Sociale ',
        time: '60 – 120 min',
        info: (
            <>
                <p className="text-split">
                    Se ti ritrovi a ripetere gli stessi errori, se hai la
                    sensazione di essere bloccato e non riesci a trovare il tuo
                    posto in questo mondo.
                </p>
                <p className="text-split">
                    È possibile lavorare sia con una richiesta specifica che con
                    un interesse generale per questo argomento.
                </p>
                <h3 className="text-split">Analizzeremo:</h3>
                <ul className="text-split">
                    <li className="text-split">
                        - qualità caratteriali inerenti alla nascita;
                    </li>
                    <li className="text-split">
                        - lezioni di vita e esami da superare;
                    </li>
                    <li className="text-split">
                        - potenziale da rivelare in diversi periodi della vita;
                    </li>
                    <li className="text-split">- paure e complessi;</li>
                    <li className="text-split">
                        - “bagaglio” familiare negativo;
                    </li>
                    <li className="text-split">
                        - schemi limitanti e come superarli;
                    </li>
                    <li className="text-split">
                        - percorso personale verso lo sviluppo sociale come
                        individuo maturo e indipendente.
                    </li>
                </ul>
                <p className="text-split">
                    Ealtri momenti importanti secondo la tua richiesta per
                    questa sessione.
                </p>
                <p className="text-split">
                    Dopo la consulenza riceverai una scheda con informazioni
                    utili a seconda degli argomenti affrontati durante la
                    consulenza, suggerimenti e consigli pratici.
                </p>
            </>
        ),
        img: '5. maturazione1',
        price: 80,
    },
    {
        name: `Il Profilo dell'Ombra – Subconscio `,
        time: '60 – 90 min',
        info: (
            <>
                <p className="text-split">
                    {' '}
                    L'individuazione di cui parlava Jung è il processo di unire
                    i pezzi del puzzle tra la tua luce e la tua ombra. Questa
                    consulenza è per te se desideri esplorare il tuo subconscio,
                    scoprire le parti represse dell'ombra della tua personalità,
                    che custodiscono un grande potenziale pronto per essere
                    compreso e integrato, per raggiungere una completa integrità
                    psicologica.
                </p>
                <p className="text-split">
                    È possibile lavorare sia con una richiesta specifica che con
                    un interesse generale per questo argomento.
                </p>
                <h3 className="text-split">Analizzeremo:</h3>
                <ul className="text-split">
                    <li className="text-split">- traumi infantili;</li>
                    <li className="text-split">
                        - risorse interne soppressi inconsciamente;
                    </li>
                    <li className="text-split">- reazioni subconsce;</li>
                    <li className="text-split">
                        - comportamento sotto stress e come trasformare lo
                        stress in una risorsa;
                    </li>
                    <li className="text-split">
                        - potenziale che la psiche nega;
                    </li>
                    <li className="text-split">
                        - distruzionedella personalità.
                    </li>
                </ul>
                <p className="text-split">
                    Dopo la consulenza riceverai una scheda con informazioni
                    utili a seconda degli argomenti affrontati durante la
                    consulenza, suggerimenti e consigli praticiper lavorare
                    conil subconscio.
                </p>
            </>
        ),
        img: '6. ombra',
        price: 80,
    },

    {
        name: 'Mappa Archetipica Infantile',
        time: '60 – 120 min',
        info: (
            <>
                <p className="text-split">
                    Se desideri scoprire di quale sviluppo e motivazione ha
                    bisogno tuo figlio per costruire il suo carattere e
                    realizzare il suo pieno potenziale innato, e se vuoi
                    imparare come affrontare i periodi difficili delle crisi di
                    crescita nel modo più rispettoso della sua psiche, riducendo
                    al minimo l'impatto negativo delle lezioni di maturazione
                    psicologica.
                </p>
                <p className="text-split">
                    È possibile lavorare sia con una richiesta specifica che con
                    un interesse generale per questo argomento.
                </p>
                <h3 className="text-split">Analizzeremo:</h3>
                <ul className="text-split">
                    <li className="text-split">
                        - bambino come individuocon sue caratteristiche innate;
                    </li>
                    <li className="text-split">
                        - comportamento nella norma e quando necessarioprestare
                        attenzione ai suoi bisogni;
                    </li>
                    <li className="text-split">
                        - diverse crisi d’età e come comportarsi;
                    </li>
                    <li className="text-split">
                        - strategia per una crescita armoniosa.
                    </li>
                </ul>
                <p className="text-split">
                    Ealtri momenti importanti secondo la tua richiesta per
                    questa sessione.
                </p>
                <p className="text-split">
                    Dopo la consulenza riceverai una scheda con informazioni
                    utili a seconda degli argomenti affrontati durante la
                    consulenza, suggerimenti e consigli pratici.
                </p>
            </>
        ),
        img: '7. mappa archetipica infantile1',
        price: 100,
    },
    {
        name: 'Attività Professionale',
        time: '60 – 90 min',
        info: (
            <>
                <p className="text-split">
                    {' '}
                    Analisi della tua mappa archetipica in relazione a quelle
                    componenti che favoriscono la piena realizzazione del tuo
                    potenziale nel contesto professionale.
                </p>
                <p className="text-split">
                    È possibile lavorare sia con una richiesta specifica che con
                    un interesse generale per questo argomento.
                </p>
                <h3 className="text-split">Analizzeremo: </h3>
                <ul className="text-split">
                    <li className="text-split">
                        - capacità nellavita professionale;
                    </li>
                    <li className="text-split">
                        - opportunità nel campo professionale;
                    </li>
                    <li className="text-split">
                        - ambiti per diventare maestro, specialista, esperto;
                    </li>
                    <li className="text-split">
                        - insidie e limitazioni in ambito professionale;
                    </li>
                    <li className="text-split">- aspirazioni nel lavoro;</li>
                    <li className="text-split">
                        - scopo della attività professionale in un contesto
                        globale e spirituale.
                    </li>
                </ul>
                <p className="text-split">
                    Ealtri momenti importanti secondo la tua richiesta per
                    questa sessione.
                </p>
                <p className="text-split">
                    Durante la consulenza riceverai un calcolo del tuo programma
                    professionale unico, che ti aiuterà nella scelta e gestione
                    della tua attività professionale.
                </p>
            </>
        ),
        img: '8. attivita professionale1',
        price: 90,
    },

    {
        name: 'Finanza Personali',
        time: '60 – 90 min',
        info: (
            <>
                <p className="text-split">
                    {' '}
                    Analisi della tua mappa archetipica in relazione a quelle
                    componenti che favoriscono la migliore crescita finanziaria
                    e il raggiungimento di un benessere economico duraturo.
                </p>
                <p className="text-split">
                    È possibile lavorare sia con una richiesta specifica che con
                    un interesse generale per questo argomento.
                </p>
                <h3 className="text-split">Analizzeremo:</h3>
                <ul className="text-split">
                    <li className="text-split">
                        - modo principale per generare reddito;
                    </li>
                    <li className="text-split">
                        - forza nel settore finanziario;
                    </li>
                    <li className="text-split">
                        - aree per raggiungere la stabilità economica;
                    </li>
                    <li className="text-split">
                        - paure e blocchi nella sfera finanziaria;
                    </li>
                    <li className="text-split">
                        - come aumentare flusso finanziario.
                    </li>
                </ul>
                <p className="text-split">
                    Ealtri momenti importanti secondo la tua richiesta per
                    questa sessione.
                </p>
                <p className="text-split">
                    Durante la consulenza riceverai un calcolo del tuo programma
                    finanziario unico, che diventerà istruzioni affidabili per
                    aumentare i tuoi guadagni.
                </p>
            </>
        ),
        img: '9. Finanza',
        price: 90,
    },
];
function ServicesServices() {
    return (
        <section className="services">
            <div className="container">
                <div className="services__wrapper">
                    <Link to="/" className="services__back-link back-arrow">
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
                    <h1 className="services__title title-1">CONSULENZE</h1>
                    <ServicesList services={servicesData} />
                </div>
                <div className="services__subtext">
                    <p className="services__text">
                        Come si svolge la consulenza
                    </p>

                    <p className="services__text">
                        Dopo il nostro primo contatto, avrò bisogno della tua
                        data di nascita e della tua richiesta specifica
                        (inclusi, se necessario, anche le date di nascita di
                        altre persone che considererò importanti). Ti chiederò
                        ulteriori informazioni in base alla tua richiesta o alla
                        situazione che desideri affrontare.
                    </p>
                    <p className="services__text">
                        Nel giorno della consulenza, è fondamentale che tu abbia
                        una buona connessione Internet e un ambiente tranquillo
                        dove poter rimanere senza interruzioni, per permetterti
                        di concentrarti completamente su questo lavoro profondo
                        con il tuo profilo archetipico.
                    </p>
                    <p className="services__text">
                        La consulenza si svolgerà online sul mio canale Telegram
                        privato, dove saremo solo io e te. Utilizzerò il formato
                        video per mostrarti i file e i materiali che
                        accompagneranno la consulenza.
                    </p>
                    <p className="services__text">
                        La consulenza si terrà sotto forma di dialogo attivo, in
                        modo da ottenere i migliori risultati e benefici dal
                        processo.
                    </p>
                    <p className="services__text">
                        Come risultato della consulenza, avrai una comprensione
                        approfondita in base alla tua richiesta, una
                        registrazione della sessione e una settimana di supporto
                        da parte mia, con risposte alle tue domande relative
                        alla consulenza svolta.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ServicesServices;
