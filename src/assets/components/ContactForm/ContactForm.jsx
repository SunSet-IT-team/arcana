import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {
    contactForm,
    setOpenContactForm,
} from '../../../redux/slices/contactFormSlice';

import {setOpenPrivacy} from '../../../redux/slices/privacySlice';

import gsap from 'gsap';
import {Link, useNavigate} from 'react-router-dom';
import {TextLinesReveal} from '../../js/textLinesReveal';

import Button from '../../components/Button/Button';

import {useForm} from 'react-hook-form';
import './styles.scss';

function ContactForm() {
    const dispatch = useDispatch();
    const isFormOpen = useSelector(contactForm);
    const navigate = useNavigate();
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
            tl.to(['.contact-form__form-box .line'], {
                duration: 1.5,
                rotate: '0',
                x: '0',
                y: '0',
            });
            // Сова
            tl.to(['.contact-form__title-img'], {
                duration: 0.5,
                opacity: 1,
            });

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
    }, [isFormOpen]);

    const textareas = document.querySelectorAll('.contact-form__input--text');

    const onSubmit = async (data) => {
        try {
            const response = await fetch(
                'https://www.22archetypes.com/wp/wp-json/custom/v1/contact',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );

            const result = await response.json();
            console.log(result);

            if (result.success) {
                navigate('/success-send');
                navigate(0);
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const {register, handleSubmit, watch} = useForm({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
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
                            Se desideri prenotare una consulenza, lascia i tuoi
                            dati e ti contatterò al più presto per un
                            approfondimento.
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
                                Inserisci i tuoi dati e ti contatterò al più
                                presto!
                            </h3>
                            <p className="contact-form__text-mb text-split">
                                Per acquistare una descrizione dettagliata degli
                                archetipi, è necessario effettuare un
                                trasferimento di denaro di 100 euro sulla carta:
                                1234 5678 8910 1112 e scrivici un messaggio che
                                hai effettuato un trasferimento di denaro e
                                allegare una copia dell'ordine di pagamento
                                della tua banca o uno screenshot del pagamento
                                della banca mobile alla lettera
                            </p>
                            <form
                                className="contact-form__form"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <input
                                    type="text"
                                    className="contact-form__input"
                                    placeholder="Nome"
                                    {...register('name', {required: true})}
                                />
                                <input
                                    type="email"
                                    className="contact-form__input"
                                    placeholder="Email"
                                    {...register('email', {required: true})}
                                />
                                <input
                                    type="text"
                                    className="contact-form__input"
                                    placeholder="Telefono"
                                    {...register('phone', {required: true})}
                                />
                                <textarea
                                    type="text"
                                    className="contact-form__input contact-form__input--text"
                                    placeholder="Il tuo messaggio"
                                    {...register('message', {required: true})}
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
