import gsap from 'gsap';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {setOpenContactForm} from '../../../redux/slices/contactFormSlice';
import {
    profileMethod,
    setOpenProfileMethod,
} from '../../../redux/slices/profileMethodSlice';
import Button from '../../components/Button/Button';
import {TextLinesReveal} from '../../js/textLinesReveal';

import './styles.scss';

function ProfileMethod() {
    const dispatch = useDispatch();
    const isProfileMethodOpen = useSelector(profileMethod);

    useEffect(() => {
        const textSplitElements = document.querySelectorAll('.text-split');
        const textAnimation = new TextLinesReveal(
            Array.from(textSplitElements)
        );
    }, []);

    useEffect(() => {
        if (isProfileMethodOpen) {
            const tl = gsap.timeline({paused: true});

            tl.to('.profile-method', {
                duration: 0.5,
                y: '0',
            });

            tl.to('.profile-method__wrapper', {
                duration: 1,
                x: '0',
            });

            tl.to(['.profile-method__title'], {
                duration: 1,
                stagger: {
                    amount: 0.5,
                },
                x: '0',
            });

            tl.to(
                ['.profile-method__text .line', '.profile-method__title .line'],
                {
                    duration: 0.5,
                    y: '0',
                    rotate: '0',
                }
            );

            tl.to(['.profile-method__logo', '.profile-method__close'], {
                duration: 0.5,
                opacity: 1,
            });

            tl.to(
                ['.profile-method__form-button', '.profile-method__text .line'],
                {
                    duration: 1,
                    y: '0',
                    autoAlpha: 1,
                    rotate: '0',
                }
            );

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
                }, 2000);
            };
        }
    }, [isProfileMethodOpen]);

    return (
        <div className="profile-method">
            <div className="profile-method__wrapper">
                <div className="container">
                    <div className="profile-method__top">
                        <Link className="profile-method__logo" to="/">
                            <img
                                src="./images/icons/logo-black.svg"
                                alt="logo"
                            />
                        </Link>
                        <div className="profile-method__close">
                            <button
                                className="close-button"
                                onClick={() =>
                                    dispatch(setOpenProfileMethod(false))
                                }
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
                    <div className="profile-method__content">
                        <h2 className="profile-method__title form-title text-split">
                            ARCHETYPAL PSY PROFILE
                        </h2>
                        <div className="profile-method__text-box">
                            <p className="profile-method__text text-split">
                                IL Metodo di Profilo Archetipico è un sistema
                                complesso e integrato che combina diverse
                                tecniche di conoscenza di sé. Grazie alla sua
                                struttura relativamente semplice, si distingue
                                per essere uno degli strumenti più
                                trasformativi, rapidi ed efficaci nel percorso
                                di crescita personale.
                            </p>
                            <br />
                            <p className="profile-method__text text-split">
                                IL Metodo si basa sullo studio degli algoritmi
                                della mappa archetipica natale, costruita sulla
                                data di nascita della persona. Molte scuole
                                psicologiche, esoteriche e spirituali utilizzano
                                la data di nascita in modi diversi, ma il
                                Profilo Archetipico va oltre la semplice
                                decodifica: permette di modellare e migliorare
                                la vita dell’individuo analizzando le dinamiche
                                delle energie archetipiche presenti nella sua
                                mappa archetipica natale.
                            </p>
                            <br />
                            <p className="profile-method__text text-split">
                                La data di nascita è il nostro biglietto da
                                visita, che ci permette di identificare
                                chiaramente tutte le caratteristiche e gli
                                scenari individuali della nostra vita e
                                scegliere la migliore direzione possibile.
                            </p>
                            <br />
                            <p className="profile-method__text text-split">
                                IL Metodo di Profilo Archetipico si articola in
                                due componenti fondamentali:
                            </p>
                            <br />
                            <p className="profile-method__text text-split">
                                Diagnostica: analizza l’interazione tra i
                                pattern archetipici nella loro complessità,
                                rivelando le strutture profonde della psiche che
                                influenzano il carattere, le aspirazioni, le
                                paure e i blocchi interiori.
                            </p>
                            <br />
                            <p className="profile-method__text text-split">
                                Prognostica: offre uno strumento prezioso per
                                comprendere l’ambiente circostante egli eventi
                                in arco della vita, facilitando un percorso
                                consapevole e mirato verso un cambiamento
                                positivo.
                            </p>
                            <br />
                            <p className="profile-method__text text-split">
                                Come strumento di comunicazione, vengono
                                utilizzate 22 immagini degli Arcani Maggiori,
                                non nel loro sistema originale, ma come un vero
                                e proprio alfabeto archetipico capace di
                                rappresentare qualsiasi fenomeno o situazione.
                                Attraverso questa diagnostica basata su immagini
                                archetipiche e pattern universali, il consulente
                                esplora complessi, subpersonalità e parti
                                profonde della psiche di chi cerca aiuto,
                                instaurando un dialogo con il suo inconscio.
                            </p>
                            <br />
                            <p className="profile-method__text text-split">
                                Il consulente agisce come guida, accompagnando
                                il cliente nell’esplorazione dei labirinti della
                                propria anima. Grazie alla mappa archetipica
                                natale, questo percorso simbolico consente di
                                illuminare dinamiche interiori e favorire una
                                maggiore consapevolezza di sé.
                            </p>
                            <br />
                            <p className="profile-method__text text-split">
                                IL Metodo di Profilo Archetipico è molto
                                profondo ed è pratico grazie alla sua
                                semplicità, accuratezza ed efficacia. Ci
                                permette di approfondire quelli correnti e
                                processi inconsci che ci impediscono di superare
                                in modo più “ecologico” le nostre lezioni di
                                maturazione d'anima in questo mondo materiale e
                                adempiere ai compiti con i quali siamo venuti
                                per raggere l’individuazione.
                            </p>
                            <br />
                            <p className="profile-method__text text-split">
                                Grazie alla sua versatilità, il Metodo è
                                estremamente utile in diversi ambiti, dalla
                                psicologia pratica all’educazione, dal coaching
                                al mentoring, supportando professionisti che
                                lavorano con le persone e i loro percorsi di
                                trasformazione. Tuttavia, il suo valore
                                principale risiede nella conoscenza di sé e
                                nella crescita personale, rendendolo uno
                                strumento prezioso per chiunque aspiri a una
                                maggiore consapevolezza e a un’evoluzione, sia
                                individuale che sociale.
                            </p>
                            <br />
                            <p className="profile-method__text text-split">
                                IL Profilo Archetipico offre una chiave di
                                conoscenza profonda del proprio percorso di
                                vita, aiutando a riconoscere e accettare le
                                esperienze come tappe essenziali nella
                                maturazione psicologica dell’anima. Attraverso
                                questo metodo, è possibile rimodellare la
                                propria esistenza, trasformando le sfide in
                                opportunità di crescita e utilizzando le proprie
                                risorse interiori per raggiungere il successo e
                                lo status desiderato. Le energie archetipiche
                                personali diventano così una guida preziosa per
                                realizzare il proprio potenziale e vivere in
                                armonia con il proprio scopo.
                            </p>

                            <div className="profile-method__form-bottom">
                                <Button
                                    text="CONTATTAMI"
                                    className="profile-method__form-button button--black"
                                    onClick={() =>
                                        dispatch(setOpenContactForm(true))
                                    }
                                ></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileMethod;
