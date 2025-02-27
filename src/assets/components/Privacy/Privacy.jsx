import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {privacy, setOpenPrivacy} from '../../../redux/slices/privacySlice';

import {TextLinesReveal} from '../../js/textLinesReveal';

import './styles.scss';

import {Link} from 'react-router-dom';

import gsap from 'gsap';

function Privacy() {
    const dispatch = useDispatch();
    const isFormOpen = useSelector(privacy);

    React.useEffect(() => {
        const textSplitElements = document.querySelectorAll('.text-split');
        const textAnimation = new TextLinesReveal(
            Array.from(textSplitElements)
        );
    }, []);

    React.useEffect(() => {
        if (isFormOpen) {
            const tl = gsap.timeline({paused: true});

            tl.to('.privacy', {
                duration: 0.5,
                y: '0',
            });

            tl.to('.privacy__wrapper', {
                duration: 1,
                x: '0',
            });

            tl.to(['.privacy__title'], {
                duration: 1,
                stagger: {
                    amount: 0.5,
                },
                x: '0',
            });
            tl.to(['.privacy__text .line', '.privacy__title .line'], {
                duration: 0.5,
                y: '0',
                rotate: '0',
            });
            tl.to(['.privacy__logo', '.privacy__close'], {
                duration: 0.5,
                opacity: 1,
            });

            tl.play();
            const isNested = document.body.classList.contains('menu-open');
            if (!isNested) {
                document.body.classList.add('menu-open');
            }

            return () => {
                tl.reverse();
                setTimeout(() => {
                    if (!isNested) {
                        document.body.classList.remove('menu-open');
                    }
                }, 2500);
            };
        }
    }, [isFormOpen]);

    return (
        <div className="privacy">
            <div className="privacy__wrapper">
                <div className="container">
                    <div className="privacy__top">
                        <Link className="privacy__logo" to="/">
                            <img
                                src="/images/icons/logo-black.svg"
                                alt="logo"
                            />
                        </Link>
                        <div className="privacy__close">
                            <button
                                className="close-button"
                                onClick={() => dispatch(setOpenPrivacy(false))}
                            >
                                <div className="in">
                                    <div className="close-button-block"></div>
                                    <div className="close-button-block"></div>
                                </div>
                                <div className="out">
                                    <div className="close-button-block"></div>
                                    <div className="close-button-block"></div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="privacy__content">
                        <h2 className="privacy__title form-title text-split">
                            INFORMATIVA SULLA PRIVACY
                        </h2>
                        <div className="privacy__text-box">
                            <p className="privacy__text text-split">
                                Titolare del Trattamento
                            </p>
                            <p className="privacy__text text-split">
                                La presente informativa sulla privacy si
                                riferisce al trattamento dei dati personali
                                raccolti attraverso il sito web di 22Archetypes,
                                di proprietà di Olga Kuzmenko (di seguito
                                "Titolare"), con sede operativa in Corso degli
                                Inglesi 462, 18038, Sanremo (IM).
                            </p>
                            <p className="privacy__text text-split">
                                Finalità del Trattamento
                            </p>
                            <p className="privacy__text text-split">
                                I dati personali raccolti tramite il modulo di
                                richiesta consulenza verranno trattati per le
                                seguenti finalità:
                            </p>
                            <p className="privacy__text text-split">
                                Fornire riscontro alle richieste di consulenza;
                            </p>
                            <p className="privacy__text text-split">
                                Contattare l'utente per fissare appuntamenti e
                                fornire informazioni sui servizi richiesti;
                            </p>
                            <p className="privacy__text text-split">
                                Adempiere ad eventuali obblighi di legge;
                            </p>
                            <p className="privacy__text text-split">
                                Migliorare l'esperienza utente sul sito web.
                            </p>
                            <p className="privacy__text text-split">
                                Base Giuridica del Trattamento
                            </p>
                            <p className="privacy__text text-split">
                                Il trattamento dei dati si basa sul consenso
                                esplicito dell'utente, fornito mediante la
                                compilazione e l'invio del modulo di richiesta
                                consulenza.
                            </p>
                            <p className="privacy__text text-split">
                                Tipologia di Dati Raccolti
                            </p>
                            <p className="privacy__text text-split">
                                I dati personali raccolti includono, a titolo
                                esemplificativo ma non esaustivo:
                            </p>
                            <p className="privacy__text text-split">
                                Nome e cognome;
                            </p>
                            <p className="privacy__text text-split">
                                Indirizzo email;
                            </p>
                            <p className="privacy__text text-split">
                                Numero di telefono;
                            </p>
                            <p className="privacy__text text-split">
                                Qualsiasi ulteriore informazione inserita
                                volontariamente nel modulo di richiesta.
                            </p>
                            <p className="privacy__text text-split">
                                Modalità di Trattamento e Conservazione dei Dati
                            </p>
                            <p className="privacy__text text-split">
                                I dati saranno trattati in conformità alle
                                normative vigenti in materia di protezione dei
                                dati personali, adottando misure tecniche e
                                organizzative adeguate per garantirne la
                                sicurezza e la riservatezza. I dati saranno
                                conservati per il tempo necessario a soddisfare
                                le finalità per cui sono stati raccolti e,
                                comunque, non oltre i termini di legge
                                applicabili.
                            </p>
                            <p className="privacy__text text-split">
                                Comunicazione e Diffusione dei Dati
                            </p>
                            <p className="privacy__text text-split">
                                I dati personali non saranno diffusi a terzi
                                senza il consenso esplicito dell'utente, salvo
                                obblighi di legge o necessità legate alla
                                gestione della richiesta.
                            </p>
                            <p className="privacy__text text-split">
                                Diritti dell'Interessato
                            </p>
                            <p className="privacy__text text-split">
                                Gli utenti hanno il diritto di:
                            </p>
                            <p className="privacy__text text-split">
                                Accedere ai propri dati personali e richiederne
                                copia;
                            </p>
                            <p className="privacy__text text-split">
                                Chiedere la rettifica o l'aggiornamento dei dati
                                inesatti;
                            </p>
                            <p className="privacy__text text-split">
                                Richiedere la cancellazione dei propri dati nei
                                limiti previsti dalla legge;
                            </p>
                            <p className="privacy__text text-split">
                                Revocare il consenso prestato in qualsiasi
                                momento;
                            </p>
                            <p className="privacy__text text-split">
                                Opporsi al trattamento per motivi legittimi;
                            </p>
                            <p className="privacy__text text-split">
                                Chiedere la limitazione del trattamento.
                            </p>
                            <p className="privacy__text text-split">
                                Per esercitare tali diritti, l'utente può
                                contattare il Titolare all'indirizzo email:
                                22archetypes@gmail.com.
                            </p>
                            <p className="privacy__text text-split">
                                Modifiche all'Informativa sulla Privacy
                            </p>
                            <p className="privacy__text text-split">
                                Il Titolare si riserva il diritto di modificare
                                la presente informativa per adeguarla a
                                eventuali aggiornamenti normativi o alle proprie
                                esigenze operative. In caso di modifiche
                                sostanziali, l'utente verrà informato attraverso
                                il sito web.
                            </p>
                            <p className="privacy__text text-split">Contatti</p>
                            <p className="privacy__text text-split">
                                Per qualsiasi domanda relativa alla presente
                                informativa o al trattamento dei dati personali,
                                è possibile contattare Olga Kuzmenko
                                all'indirizzo email 22archetypes@gmail.com.
                            </p>
                            <p className="privacy__text text-split">
                                Ultimo aggiornamento: 10.02.2025.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Privacy;
