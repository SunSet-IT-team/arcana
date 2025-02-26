import React from 'react';

import './styles.scss';

import {useNavigate} from 'react-router-dom';

function Article() {
    const navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <section className="article">
            <div className="container">
                <div className="article__wrapper">
                    <button
                        className="article__back-link back-arrow"
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
                    <h1 className="article__title title-1">
                        UNA STORIA DI GRANDE SUCCESSO PER UNA PICCOLA AZIENDA
                    </h1>
                    <div className="article__info">
                        <ul className="article__tag-list">
                            <li className="article__tag-item">ENERGIE BASE</li>
                            <li className="article__tag-item">PREVISIONI</li>
                        </ul>
                        <span className="article__date">05.04.2024</span>
                    </div>
                    <div className="article__content">
                        <img
                            className="article__content-img"
                            src="./../images/articles/1.jpg"
                            alt="content"
                        />
                        <div className="article__body">
                            <h2>
                                MOLTI IMPRENDITORI DI SUCCESSO HANNO INIZIATO UN
                                PERCORSO PROFESSIONALE SENZA MOLTI SOLDI PER
                                INIZIARE E SCEGLIENDO DESTINAZIONI
                                APPARENTEMENTE IMPOPOLARI. EPPURE SONO RIUSCITI
                                A RAGGIUNGERE IL SUCCESSO E AD OCCUPARE LA LORO
                                NICCHIA
                            </h2>
                            <p className="article__first-p">
                                Come i sogni dei bambini sui missili sono
                                diventati realtà
                            </p>
                            <p>
                                Da bambino, Peter Beck sognava di lanciare razzi
                                nello spazio. Suo padre progettò telescopi e
                                costruì l'osservatorio più meridionale della
                                Nuova Zelanda al Southland Museum and Gallery of
                                art, di cui fu direttore per 23 anni. Peter ha
                                ammesso di essere stato intriso di amore per lo
                                spazio e le macchine proprio grazie allo spirito
                                avventuroso di suo padre.
                            </p>
                            <p>
                                «Uno dei miei primi ricordi d'infanzia è di
                                stare fuori a guardare le stelle nel cielo
                                notturno», ha detto Beck. «A differenza di molti
                                bambini che si chiedevano cosa volessero fare da
                                grandi, sapevo fin dall'inizio che volevo
                                costruire missili».
                            </p>
                            <p>
                                Tuttavia, non sono stati osservati prerequisiti
                                per realizzare il sogno. La Nuova Zelanda non
                                aveva un'industria spaziale e un'Agenzia
                                nazionale corrispondente. E la famiglia del
                                ragazzo non aveva i mezzi per mandare suo figlio
                                a studiare negli Stati Uniti.
                            </p>
                            <p>
                                Nella sua giovinezza, a causa della mancanza di
                                interesse, Beck non andò al college e andò
                                invece a lavorare in una fabbrica di
                                elettrodomestici. In un laboratorio locale, ha
                                iniziato a sperimentare qualcosa che gli è
                                sempre piaciuto. E dopo un po', ha avuto la
                                possibilità di volare negli Stati Uniti e
                                partecipare a conferenze aerospaziali. Tornato a
                                casa ispirato, decise di iniziare finalmente la
                                sua attività.
                            </p>
                            <p>
                                In un evento, Peter ha incontrato l'imprenditore
                                Mark Rocket, che è diventato il suo primo
                                investitore. Con lui, un imprenditore alle prime
                                armi ha iniziato a gestire Rocket Lab. Nel 2009
                                ha lanciato il primo razzo.
                            </p>
                            <p>
                                Alcuni anni dopo, dopo che Rocket lasciò
                                L'azienda, Beck si diresse di nuovo negli Stati
                                Uniti alla ricerca di un investitore per
                                progetti Rocket Lab più globali. E CE l'ha fatta
                                di nuovo. E poi — ri-registrazione della società
                                dalla Nuova Zelanda alla California, ricevendo
                                finanziamenti da fonti americane e voli di prova
                                del veicolo di lancio Electron.
                            </p>
                            <p>
                                Oggi, Rocket Lab è considerata la società che
                                produce alcuni dei missili lanciati più
                                frequentemente al mondo. Entro il 2027, prevede
                                un fatturato di $656 milioni e entro il 2029
                                prevede di mettere in orbita fino al 98% del
                                totale di tutti i satelliti del mondo, ad
                                eccezione dei più pesanti.
                            </p>
                            <p>
                                "Dove giacciono le rovine, c'è speranza di
                                trovare il tesoro» <br /> Nel 2005, immigrato
                                turco Hamdi Ulukaya ha notato un volantino
                                pubblicitario in una cassetta postale sulla
                                vendita di una fabbrica di yogurt a Kraft. Il
                                volantino è andato all'urna. A quel tempo,
                                l'uomo viveva negli Stati Uniti da 11 anni e
                                stava cercando di sviluppare una piccola
                                attività di produzione di formaggio — conosceva
                                questa attività fin dall'Infanzia, e tuttavia è
                                stata data a Hamdi duramente. Dopo un po ' di
                                riflessione, Ulukaya si interessò ancora alla
                                pubblicità.
                            </p>
                            <p>
                                L'edificio è stato costruito quasi un secolo fa
                                e la sua posizione ha lasciato molto a
                                desiderare: un bar per motociclisti e un
                                cimitero nelle vicinanze. Ulukaya ha acquistato
                                la fabbrica anche se è stato scoraggiato da un
                                consulente aziendale. Le cose sono andate, ma
                                per fare lo yogurt perfetto ci sono voluti $1
                                milione, che l'imprenditore non aveva — ho
                                dovuto comprare attrezzature dismesse. Hamdi
                                Ulukaya ha chiamato la sua fabbrica Chobani, che
                                significa «pastore»in turco.
                            </p>
                            <p>
                                Meno di cinque anni dopo l'acquisto della
                                fabbrica di yogurt, le vendite annuali
                                dell'azienda hanno superato $1 miliardo.entro il
                                2011, Chobani era diventato il marchio leader di
                                yogurt greco negli Stati Uniti. Entro il 2020,
                                l'azienda guadagnava $1,5 miliardi di entrate
                                annuali.
                            </p>
                            <p>
                                L'azienda si sta sviluppando fino ad oggi.
                                Ulukaya ha ammesso in un'intervista di aver
                                seguito gli insegnamenti del filosofo persiano
                                Rumi: "dove giacciono le rovine, c'è speranza di
                                trovare il tesoro». Ciò si è riflesso nella vita
                                dell'imprenditore: sebbene Kraft abbia lasciato
                                la fabbrica in uno stato quasi senza speranza,
                                Ulukaya ha comunque visto una grande
                                opportunità. Insieme al lavoro della vita, ha
                                trovato Persone su cui fare affidamento.
                            </p>
                            <p>
                                "Non puoi fare tutto da solo, soprattutto
                                raggiungendo determinate altezze. È
                                semplicemente impossibile. Quando è arrivato il
                                momento di avviare Chobani, ho dovuto fare
                                affidamento solo su me stesso e devo ancora
                                farlo. Ma d'altra parte, il nostro team è
                                composto da persone a cui sono disposto a
                                fidarmi anche della mia vita», ha condiviso
                                Ulukaya.
                            </p>
                            <p>
                                La lunga strada per il successo e la lotta
                                contro gli scettici Oggi, il nome della popolare
                                app di riconoscimento musicale Shazam è noto a
                                molti. Tuttavia, il percorso dei suoi creatori è
                                stato lungo e spinoso.
                            </p>
                            <p>
                                Chris Barton ha avuto due hobby fin
                                dall'infanzia: musica e tecnologia. Ha ammesso
                                di aver spesso incontrato una situazione in cui
                                ha sentito una melodia attraente ma sconosciuta
                                in un bar, in un club o in un cinema.
                            </p>
                            <p>
                                Nel 1999, mentre era studente All'Università
                                della California, Berkeley, Chris Barton,
                                insieme a un compagno, decise di creare un
                                programma in grado di riconoscere le melodie. Ma
                                non semplice, ma complesso: in modo da poter non
                                solo trovare la traccia, ma anche aggiungerla a
                                te stesso, condividerla con un amico,
                                familiarizzare con il testo o anche con altri
                                album dell'artista.
                            </p>
                            <p>
                                Ahimè, gli studiosi che si occupavano dei suoni
                                alzavano le mani e pensavano che fosse
                                semplicemente impossibile all'interno dei
                                confini della modernità. Innanzitutto, i
                                telefoni cellulari non erano ancora abbastanza
                                tecnologici. In secondo luogo, era necessario il
                                silenzio per riconoscere la musica. E in
                                generale, il tempo non era il più adatto: nel
                                2000 scoppiò la bolla delle dot — com-un gran
                                numero di starptap di Internet fallì, quindi
                                avviarne uno nuovo non era la migliore idea.
                            </p>
                            <p>
                                «Il fattore principale che determina il successo
                                dell'imprenditorialità è la perseveranza. Se non
                                sei pronto a passare a livelli sovrumani che
                                sono al di là della razionalità per realizzare
                                il tuo sogno, allora la tua possibilità di avere
                                successo è praticamente zero», ha condiviso
                                Chris Barton.
                            </p>
                            <p>
                                E il miracolo è ancora successo. A quel punto,
                                Chris stava lavorando al fianco di tre amici e
                                insieme sono stati in grado di «hackerare il
                                sistema» e creare un algoritmo complesso in
                                grado di riconoscere la musica. Tappezzando
                                centinaia di soglie di imprenditori e società di
                                venture capital, sono stati finalmente in grado
                                di trovare un investitore.
                            </p>
                            <p>
                                Il progetto è stato completamente lanciato nel
                                2002 nel Regno Unito. Una persona doveva
                                chiamare un numero speciale, tenere il telefono
                                alla sorgente audio per 15-30 secondi, quindi un
                                messaggio SMS con il nome dell'artista e il nome
                                della canzone è arrivato sul cellulare. A quel
                                tempo, il database dell'applicazione aveva 1
                                milione di tracce. Se la melodia non è stata
                                riconosciuta, non è stata addebitata alcuna
                                commissione e, se è stata possibile, 50 pence
                                sono stati prelevati dall'account dell'utente.
                                In un certo senso, l'azienda era in anticipo sui
                                tempi, quindi è riuscita a lanciarsi prima
                                dell'arrivo del primo iPod e iTunes.
                            </p>
                            <p>
                                Chris Barton ha lasciato L'azienda già nel 2003
                                e ha lasciato Google. Nello stesso anno, altri
                                due suoi amici hanno lasciato il progetto.
                                Shazam è diventato redditizio solo 14 anni dopo
                                il lancio, principalmente a causa delle entrate
                                pubblicitarie. Nel 2015, la parte del leone
                                della monetizzazione proveniva dalla
                                collaborazione con le etichette e ammontava a
                                $300 milioni.
                            </p>
                            <p>
                                Nel 2022, Shazam ha compiuto 20 anni. Durante
                                questo periodo, gli utenti hanno» bruciato " la
                                musica 70 miliardi di volte.
                            </p>
                        </div>
                    </div>
                    <button className="article__up arrow" onClick={scrollToTop}>
                        <span className="underline">Sopra</span>
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
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Article;
