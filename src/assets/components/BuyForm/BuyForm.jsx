import React from 'react';

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

    React.useEffect(() => {
        if (isFormOpen) {
            const tl = gsap.timeline({paused: true});

            tl.to('.buy-form', {
                duration: 0.5,
                y: '0',
            });

            tl.to('.buy-form__wrapper', {
                duration: 1,
                x: '0',
            });

            tl.to('.buy-form__form-text', {
                duration: 1,
                opacity: 1,
                y: '0',
            });

            // А) Логотип и Кнопка "закрыть"
            tl.to(['.buy-form__logo', '.buy-form__close'], {
                duration: 0.6,
                opacity: 1,
                y: '0',
            });

            // Б) Линии
            tl.to(['.buy-form__subtitle', '.buy-form__input'], {
                '--x-offset-line': '0%',
                duration: 0.5,
                y: '0',

                x: '0',
            });

            // В) Название блока попапа
            tl.to(['.buy-form__form-box .line'], {
                duration: 1.5,
                rotate: '0',
                x: '0',
                y: '0',
            });
            // Сова
            tl.to(['.buy-form__title-img'], {
                duration: 0.5,
                opacity: 1,
            });

            // Г) Название текстов для ввода данных и текст слева
            tl.to(
                [
                    '.buy-form__input',
                    '.buy-form__text .line',
                    '.buy-form__label',
                ],
                {
                    duration: 1,
                    '--placeholder-offset': '0',
                    y: '0',
                    autoAlpha: 1,
                    rotate: '0',
                }
            );
            //Кнопка
            tl.to(['.buy-form__form-button'], {
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

    // АВТОВЫСОТА К TEXT-AREA
    function autoResizeTextarea(element) {
        element.style.height = '78px';
        element.style.height = Math.min(element.scrollHeight, 350) + 'px';
    }

    const textareas = document.querySelectorAll('.buy-form__input--text');

    textareas.forEach((textarea) => {
        textarea.addEventListener('input', () => {
            autoResizeTextarea(textarea);
        });
    });

    textareas.forEach((textarea) => {
        autoResizeTextarea(textarea);
    });

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
                            <p className="text-split">
                                Per acquistare una descrizione dettagliata degli
                                archetipi, è necessario effettuare un
                                trasferimento di denaro di <span>100 euro</span>
                            </p>
                            <p className="text-split">
                                sulla carta: <span>1234 5678 8910 1112 </span>
                            </p>
                            <p className="text-split">
                                e scrivici un messaggio che hai effettuato un
                                trasferimento di denaro e allegare una copia
                                dell'ordine di pagamento della tua banca o uno
                                screenshot del pagamento della banca mobile alla
                                lettera,
                            </p>
                        </div>
                        <div className="buy-form__form-box">
                            <div className="buy-form__title-wrapper">
                                <h2 className="buy-form__title form-title text-split">
                                    CIAO, PIACERE DI CONOSCERTI
                                </h2>
                                <img
                                    className="buy-form__title-img"
                                    src="/images/icons/owl.svg"
                                    alt="owl"
                                />
                            </div>

                            <h3 className="buy-form__subtitle form-subtitle text-split">
                                LASCIA I TUOI DATI E TI CONTATTEREMO
                                SICURAMENTE!
                            </h3>
                            <form className="buy-form__form">
                                <input
                                    type="text"
                                    className="buy-form__input"
                                    placeholder="Nome"
                                />
                                <input
                                    type="text"
                                    className="buy-form__input"
                                    placeholder="Email"
                                />
                                <input
                                    type="text"
                                    className="buy-form__input"
                                    placeholder="Telefono"
                                />
                                <div className="buy-form__message-box">
                                    <textarea
                                        type="text"
                                        className="buy-form__input buy-form__input--text"
                                        placeholder="Il tuo messaggio"
                                    ></textarea>
                                    <label className="buy-form__label">
                                        <input
                                            type="file"
                                            className="buy-form__file sr-only"
                                        />
                                    </label>
                                </div>
                                <div className="buy-form__form-bottom">
                                    <p className="buy-form__form-text">
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
                                        className="buy-form__form-button button--black"
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

export default BuyForm;
