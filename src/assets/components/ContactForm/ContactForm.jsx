import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {
    contactForm,
    setOpenContactForm,
} from '../../../redux/slices/contactFormSlice';

import {setOpenPrivacy} from '../../../redux/slices/privacySlice';

import gsap from 'gsap';
import {Link} from 'react-router-dom';
import {TextLinesReveal} from '../../js/textLinesReveal';

import Button from '../../components/Button/Button';

import './styles.scss';

function ContactForm() {
    const dispatch = useDispatch();
    const isFormOpen = useSelector(contactForm);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [emailRequired, setEmailRequired] = useState(true);
    const [phoneRequired, setPhoneRequired] = useState(false);

    React.useEffect(() => {
        const textSplitElements = document.querySelectorAll('.text-split');
        const textAnimation = new TextLinesReveal(
            Array.from(textSplitElements)
        );
    }, []);

    React.useEffect(() => {
        if (isFormOpen) {
            const tl = gsap.timeline({paused: true});

            tl.to('.contact-form', {
                duration: 0.5,
                y: '0',
            });

            tl.to('.contact-form__wrapper', {
                duration: 1,
                x: '0',
            });

            tl.to('.contact-form__form-text', {
                duration: 1,
                opacity: 1,
                y: '0',
            });

            // А) Логотип и Кнопка "закрыть"
            tl.to(['.contact-form__logo', '.contact-form__close'], {
                duration: 0.6,
                opacity: 1,
                y: '0',
            });

            // Б) Линии
            tl.to(['.contact-form__subtitle', '.contact-form__input'], {
                '--x-offset-line': '0%',
                duration: 0.5,
                y: '0',

                x: '0',
            });

            // В) Название блока попапа
            tl.to(
                [
                    '.contact-form__title', // title
                    '.contact-form__title-img', // owl image
                    '.contact-form__subtitle .line-wrapper',
                    '.contact-form__form-box .line',
                ],
                {
                    duration: 1.5,
                    opacity: 1,
                    rotate: '0',
                    x: '0',
                    y: '0',
                }
            );

            // Г) Название текстов для ввода данных и текст слева
            tl.to(['.contact-form__input', '.contact-form__text .line'], {
                duration: 1,
                '--placeholder-offset': '0',
                y: '0',
                autoAlpha: 1,
                rotate: '0',
            });
            //Кнопка
            tl.to(['.contact-form__form-button'], {
                duration: 3,
                y: '0',
                autoAlpha: 1,
                rotate: '0',
            });

            tl.play();

            document.body.classList.add('menu-open');

            return () => {
                tl.reverse();
                setTimeout(() => {
                    document.body.classList.remove('menu-open');
                }, 2000);
            };
        }
    }, [isFormOpen]);

    // АВТОВЫСОТА К TEXT-AREA
    function autoResizeTextarea(element) {
        element.style.height = '78px';
        element.style.height = Math.min(element.scrollHeight, 350) + 'px';
    }

    const textareas = document.querySelectorAll('.contact-form__input--text');

    textareas.forEach((textarea) => {
        textarea.addEventListener('input', () => {
            autoResizeTextarea(textarea);
        });
    });

    textareas.forEach((textarea) => {
        autoResizeTextarea(textarea);
    });

    return (
        <div className="contact-form">
            <div className="contact-form__wrapper">
                <div className="container">
                    <div className="contact-form__top">
                        <Link className="contact-form__logo" to="/">
                            <img
                                src="/images/icons/logo-black.svg"
                                alt="logo"
                            />
                        </Link>
                        <div className="contact-form__close">
                            <button
                                className="close-button"
                                onClick={() =>
                                    dispatch(setOpenContactForm(false))
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
                    <div className="contact-form__content">
                        <p className="contact-form__text text-split">
                            Se si desidera prenotare una consultazione, si prega
                            di indicare i propri dati (nome, posta e in quale
                            momento conveniente sarà conveniente per voi).{' '}
                            <br />
                            Nel prossimo futuro sarai contattato e concorderà
                            l'ora e la data esatte della tua consultazione con
                            uno specialista.
                        </p>
                        <div className="contact-form__form-box">
                            <div className="contact-form__title-wrapper">
                                <h2 className="contact-form__title form-title owl text-split">
                                    CIAO, PIACERE DI CONOSCERTI
                                </h2>
                                <img
                                    className="contact-form__title-img"
                                    src="/images/icons/owl.svg"
                                    alt="owl"
                                />
                            </div>

                            <h3 className="contact-form__subtitle form-subtitle text-split">
                                LASCIA I TUOI DATI E TI CONTATTEREMO
                                SICURAMENTE!
                            </h3>
                            <form className="contact-form__form">
                                <input
                                    type="text"
                                    className="contact-form__input"
                                    placeholder="Nome"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <input
                                    type="email"
                                    className="contact-form__input"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required={emailRequired && !phone}
                                />
                                <input
                                    type="text"
                                    className="contact-form__input"
                                    placeholder="Telefono"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required={phoneRequired && !email}
                                />
                                <textarea
                                    type="text"
                                    className="contact-form__input contact-form__input--text"
                                    placeholder="Il tuo messaggio"
                                />
                                <div className="contact-form__form-bottom">
                                    <p className="contact-form__form-text">
                                        Le vostre informazioni personali saranno
                                        mantenute {''}
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
                                        className="contact-form__form-button button--black"
                                    ></Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
