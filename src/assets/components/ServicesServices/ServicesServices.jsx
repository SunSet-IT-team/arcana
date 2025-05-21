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
                    Se sei stanco di investire in corsi di crescita personale
                    senza ottenere i risultati sperati, e se ti sembra di non
                    riuscire ancora a comprendere la tua unicità o di essere
                    intrappolato in un circolo vizioso, questa consulenza
                    potrebbe fare la differenza. Ti aiuterò a trovare una
                    direzione autentica per la tua vita, sbloccando il tuo
                    potenziale e portando chiarezza su ciò che davvero conta per
                    te.
                    <br />
                    Lavoreremo insieme su una richiesta specifica o su un tema
                    più ampio, legato alla tua crescita personale e alla tua
                    evoluzione.
                </p>
                {/* <h3 className="text-split">Analizzeremo:</h3>
                <ul className="text-split">
                    <li className="text-split">
                        - qualità caratteriali inerenti alla nascita;
                    </li>
                    <br />
                    <li className="text-split">
                        - lezioni di vita e esamida superare;
                    </li>
                    <br />
                    <li className="text-split">
                        - potenziale da rilevare nei diversi periodi della vita;
                    </li>
                    <br />
                    <li className="text-split">- paure e complessi;</li>
                    <br />
                    <li className="text-split">- il compito della vita.</li>
                    <br />
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
                </p> */}
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
                    Se desideri esplorare l'energia archetipica di base innata
                    (la prima posizione nella mappa archetipica natale), questa
                    ricerca è stata pensata per te. L'energia di base riflette
                    l’archetipo che rappresenta la forza principale e il nucleo
                    fondamentale della tua personalità. Svela le caratteristiche
                    primarie, i talenti naturali e le inclinazioni che ti
                    accompagnano fin dalla nascita. Comprendere questa energia
                    ti permette di scoprire quale parte di te stesso funge da
                    base, il punto di partenza da cui si sviluppano tutte le
                    altre potenzialità e sfaccettature della tua vita.
                </p>
                {/* <h3 className="text-split">Troverai:</h3>
                <ul className="text-split">
                    <li className="text-split">
                        - significato dell’energia archetipica;
                    </li>
                    <br />
                    <li className="text-split">
                        - descrizione dell'energia in armonia;
                    </li>
                    <br />
                    <li className="text-split">
                        - descrizione dell’energia in carenza;
                    </li>
                    <br />
                    <li className="text-split">
                        - descrizione dell'energia in eccesso;
                    </li>
                    <br />
                    <li className="text-split">
                        - comportamento nella relazione di coppia;
                    </li>
                    <br />
                    <li className="text-split">
                        - aree di sviluppo professionale;
                    </li>
                    <br />
                    <li className="text-split">- entrate finanziarie;</li>
                    <li className="text-split">
                        - problemi di salute psicosomatici;
                    </li>
                    <br />
                    <li className="text-split">
                        - domande per aiutare a determinare come si sta vivendo
                        l'energia (in armonia, in carenza, in eccesso);
                    </li>
                    <br />
                    <li className="text-split">
                        - citazioni che riflettono l’energiaarchetipica;
                    </li>
                    <br />
                    <li className="text-split">
                        - personaggi famosi con l'energia base di questo
                        Archetipo.
                    </li>
                    <br />
                </ul> */}
            </>
        ),
        img: '2. guida',
        price: 22,
    },
    {
        name: 'Relazioni di coppia',
        time: '90 – 120 min',
        info: (
            <>
                <p className="text-split">
                    Se desideri comprendere meglio la tua relazione di coppia,
                    affrontare problemi che sembrano insuperabili e sogni una
                    connessione armoniosa, basata sulla comprensione reciproca e
                    sul rispetto dei bisogni e delle aspirazioni di entrambi,
                    questa consulenza può fare la differenza. Dedichiamo
                    particolare attenzione all'analisi della trama archetipica
                    della tua relazione, esplorando possibili scenari e come
                    questi influenzano la dinamica della coppia.
                    <br />
                    Lavoreremo su una richiesta specifica o su un tema più ampio
                    legato a questo ambito.
                </p>
                {/* <h3 className="text-split">Analizzeremo:</h3>
                <ul className="text-split">
                    <li className="text-split">
                        - trama principale del rapporto;
                    </li>
                    <br />
                    <li className="text-split">- possibili scenari;</li>
                    <br />
                    <li className="text-split">
                        - punti di forza e di debolezza;
                    </li>
                    <br />
                    <li className="text-split">
                        - conflitti e incomprensioni e come evitarli;
                    </li>
                    <br />
                    <li className="text-split">
                        - obiettivie intenzioni comuni che rafforzeranno il
                        rapporto;
                    </li>
                    <br />
                    <li className="text-split">
                        - aspettative reciproche (anche se sono inconsce);
                    </li>
                    <br />
                    <li className="text-split">
                        - lezione personale in questa relazione.
                    </li>
                    <br />
                </ul>
                <p className="text-split">
                    Ealtri momenti importanti secondo la tua richiesta per
                    questa sessione. Dopo la consulenza riceverai una scheda con
                    informazioni utili a seconda degli argomenti affrontati
                    durante la consulenza, suggerimenti e consigli pratici per
                    migliorare la tua vita di coppia.
                </p> */}
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
                    analizzare i punti di attenzione in un rapporto che ti
                    sembrano problematici, oppure comprendere se una persona è
                    adatta a un'interazione significativa con te — che si tratti
                    di un socio in affari, un dipendente, un collega, un amico,
                    un compagno di viaggio o altro — o se desideri approfondire
                    la conoscenza di un familiare per migliorare la
                    comunicazione e costruire un rapporto più armonioso, questa
                    consulenza ti aiuterà a scoprire le dinamiche archetipiche
                    che influenzano il tuo rapporto, proteggerti da possibili
                    scenari negativi e creare legami più forti e autentici.
                </p>
                {/* <h3 className="text-split">Analizzeremo: </h3>
                <ul className="text-split">
                    <li className="text-split">
                        - caratteristicheindividuali di persona interessata;
                    </li>
                    <br />
                    <li className="text-split">
                        - trama principale del rapporto;
                    </li>
                    <br />
                    <li className="text-split">- possibili scenari;</li>
                    <br />
                    <li className="text-split">
                        - punti di forza e di debolezza;
                    </li>
                    <br />
                    <li className="text-split">
                        - insidie e le situazioni di crisi, come superarle;
                    </li>
                    <br />
                    <li className="text-split">
                        - obiettivi e approccio che rafforzeranno il rapporto;
                    </li>
                    <br />
                    <li className="text-split">
                        - aspettative reciproche (anche se sono inconsce);
                    </li>
                    <br />
                    <li className="text-split">
                        - lezioneper entrambi i partner di questo rapporto.
                    </li>
                    <br />
                </ul>
                <p className="text-split">
                    Ealtri momenti importanti secondo la tua richiesta per
                    questa sessione.
                </p>
                <p className="text-split">
                    Dopo la consulenza riceverai una scheda con informazioni
                    utili a seconda degli argomenti affrontati durante la
                    consulenza, suggerimenti e consigli pratici.
                </p> */}
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
                    Se ti senti bloccato in schemi ripetitivi o fatichi a
                    trovare il tuo posto nel mondo, questa consulenza ti aiuterà
                    a riconoscere e superare i condizionamenti familiari
                    interiorizzati. Attraverso l’analisi della tua mappa
                    archetipica natale, esploreremo le tue qualità innate, gli
                    scenari familiari e i blocchi emotivi. L’obiettivo è
                    favorire la separazione dai programmi familiari limitanti e
                    accompagnarti nella crescita verso un’identità più
                    consapevole, autonoma e realizzata, sbloccando il tuo
                    potenziale e orientandoti verso un futuro autentico e
                    appagante.
                </p>
                {/* <h3 className="text-split">Analizzeremo:</h3>
                <ul className="text-split">
                    <li className="text-split">
                        - qualità caratteriali inerenti alla nascita;
                    </li>
                    <br />
                    <li className="text-split">
                        - lezioni di vita e esami da superare;
                    </li>
                    <br />
                    <li className="text-split">
                        - potenziale da rivelare in diversi periodi della vita;
                    </li>
                    <br />
                    <li className="text-split">- paure e complessi;</li>
                    <br />
                    <li className="text-split">
                        - “bagaglio” familiare negativo;
                    </li>
                    <br />
                    <li className="text-split">
                        - schemi limitanti e come superarli;
                    </li>
                    <br />
                    <li className="text-split">
                        - percorso personale verso lo sviluppo sociale come
                        individuo maturo e indipendente.
                    </li>
                    <br />
                </ul>
                <p className="text-split">
                    Ealtri momenti importanti secondo la tua richiesta per
                    questa sessione.
                </p>
                <p className="text-split">
                    Dopo la consulenza riceverai una scheda con informazioni
                    utili a seconda degli argomenti affrontati durante la
                    consulenza, suggerimenti e consigli pratici.
                </p> */}
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
                    Se desideri esplorare il tuo subconscio e integrare le parti
                    represse della tua personalità, questa consulenza ti aiuterà
                    a scoprire le risorse nascoste nel tuo lato oscuro.
                    L’individuazione, come la definisce Jung, è il processo di
                    unione tra luce e ombra, che consente di raggiungere una
                    maggiore integrità psicologica. Attraverso l’analisi dei
                    traumi infantili, delle reazioni subconscie e dei
                    comportamenti sotto stress, esploreremo il potenziale che la
                    tua psiche ha messo da parte.
                    <br />
                    L’obiettivo è trasformare questi blocchi in risorse potenti,
                    liberarti da schemi autodistruttivi e condurti verso una
                    consapevolezza più profonda e un’armonia interiore duratura.
                </p>
                {/* <h3 className="text-split">Analizzeremo:</h3>
                <ul className="text-split">
                    <li className="text-split">- traumi infantili;</li>
                    <br />
                    <li className="text-split">
                        - risorse interne soppressi inconsciamente;
                    </li>
                    <br />
                    <li className="text-split">- reazioni subconsce;</li>
                    <br />
                    <li className="text-split">
                        - comportamento sotto stress e come trasformare lo
                        stress in una risorsa;
                    </li>
                    <br />
                    <li className="text-split">
                        - potenziale che la psiche nega;
                    </li>
                    <br />
                    <li className="text-split">
                        - distruzionedella personalità.
                    </li>
                    <br />
                </ul>
                <p className="text-split">
                    Dopo la consulenza riceverai una scheda con informazioni
                    utili a seconda degli argomenti affrontati durante la
                    consulenza, suggerimenti e consigli praticiper lavorare
                    conil subconscio.
                </p> */}
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
                    Se desideri comprendere come supportare lo sviluppo
                    psicologico di tuo figlio e aiutarlo a realizzare il suo
                    pieno potenziale, questa consulenza ti guiderà
                    nell’affrontare le sfide della crescita con un approccio
                    rispettoso della sua psiche. Analizzeremo le caratteristiche
                    innate del tuo bambino, i suoi comportamenti e le sue crisi
                    di crescita, esplorando come rispondere al meglio alle sue
                    necessità in modo da ridurre l’impatto negativo di queste
                    fasi. L’obiettivo è creare una strategia per favorire una
                    crescita armoniosa e costruire un carattere forte e sano.
                </p>
                {/* <h3 className="text-split">Analizzeremo:</h3>
                <ul className="text-split">
                    <li className="text-split">
                        - bambino come individuocon sue caratteristiche innate;
                    </li>
                    <br />
                    <li className="text-split">
                        - comportamento nella norma e quando necessarioprestare
                        attenzione ai suoi bisogni;
                    </li>
                    <br />
                    <li className="text-split">
                        - diverse crisi d’età e come comportarsi;
                    </li>
                    <br />
                    <li className="text-split">
                        - strategia per una crescita armoniosa.
                    </li>
                    <br />
                </ul>
                <p className="text-split">
                    Ealtri momenti importanti secondo la tua richiesta per
                    questa sessione.
                </p>
                <p className="text-split">
                    Dopo la consulenza riceverai una scheda con informazioni
                    utili a seconda degli argomenti affrontati durante la
                    consulenza, suggerimenti e consigli pratici.
                </p> */}
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
                    Se desideri esplorare la realizzazione del tuo potenziale
                    nel contesto professionale, questa consulenza ti aiuterà a
                    identificare le opportunità e le risorse nascoste nella tua
                    personalità. Analizzeremo le tue capacità e aspirazioni, i
                    percorsi per diventare un esperto nel tuo campo, le
                    possibili limitazioni e lo scopo più profondo della tua
                    attività professionale, integrandolo con una visione globale
                    e spirituale. L’obiettivo è orientarti verso una crescita
                    professionale autentica e soddisfacente.
                </p>
                {/* <h3 className="text-split">Analizzeremo: </h3>
                <ul className="text-split">
                    <li className="text-split">
                        - capacità nellavita professionale;
                    </li>
                    <br />
                    <li className="text-split">
                        - opportunità nel campo professionale;
                    </li>
                    <br />
                    <li className="text-split">
                        - ambiti per diventare maestro, specialista, esperto;
                    </li>
                    <br />
                    <li className="text-split">
                        - insidie e limitazioni in ambito professionale;
                    </li>
                    <br />
                    <li className="text-split">- aspirazioni nel lavoro;</li>
                    <br />
                    <li className="text-split">
                        - scopo della attività professionale in un contesto
                        globale e spirituale.
                    </li>
                    <br />
                </ul>
                <p className="text-split">
                    Ealtri momenti importanti secondo la tua richiesta per
                    questa sessione.
                </p>
                <p className="text-split">
                    Durante la consulenza riceverai un calcolo del tuo programma
                    professionale unico, che ti aiuterà nella scelta e gestione
                    della tua attività professionale.
                </p> */}
            </>
        ),
        img: '8. attivita professionale1',
        price: 90,
    },

    // {
    //     name: 'Finanza Personali',
    //     time: '60 – 90 min',
    //     info: (
    //         <>
    //             <p className="text-split">
    //                 {' '}
    //                 Analisi della tua mappa archetipica in relazione a quelle
    //                 componenti che favoriscono la migliore crescita finanziaria
    //                 e il raggiungimento di un benessere economico duraturo.
    //             </p>
    //             <p className="text-split">
    //                 È possibile lavorare sia con una richiesta specifica che con
    //                 un interesse generale per questo argomento.
    //             </p>
    //             <h3 className="text-split">Analizzeremo:</h3>
    //             <ul className="text-split">
    //                 <li className="text-split">
    //                     - modo principale per generare reddito;
    //                 </li><br />
    //                 <li className="text-split">
    //                     - forza nel settore finanziario;
    //                 </li><br />
    //                 <li className="text-split">
    //                     - aree per raggiungere la stabilità economica;
    //                 </li><br />
    //                 <li className="text-split">
    //                     - paure e blocchi nella sfera finanziaria;
    //                 </li><br />
    //                 <li className="text-split">
    //                     - come aumentare flusso finanziario.
    //                 </li><br />
    //             </ul>
    //             <p className="text-split">
    //                 Ealtri momenti importanti secondo la tua richiesta per
    //                 questa sessione.
    //             </p>
    //             <p className="text-split">
    //                 Durante la consulenza riceverai un calcolo del tuo programma
    //                 finanziario unico, che diventerà istruzioni affidabili per
    //                 aumentare i tuoi guadagni.
    //             </p>
    //         </>
    //     ),
    //     img: '9. Finanza',
    //     price: 90,
    // },
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
                        approfondita in base alla tua richiesta, e una settimana
                        di supporto da parte mia, con risposte alle tue domande
                        relative alla consulenza svolta.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ServicesServices;
