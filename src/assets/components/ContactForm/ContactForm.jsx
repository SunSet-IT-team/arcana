import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    contactForm,
    setOpenContactForm,
} from '../../../redux/slices/contactFormSlice';
import {setOpenPrivacy} from '../../../redux/slices/privacySlice';

import gsap from 'gsap';
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Button from '../../components/Button/Button';

import './styles.scss';

function ContactForm() {
    const dispatch = useDispatch();
    const isFormOpen = useSelector(contactForm);
    const navigate = useNavigate();
    const tl = useRef(null);

    const {register, handleSubmit} = useForm({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
    });

    useEffect(() => {
        if (!isFormOpen) return;

        tl.current = gsap.timeline();

        tl.current.fromTo(
            '.contact-form',
            {y: '100%', opacity: 0},
            {y: '0%', opacity: 1, duration: 0.4, ease: 'power2.out'}
        );

        tl.current.fromTo(
            '.contact-form__wrapper',
            {x: '100%'},
            {x: '0%', duration: 0.5, ease: 'power2.out'}
        );

        tl.current.fromTo(
            ['.contact-form__logo', '.contact-form__close'],
            {opacity: 0, y: 20},
            {opacity: 1, y: 0, duration: 0.3, stagger: 0.1}
        );

        tl.current.fromTo(
            '.contact-form__title',
            {opacity: 0, y: 30},
            {opacity: 1, y: 0, duration: 0.4}
        );

        tl.current.fromTo(
            '.contact-form__form-box',
            {opacity: 0, y: 30},
            {opacity: 1, y: 0, duration: 0.4}
        );

        tl.current.fromTo(
            '.contact-form__form-button',
            {opacity: 0, y: 20},
            {opacity: 1, y: 0, duration: 0.4}
        );

        document.body.classList.add('menu-open');

        return () => {
            tl.current.reverse();
            tl.current.eventCallback('onReverseComplete', () => {
                document.body.classList.remove('menu-open');
            });
        };
    }, [isFormOpen]);

    const onSubmit = async (data) => {
        try {
            const response = await fetch(
                'https://xn--22-8kcays3cft2a.xn--p1ai/wp/wp-json/custom/v1/contact',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );

            const result = await response.json();
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
                        <p className="contact-form__text">
                            Если вы хотите записаться на консультацию, оставьте
                            свои контактные данные, и я свяжусь с вами в
                            ближайшее время для уточнения.
                        </p>

                        <div className="contact-form__form-box">
                            <div className="contact-form__title-wrapper">
                                <h2 className="contact-form__title form-title owl">
                                    ПРИВЕТ, РАД(А) ПОЗНАКОМИТЬСЯ
                                </h2>
                                <img
                                    className="contact-form__title-img"
                                    src="/images/icons/owl.svg"
                                    alt="owl"
                                />
                            </div>

                            <h3 className="contact-form__subtitle form-subtitle">
                                Введите ваши данные, и я свяжусь с вами!
                            </h3>

                            <p className="contact-form__text-mb">
                                Для приобретения подробного описания архетипов
                                необходимо осуществить перевод 100 евро на
                                карту: 1234 5678 8910 1112 и приложить копию
                                чека или скриншот платежа.
                            </p>

                            <form
                                className="contact-form__form"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <input
                                    type="text"
                                    className="contact-form__input"
                                    placeholder="Имя"
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
                                    placeholder="Телефон"
                                    {...register('phone', {required: true})}
                                />
                                <textarea
                                    className="contact-form__input contact-form__input--text"
                                    placeholder="Ваше сообщение"
                                    {...register('message', {required: true})}
                                />

                                <div className="contact-form__form-bottom">
                                    <p className="contact-form__form-text">
                                        Ваша личная информация будет храниться{' '}
                                        <span
                                            className="underline"
                                            onClick={() =>
                                                dispatch(setOpenPrivacy(true))
                                            }
                                        >
                                            конфиденциальной
                                        </span>{' '}
                                        и защищённой*.
                                    </p>
                                    <Button
                                        text="ОТПРАВИТЬ"
                                        className="contact-form__form-button button--black"
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

export default ContactForm;
