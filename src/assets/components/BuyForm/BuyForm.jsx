import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {buyForm, setOpenBuyForm} from '../../../redux/slices/buyFormSlice';
import {setOpenPrivacy} from '../../../redux/slices/privacySlice';

import './styles.scss';
import {Link} from 'react-router-dom';
import gsap from 'gsap';
import Button from '../Button/Button';

function BuyForm() {
    const dispatch = useDispatch();
    const isFormOpen = useSelector(buyForm);
    const formRef = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        if (!isFormOpen) return;

        tl.current = gsap.timeline();

        tl.current.fromTo(
            '.buy-form',
            {y: '100%', opacity: 0},
            {y: '0%', opacity: 1, duration: 0.4, ease: 'power2.out'}
        );

        tl.current.fromTo(
            '.buy-form__wrapper',
            {x: '100%'},
            {x: '0%', duration: 0.4, ease: 'power2.out'}
        );

        tl.current.fromTo(
            ['.buy-form__logo', '.buy-form__close'],
            {opacity: 0, y: 20},
            {opacity: 1, y: 0, duration: 0.4, stagger: 0.1}
        );

        tl.current.fromTo(
            '.buy-form__title-img',
            {opacity: 0},
            {opacity: 1, duration: 0.4}
        );

        tl.current.fromTo(
            '.buy-form__form-button',
            {autoAlpha: 0, y: 30},
            {autoAlpha: 1, y: 0, duration: 0.5}
        );

        document.body.classList.add('menu-open');

        return () => {
            if (tl.current) {
                tl.current.reverse();
                tl.current.eventCallback('onReverseComplete', () => {
                    document.body.classList.remove('menu-open');
                });
            }
        };
    }, [isFormOpen]);

    useEffect(() => {
        const textareas = document.querySelectorAll('.buy-form__input--text');
        const autoResize = (textarea) => {
            textarea.style.height = '78px';
            textarea.style.height = Math.min(textarea.scrollHeight, 350) + 'px';
        };

        textareas.forEach((el) => {
            autoResize(el);
            el.addEventListener('input', () => autoResize(el));
        });

        return () => {
            textareas.forEach((el) =>
                el.removeEventListener('input', () => autoResize(el))
            );
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        if (form.file.files[0]) {
            formData.append('file', form.file.files[0]);
        }

        try {
            const response = await fetch(
                'https://tuo-sito.it/wp-json/custom/v1/buy',
                {
                    method: 'POST',
                    body: formData,
                }
            );

            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error('Error:', error);
            alert("Errore durante l'invio del modulo.");
        }
    };

    return (
        <div className="buy-form">
            <div className="buy-form__wrapper">
                <div className="container">
                    <div className="buy-form__top">
                        <Link className="buy-form__logo" to="/">
                            <img
                                src="/images/icons/logo-black.svg"
                                alt="logo"
                            />
                        </Link>
                        <div className="buy-form__close">
                            <button
                                className="close-button"
                                onClick={() => dispatch(setOpenBuyForm(false))}
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
                    <div className="buy-form__content">
                        <div className="buy-form__text">
                            <p>
                                Per ottenere una descrizione dettagliata
                                dell’archetipo, è necessario effettuare un
                                pagamento di 22 euro.
                            </p>
                            <p>
                                Puoi effettuare il versamento tramite uno dei
                                seguenti metodi:
                            </p>
                            <p>
                                Carta HYPE: 4021 7002 7941 1187 (Titolare: Olga
                                Kuzmenko)
                            </p>
                            <p>IBAN: IT78F36772223000EM002431825</p>
                            <p>BIC: HYEEIT22XXX</p>
                            <p>PayPal: 22archetypes@gmail.com</p>
                            <p>
                                Dopo aver completato il pagamento, ti invito a
                                inviarmi un messaggio di conferma con una copia
                                della ricevuta bancaria o uno screenshot della
                                transazione effettuata tramite mobile banking.
                            </p>
                            <p>
                                Per qualsiasi domanda o assistenza, non esitare
                                a contattarmi.
                            </p>
                        </div>
                        <div className="buy-form__form-box">
                            <div className="buy-form__title-wrapper">
                                <h2 className="buy-form__title form-title">
                                    CIAO, PIACERE DI CONOSCERTI
                                </h2>
                                <img
                                    className="buy-form__title-img"
                                    src="/images/icons/owl.svg"
                                    alt="owl"
                                />
                            </div>

                            <h3 className="buy-form__subtitle form-subtitle">
                                Inserisci i tuoi dati e ti contatterò al più
                                presto!
                            </h3>
                            <form
                                className="buy-form__form"
                                onSubmit={handleSubmit}
                            >
                                <input
                                    name="name"
                                    type="text"
                                    className="buy-form__input"
                                    placeholder="Nome"
                                    required
                                />
                                <input
                                    name="email"
                                    type="email"
                                    className="buy-form__input"
                                    placeholder="Email"
                                    required
                                />
                                <input
                                    name="phone"
                                    type="tel"
                                    className="buy-form__input"
                                    placeholder="Telefono"
                                    required
                                />
                                <div className="buy-form__message-box">
                                    <textarea
                                        name="message"
                                        className="buy-form__input buy-form__input--text"
                                        placeholder="Il tuo messaggio"
                                        required
                                    ></textarea>
                                    <label className="buy-form__label">
                                        <input
                                            name="file"
                                            type="file"
                                            className="buy-form__file sr-only"
                                        />
                                    </label>
                                </div>
                                <div className="buy-form__form-bottom">
                                    <p className="buy-form__form-text">
                                        Le vostre informazioni personali saranno
                                        mantenute{' '}
                                        <span
                                            className="underline"
                                            onClick={() =>
                                                dispatch(setOpenPrivacy(true))
                                            }
                                        >
                                            private
                                        </span>{' '}
                                        e sicure*.
                                    </p>
                                    <Button
                                        text="INVIARE"
                                        className="buy-form__form-button button--black"
                                        type="submit"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuyForm;
