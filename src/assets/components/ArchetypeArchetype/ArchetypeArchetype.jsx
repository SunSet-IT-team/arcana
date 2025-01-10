import React from 'react';

import './styles.scss';

import {useDispatch} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {setOpenContactForm} from '../../../redux/slices/contactFormSlice';
import Button from '../../components/Button/Button';

function ArchetypeArchetype() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    const archetypesContent = {
        I: {
            title: 'Il Mago',
            content: (
                <>
                    <p>
                        L'Archetipo il Mago è la personificazione della parola,
                        degli studi e delle comunicazioni.
                    </p>

                    <p>
                        È l’energia giovanile della persona che ha realizzato
                        che dovrebbe studiare e imparare qualcosa nella vita ma
                        non ha ancora realizzato perché. Questa è l'energia che
                        spinge ad imparare qualcosa di nuovo attraverso la
                        parola.
                    </p>

                    <p>
                        Il Mago spesso contraddice sé stesso, perché non si
                        rende conto che la differenza tra i suoi pensieri, le
                        parole ed i risultati delle sue azioni potrebbe essere
                        colossale. La persona con questo Archetipo dovrebbe
                        crearsi una abitudine di rendersi conto di quello che
                        sta pensando, riflettere di quello che sta dicendo e a
                        quello che sta facendo per non creare i malintesi con sé
                        stesso e agli altri.
                    </p>

                    <p>
                        Il Mago è un grande giocatore delle parole, che a volte
                        non si rende conto di tutta la responsabilità. Ma volte,
                        anche se non fa danni agli altri, può perdersi nelle
                        chiacchere e sprecare molta energia nel parlare senza
                        avere un minimo obiettivo,sprecandocosì la propria
                        energia vitale.
                    </p>
                </>
            ),
            image: '/images/archetypes/I.webp',
            advantages: [
                'Alfabetizzazione naturale nel discorso orale e scritto.',
                'Curioso ed instancabile verso le nuove informazioni.',
                'Capacità di trovare le informazioni facilmente.',
                'Generatore di idee.',
                'Autorealizzazione.',
                'Comprensione chiara del proprio potenziale.',
                'Dono di trovare sempre un modo per uscire da una situazione difficile.',
                'Ambizioso.',
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
                'Linguaggio volgare.',
            ],
        },
        II: {
            title: 'LA PAPESSA',
            content: (
                <>
                    <p>
                        La Papessa rappresenta il primo Archetipo femminile
                        chiave.
                    </p>

                    <p>
                        La Papessa è una delle personificazioni della
                        femminilità e dei segreti, di tutto ciò di cui non si
                        parla nella società. Lei riceve la conoscenza attraverso
                        l'intuizione e a volte non le può spiegare neanche a sé
                        stessa. Se una persona si fida delle proprie sensazioni,
                        allora la Papessa è in grado di guidarla attraverso
                        tutte le difficoltà, le follie e le paure.
                    </p>

                    <p>
                        La Papessa indossa una “maschera” ed è emotivamente
                        chiusa. Vive in due mondi allo stesso tempo,
                        contemporaneamente si trova qui e oltre. Questa è una
                        persona che può separare perfettamente lavoro e
                        famiglia, famiglia e il proprio mondo interiore.
                    </p>

                    <p>
                        La Papessa protegge tutto ciò che ha bisogno di cure,
                        ciò che è nascosto, ciò che non è stato ancora rivelato.
                    </p>

                    <p>
                        Questa è l'energia della madre, della natura e del
                        mistero.
                    </p>
                </>
            ),
            image: '/images/archetypes/II.webp',
            advantages: [
                ' Il dono di prendere cura e dare protezione.',
                ' Protezione dei segreti.',
                ' Intuito sopranormale.',
                ' Profondo mondo interiore.',
                ' Conoscenza delle leggi universali.',
                ' Sentimento della presenza delle forzi superiori.',
                ' Rapporto speciale con la natura. ',
                ' Capacità di trovare la via d’uscita dove altri non vedono. ',
                ' Riservatezza. ',
                ' Bravo genitore.',
            ],
            disadvantages: [
                'Mancanza di comprensione delle leggi della natura.',
                'Amore per i pettegolezzi.',
                'Risultato attraverso gli intrighi ed i conflitti.',
                'Un’esistenza miserabile e povertà finanziaria.',
                'Protezione e cura di chi non ha bisogno.',
                'Mancanza della separazione psicologica con genitori/figli.',
                'Paura delle relazioni amorose (il rischio di rimanere una vecchia zitella/un vecchio scapolo).',
                'Comportamento distruttivo verso gli esseri viventi.',
                'Madre tossica.',
                `Magia nera (incantesimi d'amore, turnaround, ecc.)`,
            ],
        },
        III: {
            title: 'L’IMPERATRICE',
            content: (
                <>
                    <p>
                        L'Imperatrice rappresenta il secondo Archetipo femminile
                        chiave.
                    </p>

                    <p>
                        L'Archetipo l’Imperatrice è la personificazione della
                        materia e della sessualità, è la padrona del mondo
                        materiale.
                    </p>

                    <p>
                        È il desiderio inconscio di fecondazione, è l’energia
                        della bellezza, della creazione e di abbondanza.
                    </p>

                    <p>
                        L'Imperatrice è il corpo stesso, l'amore per esso in
                        quanto tale e soprattutto come un vaso che può
                        sopportare e nutrire un bambino (un progetto, una
                        famiglia, una azienda). Ciò spiega il desiderio
                        dell'Imperatrice di realizzare, prima di tutto, i propri
                        desideri, che gli altri considererebbero egoistici, e di
                        ottenere il massimo conforto nella vita.
                    </p>

                    <p>
                        La dualità dell'Archetipol'Imperatrice è che può allo
                        stesso tempo dare la vita e toglierla.Quando
                        l'Imperatrice è prepotente, il suo amore diventa
                        soffocante, perché prevale il desiderio di dominare.
                    </p>
                </>
            ),
            image: '/images/archetypes/III.webp',
            advantages: [
                'Amor proprio, la capacità di scegliere sé stessi.',
                'Capacità di essere prolifici (in tutti gli aspetti: figli, arte, progetti, idee).',
                'Capacità di comprendere chiaramente i propri desideri.',
                'Eserciziodel proprio diritto di nascita al benessere fisico e al comfort corporeo.',
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
                'Volgaritàe maleducazione.',
                'Mercantilismo quando si misura tutto e tutti solo con il denaro.',
                'Incapacità di gestire il denaro in modo adeguato.',
                'Madre dispotica.',
                'Business sulla bellezza del proprio corpo.',
                'Prostituzione.',
            ],
        },
        IV: {
            title: 'L’IMPERTORE',
            content: (
                <>
                    <p> L'Imperatore è il primo Archetipo maschile chiave.</p>
                    <p>
                        L'Archetipo l’Imperatore è la personificazione del Re,
                        del padrone, di un professionista.{' '}
                    </p>

                    <p>
                        È il Padre archetipico in termini di potere e controllo.
                    </p>

                    <p>
                        L’Imperatore ha il desiderio di controllare qualcosa, di
                        avere potere su qualcosa. Il potere dell’Imperatore si
                        appoggia sulla libertà di punire: spesso ama vari
                        oggetti che possono essere usati per punire - un
                        bastone, un'arma. Il suo potere e controllo sono paterni
                        perché il suo rigore è finalizzato al bene, - alla
                        disciplina, all’ordine, alla sicurezza, - di tutti i
                        membri della famiglia, della squadra, della società e
                        del Paese.
                    </p>

                    <p>
                        L'Imperatore è la personificazione della struttura, di
                        un territorio, dei confini di questo territorio con il
                        desiderio constante di espanderli.
                    </p>
                    <p>
                        A sua volta, l’espansione dei confini è possibile solo
                        se esiste il potere come capacità di combattere e
                        conquistare. Il potere sia forza interna che capacità di
                        trovare il nemico in tempo, poiché senza di essa il
                        potere è instabile. Di conseguenza, per l'Imperatore,
                        spesso un amico diventa un nemico, e un nemico diventa
                        un alleato.
                    </p>
                </>
            ),
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
                'Buon padre che insegna con la disciplina e le regole.',
            ],
            disadvantages: [
                'Violazione i confini degli altri.',
                'Autocrazia.',
                'Ossessione per il lavoro.',
                'Incapacità di riposare.',
                'Assenza del tempo libero.',
                'Padreprepotente.',
                'Mancanza di un nucleo interiore.',
                'Irresponsabilità. ',
                'Volontà debole.',
                'Mancanza direalizzazione professionale.',
            ],
            image: '/images/archetypes/IV.webp',
        },
        V: {
            title: 'IL PAPA',
            content: (
                <>
                    <p>
                        L'Archetipo il Papa è il secondo Archetipo maschile
                        chiave.
                    </p>

                    <p>
                        Il Papa è il Padre archetipico in termini di tutoraggio,
                        potere genitoriale e autorità.
                    </p>

                    <p>
                        l'Archetipo il Papa è la personificazione di un
                        insegnante, di un mentore, delle tradizioni, della
                        conoscenza tradizionale e dell’autorità della
                        conoscenza.{' '}
                    </p>

                    <p>
                        Il Papa porta avanti il tema del potere. E il
                        significato della sua conoscenza non è
                        nell'accumulazione, ma nella trasmissione e nel dominio
                        grazie alle proprie conoscenze. Il Papa raggiunge alta
                        posizione sociale tramite il riconoscimento della sua
                        autorità da parte del potere ufficiale.
                    </p>

                    <p>
                        È importante che il Papa abbia seguaci ed è
                        consigliabile che siano un po' più in basso nella
                        gerarchia.
                    </p>
                </>
            ),
            advantages: [
                'Studi fondamentali.',
                'Forza interiore.',
                'Serietà verso sé stessi e gli altri.',
                'Alta intelligenza.',
                'Onesto.',
                'Decenza.',
                'Mente analitica.',
                'Capacità di insegnare.',
                'Padre ideale.',
                'Tradizionalista.',
            ],
            disadvantages: [
                'Doppi standard.',
                'Negazione ogni autorità.',
                `Disprezzo per l'istruzione.`,
                'Mentalità chiusa e ristretta.',
                'Autoritarismo.',
                'Orgoglio intellettuale.',
                'Arroganza.',
                'Norme imponenti.',
                'Mancanza di autorità personale.',
                'Padre tossico.',
            ],
            image: '/images/archetypes/V.webp',
        },
        VI: {
            title: 'L’INNAMORATO',
            content: (
                <>
                    <p>
                        L'Archetipo l'Innamorato è la personificazione della
                        scelta, della partnership e del triangolo della scelta.
                    </p>

                    <p>
                        L'essenza dell'Archetipo l’Innamorato è Scelta. Quando
                        il corpo, il cuore e la mente fanno stessa unica scelta.
                        La cosa principale è desiderare la propria decisione e
                        amare la propria scelta. Saper godere il momento della
                        scelta.
                    </p>

                    <p>
                        L'Archetipo l’Innamorato ci insegna a costruire
                        relazioni d'amore non solo con noi stessi e gli altri,
                        ma anche con qualsiasi oggetto che scegliamo: quella
                        tazzina di caffè mattutina, quel cucchiaino di zucchero,
                        quello zucchero in quel cucchiaino, quel caffè in cui
                        mettiamo quel cucchiaino di zucchero.
                    </p>

                    <p>
                        La scelta è l'iniziazione della crescita. La scelta è
                        azione.
                    </p>

                    <p>
                        L'Archetipo l'Innamorato è un Archetipo di una scelta
                        giusta che a volte è molto difficile. È l’energia dei
                        sentimenti propri e di vivere armoniosamente in società,
                        di poter trovare la unione ideale persé stesso e per
                        tutti gli altri.
                    </p>
                </>
            ),
            advantages: [
                'Scelta con amore per sé stesso e per gli altri.',
                'Capacità di amare veramente.',
                'Profondo senso della bellezza.',
                'Talento di sperimentare ed esprimere i propri sentimenti.',
                'Costruzione facile delle connessioni personali e sociali.',
                'Sensibile e sensuale.',
                'Premuroso.',
                'Disponibile.',
                'Amicizia profonda.',
                'Simpatia.',
            ],
            disadvantages: [
                `Incapacità di scegliere.`,
                `Scelta multipla.`,
                `Innamoramento facile sempre e ovunque.`,
                `Difficoltà a comprendere l'amore.`,
                `Infedeltà.`,
                `Ricerca di un ideale immaginario.`,
                `Asociale.`,
                `Problemi di comunicazione.`,
                `Sentimenti bloccati.`,
                `Antipatico.`,
                `Scelta consapevole che danneggia un'altra persona. `,
                `Relazione codipendente.`,
                `Amore con condizioni.`,
            ],
            image: '/images/archetypes/VI.webp',
        },
        VII: {
            title: 'IL CARRO',
            content: (
                <>
                    <p>
                        “Chi trattiene l’ira risvegliata, come un carro che si è
                        smarrito, lo chiamo auriga; gli altri tengono
                        semplicemente le briglia”, – Budda.
                    </p>

                    <p>
                        L’Archetipo il Carro è l’energia pionieristica. È la
                        personificazione del bersaglio, dell’impostazione degli
                        obiettivi, della concorrenza, del leader, dell’attività.
                    </p>

                    <p>
                        Il Carro è attratto per essere il primo e vincere. La
                        vittoria ma a che prezzo?
                    </p>

                    <p>
                        Il Carro ha le armi e ha i cavalli. Questi non sono più
                        istinti naturali, come quelli dell'Archetipo il Matto,
                        sono potenti cavalli da combattimento. La difficoltà è
                        imparare a controllare questi cavalli. Stabilire un
                        obiettivo e raggiungerlo senza disperderti. Pertanto,
                        l’auriga non deve solo capire ciò che vuole, ma essere
                        fermamente fiducioso, equilibrato e composto.{' '}
                    </p>

                    <p>Il Carro è l'Archetipo del primo trionfo.</p>
                </>
            ),
            advantages: [
                `Interesse per nuovi orizzonti. `,
                `Capacità di essere primi.`,
                `Capacità di fissare un obiettivo e raggiungerlo.`,
                `Capacità di controllarsi.`,
                `Competizione sana.`,
                `Ambizione.`,
                `Determinazione negli obiettivi.`,
                `Coraggio in ogni situazione.`,
                `Controllo sul corpo e sui trasporti.`,
                `Amore per il movimento ed i viaggi.`,
            ],
            disadvantages: [
                `Passività.`,
                `Paura di andare avanti.`,
                `Assenza di ambizioni.`,
                `Meschinità.`,
                `Viltà.`,
                `Troppa sicurezza di sé.`,
                `Camminare sui "cadaveri" per ottenere la vittoria ad ogni costo.`,
                `Critica di coloro che si stanno muovendo verso i propri obiettivi.`,
                `Carrierismo.`,
                `Alto rischio di lesioni e dei problemi con il veicolo.`,
            ],
            image: '/images/archetypes/VII.webp',
        },
        VIII: {
            title: 'LA GIUSTIZIA',
            content: (
                <>
                    <p>
                        L’Archetipo la Giustizia è la personificazione di
                        società, delle regole, delle istruzioni, di algoritmo e
                        della legge.
                    </p>
                    <p>
                        L'essenza dell'Archetipo è l'equilibrio. L’equilibrio
                        tra mondo interiore e regole sociali.{' '}
                    </p>

                    <p>
                        L'equilibrio tra interno ed esterno: ognuno ha il
                        proprio interno, e quindi ognuno ha il proprio
                        equilibrio tra interno ed esterno, rispettivamente,
                        ognuno ha il proprio algoritmo, le proprie regole.
                    </p>

                    <p>
                        Il secondo significato dell'Archetipo la Giustizia:
                        causa ed effetto, la legge del Karma. Non esiste il
                        caso, ogni cosa ha la sua ragione e la conseguenza.{' '}
                    </p>

                    <p>
                        L'Archetipo la Giustizia ha lo scopo di bilanciare il
                        rapporto tra il bene e il male. Ecco perché, ad esempio,
                        i monaci si bilanciano con il duro lavoro piuttosto che
                        ammirare il cielo.
                    </p>

                    <p>
                        In nessuna mitologia non esiste una figura della
                        Giustizia come una figura maschile. L’Archetipo ha una
                        bilancia (attributo femminile) e una spada (attributo
                        maschile) ed ecco una combinazione riuscitadi principi
                        maschili e femminili: prima peseremo – poi taglieremo,
                        peseremo - taglieremo, e questo è un lavoro così
                        scrupoloso da non essere addato a un uomo, perché la
                        logica maschile funziona diversamente.
                    </p>
                </>
            ),
            advantages: [
                `Vita secondo le regole.`,
                `Sani principi morali.`,
                `Affidamento ai fatti.`,
                `Armonia interiore.`,
                `Ordine nella vita e nella mente.`,
                `Prontezza a proteggere le altre persone.`,
                `Comprensione delle leggi dell'Universo.`,
                `Rispetto verse le leggi e le norme sociali. `,
                `Imparzialità.`,
                `Logica.`,
            ],
            disadvantages: [
                `Permalosità.`,
                `Indisciplina.`,
                `Pensiero superficiale.`,
                `Paura di commettere errori.`,
                `Tendenza a valutare le situazioni in base alle emozioni.`,
                `Giudizi categorici.`,
                `Mancanza di flessibilità di pensiero.`,
                `Grandi idealizzazioni.`,
                `Conflittualità.`,
                `Formalità nelle relazioni.`,
            ],
            image: '/images/archetypes/VIII.webp',
        },
        IX: {
            title: 'L’EREMITA',
            content: (
                <>
                    <p>
                        L'archetipo l'Eremita è la personificazione di concetti
                        come saggezza, esperienza, solitudine, connessioni tra
                        generazioni e il cammino personale. L'Eremita è la
                        Guida. È Il più alto livello di conoscenza.
                    </p>

                    <p>
                        L'Eremita rappresenta la solitudine come una scelta. Da
                        questo fatto segue l'enorme importanza di chi siano i
                        suoi compagni di viaggio, ammesso che ce ne siano.
                    </p>

                    <p>
                        L'Archetipo l’Eremita è responsabile di tutta
                        l'esperienza umana: di tutto ciò che l'umanità ha
                        accumulato, di tutta la conoscenza, di tutta
                        l'esperienza (archivi, archeologia, memorie).{' '}
                    </p>

                    <p>
                        Essendo una guida l'Eremita è sempre in movimento.
                        Attraversa il tempo e raccoglie continuamente le
                        esperienze umane. Questesono esperienze e non sono
                        divise in femminile e maschile, hannolo scopo diessere
                        oltre il genere quindi sono universali.
                    </p>

                    <p>Questa è l'ultima figura umana negli Archetipi.</p>
                </>
            ),
            advantages: [
                `Autosufficienza.`,
                `Maturità psicologica.`,
                `Grande saggezza. `,
                `Riservatezza.`,
                `Semplicità.`,
                `Dono di osservazione.`,
                `Attenzione ai piccoli dettagli.`,
                `La capacità di ammettere i propri errori e imparare da essi.`,
                `Ricerca costante della spiritualità.`,
                `Equilibrio tra il sociale e il personale.`,
            ],
            disadvantages: [
                `Svalutazione della propria conoscenza.`,
                `Paura della solitudine.`,
                `Sensazione di non essere abbastanza.`,
                `Intolleranza verso le altre persone.`,
                `Paura della vecchiaia.`,
                `Asociale.`,
                `Conservatorismo rigido quando si nega ogni cosa nuova.`,
                `Uno stile di vita non sano.`,
                `Ascetismo eccessivo.`,
                `Povertà.`,
            ],
            image: '/images/archetypes/IX.webp',
        },
        X: {
            title: 'LA RUOTA DELLA FORTUNA',
            content: (
                <>
                    <p>
                        L’Archetipo la Ruota della Fortuna è la personificazione
                        dei propri bisogni, delle occasioni, delle finanze che
                        circolano tra persone e persone e tra persone ed enti
                        finanziari.{' '}
                    </p>

                    <p>
                        La Ruota della Fortuna è la fortuna di persona. La
                        persona con questo Archetipo incarna l'idea di essere
                        "baciato dal destino" se riuscirà a comprendere
                        chiaramente come funziona questa energia e entrare in
                        questo “cerchio fortunato” che, in realtà, rappresenta
                        una spirale.{' '}
                    </p>

                    <p>
                        L'idea principale dell'Archetipo la Ruota della Fortuna
                        è la fiducia nella vita, costituita da continui
                        cambiamenti tra alti e bassi, chespingono ad un nuovo
                        livello.Se il cerchio è chiusola Ruota si ferma.
                    </p>
                </>
            ),
            advantages: [
                `Persone super fortunate.`,
                `Capacità di vedere la natura ciclica della vita.`,
                `Senso intuitivo della giusta direzione.`,
                `Dono di attrare le finanze.`,
                `Adeguatezza. `,
                `Capacità di vedere e cogliere le opportunità. `,
                `Capacità di ottenere qualcosa senza troppi sforzi.`,
                `Comprensione la legge del karma.`,
                `Facile ingresso in nuove esperienze.`,
                `Adattabilità elevata.`,
            ],
            disadvantages: [
                `Incertezza nel processo decisionale.`,
                `Vita senza cambiamento, stagnazione.`,
                `Nessuna fiducia nel mondo.`,
                `Mancanza di sensazione di sicurezza.`,
                `Difficoltà finanziarie.`,
                `Avidità patologica. `,
                `Il denaro è l’unica misura.`,
                `Dipendenza dal gioco d'azzardo.`,
                `Bancarotta.`,
                `Sfortuna patologica.`,
            ],
            image: '/images/archetypes/X.webp',
        },
        XI: {
            title: 'LA FORZA',
            content: (
                <>
                    <p>
                        L’Archetipo la Forza è la personificazione della Forza
                        in tutte le sue manifestazioni. L’Archetipo del domare
                        l'Ego regale attraverso la forza di volontà.
                    </p>

                    <p>
                        La Forza è energia ardente e incontrollabile.
                        L’Archetipo rappresenta il fatto che una persona deve
                        “crescere” per rivendicare gli “attributi reali del
                        potere”.{' '}
                    </p>

                    <p>
                        Secondo l’Archetipo la Forza, una persona deve imparare
                        a interagire con propria forza interiore, con la propria
                        “bestia” interiore che rappresenta egocentrismo,
                        dimostrare il diritto di essere “forte”. Ma per questo
                        ha bisogno di allenare molto, sia il corpo che l'anima.
                        Altrimenti, se una persona non sa come controllare il
                        suo potere istintivo, la sua "bestia" lo divorerà, i
                        suoi desideri diventeranno più forti di lui stesso.
                    </p>

                    <p>
                        La Forza è l'Archetipo delle gesta eroiche, della
                        resistenza, dello sport, del vivere “al massimo” e di
                        prendere il tutto possibile dalla vita.
                    </p>
                </>
            ),
            advantages: [
                `Resilienza psicologica e fisica. `,
                `Forte nucleo interiore. `,
                `Perseveranza.`,
                `Forza di volontà.`,
                `Vivacità. `,
                `Dono di ottenere facilmente ciò che si vuole.`,
                `Capacità di fare più degli altri.`,
                `Ricerca di adrenalina “sicura”.`,
                `Attenzione e cura del corpo.`,
                `Sessualità.`,
            ],
            disadvantages: [
                `Crudeltà.`,
                `Aggressività inappropriata.`,
                `Violenza fisica e psicologica.`,
                `Pressione sugli altri.`,
                `Megalomania.`,
                `Negligenza fisica e disattenzione alla salute.`,
                `Mancanza di volontà.`,
                `Viltà.`,
                `La vita in uno stato estremo ("muoio di fame - mi abbuffo").`,
                `Blocchi nella sfera sessuale.`,
            ],
            image: '/images/archetypes/XI.webp',
        },
        XII: {
            title: 'L’APPESO',
            content: (
                <>
                    <p>
                        L’Archetipo l’Appeso è la personificazione del
                        sacrificio volontario in nome di un grande obiettivo.
                    </p>

                    <p>
                        L’Appeso è Transizione. Lo stato dell’Appeso è il
                        momento della transizione: cerca il significato
                        spirituale, il vagare nel mondo interiore. A volte
                        potrebbero essere gli stati del "blocco", della
                        "coscienza invertita" o del "vuoto e mancanza di scopo".
                    </p>

                    <p>
                        L'Appeso e il simbolo di una crisi di mezza età: se non
                        trovi un senso a continuare il tuo viaggio terrestre,
                        hai solo una strada - andare “via”, nella direzione dove
                        è girata la testa dell'Appeso.
                    </p>
                    <p>
                        La parola che rispecchia l’essenza dell’Archetipo
                        l’Appeso è alterità che regala una visione diversa sulle
                        cose ordinarie.
                    </p>
                </>
            ),
            advantages: [
                `Profondità del mondo interiore.`,
                `Intuito sopranormale.`,
                `Alterità nell’essere. `,
                `Compassione.`,
                `Empatia elevata.`,
                `Dedizione totale e completa.`,
                `Indizi dal subconscio.`,
                `Capacità di lungimiranza.`,
                `Autoanalisi e autoriflessione.`,
                `Volontariato. `,
                `Connessione speciale con Dio ed i poteri superiori.`,
            ],
            disadvantages: [
                `Pigrizia.`,
                `Apatia senza causa.`,
                `Stagnazione.`,
                `Permalosità.`,
                `Lamentele infinite.`,
                `Pessimismo disperato.`,
                `Sacrificio inutile.`,
                `La posizione della “vittima”.`,
                `Insensibilità verso le sofferenze altrui. `,
                `Emotività instabile e/o eccessiva.`,
                `Dipendenze.`,
                `Fanatismo.`,
            ],
            image: '/images/archetypes/XII.webp',
        },
        XIII: {
            title: 'LA MORTE',
            content: (
                <>
                    <p>
                        L’Archetipo la Morte è la personificazione della
                        Trasformazione e del cambiamento irrevocabile.{' '}
                    </p>

                    <p>
                        XIII = X + III. Nascita e morte sono due facce
                        dell'esistenza. Terzo Archetipo l'Imperatrice dà alla
                        luce un bambino, pienamente consapevole che un giorno
                        morirà. Decimo Archetipo La Ruota della Fortuna è
                        l'eterna Ruota del Samsara che gira senza mai fermarsi.
                    </p>

                    <p>
                        L'Archetipo la Morte è il più nudo di tutti, non solo i
                        vestiti ma anche la pelle è stata rimossa; ha una gamba
                        di un colore diverso: parzialmente appartiene già a un
                        altro mondo (vedi: Tarocchi Marsigliesi di A.
                        Jodorowsky).
                    </p>

                    <p>
                        La Morte trasforma in modo tale da non poter più
                        restituire, non si può tornare indietro. Si tratta di
                        una trasformazione irreversibile.
                    </p>

                    <p>
                        L'essenza dell’Archetipo la Morte è nella vita, nella
                        massima saturazione di questa vita con eventi ed
                        esperienze acute. La vita priva della consapevolezza
                        della morte diventa grigia e noiosa.
                    </p>
                    <p>
                        L’Archetipo la Morte sono i brividi, le sensazioni
                        forti, il respiro profondo e il talento di creare la
                        propria vita tagliando le sue parti morte per far
                        rinascere nel “nuovo aspetto".
                    </p>
                </>
            ),
            advantages: [
                `Sete di vita in tutte le sue forme.`,
                `Resilienza alla vita.`,
                `Rispetto verso la vita (i vegani).`,
                `Capacità di vivere al massimo sentimenti ed emozioni. `,
                `Rifiuto tempestivo del vecchio, del superfluo.`,
                `Cambiamenti qualitativi intorno sé.`,
                `Capacità di sopportare facilmente situazioni difficili.`,
                `Buona salute.`,
                `Sessualità.`,
                `Longevità.`,
            ],
            disadvantages: [
                `Paura di qualsiasi cambiamento.`,
                `Intensa paura della morte.`,
                `Disprezzo verso la vita e tutti gli esseri viventi.`,
                `Disordine e ingombro (dello spazio, del corpo o della mente).`,
                `Esperimenti sulla salute.`,
                `Crudeltà.`,
                `Emotività eccessiva.`,
                `Ansia dovuta alla paura di non riuscire a fare qualcosa in tempo.`,
                `Esposizione deliberata e ingiustificata al pericolo. `,
                `Desiderio maniacale di pulizia.`,
            ],
            image: '/images/archetypes/XIII.webp',
        },
        XIV: {
            title: 'LA TEMPERANZA',
            content: (
                <>
                    <p>
                        {' '}
                        L’Archetipo la Temperanza è la personificazione della
                        “sezione aurea” di Michelangelo.
                    </p>
                    <p>
                        Ho due ali: una appartiene al mondo terreno, l'altra al
                        mondo spirituale. Ho le ali, ma allo stesso tempo sono
                        radicato. Mi sento bene quando apro le ali, ma so quando
                        è opportuno, dove e quando posso volare - nella musica,
                        nella danza - ma poi atterro. Luogo e tempo sono in
                        armonia.
                    </p>

                    <p>
                        Con la Temperanza sarai ricompensato secondo la tua
                        armonia. Esplora la tua armonia, misura in base al tuo
                        mondo interiore. Qual è la tua misura dell’armonia? Come
                        puoi gestire le tue emozioni?
                    </p>

                    <p>
                        L'armonia interiore è quando la persona stessa riesce a
                        ripristinare l'equilibrio emotivo grazie alla forza
                        interna e alle attività esterne.
                    </p>

                    <p>
                        La Temperanza indica che gli opposti interni sono uniti
                        e riconciliati nell'immagine sorprendente di un nuovo
                        “io”. Sei libera a passare da una “sponda” all'altra, -
                        dal mondo maschile di concorrenza a quello femminile
                        dell’amore, dalla spensieratezza di una figlia alla
                        responsabilità di una madre, e trapassare ancora tra
                        mille stati diversi che la vita ti offre, pur rimanendo
                        sempre in equilibrio interiore.
                    </p>

                    <p>
                        Ogni persona è un alchimista della sua vita. L'essenza
                        dell'Archetipo è creare il proprio “profumo” ideale,
                        corrispondente all'io profondo, e trovare l'armonia
                        interiore.
                    </p>
                </>
            ),
            advantages: [
                `Sobrietà.`,
                `Pacifismo.`,
                `Precisione.`,
                `Percezione la “sezione aurea”.`,
                `Trasformazione morbida.`,
                `Trasmissione dell’armonia.`,
                `Moderazione nei bisogni.`,
                `Capacità di mantenere in equilibrio tutti gli ambiti della vita.`,
                `Capacità di adattamento e di equilibrio.`,
                `Capacità di essere puntuale.`,
            ],
            disadvantages: [
                `Mantenimento di stabilità a tutti costi.`,
                `Passività.`,
                `Perfezione nauseante.`,
                `Tendenza all'eccesso.`,
                `Intemperanza.`,
                `Ogni giorno è “il giorno della marmotta”.`,
                `Distorsioni negli ambiti della vita.`,
                `Provocazione delle emozioni negative. `,
                `Intolleranza verso gli altri.`,
                `Impossibilità di accettare sé stesso.`,
            ],
            image: '/images/archetypes/XIV.webp',
        },
        XV: {
            title: 'IL DIAVOLO',
            content: (
                <>
                    <p>
                        L’Archetipo il Diavolo è la personificazione del
                        piacere. Simbolo della libido.{' '}
                    </p>

                    <p>
                        L’Archetipo rappresenta il Principe delle tenebre, il
                        dio dei piaceri, il dio Pan. Il dio Pan è il dio più
                        antico, i greci lo chiamavano il dio più grande. Incarna
                        lo sfrenato potere fertilizzante della natura selvaggia.
                    </p>

                    <p>
                        Il Diavolo è energia fallica, il fallo come una Torcia -
                        qualcosa che può accendere, eccitare, affascinare e
                        indurre in tentazione. Questa è una prova della tua
                        capacità di fermarti. Una prova prima con la tentazione,
                        e poi come il piacere possa trasformarsi in perversione.
                    </p>
                    <p>
                        Il Diavolo è come una radiografia, vede attraverso e
                        rivela a cosa è agganciata la persona, i lati d'ombra
                        della sua anima.{' '}
                    </p>

                    <p>
                        Questa è l'energia ardente. L'energia appassionata.
                        Tanta energia da buttare "nel fuoco" dei propri
                        desideri. L'energia, quando una persona vuole ottenere
                        qualcosa, qualsiasi cosa, lo realizza.
                    </p>
                </>
            ),
            advantages: [
                `Enorme energia vitale.`,
                `Sessualità irresistibile.`,
                `Carisma.`,
                `Insolenza.`,
                `Magnetismo innato.`,
                `Realizzazione personale.`,
                `Autocontrollo.`,
                `Naturalezza nelle proprie manifestazioni.`,
                `Conoscenza delle debolezze degli altri.`,
                `Sensibilità e comprensione delle altre persone a livello emotivo.`,
            ],
            disadvantages: [
                `Eccessi.`,
                `Abuso del piacere.`,
                `Inganni ben congegnati e preparati.`,
                `Avidità.`,
                `Falsità nel comportamento.`,
                `Desiderio di controllare e possedere gli altri.`,
                `Provocazione a vizi e debolezze.`,
                `Completa incapacità di godersi la vita. `,
                `Perversione.`,
                `Criminalità (filosofia di "Pecunia non olet" (i soldi non puzzano).`,
            ],
            image: '/images/archetypes/XV.webp',
        },
        XVI: {
            title: 'LA TORRE',
            content: (
                <>
                    <p>
                        L’Archetipo la Torre è La personificazione di struttura,
                        di costruzione e distruzione.{' '}
                    </p>

                    <p>
                        Fino a un certo punto la Torre è una struttura difensiva
                        molto potente (una fortezza, una casa, anche una piroga
                        è una piccola Torre).
                    </p>

                    <p>
                        Ma perché c'è una corona cadente sulla Torre?
                        Rappresenta il fatto che qualcosa in testa è già così
                        "annebbiato" che è necessario colpire questa "torretta"
                        in modo che la persona o riprenda i sensi o le sue
                        convinzioni ferree vengano completamente distrutte
                        (vedi: Tarocchi Marsigliesi di A. Jodorowsky).
                    </p>

                    <p>
                        Nel momento in cui una persona comincia ad avere molta
                        sicurezza in qualcosa, viene rapidamente riportata sulla
                        terra. Vengono distrutte le sue convinzioni nella
                        fermezza di qualcosa e viene dimostrato che l'uomo non è
                        Dio.
                    </p>

                    <p>
                        La Torre è uno degli Archetipi di trasformazione e di
                        transizione più forti. La trasformazione della Torre è
                        improvvisa. È uno stato in cui qualcosa di stabile
                        diventa instabile, un edificio crolla, una convinzione
                        cade a pezzi, l’ordine diventa disordine.Così che poi,
                        avendo scoperto in sé un'enorme forza interiore,
                        ricostruirsi mattone dopo mattone, partendo dalle
                        fondamenta.
                    </p>
                </>
            ),
            advantages: [
                `Dono di creare e costruire strutture.`,
                `Capacità di creare qualcosa dal nulla.`,
                `Intolleranza alla ambiguità.`,
                `Capacità di affrontare facilmente le difficoltà.`,
                `“Indistruttibile”.`,
                `Capacità di adattarsi alla struttura nuova.`,
                `Forza spirituale e fisica, quindi le difficoltà non spezzano.`,
                `Semplicità.`,
                `Riservatezza.`,
                `Pazienza.`,
            ],
            disadvantages: [
                `Mancanza di fiducia in sé stesso.`,
                `Incapacità di costruire e creare.`,
                `Blocco nella palude della stabilità.`,
                `Distruzione e autodistruzione.`,
                `Anarchismo.`,
                `Sabotaggio dello sviluppo.`,
                `Chiusura dal mondo nelle proprie convinzioni.`,
                `Posizione dello “struzzo”.`,
                `Molti segreti.`,
                `Ostinazione.`,
            ],
            image: '/images/archetypes/XVI.webp',
        },
        XVII: {
            title: 'LA STELLA',
            content: (
                <>
                    <p>
                        L’Archetipo la Stella è la personificazione
                        dell'unicità, della creatività, della speranza e dei
                        sogni.
                    </p>

                    <p>
                        È l'Archetipo più complesso perché spesso viene
                        divinizzato.
                    </p>

                    <p>
                        La Stella è nuda: lei si fida (vedi: Tarocchi
                        Marsigliesi di A. Jodorowsky).{' '}
                    </p>

                    <p>
                        Completa nudità èl’apertura di sentimenti e pensieri con
                        massima fiducia in un'altra persona, prontezza anche ad
                        apparire davanti all’altro metaforicamente “nuda”, e
                        versare - versare acqua, cioè aprirsi e raccontare.
                        Quale sarà il prezzo da pagare?
                    </p>

                    <p>Amicizia e Tradimento sono i due poli della Stella.</p>

                    <p>
                        La Stella è un dono eccezionale. Un dono in qualsiasi
                        cosa:qualcuno crea, qualcuno sputa il più lontano,
                        qualcuno ha un aspetto insolito e unico.
                    </p>
                    <p>
                        La Stella incoraggia a trovare il vero «sé» e credere
                        nel proprio talento divino. Liberazione da tutti coloro
                        che non sono veri amici. Purificazione attraverso la
                        creatività e riconciliazione con i propri sentimenti e i
                        propri sogni, che porta all'assoluta libertà di
                        espressione.
                    </p>
                </>
            ),
            advantages: [
                `Ricco mondo interiore.`,
                `Sensibilità e sensualità.`,
                `Creatività.`,
                `Profondo senso della bellezza.`,
                `Sensibilità energetica, energia esoterica.`,
                `Organizzazione mentale sottile e quindi vulnerabile.`,
                `Connessioni sociali.`,
                `Accendere la speranza negli altri, diventando una luce guida.`,
                `Sentimenti sublimi.`,
                `Eccezionalità.`,
            ],
            disadvantages: [
                `Paura del successo.`,
                `Mancanza di fiducia in sé stesso, nelle altre persone e nei propri talenti.`,
                `Creatività bloccata.`,
                `Sentimenti ed emozioni bloccati.`,
                `Situazioni di infedeltà e di tradimento.`,
                `Dipendenza dalla compagnia degli amici.`,
                `Arroganza. `,
                `Apparenza.`,
                `Insensibilità, freddezza. `,
                `Avere la "febbre delle stelle" e essere presuntuoso.`,
            ],
            image: '/images/archetypes/XVII.webp',
        },
        XVIII: {
            title: 'LA LUNA',
            content: (
                <>
                    <p>
                        L’Archetipo la Luna è personificazione dell'Anima,
                        psicologia e connessioni con l'inconscio.
                    </p>

                    <p>
                        La Luna è notte e sotto la coltre dell'oscurità molte
                        cose sono nascoste. Questa è la psiche, e questo è un
                        argomento oscuro e non studiato.{' '}
                    </p>

                    <p>
                        Ci sono molti opposti sulla immagine dell'Archetipo la
                        Luna: Sole e Luna; acqua e terra; una torre è luminosa,
                        l'altra è oscura. L’animale selvatico e l’animale
                        domestico rappresentano le parti addomesticate della
                        psiche e parti selvagge della psiche, - ci troviamo in
                        un mondo mutevole, in un mondo di dualità che cambia
                        costantemente (vedi: Tarocchi Marsigliesi di A.
                        Jodorowsky).
                    </p>

                    <p>
                        La Luna è innanzitutto un corpo celeste: luce alta e
                        lontana. Ecco perché a volte sembra che i proprietari
                        dell'Archetipo siano strani, reticenti, incomprensibili
                        e talvolta molto profondi, immersi nelle profondità
                        dell'inconscio.
                    </p>

                    <p>
                        L'essenza dell'Archetipo la Luna è l'illusione, la
                        tentazione di confondere l'illusione con la realtà e la
                        realtà con l'illusione.
                    </p>
                </>
            ),
            advantages: [
                `Conforto psicologico.`,
                `Empatia.`,
                `Comunicazione con il subconscio (soprattutto attraverso sogni, sogni profetici, sogni lucidi).`,
                `Intuizione sviluppata.`,
                `Esperienze mistiche.`,
                `Ricca immaginazione.`,
                `Percezione poetica.`,
                `Romanticismo.`,
                `Buone competenze in psicologia.`,
                `Talento culinario.`,
            ],
            disadvantages: [
                `Emotività (energia mentale travolgente).`,
                `Confusione mentale.`,
                `Esaltazione esagerata dei sentimenti.`,
                `Difficoltà a distinguere la realtà dalla fantasia.`,
                `Esperienze mistiche illusorie.`,
                `Proiezioni inconsci. `,
                `Ansia.`,
                `Sospettosità.`,
                `Paure irrazionali. `,
                `Depressione.`,
            ],
            image: '/images/archetypes/XVIII.webp',
        },
        XIX: {
            title: 'IL SOLE',
            content: (
                <>
                    <p>
                        L’Archetipo il Sole è la personificazione dell'Ego e
                        dellacoscienza, che viene rafforzata dalla conoscenza.{' '}
                    </p>

                    <p>
                        Il Sole illumina ciò che prima era nascosto e le
                        conoscenze ricevute espandono la coscienza umana.{' '}
                    </p>

                    <p>
                        Il Sole è il simbolo più potente del Divino di tutti
                        tempi. L’Archetipo rappresenta la crescita del Divino e
                        rafforzamento dell'Ego.{' '}
                    </p>

                    <p>
                        Questo è l'energia reale: se nell'Archetipo la Forza -
                        questa energia è dentro, una persona dice: "Io" e
                        "voglio", allora qui è in alto, una persona ha il
                        diritto di volere, ma quanto è pronta la sua coscienza
                        per lo status che il Sole può dare? Per questo è
                        necessaria l’espansione della coscienza che aiuta a
                        raggiungere lo status e l'alta società.
                    </p>

                    <p>
                        È l’Archetipo di leadership e di carisma. Ma il Sole
                        illuminerà tutto, anche le ombre. Anche le ombre
                        dell’anima verranno fuori. Pertanto, è pericoloso: il
                        Sole può bruciare una personaquando si lamenta: "Dovrei
                        essere lì, con i Dei, ma sono ancora qui tra i mortali
                        maledetti!".
                    </p>
                </>
            ),
            advantages: [
                `Leadership. `,
                `Carisma irresistibile.`,
                `Autostima alta. `,
                `Allegria. `,
                `Buon senso di umorismo. `,
                `Buona istruzione ed educazione. `,
                `Gentilezza. `,
                `Generosità verso il mondo intero. `,
                `Motivazione. `,
                `Energia vitale.`,
            ],
            disadvantages: [
                `Una sete di fama insaziabile.`,
                `Megalomania.`,
                `Enorme ego. `,
                `Orgoglio smisurato.`,
                `Bassa autostima.`,
                `Pessimismo.`,
                `Cinismo.`,
                `Mancanza di iniziativa.`,
                `Dipendenza dall'opinione pubblica.`,
                `Infantilismo.`,
            ],
            image: '/images/archetypes/XIX.webp',
        },
        XX: {
            title: 'IL GIUDIZIO',
            content: (
                <>
                    <p>
                        {' '}
                        L'archetipo il Giudizio è la personificazione di
                        Egregor, di qualsiasi sistema, compreso quello generico.
                        È l'Egregor di valori.
                    </p>

                    <p>Di cosa parla questo Archetipo?</p>

                    <p>
                        Di qualsiasi sistema sotto forma di "piramide”. Quando
                        al vertice c'è il padre fondatore, sotto di luici sono
                        gli aderenti più stretti, poi i loro più stretti
                        collaboratori, gli “apostoli” che andranno a diffondere
                        i valori del gruppo nel mondo. E alla base stanno tanti
                        membri del gruppo uniti di questi valori.
                    </p>

                    <p>
                        L'Archetipo il Giudizio insegna cose molto importanti.
                        Innanzitutto l'equilibrio tra bisogni personali e
                        sociali. Condividi valori con il gruppo? Non è
                        necessario andare dove i valori divergono.
                    </p>

                    <p>
                        Se sembra che i valori siano diversi, ma la persona si
                        unisce al gruppo e poi inizia a "sputare" suivalori
                        degli altri c'è da domandare: perché è venuto? Se una
                        persona percepisce bene l'essenza dell'Archetipo, allora
                        comprende chiaramente i propri bisogni e, quindi, a chi
                        unirsi e chi no.
                    </p>
                </>
            ),
            advantages: [
                `Maturità psicologica.`,
                `Forza d'animo.`,
                `Un sano sistema di valori personali.`,
                `Pensiero filosofico.`,
                `Ragionamento globale.`,
                `Fondamentalismo.`,
                `Impatto trasformativo sugli altri.`,
                `Capacità di unire le persone.`,
                `Forte legame con gli antenati.`,
                `Conoscenza del passato e cambiamento del futuro.`,
            ],
            disadvantages: [
                `Maturità psicologica.`,
                `Forza d'animo.`,
                `Un sano sistema di valori personali.`,
                `Pensiero filosofico.`,
                `Ragionamento globale.`,
                `Fondamentalismo.`,
                `Impatto trasformativo sugli altri.`,
                `Capacità di unire le persone.`,
                `Forte legame con gli antenati.`,
                `Conoscenza del passato e cambiamento del futuro.`,
            ],
            image: '/images/archetypes/XX.webp',
        },
        XXI: {
            title: 'IL MONDO',
            content: (
                <>
                    <p>
                        L’Archetipo il Mondo è la personificazione dei confini e
                        della capacità di costruirli.
                    </p>

                    <p>
                        Come avviene l'espansione dei confini secondo questo
                        Archetipo?{' '}
                    </p>

                    <p>
                        Ricordiamo il mito del Paradiso. Un piccolo mondo
                        ideale, un uomo e una donna camminano tenendosi per
                        mano, gli animali selvatici camminano nelle vicinanze,
                        le mele crescono.{' '}
                    </p>

                    <p>
                        Perché non ci piace? - Nessuno sviluppo, stagnazione! Un
                        morso ad una mela ci insegna a qualcosa di nuovo. Il
                        momento della conoscenza è il momento dell’espansione
                        dei confini. Ci "avveleniamo" con la conoscenza per
                        espandere i nostri confiniignorando ciò che viene detto:
                        “Molta sapienza, molto affanno; chi accresce il sapere
                        aumenta il dolore” (Qoèlet 1,18).
                    </p>
                    <p>
                        L'Archetipo il Mondo è un’espansione volontaria dei
                        propri confini attraverso nuove conoscenze.
                    </p>

                    <p>
                        Quanto sei preparato ad affrontare questa nuova
                        conoscenza? Forse non sei ancora pronto di uscire dalla
                        tua zona di comfort? Per voler uscire dalla tua zona di
                        comfort devi essere molto annoiato e stancato da quel
                        comfort. Poiché se non è tempestivo,non sarà volontario.{' '}
                    </p>

                    <p>
                        L'Archetipo il Mondo è responsabile dei confini del
                        corpo e della coscienza. Il Mondo riguarda anche il
                        fatto che una persona esiste fuori dal tempo, fuori
                        dalla struttura, vive nel mondo e allo stesso tempo
                        fuori dalla sua struttura.{' '}
                    </p>

                    <p>
                        L'Archetipo il Mondo parla dell'opportunità di
                        svegliarsi e vivere la propria vita.
                    </p>
                </>
            ),
            advantages: [
                `Dono di diplomazia.`,
                `Estroversione.`,
                `Larghe vedute.`,
                `Ampia area di interessi.`,
                `Pensiero globale eprogressista a beneficio di un gran numero di persone.`,
                `Mancanza di modelli e strutture di pensiero.`,
                `Impegno sociale.`,
                `Allargamento constante delle proprie conoscenze, competenze e abilità.`,
                `Interazione multiculturale.`,
                `Tolleranza.`,
            ],
            disadvantages: [
                `Dipendenze.`,
                `Violazione i confini degli altri.`,
                `Mancanza dei confini propri.`,
                `Introversione.`,
                `Ostilità verso le cose nuove.`,
                `Intolleranza. `,
                `Istigazione alle guerre.`,
                `Paura del cambiamento.`,
                `Fobie.`,
                `Codipendenza.`,
            ],
            image: '/images/archetypes/XXI.webp',
        },
        XXII: {
            title: 'IL MATTO',
            content: (
                <>
                    <p>
                        {' '}
                        L'Archetipo il Matto è la personificazione
                        dell'improvvisazione, del bambino, dell'inizio.{' '}
                    </p>

                    <p>
                        È l'energia di un bambino curioso, come Pinocchio. Noi
                        non sappiamo ancora nulla. Siamo i bambini in questa
                        posizione.
                    </p>

                    <p>
                        Nello zaino abbiamo l'esperienza delle vite passate,
                        perché siamo già stati qui, questo è un effetto dejà vu.
                        Lo zaino su un bastone che sembra un cucchiaio ci nutre
                        di questa esperienza (vedi: Tarocchi Marsigliesi di A.
                        Jodorowsky). Ma queste sono le esperienze passate.
                    </p>

                    <p>
                        Iniziamo da capo. L’istinto naturale di
                        autoconservazione di un animale vale in noi, lo sentiamo
                        tutti, ma la curiosità del nuovo prevale su tutto. Il
                        Matto è uno stato di assoluta libertà e un momento di
                        impulso creativo quando l'impossibile non esiste a
                        prescindere. In questo nuovo ciclo di vita le esperienze
                        “non funziona”, “non so come farlo”, “non posso” non
                        esistono ancora.
                    </p>

                    <p>
                        L'altro lato del Matto è la tentazione di non crescere
                        mai e di rimanere un eterno Peter Pan.
                    </p>
                </>
            ),
            advantages: [
                `Libertà da convenzioni e pregiudizi.`,
                `Curiosità instancabile.`,
                `Animazione come stile di vita.`,
                `Leggerezza.`,
                `Spontaneità nelle azioni e nel comportamento.`,
                `Sentimento di libertà assoluta.`,
                `Capacità di trovare nuove strade.`,
                `Sentimento del sostegno divino.`,
                `Capacità di apparire al momento giusto e nel posto giusto.`,
                `Multipotenziale.`,
            ],
            disadvantages: [
                `Creazione del caos.`,
                `Irresponsabilità in questioni importanti.`,
                `Infantilismo.`,
                `Impulsività.`,
                `Immaturità nel pensiero e nelle reazioni.`,
                `Ingenuità eccessiva, che si avvicina alla stupidità.`,
                `Creatività soppressa.`,
                `Mancanza di autenticità.`,
                `Paura di sbagliare.`,
                `Serietà eccessiva.`,
                `Mancanza di interessi e hobby.`,
            ],
            image: '/images/archetypes/XXII.webp',
        },
    };
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
                        ARCHETIPO {currentArchetype.title.toUpperCase()} {id}.
                        RITRATTO PSICOLOGICO SECONDO GLI ARCHETIPI. RITRATTO
                        ARCHETIPICO. ARTA ARCHETIPICA PER DATA DI NASCITA.
                    </h1>
                    <div className="archetype__text-box">
                        <p className="archetype__text">
                            Se avete trovato il numero {id} nella vostra carta
                            degli archetipi, queste informazioni sono per voi:
                        </p>
                        <p className="archetype__text">
                            {currentArchetype.content}
                        </p>
                    </div>
                    <div className="archetype__content-box">
                        <div className="archetype__image-box">
                            <span className="archetype__image-span">
                                Descrizione breve:
                            </span>
                            <img
                                className="archetype__image"
                                src={currentArchetype.image}
                                alt="photo"
                            />
                        </div>
                        <div className="archetype__info-box">
                            <h2 className="archetype__info-title underline">
                                IL LATO POSITIVO È CHE:
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
                                IN SVANTAGGIO:
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
                            <p className="archetype__info-text">
                                Per una persona con questo archetipo è
                                importante essere attenti ai dettagli,
                                sviluppare la capacità di parlare, esprimere i
                                pensieri con competenza.
                            </p>
                            <div className="archetype__button-box">
                                <Button
                                    text="CONSULENZA"
                                    className="archetype__info-btn "
                                    onClick={() =>
                                        dispatch(setOpenContactForm(true))
                                    }
                                />
                                <Button
                                    text="ACQUISTA LA DESCRIZIONE COMPLETA DEGLI ARCHETIPI"
                                    className="archetype__info-btn button--black"
                                />
                            </div>
                            <div className="archetype__sub-text">
                                <p>
                                    Ecco alcune caratteristiche di questo
                                    Archetipo che potresti riconoscere. Gli
                                    Archetipi sono energie estremamente profonde
                                    che influenzano in modo molto sottile il
                                    nostro carattere e il nostro destino, sia
                                    nei temi globali della vita che nelle
                                    abitudini di comportamento inconsce o
                                    meccaniche, apparentemente insignificanti,
                                    che, in realtà, influenzano notevolmente il
                                    nostro cammino.
                                </p>

                                <p>
                                    Ogni Archetipo è multiforme e in ogni
                                    posizione della mappa archetipica acquisisce
                                    sfumature diverse, rivela gli aspetti
                                    diversi, influenzando così in modo
                                    particolare la nostra personalità, e questa
                                    influenza cambia a seconda della situazione
                                    personale.
                                </p>

                                <p>
                                    In base alla data di nascita analizzo la
                                    mappa archetipica nella sua piena interezza
                                    il che mi consente di comprendere il quadro
                                    completo delle caratteristiche della
                                    personalità e degli scenari di vita
                                    individuali e di trovare risposte alle
                                    domande nel quadro della mappa archetipica
                                    natale.
                                </p>

                                <p>
                                    Tutte le risposte sono nascoste nelle
                                    energie archetipiche inerenti alla tua data
                                    di nascita. Il percorso verso una vita
                                    desiderata è già scritto nel tuo destino. È
                                    tracciato nella tua mappa archetipica
                                    natale, attraverso la quale ti guiderò.
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
