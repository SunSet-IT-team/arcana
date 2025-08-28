import React from 'react';

import './styles.scss';

import {useDispatch} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {setOpenBuyForm} from '../../../redux/slices/buyFormSlice';
import {setOpenContactForm} from '../../../redux/slices/contactFormSlice';
import Button from '../../components/Button/Button';

export const archetypesContent = {
    I: {
        title: 'Il Mago',
        energy: 'MASCHILE',
        positive: 'PAROLA',
        negative: 'CHIACCHERE INUTILI',
        content: (
            <>
                <p>
                    L'Archetipo I il Mago incarna il potere della parola, dello
                    studio e della comunicazione. È l'energia giovanile che
                    spinge a esplorare, imparare e sperimentare, ma spesso senza
                    una chiara direzione o consapevolezza del "perché".
                </p>
                <p>
                    I Il Mago è colui che riconosce l'importanza di apprendere
                    qualcosa di nuovo, ma non ha ancora compreso appieno il
                    significato profondo dietro le sue azioni. È un maestro
                    delle parole, capace di affascinare e coinvolgere, ma può
                    cadere nella trappola di contraddirsi, senza rendersi conto
                    del divario tra i suoi pensieri, le sue parole e i risultati
                    delle sue azioni.
                </p>
                <p>
                    Per chi incarna questo Archetipo, è fondamentale sviluppare
                    l'abitudine di osservare sé stesso: riflettere su ciò che
                    pensa, su ciò che dice e su ciò che fa. Solo così può
                    evitare di creare malintesi, sia con sé stesso che con gli
                    altri.
                </p>
                <p>
                    I Il Mago è un abile giocatore di parole, capace di
                    intrattenere e persuadere. Tuttavia, rischia di disperdere
                    la propria energia vitale in chiacchiere senza scopo,
                    perdendosi in discorsi che non portano a nessun obiettivo
                    concreto. La sua sfida è trasformare il potenziale della
                    parola in azioni significative, imparando a canalizzare la
                    sua energia verso risultati tangibili.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/I.webp',
        advantages: [
            'Alfabetizzazione naturale nel discorso orale e scritto.',
            'Curiosità verso le nuove informazioni.',
            'Capacità di trovare le informazioni facilmente.',
            'Generatore di idee.',
            'Autorealizzazione.',
            'Comprensione chiara del proprio potenziale.',
            'Dono di “uscire indenne”.',
            'Grandi ambizioni.',
            'Dono di materializzare i desideri.',
            'Dono di predicare ed ispirare con la parola.',
        ],
        disadvantages: [
            'Paura di parlare in pubblico.',
            'Manipolatore.',
            'Egocentrico.',
            'Immaturo.',
            'Conflittuale.',
            'Eterno studente senza scopo.',
            'Problematico nei rapporti con fratelli/sorelle.',
            'Difficoltà di formulare i pensieri ed esprimerli.',
            'Amore per le scaramucce, chiacchere ed i pettegolezzi. ',
            // 'Linguaggio volgare.',
        ],
    },
    II: {
        title: 'La Papessa',
        energy: 'FEMMINILE',
        positive: 'TUTELA',
        negative: 'IPERPROTEZIONE',
        content: (
            <>
                <p>
                    II La{' '}
                    <span style={{width: 1, display: 'inline-block'}}> </span>{' '}
                    Papessa rappresenta il primo Archetipo femminile chiave. È
                    una delle personificazioni della femminilità e dei segreti,
                    di tutto ciò di cui non si parla nella società.
                </p>
                <p>
                    II La{' '}
                    <span style={{width: 1, display: 'inline-block'}}> </span>{' '}
                    Papessa riceve la conoscenza attraverso l'intuizione e a
                    volte non le può spiegare neanche a sé stessa. Se una
                    persona si fida delle proprie sensazioni, allora II La
                    Papessa è in grado di guidarla attraverso tutte le
                    difficoltà, le follie e le paure.
                </p>
                <p>
                    II La{' '}
                    <span style={{width: 1, display: 'inline-block'}}> </span>{' '}
                    Papessa indossa una “maschera” ed è emotivamente chiusa.
                    Vive in due mondi allo stesso tempo, contemporaneamente si
                    trova qui e oltre. Questa è una persona che può separare
                    perfettamente lavoro e famiglia, famiglia e il proprio mondo
                    interiore.
                </p>
                <p>
                    II La{' '}
                    <span style={{width: 1, display: 'inline-block'}}> </span>{' '}
                    Papessa protegge tutto ciò che ha bisogno di cure, ciò che è
                    nascosto, ciò che non è stato ancora rivelato. Questa è
                    l'energia della madre, della natura e del mistero.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/II.webp',
        advantages: [
            'Dono di prendere cura e dare protezione.',
            'Protezione dei segreti.',
            'Intuito sopranormale.',
            'Profondo mondo interiore.',
            'Conoscenza delle leggi universali.',
            'Sentimento della presenza delle forzi superiori.',
            'Rapporto speciale con la natura.',
            'Capacità di trovare la via d’uscita dove altri non vedono.',
            'Riservatezza.',
            'Talento genitoriale.',
        ],
        disadvantages: [
            'Mancanza di comprensione delle leggi della natura.',
            'Amore per i pettegolezzi.',
            'Risultato attraverso gli intrighi.',
            'Un’esistenza miserabile e povertà finanziaria.',
            'Protezione e cura di chi non ha bisogno.',
            'Mancanza della separazione psicologica con genitori/figli.',
            'Paura delle relazioni amorose.',
            'Comportamento distruttivo verso gli esseri viventi.',
            'Madre tossica.',
            // "Magia nera (incantesimi d'amore, turnaround, ecc.).",
        ],
    },
    III: {
        title: "L'Imperatrice",
        energy: 'FEMMINILE',
        positive: 'BELLEZZA',
        negative: 'INFERTILITA’',
        content: (
            <>
                <p>
                    L'Archetipo III l'Imperatrice rappresenta il secondo
                    Archetipo femminile chiave. È la personificazione della
                    materia, della sessualità e della padronanza del mondo
                    materiale.
                </p>
                <p>
                    III L’Imperatrice è l'incarnazione del desiderio inconscio
                    di fecondazione, dell'energia della bellezza, della
                    creazione e dell'abbondanza.
                </p>
                <p>
                    III L'Imperatrice è il corpo stesso, che ama e celebra la
                    propria fisicità, considerandolo come un vaso capace di
                    accogliere e nutrire, sia un bambino che un progetto, una
                    famiglia o un'impresa. Il suo desiderio di realizzare i
                    propri desideri, che altri potrebbero considerare egoistici,
                    nasce dal bisogno di ottenere il massimo comfort e
                    abbondanza nella vita.
                </p>
                <p>
                    La dualità dell'Imperatrice risiede nella sua capacità di
                    dare vita ma anche di toglierla. Quando è prepotente, il suo
                    amore può diventare soffocante, poiché prevale il desiderio
                    di dominare.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/III.webp',
        advantages: [
            'Amor proprio, la capacità di scegliere sé stessi.',
            'Capacità di essere prolifici (in tutti gli aspetti: figli, arte, progetti, idee).',
            'Capacità di comprendere chiaramente i propri desideri.',
            'Esercizio del proprio diritto di nascita al benessere fisico e al comfort corporeo.',
            'Sana dose di egoismo.',
            'Dono di attrarre o creare abbondanza.',
            'Bellezza, grazia e attrattività personali.',
            'Scelta naturale di alta qualità in tutto.',
            'Capacità di creare bellezza attorno a sé.',
            'Talento creativo nella vita di tutti i giorni.',
        ],
        disadvantages: [
            'Impossibilità di sentire il mondo materiale e regalarsi la sensazione del comfort.',
            'Paura della vecchiaia.',
            'Immaturità e capricci.',
            'Cattivo gusto estetico, kitsch.',
            'Volgarità e maleducazione.',
            'Mercantilismo (si misura tutto e tutti solo con il denaro).',
            'Incapacità di gestire il denaro in modo adeguato.',
            'Madre dispotica.',
            'Business sulla bellezza del proprio corpo.',
            // 'Prostituzione.',
        ],
    },

    IV: {
        title: "L'Imperatore",
        energy: 'MASCHILE',
        positive: 'POTERE',
        negative: 'DISPOTISMO',
        content: (
            <>
                <p>
                    IV L'Imperatore è il primo Archetipo maschile chiave. È la
                    personificazione del Re, del padrone, di un professionista.
                </p>
                <p>È il Padre archetipico in termini di potere e controllo.</p>
                <p>
                    L'Archetipo IV l'Imperatore è caratterizzato dal desiderio
                    di esercitare il controllo, di avere potere su ciò che lo
                    circonda. Il suo potere si fonda sulla libertà di punire, un
                    potere che è strettamente legato all'autorità e alla
                    disciplina. L'Imperatore spesso si circonda di strumenti
                    simbolici, come il bastone o l'arma, che rappresentano la
                    sua capacità di fare rispettare le regole e mantenere
                    l'ordine.
                </p>
                <p>
                    Il suo controllo, tuttavia, è paterno, perché sempre
                    finalizzato al bene, alla stabilità e alla sicurezza di chi
                    gli sta intorno: i membri della sua famiglia, della sua
                    squadra, della società e del Paese che governa.
                </p>
                <p>
                    IV L'Imperatore è la personificazione della struttura, di un
                    territorio, dei confini di questo territorio con il
                    desiderio constante di espanderli.
                </p>
                <p>
                    Per l'Archetipo IV l'Imperatore, l'espansione dei confini
                    dipende dalla capacità di combattere e conquistare.
                    Tuttavia, il vero potere risiede in una forza interna che
                    gli consente di riconoscere il nemico prima che la stabilità
                    del suo potere venga minacciata. Le alleanze e i conflitti
                    per l’Imperatore sono dinamici e in costante evoluzione: un
                    amico può diventare un nemico se non è più allineato agli
                    obiettivi, mentre un nemico può trasformarsi in alleato
                    quando le circostanze lo rendono vantaggioso. L'Imperatore,
                    grazie alla sua mente strategica, è in grado di preservare e
                    rafforzare il suo potere sul "territorio", espandendo
                    continuamente il suo dominio.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/IV.webp',
        advantages: [
            'Responsabilità e serietà.',
            'Stabilità.',
            'Struttura e ordine nella mente e nella vita.',
            'Prontezza per difendere il proprio ordine.',
            'Posizioni di leadership.',
            'Capacità di lavorare unica.',
            'Desiderio di potere.',
            'Indulgenza.',
            'Capacità di organizzare gli altri a proprio favore.',
            // "Talento genitoriale nell'insegnare attraverso la disciplina e le regole.",
        ],
        disadvantages: [
            'Violazione i confini degli altri.',
            'Autocrazia.',
            'Ossessione per il lavoro.',
            'Incapacità di riposare.',
            'Assenza del tempo libero.',
            'Genitore prepotente.',
            'Mancanza di un nucleo interiore.',
            'Irresponsabilità.',
            'Volontà debole.',
            // 'Mancanza di realizzazione professionale.',
        ],
    },

    V: {
        title: 'Il Papa',
        energy: 'MASCHILE',
        positive: 'AUTORITA’',
        negative: 'STUPIDITÀ',
        content: (
            <>
                <p>
                    V Il Papa è il secondo Archetipo maschile chiave. È il Padre
                    archetipico in termini di tutoraggio, potere genitoriale e
                    autorità.
                </p>
                <p>
                    L'Archetipo V il Papa è la personificazione di un
                    insegnante, di un mentore, delle tradizioni, della
                    conoscenza tradizionale e dell’autorità della conoscenza.
                </p>
                <p>
                    V Il Papa porta avanti il tema del potere. E il significato
                    della sua conoscenza non è nell'accumulazione, ma nella
                    trasmissione e nel dominio grazie alle proprie conoscenze. V
                    il Papa raggiunge alta posizione sociale tramite il
                    riconoscimento della sua autorità da parte del potere
                    ufficiale.
                </p>
                <p>
                    È importante che V il Papa abbia seguaci ed è consigliabile
                    che siano un po' più in basso nella gerarchia.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/V.webp',
        advantages: [
            'Studi fondamentali.',
            'Forza interiore.',
            'Serietà verso sé stessi e gli altri.',
            'Alta intelligenza.',
            'Onestà.',
            'Decenza.',
            'Mente analitica.',
            'Capacità di insegnare.',
            'Il talento di apparire come un genitore ideale.',
            'Tradizionalista.',
        ],
        disadvantages: [
            'Doppi standard.',
            'Negazione ogni autorità.',
            "Disprezzo per l'istruzione.",
            'Mentalità chiusa e ristretta.',
            'Autoritarismo.',
            'Orgoglio intellettuale.',
            'Arroganza.',
            'Norme imponenti.',
            'Mancanza di autorità personale.',
            // 'Genitore tossico.',
        ],
    },

    VI: {
        title: "L'Innamorato",
        energy: 'NEUTRALE',
        positive: 'SCELTA',
        negative: 'DISTRUZIONE DELLA RELAZIONE',
        content: (
            <>
                <p>
                    VI L'Innamorato è la personificazione della scelta, della
                    partnership e del triangolo della scelta. L’essenza di
                    questo Archetipo è proprio la Scelta.
                </p>
                <p>
                    Quando corpo, cuore e mente sono allineati in una decisione
                    comune. La cosa più importante è desiderare quella
                    decisione, amare la propria scelta e godere appieno del
                    momento in cui si prende la decisione.
                </p>
                <p>
                    L'Archetipo VI l'Innamorato ci insegna a costruire relazioni
                    d'amore non solo con noi stessi e gli altri, ma anche con
                    ogni cosa che scegliamo. È nell’intensità di questi piccoli
                    atti quotidiani che impariamo ad amare: quella tazzina di
                    caffè mattutina, quel cucchiaino di zucchero, lo zucchero
                    nel cucchiaino, il caffè in cui aggiungiamo lo zucchero.
                    Ogni scelta è una forma di connessione, una dichiarazione di
                    affetto.
                </p>
                <p>
                    La scelta è l'iniziazione della crescita. La scelta è
                    azione. L'Archetipo VI l'Innamorato rappresenta la scelta
                    giusta, una decisione che spesso può essere difficile da
                    prendere. Incarnando l'energia dei sentimenti più profondi,
                    insegna a vivere in armonia con sé stessi e con gli altri. È
                    l'energia che guida verso la scoperta dell'unione ideale,
                    quella che porta a trovare l'equilibrio tra il proprio mondo
                    interiore e la connessione con il mondo esterno.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/VI.webp',
        advantages: [
            'Scelta con amore per sé stesso e per gli altri.',
            'Capacità di amare veramente.',
            'Profondo senso della bellezza.',
            'Talento di sperimentare ed esprimere i propri sentimenti.',
            'Costruzione facile delle connessioni personali e sociali.',
            'Sensibilità e sensualità.',
            'Premurosità.',
            'Disponibilità.',
            'Amicizia profonda.',
            'Simpatia.',
        ],
        disadvantages: [
            'Incapacità di scegliere.',
            'Scelta multipla.',
            'Innamoramento facile sempre e ovunque.',
            "Difficoltà a comprendere l'amore.",
            'Infedeltà.',
            'Ricerca di un ideale immaginario.',
            'Socializzazione difficile.',
            'Problemi di comunicazione.',
            'Sentimenti bloccati.',
            'Antipatia.',
            "Scelta consapevole che danneggia un'altra persona.",
            'Relazione codipendente.',
            // 'Amore con condizioni.',
        ],
    },

    VII: {
        title: 'Il Carro',
        energy: 'MASCHILE',
        positive: 'BERSAGLIO',
        negative: 'ASSENZA DI SCOPO',
        content: (
            <>
                <p>
                    “Chi trattiene l’ira risvegliata, come un carro che si è
                    smarrito, lo chiamo auriga; gli altri tengono semplicemente
                    le briglia.” – Buddha.
                </p>
                <p>
                    L’Archetipo VII il Carro rappresenta l'energia
                    pionieristica. È la personificazione del bersaglio,
                    dell’impostazione degli obiettivi, della concorrenza, del
                    leader e dell'attività.
                </p>
                <p>
                    Il Carro è attratto dal desiderio di essere il primo e di
                    vincere. Ma la vittoria, a che prezzo?
                </p>
                <p>
                    Il Carro dispone di armi e cavalli. Questi non sono più
                    istinti naturali, come quelli dell’Archetipo XXII il Matto,
                    ma sono potenti cavalli da combattimento. La difficoltà sta
                    nell’imparare a controllare questi cavalli. L’obiettivo è
                    stabilire una meta e raggiungerla senza disperdersi.
                    Pertanto, l’auriga non deve solo comprendere cosa vuole, ma
                    deve anche essere fermamente fiducioso, equilibrato e
                    composto.
                </p>
                <p>Il Carro è l’Archetipo del primo trionfo.</p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/VII.webp',
        advantages: [
            'Interesse per nuovi orizzonti.',
            'Capacità di essere primi.',
            'Capacità di fissare un obiettivo e raggiungerlo.',
            'Capacità di controllarsi.',
            'Competizione sana.',
            'Ambizione.',
            'Determinazione negli obiettivi.',
            'Coraggio in ogni situazione.',
            'Controllo sul corpo e sui trasporti.',
            'Amore per il movimento ed i viaggi.',
        ],
        disadvantages: [
            'Passività.',
            'Paura di andare avanti.',
            'Assenza di ambizioni.',
            'Meschinità.',
            'Viltà.',
            'Troppa sicurezza di sé.',
            'Camminare sui "cadaveri" per ottenere la vittoria ad ogni costo.',
            'Critica di coloro che si stanno muovendo verso i propri obiettivi.',
            'Carrierismo.',
            // 'Alto rischio di lesioni e dei problemi con il veicolo.',
        ],
    },

    VIII: {
        title: 'La Giustizia',
        energy: 'FEMMINILE',
        positive: 'REGOLE',
        negative: 'INIQUITÀ',
        content: (
            <>
                <p>
                    L’Archetipo VIII la Giustizia è la personificazione di
                    società, regole, istruzioni, algoritmi e legge. L'essenza
                    dell'Archetipo VIII è l'equilibrio. Si tratta
                    dell’equilibrio tra il mondo interiore e le regole sociali.
                </p>
                <p>
                    L’equilibrio tra interno ed esterno: ognuno ha il proprio
                    interno, quindi ognuno ha il proprio equilibrio tra ciò che
                    è dentro di sé e ciò che è esterno. In altre parole, ognuno
                    ha il proprio algoritmo e le proprie regole.
                </p>
                <p>
                    Il secondo significato dell'Archetipo VIII la Giustizia
                    riguarda la causa ed effetto, la legge del Karma. Non esiste
                    il caso: ogni cosa ha una ragione e una conseguenza.
                </p>
                <p>
                    L’Archetipo VIII la Giustizia ha lo scopo di bilanciare il
                    rapporto tra il bene e il male. Ecco perché, ad esempio, i
                    monaci si equilibrano con il duro lavoro piuttosto che con
                    la contemplazione del cielo.
                </p>
                <p>
                    In nessuna mitologia esiste una figura di Giustizia come una
                    figura maschile. L’Archetipo VIII possiede una bilancia
                    (attributo femminile) e una spada (attributo maschile),
                    creando così una combinazione riuscita di principi maschili
                    e femminili: prima peseremo – poi taglieremo, peseremo –
                    taglieremo e così via. Questo lavoro scrupoloso, che
                    richiede equilibrio e attenzione, da non essere addato a un
                    uomo, perché la logica maschile funziona diversamente.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/VIII.webp',
        advantages: [
            'Vita secondo le regole.',
            'Sani principi morali.',
            'Affidamento ai fatti.',
            'Armonia interiore.',
            'Ordine nella vita e nella mente.',
            'Prontezza a proteggere le altre persone.',
            "Comprensione delle leggi dell'Universo.",
            'Rispetto verse le leggi e le norme sociali.',
            'Imparzialità.',
            'Logica.',
        ],
        disadvantages: [
            'Permalosità.',
            'Indisciplina.',
            'Pensiero superficiale.',
            'Paura di commettere errori.',
            'Tendenza a valutare le situazioni in base alle emozioni.',
            'Giudizi categorici.',
            'Mancanza di flessibilità di pensiero.',
            'Grandi idealizzazioni.',
            'Conflittualità.',
            // 'Formalità nelle relazioni.',
        ],
    },

    IX: {
        title: 'L’Eremita',
        energy: 'NEUTRALE',
        positive: 'SAGGEZZA',
        negative: 'IL CAMMINO DI QUALCUN ALTRO',
        content: (
            <>
                <p>
                    L'Archetipo IX l'Eremita è la personificazione di concetti
                    come saggezza, esperienza, solitudine, connessioni tra
                    generazioni e il cammino personale. IX l'Eremita è la Guida,
                    il più alto livello di conoscenza.
                </p>
                <p>
                    L'Eremita rappresenta la solitudine come una scelta
                    consapevole. Da questa scelta deriva l'enorme importanza di
                    chi siano i suoi compagni di viaggio, se ci sono.
                </p>
                <p>
                    L'Archetipo IX l’Eremita è responsabile di tutta
                    l'esperienza umana: di tutto ciò che l'umanità ha
                    accumulato, di tutta la conoscenza, di tutta l'esperienza
                    (archivi, archeologia, memorie).
                </p>
                <p>
                    Essendo una guida, IX l'Eremita è sempre in movimento.
                    Attraversa il tempo e raccoglie continuamente le esperienze
                    umane. Queste esperienze non sono divise in femminile e
                    maschile, ma sono universali, al di là del genere.
                </p>
                <p>Questa è l'ultima figura umana negli Archetipi.</p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/IX.webp',
        advantages: [
            'Autosufficienza.',
            'Maturità psicologica.',
            'Grande saggezza.',
            'Riservatezza.',
            'Semplicità.',
            'Dono di osservazione.',
            'Attenzione ai piccoli dettagli.',
            'La capacità di ammettere i propri errori e imparare da essi.',
            'Ricerca costante della spiritualità.',
            'Equilibrio tra il sociale e il personale.',
        ],
        disadvantages: [
            'Svalutazione della propria conoscenza.',
            'Paura della solitudine.',
            'Sensazione di non essere abbastanza.',
            'Intolleranza verso le altre persone.',
            'Paura della vecchiaia.',
            'Socializzazione difficile.',
            'Conservatorismo rigido (quando si nega ogni cosa nuova).',
            'Uno stile di vita non sano.',
            'Ascetismo eccessivo.',
            // 'Povertà.',
        ],
    },

    X: {
        title: 'La Ruota della Fortuna',
        energy: 'NEUTRALE',
        positive: 'PROPRI BISOGNI',
        negative: 'DEBITI',
        content: (
            <>
                <p>
                    L’Archetipo X la Ruota della Fortuna è la personificazione
                    dei propri bisogni, delle occasioni, delle finanze che
                    circolano tra le persone e tra persone ed enti finanziari.
                </p>
                <p>
                    X La Ruota della Fortuna rappresenta la fortuna personale.
                    Chi incarna questo Archetipo è visto come "baciato dal
                    destino", a condizione che comprenda chiaramente come
                    funziona questa energia e riesca a entrare in questo
                    “cerchio fortunato”, che in realtà rappresenta una spirale.
                </p>
                <p>
                    Il concetto principale dell'Archetipo X la Ruota della
                    Fortuna, è la fiducia nella vita, un flusso continuo di
                    cambiamenti tra alti e bassi, che conducono ad un nuovo
                    livello. Se il cerchio si chiude, la Ruota si ferma.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/X.webp',
        advantages: [
            'Persone super fortunate.',
            'Capacità di vedere la natura ciclica della vita.',
            'Senso intuitivo della giusta direzione.',
            'Dono di attrare le finanze.',
            'Adeguatezza.',
            'Capacità di vedere e cogliere le opportunità.',
            'Capacità di ottenere qualcosa senza troppi sforzi.',
            'Comprensione la legge del karma.',
            'Facile ingresso in nuove esperienze.',
            'Adattabilità elevata.',
        ],
        disadvantages: [
            'Incertezza nel processo decisionale.',
            'Vita senza cambiamento, stagnazione.',
            'Nessuna fiducia nel mondo.',
            'Mancanza di sensazione di sicurezza.',
            'Difficoltà finanziarie.',
            'Avidità patologica.',
            'Il denaro è l’unica misura.',
            "Dipendenza dal gioco d'azzardo.",
            'Bancarotta.',
            // 'Sfortuna patologica.',
        ],
    },

    XI: {
        title: 'La Forza',
        energy: 'MASCHILE',
        positive: 'GESTA EROICHE',
        negative: 'VIOLENZA',
        content: (
            <>
                <p>
                    L’Archetipo XI la Forza rappresenta la personificazione
                    della Forza in tutte le sue manifestazioni, simboleggiando
                    il dominio sull'Ego regale attraverso la forza di volontà.
                </p>
                <p>
                    XI La Forza è energia ardente e incontrollabile. Rappresenta
                    il processo in cui una persona deve “crescere” per
                    rivendicare i veri attributi del potere.
                </p>
                <p>
                    Secondo l’Archetipo XI la Forza, una persona deve imparare a
                    interagire con la propria “bestia” interiore, che
                    rappresenta l'egocentrismo animale, e dimostrare il diritto
                    di essere “forte”. Tuttavia, per fare ciò, è necessario un
                    intenso allenamento, sia del corpo che dell'anima. Se una
                    persona non è in grado di controllare il proprio potere
                    istintivo, la sua "bestia" lo divorerà, e i suoi desideri
                    finiranno per diventare più forti di lui stesso.
                </p>
                <p>
                    XI La Forza è anche l'Archetipo delle gesta eroiche, della
                    resistenza, dello sport, del vivere "al massimo" e di
                    prendere il tutto possibile dalla vita.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/XI.webp',
        advantages: [
            'Resilienza psicologica e fisica.',
            'Forte nucleo interiore.',
            'Perseveranza.',
            'Forza di volontà.',
            'Vivacità.',
            'Dono di ottenere facilmente ciò che si vuole.',
            'Capacità di fare più degli altri.',
            'Ricerca di adrenalina “sicura”.',
            'Attenzione e cura del corpo.',
            'Sessualità.',
        ],
        disadvantages: [
            'Crudeltà.',
            'Aggressività inappropriata.',
            'Violenza fisica e psicologica.',
            'Pressione sugli altri.',
            'Megalomania.',
            'Negligenza fisica e disattenzione alla salute.',
            'Mancanza di volontà.',
            'Viltà.',
            'La vita in uno stato estremo ("muoio di fame - mi abbuffo").',
            // 'Blocchi nella sfera sessuale.',
        ],
    },

    XII: {
        title: 'L’Appeso',
        energy: 'NEUTRALE',
        positive: 'SACRIFICIO VOLONTARIO',
        negative: 'VITTIMA',
        content: (
            <>
                <p>
                    L’Archetipo XII l’Appeso rappresenta la personificazione del
                    sacrificio volontario in nome di un grande obiettivo.
                </p>
                <p>
                    XII l’Appeso è il simbolo di transizione. Questo stato
                    riflette un momento di cambiamento profondo: si cerca il
                    significato spirituale, si vagabonda nel mondo interiore. A
                    volte può sembrare una fase di blocco, di coscienza
                    invertita o di vuoto, in cui manca un chiaro scopo.
                </p>
                <p>
                    L’Appeso è anche simbolo di una crisi di mezza età: quando
                    non si trova più un senso a continuare il proprio viaggio
                    terrestre, l'unica direzione possibile è quella indicata
                    dalla testa dell'Appeso, ossia “andare via”.
                </p>
                <p>
                    La parola che meglio rispecchia l’essenza dell’Archetipo XII
                    l’Appeso è alterità, che permette di vedere le cose
                    ordinarie sotto una prospettiva diversa.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/XII.webp',
        advantages: [
            'Profondità del mondo interiore.',
            'Intuito sopranormale.',
            'Alterità nell’essere.',
            'Compassione.',
            'Empatia elevata.',
            'Dedizione totale e completa.',
            'Indizi dal subconscio.',
            'Capacità di lungimiranza.',
            'Autoanalisi e autoriflessione.',
            'Volontariato.',
            'Connessione speciale con Dio ed i poteri superiori.',
        ],
        disadvantages: [
            'Pigrizia.',
            'Apatia senza causa.',
            'Stagnazione.',
            'Permalosità.',
            'Lamentele infinite.',
            'Pessimismo disperato.',
            'Sacrificio inutile.',
            'La posizione della “vittima”.',
            'Insensibilità verso le sofferenze altrui.',
            'Emotività instabile e/o eccessiva.',
            'Dipendenze.',
            // 'Fanatismo.',
        ],
    },

    XIII: {
        title: 'La Morte',
        energy: 'FEMMINILE',
        positive: 'CAMBIAMENTI',
        negative: 'STAGNAZIONE',
        content: (
            <>
                <p>
                    L’Archetipo XIII La Morte è la personificazione della
                    Trasformazione e del cambiamento irrevocabile.
                </p>
                <p>
                    XIII è l’unione di X (La Ruota della Fortuna) e III
                    (L'Imperatrice), simboleggiando che nascita e morte sono due
                    facce inseparabili dell'esistenza. III L'Imperatrice dà alla
                    luce un bambino, ma sa che un giorno morirà, mentre X La
                    Ruota della Fortuna rappresenta l'eterna ciclicità del
                    Samsara, che non si ferma mai.
                </p>
                <p>
                    L’Archetipo XIII La Morte è il più nudo di tutti: non solo i
                    vestiti, ma anche la pelle è stata rimossa. La sua gamba di
                    un colore diverso simboleggia il fatto che una parte di essa
                    appartiene già a un altro mondo (vedi: Arcano Maggiore XIII
                    La Morte di Tarocchi Marsigliesi di A. Jodorowsky).
                </p>
                <p>
                    La Morte trasforma in modo irreversibile: una volta che il
                    cambiamento è avvenuto, non è possibile tornare indietro. È
                    una trasformazione che non ammette ritorni.
                </p>
                <p>
                    L’essenza dell’Archetipo XIII La Morte risiede nella vita,
                    nella massima saturazione di essa, arricchita da esperienze
                    intense. Una vita priva della consapevolezza della morte
                    diventa grigia e noiosa.
                </p>
                <p>
                    XIII La Morte è rappresentata da brividi, sensazioni forti,
                    un respiro profondo e la capacità di creare una nuova vita,
                    “tagliando” via le parti morte per rinascere in una forma
                    nuova.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/XIII.webp',
        advantages: [
            'Sete di vita in tutte le sue forme.',
            'Resilienza alla vita.',
            'Rispetto verso la vita (i vegani).',
            'Capacità di vivere al massimo sentimenti ed emozioni.',
            'Rifiuto tempestivo del vecchio, del superfluo.',
            'Cambiamenti qualitativi intorno sé.',
            'Capacità di sopportare facilmente situazioni difficili.',
            'Buona salute.',
            'Sessualità.',
            'Longevità.',
        ],
        disadvantages: [
            'Paura di qualsiasi cambiamento.',
            'Intensa paura della morte.',
            'Disprezzo verso la vita e tutti gli esseri viventi.',
            'Disordine e ingombro (dello spazio, del corpo o della mente).',
            'Esperimenti sulla salute.',
            'Crudeltà.',
            'Emotività eccessiva.',
            'Ansia dovuta alla paura di non riuscire a fare qualcosa in tempo.',
            'Esposizione deliberata e ingiustificata al pericolo.',
            // 'Desiderio maniacale di pulizia.',
        ],
    },

    XIV: {
        title: 'La Temperanza',
        energy: 'NEUTRALE',
        positive: 'EQUILIBRIO',
        negative: 'ESTREMI',
        content: (
            <>
                <p>
                    L'Archetipo XIV La Temperanza è la personificazione della
                    “sezione aurea” di Michelangelo, simboleggiando l'equilibrio
                    e l'armonia tra il mondo terreno e quello spirituale.
                </p>
                <p>
                    Immagina di avere due ali: una radicata nella terra e
                    l'altra proiettata verso il cielo. Le ali ti permettono di
                    volare, di esprimerti nella musica, nella danza, ma sai
                    anche quando è il momento di atterrare. Luogo e tempo sono
                    in perfetta armonia.
                </p>
                <p>
                    Con XIV La Temperanza, sarai ricompensato secondo la tua
                    capacità di mantenere quest'armonia. Devi esplorare questa
                    armonia, misurando il tuo mondo interiore. Come gestisci le
                    tue emozioni? Qual è la tua misura dell'armonia?
                </p>
                <p>
                    L'armonia interiore si raggiunge quando una persona è capace
                    di ripristinare il proprio equilibrio emotivo, grazie alla
                    forza interna e alle attività esterne che favoriscono la
                    stabilità.
                </p>
                <p>
                    L'Archetipo XIV insegna che gli opposti interni si uniscono
                    e si riconciliano nell'immagine di un nuovo “io”. Siamo
                    liberi di passare da una “sponda” all’altra, trapassare
                    molteplici stati diversi, ma mantenendo sempre un equilibrio
                    interiore.
                </p>
                <p>
                    Ogni persona è un alchimista della propria vita. L'essenza
                    di XIV La Temperanza è creare il proprio “profumo” ideale,
                    che rispecchia l’io profondo.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/XIV.webp',
        advantages: [
            'Sobrietà.',
            'Pacifismo.',
            'Precisione.',
            'Percezione della “sezione aurea”.',
            'Trasformazione morbida.',
            'Trasmissione dell’armonia.',
            'Moderazione nei bisogni.',
            'Capacità di mantenere in equilibrio tutti gli ambiti della vita.',
            'Capacità di adattamento e di equilibrio.',
            'Capacità di essere puntuale.',
        ],
        disadvantages: [
            'Mantenimento di stabilità a tutti i costi.',
            'Passività.',
            'Perfezione nauseante.',
            "Tendenza all'eccesso.",
            'Intemperanza.',
            'Ogni giorno è “il giorno della marmotta”.',
            'Distorsioni negli ambiti della vita.',
            'Provocazione delle emozioni negative.',
            'Intolleranza verso gli altri.',
            // 'Impossibilità di accettare sé stesso.',
        ],
    },

    XV: {
        title: 'Il Diavolo',
        energy: 'MASCHILE',
        positive: 'PIACERE',
        negative: 'DIPENDENZE',
        content: (
            <>
                <p>
                    L'Archetipo XV, Il Diavolo, rappresenta la personificazione
                    del piacere e simboleggia la libido.
                </p>
                <p>
                    È il Principe delle tenebre, il dio dei piaceri, il dio Pan,
                    uno dei più antichi e potenti della mitologia. Pan incarna
                    il potere fertilizzante della natura selvaggia, che può
                    essere sia creatore che distruttore.
                </p>
                <p>
                    Il Diavolo è energia fallica, un fallo è come una Torcia:
                    qualcosa che può accendere, eccitare, affascinare e indurre
                    in tentazione. Questa è una prova: una prova di resistenza,
                    per verificare la capacità di fermarsi di fronte alla
                    tentazione. Qui, il piacere può facilmente trasformarsi in
                    perversione.
                </p>
                <p>
                    Come una radiografia, l'Archetipo XV rivela a cosa è
                    agganciata la persona, portando in luce i lati d'ombra della
                    sua anima. È un'energia ardente, passionale, che può
                    spingere a bruciare tutto nel fuoco dei propri desideri.
                    Quando una persona vuole ottenere qualcosa, qualsiasi cosa,
                    questa energia la rende capace di realizzarlo, a qualunque
                    costo.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/XV.webp',
        advantages: [
            'Enorme energia vitale.',
            'Sessualità irresistibile.',
            'Carisma.',
            'Insolenza.',
            'Magnetismo innato.',
            'Realizzazione personale.',
            'Autocontrollo.',
            'Naturalezza nelle proprie manifestazioni.',
            'Conoscenza delle debolezze degli altri.',
            'Sensibilità e comprensione delle altre persone a livello emotivo.',
        ],
        disadvantages: [
            'Eccessi.',
            'Abuso del piacere.',
            'Inganni ben congegnati e preparati.',
            'Avidità.',
            'Falsità nel comportamento.',
            'Desiderio di controllare e possedere gli altri.',
            'Provocazione a vizi e debolezze.',
            'Completa incapacità di godersi la vita.',
            'Perversione.',
            // 'Criminalità (filosofia di "Pecunia non olet" (i soldi non puzzano).',
        ],
    },

    XVI: {
        title: 'La Torre',
        energy: 'NEUTRALE',
        positive: 'COSTRUZIONE',
        negative: 'DISTRUZIONE',
        content: (
            <>
                <p>
                    L’Archetipo XVI La Torre rappresenta la personificazione
                    della struttura, della costruzione e della distruzione. Fino
                    a un certo punto, XVI La Torre è una struttura difensiva
                    molto potente (una fortezza, una casa, anche una pirogua può
                    essere una piccola Torre).
                </p>
                <p>
                    Ma perché c'è una corona cadente sulla XVI Torre?
                    Rappresenta il fatto che qualcosa nella mente è già così
                    annebbiato che è necessario colpire questa "torretta"
                    affinché la persona riprenda i sensi o le sue convinzioni
                    ferree vengano completamente distrutte (vedi: Arcano
                    Maggiore XVI La Torre di Tarocchi Marsigliesi di A.
                    Jodorowsky).
                </p>
                <p>
                    Nel momento in cui una persona comincia ad avere molta
                    sicurezza in qualcosa, viene rapidamente riportata sulla
                    terra. Vengono distrutte le sue convinzioni nella fermezza
                    di qualcosa, dimostrando che l’uomo non è Dio.
                </p>
                <p>
                    XVI La Torre è uno degli Archetipi di trasformazione e di
                    transizione più forti. La trasformazione della Torre è
                    improvvisa. È uno stato in cui qualcosa di stabile diventa
                    instabile, un edificio crolla, una convinzione cade a pezzi,
                    l’ordine diventa disordine. Così, dopo aver scoperto una
                    enorme forza interiore, la persona può ricostruirsi mattone
                    dopo mattone, partendo da fondamenta più solide, ovvero da
                    una base di maggiore consapevolezza, e ricominciando ogni
                    volta da un livello spirituale più alto.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/XVI.webp',
        advantages: [
            'Dono di creare e costruire strutture.',
            'Capacità di creare qualcosa dal nulla.',
            'Intolleranza alla ambiguità.',
            'Capacità di affrontare facilmente le difficoltà.',
            '“Indistruttibile”.',
            'Capacità di adattarsi alla struttura nuova.',
            'Forza spirituale e fisica, quindi le difficoltà non spezzano.',
            'Semplicità.',
            'Riservatezza.',
            'Pazienza.',
        ],
        disadvantages: [
            'Mancanza di fiducia in sé stesso.',
            'Incapacità di costruire e creare.',
            'Blocco nella palude della stabilità.',
            'Distruzione e autodistruzione.',
            'Anarchismo.',
            'Sabotaggio dello sviluppo.',
            'Chiusura dal mondo nelle proprie convinzioni.',
            'Posizione dello “struzzo”.',
            'Molti segreti.',
            // 'Ostinazione.',
        ],
    },

    XVII: {
        title: 'La Stella',
        energy: 'FEMMINILE',
        positive: 'AMICIZIA',
        negative: 'TRADIMENTO',
        content: (
            <>
                <p>
                    L’Archetipo XVII La Stella rappresenta la personificazione
                    dell'unicità, della creatività, della speranza e dei sogni.
                    È l'Archetipo più complesso perché spesso viene divinizzato.
                </p>
                <p>
                    La completa nudità della Stella XVII simboleggia l'apertura
                    dei sentimenti e dei pensieri con massima fiducia in
                    un'altra persona, la prontezza di mostrarsi davanti
                    all’altro metaforicamente “nudi” e di versare—versare acqua,
                    cioè aprirsi e raccontare (vedi: Arcano Maggiore XVII La
                    Stella di Tarocchi Marsigliesi di A. Jodorowsky).
                </p>
                <p>
                    Ma quale sarà il prezzo da pagare? Amicizia e Tradimento
                    sono i due poli della Stella XVII.
                </p>
                <p>
                    XVII La Stella è un dono eccezionale. Un dono in qualsiasi
                    cosa: qualcuno crea, qualcuno sputa il più lontano, qualcuno
                    ha un aspetto insolito e unico.
                </p>
                <p>
                    XVII La Stella incoraggia a trovare il vero «sé» e credere
                    nel proprio talento divino. Liberazione da tutti coloro che
                    non sono veri amici, purificazione attraverso la creatività
                    e riconciliazione con i propri sentimenti e sogni, portando
                    così all'assoluta libertà di espressione.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/XVII.webp',
        advantages: [
            'Ricco mondo interiore.',
            'Sensibilità e sensualità.',
            'Creatività.',
            'Profondo senso della bellezza.',
            'Sensibilità energetica, energia esoterica.',
            'Organizzazione mentale sottile e quindi vulnerabile.',
            'Connessioni sociali.',
            'Accendere la speranza negli altri, diventando una luce guida.',
            'Sentimenti sublimi.',
            'Eccezionalità.',
        ],
        disadvantages: [
            'Paura del successo.',
            'Mancanza di fiducia in sé stesso, nelle altre persone e nei propri talenti.',
            'Creatività bloccata.',
            'Sentimenti ed emozioni bloccati.',
            'Situazioni di infedeltà e di tradimento.',
            'Dipendenza dalla compagnia degli amici.',
            'Arroganza.',
            'Apparenza.',
            'Insensibilità, freddezza.',
            // 'La "febbre delle stelle".',
        ],
    },

    XVIII: {
        title: 'La Luna',
        energy: 'FEMMINILE',
        positive: 'INCONSCIO',
        negative: 'PAURE',
        content: (
            <>
                <p>
                    L'Archetipo XVIII La Luna rappresenta la personificazione
                    dell'Anima, della psicologia e delle connessioni con
                    l'inconscio. XVIII La Luna è la notte, e sotto la coltre
                    dell'oscurità molte cose sono nascoste. Questo è il dominio
                    della psiche, un campo misterioso e ancora poco esplorato.
                </p>
                <p>
                    Ci sono molti opposti nell'immagine dell'Archetipo XVIII La
                    Luna: Sole e Luna, acqua e terra. Una torre è luminosa,
                    l'altra è oscura. L’animale selvatico e l’animale domestico
                    simboleggiano le parti addomesticate e le parti selvagge
                    della psiche. Ci troviamo in un mondo mutevole, in continua
                    evoluzione (vedi: Arcano Maggiore XVIII La Luna di Tarocchi
                    Marsigliesi di A. Jodorowsky).
                </p>
                <p>
                    XVIII La Luna è innanzitutto un corpo celeste: luce alta,
                    fredda e distante. Per questo motivo, chi possiede questo
                    Archetipo può apparire strano, reticente, incomprensibile, e
                    talvolta molto profondo, immerso nelle profondità
                    dell'inconscio.
                </p>
                <p>
                    L'essenza dell'Archetipo XVIII La Luna è l'illusione, la
                    tentazione di confondere l'illusione con la realtà e la
                    realtà con l'illusione.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/XVIII.webp',
        advantages: [
            'Conforto psicologico.',
            'Empatia.',
            'Comunicazione con il subconscio (spesso attraverso sogni, sogni profetici, sogni lucidi).',
            'Intuizione sviluppata.',
            'Esperienze mistiche.',
            'Ricca immaginazione.',
            'Percezione poetica.',
            'Romanticismo.',
            'Buone competenze in psicologia.',
            'Talento culinario.',
        ],
        disadvantages: [
            'Emotività (energia mentale travolgente).',
            'Confusione mentale.',
            'Esaltazione esagerata dei sentimenti.',
            'Difficoltà a distinguere la realtà dalla fantasia.',
            'Esperienze mistiche illusorie.',
            'Proiezioni inconsci.',
            'Ansia.',
            'Sospettosità.',
            'Paure irrazionali.',
            // 'Depressione.',
        ],
    },

    XIX: {
        title: 'Il Sole',
        energy: 'MASCHILE',
        positive: 'COSCENZA',
        negative: 'INCENERIMENTO',
        content: (
            <>
                <p>
                    L'Archetipo XIX Il Sole rappresenta la personificazione
                    dell'Ego e della coscienza, che si rafforzano grazie alla
                    conoscenza. XIX Il Sole illumina ciò che prima era nascosto,
                    e le conoscenze acquisite espandono la coscienza umana.
                </p>
                <p>
                    XIX Il Sole è il simbolo più potente del Divino di tutti i
                    tempi. Rappresenta la crescita del Divino e il rafforzamento
                    dell'Ego.
                </p>
                <p>
                    Questa è l'energia reale: mentre nell'Archetipo XI La Forza
                    l'energia è interna (una persona dice: "Io" e "voglio"), qui
                    essa è in alto. Una persona ha il diritto di volere, ma
                    quanto è pronta la sua coscienza a ricevere lo status che
                    XIX Il Sole può concedere? È necessaria un'espansione della
                    coscienza per raggiungere quel status e far parte dell'alta
                    società.
                </p>
                <p>
                    XIX Il Sole è l'Archetipo della leadership e del carisma.
                    Ma, come il sole illumina tutto, anche le ombre verranno
                    alla luce. Le ombre dell'anima emergono, e questo può essere
                    pericoloso. XIX Il Sole può "bruciare" una persona che si
                    lamenta: "Dovrei essere già tra gli Dei, ma sono ancora qui
                    tra i mortali maledetti!".
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/XIX.webp',
        advantages: [
            'Leadership.',
            'Carisma irresistibile.',
            'Autostima alta.',
            'Allegria.',
            'Buon senso di umorismo.',
            'Buona istruzione ed educazione.',
            'Gentilezza.',
            'Generosità verso il mondo intero.',
            'Motivazione.',
            'Energia vitale.',
        ],
        disadvantages: [
            'Sete di fama insaziabile.',
            'Megalomania.',
            'Enorme ego.',
            'Orgoglio smisurato.',
            'Bassa autostima.',
            'Pessimismo.',
            'Cinismo.',
            'Mancanza di iniziativa.',
            "Dipendenza dall'opinione pubblica.",
            // 'Infantilismo.',
        ],
    },

    XX: {
        title: 'Il Giudizio',
        energy: 'NEUTRALE',
        positive: 'UNIONE SU VALORI COMUNI',
        negative: 'MANCANZA DI VALORI PROPRI',
        content: (
            <>
                <p>
                    L'Archetipo XX Il Giudizio rappresenta la personificazione
                    di un Egregor, cioè di un'entità collettiva che riflette i
                    valori di un gruppo o di un sistema. Questo Archetipo
                    incarna il concetto di sistema strutturato, in cui esiste
                    una gerarchia e una condivisione di valori comuni tra i
                    membri. Può essere applicato a qualsiasi sistema, da una
                    comunità religiosa o politica, fino a gruppi sociali o
                    professionali o una famiglia.
                </p>
                <p>
                    L'Archetipo XX parla di un sistema organizzato sotto forma
                    di "piramide", dove al vertice c'è una figura fondatrice
                    (come un leader o un fondatore), seguita da aderenti più
                    stretti, i collaboratori e, infine, i membri di base del
                    gruppo. Ogni livello di questa piramide è unito dalla
                    condivisione di valori comuni, che vengono diffusi dal
                    gruppo in modo più ampio.
                </p>
                <p>
                    L'Archetipo XX ci invita a riflettere sulla coerenza tra i
                    propri valori personali e quelli del gruppo. Se un individuo
                    si unisce a un gruppo ma poi inizia a criticarsi o rigettare
                    i valori condivisi, la domanda fondamentale da porsi è: qual
                    è il motivo di questa contraddizione?
                </p>
                <p>
                    Se una persona ha una buona comprensione dell'essenza
                    dell'Archetipo XX, sarà in grado di riconoscere chiaramente
                    i propri bisogni e quindi capire a quale gruppo appartenere,
                    e quale evitare.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/XX.webp',
        advantages: [
            'Maturità psicologica.',
            "Forza d'animo.",
            'Un sano sistema di valori personali.',
            'Pensiero filosofico.',
            'Ragionamento globale.',
            'Fondamentalismo.',
            'Impatto trasformativo sugli altri.',
            'Capacità di unire le persone.',
            'Forte legame con gli antenati.',
            'Conoscenza del passato e cambiamento del futuro.',
        ],
        disadvantages: [
            "Suscettibilità all'influenza degli altri.",
            'Assenza dei propri valori.',
            'Conservatorismo.',
            'Pensiero ristretto.',
            'Irresponsabilità verso la propria vita.',
            'Mentalità comunitaria.',
            'Mancanza di comprensione del concetto "famiglia".',
            'Mancanza di venerazione degli antenati.',
            'Difficoltà nel creare una famiglia.',
            // 'Programmi familiari negativi.',
        ],
    },

    XXI: {
        title: 'Il Mondo',
        energy: 'NEUTRALE',
        positive: 'ILLIMITATEZZA',
        negative: 'INVASIONE DEI CONFINI',
        content: (
            <>
                <p>
                    L'Archetipo XXI Il Mondo rappresenta la personificazione dei
                    confini e della capacità di costruirli. Questo archetipo
                    riguarda l'espansione e l'evoluzione dei propri limiti, sia
                    fisici che mentali, e il modo in cui una persona si
                    relaziona con il mondo e la propria consapevolezza.
                </p>
                <p>
                    Pensiamo al mito del Paradiso con suo piccolo mondo ideale:
                    un uomo e una donna vivono in armonia, tenendosi per mano,
                    circondati da animali selvatici e le piante che crescono
                    liberalmente. Perché questo scenario perfetto non ci
                    soddisfa? - Perché non c’è sviluppo, c'è stagnazione. Il
                    cambiamento avviene quando l'uomo e la donna decidono di
                    mordere la mela, simbolo di conoscenza e consapevolezza.
                    Questo atto rappresenta un'espansione dei confini, che, pur
                    comportando dei rischi (come "avvelenarsi" con la
                    conoscenza), è essenziale per il progresso.
                </p>
                <p>
                    Un morso alla mela ci insegna qualcosa di nuovo. Il momento
                    in cui acquisisci conoscenza è anche quello in cui espandi i
                    tuoi confini. Ci "avveleniamo" con la conoscenza per
                    allargare i nostri limiti, ignorando il saggio detto: “Molta
                    sapienza, molto affanno; chi accresce il sapere aumenta il
                    dolore” (Qoèlet 1,18).
                </p>
                <p>
                    L'Archetipo XXI insegna l'espansione volontaria dei confini
                    attraverso l'acquisizione di nuove conoscenze, e ci invita a
                    riflettere sulla nostra prontezza ad affrontare questo
                    processo. Quando sei davvero pronto per uscire dalla tua
                    zona di comfort? È possibile che tu non sia ancora pronto
                    per affrontare una nuova espansione. Per fare il salto fuori
                    dalla zona di comfort, spesso è necessario essere molto
                    annoiati e insoddisfatti della situazione attuale,
                    altrimenti l’espansione non avverrà in modo volontario e
                    naturale.
                </p>
                <p>
                    L'Archetipo XXI è anche responsabile dei confini del corpo e
                    della coscienza: riguarda la nostra percezione del nostro
                    posto nel mondo, la nostra consapevolezza e l'equilibrio tra
                    ciò che siamo e ciò che vogliamo diventare. In un certo
                    senso, l’Archetipo XXI Il Mondo parla della capacità di
                    esistere fuori dal tempo e dalla struttura, vivendo nel
                    mondo ma anche al di fuori delle sue limitazioni.
                </p>
                <p>
                    Infine, l’Archetipo XXI invita a svegliarsi e vivere
                    pienamente la propria vita. È il momento di espandere la
                    nostra consapevolezza, di affrontare la conoscenza e di
                    costruire, volontariamente, nuovi confini per una crescita
                    continua.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/XXI.webp',
        advantages: [
            'Dono di diplomazia.',
            'Estroversione.',
            'Larghe vedute.',
            'Ampia area di interessi.',
            'Pensiero globale e progressista a beneficio di un gran numero di persone.',
            'Mancanza di modelli e strutture di pensiero.',
            'Impegno sociale.',
            'Allargamento constante delle proprie conoscenze, competenze e abilità.',
            'Interazione multiculturale.',
            'Tolleranza.',
        ],
        disadvantages: [
            'Dipendenze.',
            'Violazione i confini degli altri.',
            'Mancanza dei confini propri.',
            'Introversione.',
            'Ostilità verso le cose nuove.',
            'Intolleranza.',
            'Istigazione alle guerre.',
            'Paura del cambiamento.',
            'Fobie.',
            // 'Codipendenza.',
        ],
    },

    XXII: {
        title: 'Il Matto',
        energy: 'NEUTRALE',
        positive: 'GIOCO',
        negative: 'IRRESPONSABILITÀ',
        content: (
            <>
                <p>
                    L'Archetipo XXII, Il Matto, rappresenta l'improvvisazione,
                    la purezza dell'inizio e l'energia del bambino curioso. È
                    l’essenza di una creatura che sta iniziando il proprio
                    cammino, come Pinocchio, completamente ignara di ciò che lo
                    aspetta.
                </p>
                <p>
                    Nel suo zaino, simbolo delle esperienze passate, portiamo
                    con noi la memoria di vite precedenti, un effetto di déjà vu
                    che ci accompagna nel nostro viaggio. Lo zaino appoggiato su
                    un bastone, simile a un cucchiaio, ci nutre con questa
                    esperienza passata (vedi: Arcano Maggiore XXII Il Matto di
                    Tarocchi Marsigliesi di A. Jodorowsky), ma ciò che conta ora
                    sono le nuove esperienze che stiamo per vivere.
                </p>
                <p>
                    L'istinto di autoconservazione, tipico degli esseri viventi,
                    è presente in noi, ma ciò che prevale è la curiosità verso
                    il nuovo. L’Archetipo XXII è il simbolo della libertà
                    assoluta, un momento di impulso creativo dove l’impossibile
                    non esiste. In questo nuovo ciclo della vita, non esistono
                    ancora atteggiamenti mentali come “non funziona”, “non so
                    come fare” o “non posso”.
                </p>
                <p>
                    Tuttavia, l’altro lato di questo archetipo è la tentazione
                    di non crescere mai, rimanendo un eterno Peter Pan.
                </p>
                <p>
                    Ecco alcune caratteristiche di questo Archetipo che potresti
                    riconoscere.
                </p>
            </>
        ),
        image: '/images/archetypes/XXII.webp',
        advantages: [
            'Libertà da convenzioni e pregiudizi.',
            'Curiosità instancabile.',
            'Animazione come stile di vita.',
            'Leggerezza.',
            'Spontaneità nelle azioni e nel comportamento.',
            'Sentimento di libertà assoluta.',
            'Capacità di trovare nuove strade.',
            'Sentimento del sostegno divino.',
            'Capacità di apparire al momento giusto e nel posto giusto.',
            'Multipotenziale.',
        ],
        disadvantages: [
            'Creazione del caos.',
            'Irresponsabilità in questioni importanti.',
            'Infantilismo.',
            'Impulsività.',
            'Immaturità nel pensiero e nelle reazioni.',
            'Ingenuità eccessiva, che si avvicina alla stupidità.',
            'Creatività soppressa.',
            'Mancanza di autenticità.',
            'Paura di sbagliare.',
            'Serietà eccessiva.',
            // 'Mancanza di interessi e hobby.',
        ],
    },
};
function ArchetypeArchetype() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    const currentArchetype = archetypesContent[id];

    if (!currentArchetype) {
        return <div>Архетип не найден</div>;
    }
    return (
        <section className="archetype">
            <div className="container">
                <div className="archetype__wrapper">
                    <button
                        className="archetype__back-button back-arrow"
                        onClick={() => navigate(-1)}
                    >
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
                    </button>
                    <h1 className="archetype__title title-1">
                        {id} {currentArchetype.title.toUpperCase()}
                    </h1>
                    <div className="archetype__text-box">
                        <div className="archetype__text">
                            <p className="">
                                Se hai trovato il numero {id} nella tua mappa
                                archetipica, allora queste informazioni sono
                                dedicate a te.
                            </p>
                            <ul className="archetype__short-description">
                                <li>
                                    <span>Energia:</span>
                                    <span>{currentArchetype.energy}</span>
                                </li>
                                <li>
                                    <span>Manifestazione positiva:</span>
                                    <span>{currentArchetype.positive}</span>
                                </li>
                                <li>
                                    <span>Manifestazione negativa:</span>
                                    <span>{currentArchetype.negative}</span>
                                </li>
                            </ul>
                        </div>
                        <p className="archetype__text">
                            {currentArchetype.content}
                        </p>
                    </div>
                    <div className="archetype__content-box">
                        <div className="archetype__image-box">
                            <img
                                className="archetype__image"
                                src={currentArchetype.image}
                                alt="photo"
                            />
                        </div>
                        <div className="archetype__info-box">
                            <h2 className="archetype__info-title underline">
                                10 vantaggi:
                            </h2>
                            <ul className="archetype__positive-list">
                                {currentArchetype.advantages.map(
                                    (advantage) => (
                                        <li
                                            className="archetype__positive-item"
                                            key={advantage}
                                        >
                                            {advantage}
                                        </li>
                                    )
                                )}
                            </ul>
                            <h2 className="archetype__info-title underline">
                                10 svantaggi:
                            </h2>
                            <ul className="archetype__negative-list">
                                {currentArchetype.disadvantages.map(
                                    (disadvantage) => (
                                        <li
                                            className="archetype__negative-item"
                                            key={disadvantage}
                                        >
                                            {disadvantage}
                                        </li>
                                    )
                                )}
                            </ul>
                            {/* <p className="archetype__info-text">
                                Per una persona con questo archetipo è
                                importante essere attenti ai dettagli,
                                sviluppare la capacità di parlare, esprimere i
                                pensieri con competenza.
                            </p> */}
                            <div className="archetype__button-box">
                                <Button
                                    text="RICHIEDI UNA CONSULENZA"
                                    className="archetype__info-btn "
                                    onClick={() =>
                                        dispatch(setOpenContactForm(true))
                                    }
                                />
                                <Button
                                    text="ACQUISTA LA DISCREZIONE COMPLETA DELL’ARCHETIPO"
                                    className="archetype__info-btn button--black"
                                    onClick={() => {
                                        // dispatch(setOpenBuyForm(true));
                                    }}
                                />
                            </div>
                            <div className="archetype__sub-text">
                                <p>
                                    Gli archetipi sono energie profonde e
                                    sottili che plasmano il nostro carattere e
                                    influenzano il nostro percorso, agendo sia
                                    sui grandi temi dell’esistenza che sulle
                                    abitudini quotidiane — spesso all’apparenza
                                    insignificanti, ma decisive nel dirigere il
                                    cammino.
                                </p>
                                <p>
                                    Ogni archetipo è multiforme: si manifesta in
                                    modi diversi a seconda della posizione nella
                                    mappa e della storia personale.
                                </p>
                                <p>
                                    Analizzo l’insieme degli archetipi e le loro
                                    interazioni per offrire una visione completa
                                    delle dinamiche interiori e del contesto che
                                    influisce sul presente, aiutando a trovare
                                    risposte chiare alle domande profonde.
                                </p>
                                <p>
                                    Le risposte si trovano già nelle energie
                                    presenti nella tua mappa: una guida fedele
                                    per orientare consapevolmente il tuo
                                    percorso.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ArchetypeArchetype;
