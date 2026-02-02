import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {setOpenContactForm} from '../../../redux/slices/contactFormSlice';
import {
    profileMethod,
    setOpenProfileMethod,
} from '../../../redux/slices/profileMethodSlice';
import Button from '../../components/Button/Button';
import './styles.scss';
import gsap from 'gsap';

function ProfileMethod() {
    const dispatch = useDispatch();
    const isProfileMethodOpen = useSelector(profileMethod);
    const tl = useRef(null);

    useEffect(() => {
        if (!isProfileMethodOpen) return;

        tl.current = gsap.timeline();

        tl.current.fromTo(
            '.profile-method',
            {y: '100%', opacity: 0},
            {y: '0%', opacity: 1, duration: 0.4, ease: 'power2.out'}
        );

        tl.current.fromTo(
            '.profile-method__wrapper',
            {x: '100%'},
            {x: '0%', duration: 0.5, ease: 'power2.out'}
        );

        tl.current.fromTo(
            ['.profile-method__logo', '.profile-method__close'],
            {opacity: 0, y: 20},
            {opacity: 1, y: 0, duration: 0.4, stagger: 0.1}
        );

        tl.current.fromTo(
            '.profile-method__title',
            {x: -50, opacity: 0},
            {x: 0, opacity: 1, duration: 0.5}
        );

        tl.current.fromTo(
            '.profile-method__text-box',
            {opacity: 0, y: 30},
            {opacity: 1, y: 0, duration: 0.5}
        );

        tl.current.fromTo(
            '.profile-method__form-button',
            {autoAlpha: 0, y: 20},
            {autoAlpha: 1, y: 0, duration: 0.4}
        );

        document.body.classList.add('menu-open');

        return () => {
            tl.current.reverse();
            tl.current.eventCallback('onReverseComplete', () => {
                document.body.classList.remove('menu-open');
            });
        };
    }, [isProfileMethodOpen]);

    return (
        <div className="profile-method">
            <div className="profile-method__wrapper">
                <div className="container">
                    <div className="profile-method__top">
                        <Link className="profile-method__logo" to="/">
                            <img
                                src="./images/icons/logo-black.svg"
                                alt="логотип"
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
                        <h2 className="profile-method__title form-title">
                            АРХЕТИПИЧЕСКИЙ ПСИ-ПРОФИЛЬ
                        </h2>
                        <div className="profile-method__text-box">
                            {[
                                'Метод Архетипического Профиля — это структурированная система, которая объединяет разные техники личностного анализа. Он выделяется как один из самых трансформирующих, быстрых и эффективных инструментов в процессах личного и профессионального роста.',

                                'В основе метода лежит архетипическая карта — схема, построенная на основе даты рождения, которая раскрывает внутренние динамики и повторяющиеся паттерны человека. В центре — понятие архетипа, введённое Карлом Густавом Юнгом как первообраз, универсальный символ, вписанный в коллективное бессознательное. Мы не рождаемся «чистыми листами», а имеем предрасположенность к определённым ролям, опытам и вызовам. Дата рождения становится ключом к исследованию этих «внутренних программ», представленных архетипами.',

                                'Метод состоит из двух частей: диагностической и прогностической.',

                                'Диагностическая часть помогает понять, как архетипы влияют на то, как мы думаем, общаемся, действуем и выстраиваем отношения. Она точно выявляет глубинные структуры психики, которые обусловливают характер, выборы, страхи и конфликты. Делает видимым то, что часто действует автоматически. Обнаруженные схемы можно осознанно трансформировать.',

                                'Прогностическая часть возвращает ясное видение пройденного пути, текущего контекста и будущих динамик. Это стратегический инструмент — полезен в периоды кризиса, изменений или переопределения, а также для понимания событий детства. Помогает двигаться дальше с большей согласованностью, принимать более крепкие решения и сохранять ясность.',

                                'Метод опирается на 22 архетипа Старших Арканов Таро, используемых как система психической репрезентации — сам Юнг называл их универсальным символическим языком. Эти архетипы представляют ментальные структуры, черты личности, поведенческие динамики, фазы трансформации и события, с которыми мы сталкиваемся.',

                                'Архетипический Профиль — инструмент ясный, глубокий, конкретный. Его сила — в способности выявлять невидимые механизмы, которые направляют наши решения, поведение и, как следствие, результаты. Он создан для тех, кто ищет понятные объяснения, практические ответы и глубокое понимание себя, своих сильных сторон и проходящих динамик.',

                                'Благодаря гибкости метод применяется в разных областях: прикладная психология, образование, менторство, коучинг, психоанализ бизнеса. Архетипы действуют в нас, даже когда мы их не видим. Узнавать их — значит делать их видимыми и превращать в стратегических союзников.',

                                'Чтобы принимать более зрелые решения.',

                                'Чтобы вернуть направление.',

                                'Чтобы построить жизнь, согласованную с тем, кто ты есть на самом деле.',
                            ].map((text, i) => (
                                <p className="profile-method__text" key={i}>
                                    {text}
                                </p>
                            ))}

                            <div className="profile-method__form-bottom">
                                <Button
                                    text="СВЯЗАТЬСЯ"
                                    className="profile-method__form-button button--black"
                                    onClick={() =>
                                        dispatch(setOpenContactForm(true))
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileMethod;
