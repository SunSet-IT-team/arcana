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
                                22ARCHETIPI di Olga Kuzmenko, C.F.:
                                KZMLGO79C49Z154Y - garantisce che il trattamento
                                dei dati - siano essi acquisiti via posta
                                elettronica o moduli elettronici, o con altra
                                modalità - è conforme a quanto previsto dalla
                                normativa in materia di protezione dei dati
                                personali. Si veda al riguardo
                                www.22archetypes.com
                            </p>
                            <p className="privacy__text text-split">
                                L'invio facoltativo, esplicito e volontario di
                                posta elettronica agli indirizzi indicati su
                                questo sito comporta la successiva acquisizione
                                dell'indirizzo e del numero di telefono del
                                mittente, necessario per rispondere alle
                                richieste, nonché degli eventuali altri dati
                                personali inseriti nella missiva. Le
                                informazioni fornite non saranno comunicate a
                                soggetti estranei alla sua elaborazione.
                            </p>
                            <p className="privacy__text text-split">
                                Titolare del trattamento dei dati personali è:
                                22ARCHETIPI di Olga Kuzmenko – Corso degli
                                Inglesi 462, 18038 – Sanremo – Italy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Privacy;
