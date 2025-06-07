import React from 'react';

import './styles.scss';

import {Link} from 'react-router-dom';

import ServicesList from '../ServicesList/ServicesList';

export const servicesData = [
    {
        name: 'Consulenza su misura',
        time: null,
        info: (
            <>
                <p className="text-split">
                    Non sempre un percorso inizia con una struttura predefinita.
                    <br />
                    A volte c’è solo una domanda da tempo attesa, un momento di
                    crisi, un nodo che si ripresenta, un’urgenza di chiarezza.
                    In questi casi è possibile concordare insieme un percorso
                    personalizzato: partire da una richiesta specifica per un
                    singolo incontro, oppure costruire passo dopo passo un ciclo
                    di sessioni calibrato sulle tue esigenze.
                    <br />
                    Può trattarsi di una decisione da prendere, di un passaggio
                    complesso nella vita o nel lavoro, di un momento in cui
                    senti il bisogno di ritrovare una direzione.
                    <br />
                    Ciò che serve è uno spazio di confronto autentico, libero da
                    formule standard, in cui dare forma a ciò che stai
                    attraversando e orientarti con più lucidità.
                    <br />
                    Se senti che è il momento di guardare le cose con più
                    profondità e chiarezza oppure di avere bisogno di un
                    supporto, scrivimi. Insieme troviamo il formato giusto per
                    te.
                </p>
            </>
        ),
        img: 'сonsulenza su misura',
        price: null,
    },
    {
        name: 'Personalità',
        time: '60 – 90 min',
        info: (
            <>
                <p className="text-split">
                    Se stai dando il massimo, ma dentro senti ancora una
                    distanza da te stesso — non riesci a capirti, a sentire cosa
                    ti guida, o ti percepisci confuso o bloccato — questa
                    consulenza è pensata per te.
                    <br />
                    Non si tratta di cambiare chi sei, ma di riconoscere ciò che
                    è già presente dentro di te, sotto le aspettative, i ruoli e
                    le idee su come dovresti essere.
                    <br />
                    Ti aiuterò a vedere e riconoscere la tua natura unica: le
                    qualità e le risorse che spesso non metti a fuoco, così come
                    i limiti e il potenziale.
                    <br />
                    Partiamo da dove sei ora, con rispetto per il tuo percorso e
                    per l’identità che oggi abiti, per riportare chiarezza,
                    coerenza e senso di direzione dentro di te.
                </p>
            </>
        ),
        img: '1. personalità',
        price: 90,
    },
    {
        name: 'Relazioni di coppia',
        time: '90 – 120 min',
        info: (
            <>
                <p className="text-split">
                    Uno spazio sicuro per osservare da vicino ciò che accade
                    nella tua relazione, sia essa attuale o passata.
                    <br />
                    Se senti fatica a capirvi, confusione, distanza o mancanza
                    di equilibrio, questa consulenza ti aiuta a fare ordine.
                    <br />
                    Approfondiamo la dinamica che muove il legame, i bisogni che
                    cercano spazio, e i nodi ricorrenti che lo rendono faticoso
                    o lo bloccano.
                    <br />
                    Esploriamo insieme gli scenari possibili e come influenzano
                    il tuo rapporto, restituendoti centratura e lucidità anche
                    nei momenti di crisi, per ritrovare coerenza e orientamento
                    rispetto a ciò che è davvero importante per te in una
                    relazione. Spesso le difficoltà nel presente sono legate a
                    relazioni passate non risolte, che restano aperte dentro di
                    te e influenzano il modo in cui ti rapporti oggi. Possiamo
                    lavorare insieme per comprendere questi legami, sciogliere
                    nodi nascosti e chiarire come il passato incida sulle tue
                    scelte e sul tuo presente.
                </p>
            </>
        ),
        img: '3. relazione di coppia',
        price: 120,
    },
    {
        name: 'Rapporti Sociali',
        time: '60 – 90 min',
        info: (
            <>
                <p className="text-split">
                    Un percorso di chiarezza per comprendere a fondo le
                    dinamiche che si giocano nei tuoi rapporti sociali.
                    <br />
                    Se fatichi a leggere l’altro, riconoscere segnali importanti
                    o capire davvero chi hai davanti — che sia un socio, un
                    collaboratore, un collega, un amico o un familiare — questa
                    consulenza ti offre strumenti concreti per valutare il
                    potenziale del rapporto, individuare la trama che guida le
                    vostre interazioni e riconoscere le dinamiche che possono
                    favorire prosperità o, al contrario, generare tensioni e
                    blocchi.
                    <br />
                    Ti aiuta a proteggerti da scenari negativi e a prendere
                    decisioni chiare su come gestire o trasformare questi
                    legami. Sapere con chi stai costruendo un rapporto è la base
                    per evitare tensioni inutili, liberarti da situazioni
                    ricorrenti e creare relazioni autentiche, solide, fondate su
                    rispetto e consapevolezza.
                </p>
            </>
        ),
        img: '4. rapporti sociali',
        price: 110,
    },
    {
        name: 'Maturazione Psicologica e Sociale',
        time: '60 – 120 min',
        info: (
            <>
                <p className="text-split">
                    Se ti senti bloccato in schemi ripetitivi o fatichi a
                    trovare il tuo posto nel mondo, questa consulenza ti offre
                    uno spazio sicuro per riconoscere e superare quei
                    condizionamenti familiari che limitano la tua libertà di
                    scelta e la tua forza interiore.
                    <br />
                    Insieme esploreremo le tue qualità innate, le dinamiche
                    familiari che ti hanno formato e i blocchi emotivi che
                    ostacolano la tua realizzazione, per tracciare un percorso
                    chiaro e coerente con le tue reali aspirazioni.
                    <br />
                    Questo percorso ti invita a prendere la responsabilità della
                    tua vita, separandoti consapevolmente da programmi familiari
                    e schemi che non ti servono più, per costruire un nuovo
                    sguardo su te stesso e far emergere un’identità più
                    autonoma, centrata e autentica.
                    <br />
                    Il lavoro è concreto e orientato a sbloccare il tuo
                    potenziale, affrontare le sfide interiori e guidarti verso
                    una realizzazione personale e sociale piena, equilibrata e
                    significativa — qualunque sia il punto da cui parti.
                </p>
            </>
        ),
        img: '5. maturazione1',
        price: 90,
    },
    {
        name: '“Mappa del Viaggio”',
        time: '60 – 90 min',
        info: (
            <>
                <p className="text-split">
                    Un incontro pensato per chi desidera vedere la propria vita
                    come un percorso consapevole e coerente, e non come una
                    semplice sequenza casuale di eventi.
                    <br />
                    Se ti trovi a un bivio, hai già raggiunto molto ma non
                    riesci a vedere il quadro generale, senti un blocco
                    interiore, una perdita di senso o di direzione — questo
                    strumento ti aiuterà a riconoscere con chiarezza la tua vera
                    traiettoria, quella che forse hai solo intuito.
                    <br />
                    Insieme esamineremo la tua mappa archetipica come un
                    movimento vivo: con tappe chiave, zone di rischio, risorse e
                    l’obiettivo finale del cammino.
                    <br />
                    Si tratta di ritrovare il senso profondo del tuo viaggio e
                    di poter scegliere consapevolmente dove andare, seguendo ciò
                    che davvero ti appartiene.
                    <br />
                    Questa consulenza può diventare un punto di svolta: apre a
                    una comprensione più matura della propria vita ed è pensata
                    per chi è stanco di vagare e pronto a ricevere risposte alle
                    domande più profonde, dotandosi di uno strumento preciso di
                    orientamento.
                </p>
            </>
        ),
        img: 'mappa del viaggio',
        price: 90,
    },
    {
        name: 'Attività Professionale',
        time: '60 – 90 min',
        info: (
            <>
                <p className="text-split">
                    Se sei in un momento in cui il tuo lavoro non ti rappresenta
                    più — o se non hai ancora trovato una direzione chiara —
                    questa consulenza ti aiuta a fare ordine e ad aprirti a una
                    visione più ampia della tua personalità nel contesto
                    professionale.
                    <br />
                    <br />
                    Che tu sia un professionista con esperienza o stia cercando
                    il tuo primo passo solido, il punto è riconoscere cosa ti
                    muove davvero, dove si trovano le tue vere competenze e
                    quale direzione può trasformarsi in una costruzione solida e
                    duratura.
                    <br />
                    <br />
                    Analizzeremo le tue risorse interne, il tuo potenziale reale
                    e i punti di forza che spesso restano nascosti dietro
                    l’adattamento o il compromesso.
                    <br />
                    <br />
                    L’obiettivo non è solo “cambiare lavoro”, ma impostare un
                    vettore chiaro che ti permetta di scegliere con più
                    consapevolezza e agire con coerenza. È un lavoro per chi
                    vuole guidare il proprio percorso, non subirlo.
                </p>
            </>
        ),
        img: '8. attivita professionale1',
        price: 90,
    },
    {
        name: "Il Profilo dell'Ombra – Subconscio",
        time: '60 – 90 min',
        info: (
            <>
                <p className="text-split">
                    Se senti che qualcosa dentro di te agisce senza il tuo
                    consenso — reazioni che non controlli, tensioni che non si
                    spiegano, comportamenti che ti allontanano da ciò che
                    desideri — questa consulenza ti offre uno spazio protetto
                    per esplorare ciò che si muove sotto la superficie.
                    <br />
                    Non è un’analisi fine a sé stessa: è un confronto sincero
                    con ciò che la tua psiche ha dovuto mettere da parte per
                    sopravvivere, adattarsi, essere accettato. Ma ciò che un
                    tempo ti ha protetto, oggi può frenarti.
                    <br />
                    Attraverso l’ombra — le tue parti rimosse, istintive, negate
                    — possiamo ritrovare integrità e stabilità interiore. Solo
                    così puoi trasformare blocchi e reazioni automatiche in
                    risorse vitali, in energia che <i>ti alimenta</i>.
                    <br />È da lì che si ricostruisce un’identità solida: non
                    quella reattiva, ma quella che finalmente puoi scegliere.
                    <br />
                    Per chi è pronto a trasformare la tensione in chiarezza, la
                    rabbia in forza interiore, il caos in ordine — e riconoscere
                    anche quella parte innocente e dimenticata di sé, che ancora
                    attende di essere vista e accolta.
                </p>
            </>
        ),
        img: '6. ombra',
        price: 90,
    },
    {
        name: 'Guida all’Archetipo di Base',
        time: 'PDF - file',
        info: (
            <>
                <p className="text-split">
                    Questa guida ti aiuta a riconoscere la struttura originaria
                    della tua personalità — ciò che ti definisce fin dalla
                    nascita, prima di ogni ruolo o scelta.
                    <br />
                    È come un’impronta profonda: presente e attiva anche quando
                    non la conosci, ma solo prendendone coscienza puoi davvero
                    usarla.
                    <br />
                    Non si tratta di cambiarla, ma di riconoscerla, valorizzarla
                    e nutrirla nel tempo.
                    <br />
                    Ti riconnette alle qualità innate e alle inclinazioni
                    profonde che costituiscono il tuo punto di partenza — la
                    matrice su cui si forma tutto il resto.
                    <br />
                    Un passaggio chiave per muoverti con più chiarezza, coerenza
                    e consapevolezza nella tua direzione personale.
                </p>
            </>
        ),
        img: '2. guida',
        price: 22,
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
                        Come risultato della consulenza avrai una comprensione
                        approfondita in base alla tua richiesta e una settimana
                        di supporto da parte mia con risposte alle tue domande
                        relative alla consulenza svolta.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ServicesServices;
