import React from 'react';

import './styles.scss';

import {Link} from 'react-router-dom';

import ServicesList from '../ServicesList/ServicesList';

function ServicesServices() {
    const servicesData = [
        {
            name: 'PERSONALITÀ',
            time: '[60 – 120 min]',
            info: "Se sei stanco di passare da uno psicologo all'altro e di investire inutilmente in corsi di crescita personale, e vuoi prendere coscienza dei tuoi pattern comportamentali e delle tue convinzioni per liberarti da tutto ciò che ostacola la tua espansione personale e il progresso verso gli obiettivi. Durante la consulenza sarà possibile conoscere sé stessi e comprendere la propria unicità.",
            img: '1',
            price: 110,
        },
        {
            name: 'RELAZIONI DI COPPIA',
            time: '[90 – 120 min]',
            info: "Se sogni una relazione armoniosa costruita sulla comprensione reciproca tra i partner, sul rispetto dei propri bisogni e delle aspirazioni per le quali esistono queste relazioni. Comprendere cosa vi unisce e cosa vi divide, come superare l'incomprensione esistente attraverso una profonda consapevolezza dei punti di forza...",
            img: '1',
            price: 12,
        },
        {
            name: 'RAPPORTI SOCIALI ',
            time: '[60 – 90 min]',
            info: 'Come “leggere” gli altri come un libro aperto. Capire perché sorgono conflitti, dove sono le aree problematiche e come comprendere i modelli di comportamento di genitori, capo, colleghi, amici al fine di migliorare la comprensione reciproca e avere relazioni sincere e armoniose.',
            img: '1',
            price: 130,
        },
        {
            name: 'MATURAZIONE PSICOLOGICA E SOCIALE',
            time: '[60 – 120 min]',
            info: 'Se ripeti gli stessi errori, se hai la sensazione che stai segnando il passo e non riesci a trovare il tuo posto in questo mondo. È importante comprendere il “bagaglio” che ognuno di noi porta con sé di generazione in generazione, quegli atteggiamenti genitoriali che vivono nella tua “voce” interiore e che ti impediscono di “prendere volo” e avviare una crescita...',
            img: '1',
            price: 120,
        },
        {
            name: 'MAPPA ARCHETIPICA INFANTILE',
            time: '[60 – 120 min]',
            info: "Se vuoi capire perché hai avuto proprio “questo” figlio. Scoprire di quale sviluppo e motivazione ha bisogno tuo figlio per sviluppare il carattere e realizzare il suo pieno potenziale innato. Di come affrontare i periodi difficili delle crisi di crescita di tuo figlio nel modo più rispettoso della sua psiche e ridurre al minimo l'impatto negativo di quelle lezioni per le quali l'anima è venuta al mondo.",
            img: '1',
            price: 110,
        },
        {
            name: 'ATTIVITÀ PROFESSIONALE',
            time: '[60 – 90 min]',
            info: "Analisi della tua mappa archetipica dal punto di vista di quelle attività professionali secondo i tuoi Archetipi che contribuiscono alla massima realizzazione del tuo potenziale nell'attività professionale. Individuare le proprie inclinazioni, i punti di forza della personalità, i talenti e le aspirazioni della tua anima per una migliore realizzazione professionale.",
            img: '1',
            price: 100,
        },
        {
            name: 'FINANZA PERSONALE',
            time: '[60 – 90 min]',
            info: 'Analisi della tua carta archetipica da una prospettiva finanziaria. Come migliorare il tuo flusso finanziario secondo i tuoi Archetipi, che contribuiscono alla massima realizzazione del tuo potenziale in ambito finanziario. Comprendi quale approccio e quali metodi, secondo la tua mappa archetipica, contribuiscono meglio a guadagnare denaro in modo più facile e veloce.',
            img: '1',
            price: 100,
        },
        {
            name: 'FINANZA PERSONALE',
            time: '[45 – 90 min]',
            info: 'Analisi del prossimo periodo basata sulle tue energie archetipiche e sulle energie archetipiche di questo periodo. Identificare punti di forza e aree di rischio, lezioni che dovrebbero essere apprese da questo periodo e gli esami che dovranno essere sostenuti. Capire a cosa dare la priorità per sfruttare al meglio il potenziale che si apre davanti a te in un dato periodo di tempo',
            img: '1',
            price: 100,
        },
        {
            name: 'FINANZA PERSONALE',
            time: '[45 – 90 min]',
            info: 'Analisi del prossimo periodo basata sulle tue energie archetipiche e sulle energie archetipiche di questo periodo. Identificare punti di forza e aree di rischio, lezioni che dovrebbero essere apprese da questo periodo e gli esami che dovranno essere sostenuti. Capire a cosa dare la priorità per sfruttare al meglio il potenziale che si apre davanti a te in un dato periodo di tempo',
            img: '1',
            price: 100,
        },
    ];
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
                        <span className="underline">Descrizione metodo</span>
                    </Link>
                    <h1 className="services__title title-1">CONSULENZE</h1>
                    <ServicesList services={servicesData} />
                </div>
                <div className="services__subtext">
                    <p className="services__text">
                        COME SI SVOLGE LA CONSULENZA
                    </p>

                    <p className="services__text">
                        Dopo il nostro primo contatto mi serveranno la tua data
                        di nascita e la tua richiesta (anche le date di nascita
                        di alcune altre persone che saranno ritenute
                        importanti). Ti chiederò altre informazioni secondo la
                        tua richiesta o situazione.
                    </p>
                    <p className="services__text">
                        Nel giorno della consulenza avrai bisogno di una buona
                        connessione Internet e di un posto tranquillo dove
                        potrai rimanere da solo per non essere disturbato e
                        distratto da un lavoro profondo con il profilo
                        archetipico.
                    </p>
                    <p className="services__text">
                        Il formato della consulenza è online in un canale
                        Telegram chiuso, dove solo io e te. Grazie al video
                        formato potrai vedere i file che ti mostrerò che
                        accompagnano la consulenza.
                    </p>
                    <p className="services__text">
                        La consulenza si svolge sotto forma di un dialogo
                        attivo, che aiuta a ottenere i massimi risultati e
                        benefici dalla consulenza.
                    </p>
                    <p className="services__text">
                        Come risultato della consulenza, avrai una comprensione
                        approfondita secondo alla tua richiesta, una
                        registrazione della nostra consulenza e una settimana di
                        supporto e risposte alle tue domande da parte mia
                        secondo della richiesta del consulto svolto
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ServicesServices;
