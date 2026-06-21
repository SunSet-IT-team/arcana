import React from 'react';
import {useDispatch} from 'react-redux';
import {setOpenContactForm} from '../../../redux/slices/contactFormSlice';

import {toRim, fixYear, fixDay, fixNegative} from '../../js/numberRim';

import './styles.scss';

import {Link} from 'react-router-dom';

import LinkTo from '../Link/Link';
import Button from '../../components/Button/Button';

import ResultsList from '../ResultsList/ResultsList';

function ResultsResults() {
    const [results, setResults] = React.useState(null);
    const dispatch = useDispatch();

    React.useEffect(() => {
        const savedData = localStorage.getItem('resultsData');
        if (savedData) {
            setResults(JSON.parse(savedData));
        }
    }, []);

    if (!results) {
        return <p>Загрузка...</p>;
    }

    const newDay = fixDay(Number(results.day));
    const newMonth = Number(results.month);
    const newYear = fixYear(Number(results.year));

    const pos1 = newDay;
    const pos2 = newMonth;
    const pos3 = newYear;

    const pos4 = fixDay(pos1 + pos2);
    const pos5 = fixDay(pos2 + pos3);
    const pos6 = fixDay(pos4 + pos5);
    const pos7 = fixDay(pos4 + pos3);
    const pos8 = fixDay(pos2 + pos6);
    const pos9 = fixNegative(pos2, pos1);
    const pos10 = fixNegative(pos3, pos2);
    const pos11 = fixNegative(pos9, pos10);
    const pos12 = fixDay(pos7 + pos8);
    const pos13 = fixDay(pos1 + pos4 + pos6);
    const pos14 = fixDay(pos3 + pos5 + pos6);
    const pos15 = fixDay(pos9 + pos10 + pos11);
    const posA = fixDay(pos1 + pos4);
    const posB = fixDay(pos2 + pos4);
    const posC = fixDay(pos2 + pos5);
    const posD = fixDay(pos3 + pos5);
    const posE = fixDay(pos4 + pos6);
    const posF = fixDay(pos5 + pos6);
    const posH = fixDay(posA + posE);
    const posG1 = fixDay(posB + posF);
    const posG2 = fixDay(posC + posD);

    const resultsData = [
        {
            num: '1',
            name: 'Базовая энергия',
            archetypeNum: toRim(pos1),
        },
        {
            num: '2',
            name: 'Уроки',
            archetypeNum: toRim(pos2),
        },
        {
            num: '3',
            name: 'Экзаменатор',
            archetypeNum: toRim(pos3),
        },
        {
            num: '4',
            name: 'Эмоциональный комплекс',
            archetypeNum: toRim(pos4),
        },
        {
            num: '5',
            name: 'Ментальный комплекс',
            archetypeNum: toRim(pos5),
        },
        {
            num: '6',
            name: 'Основная тема жизни',
            archetypeNum: toRim(pos6),
        },
        {
            num: '7',
            name: 'Жизненная задача',
            archetypeNum: toRim(pos7),
        },
        {
            num: '8',
            name: 'Потенциальные способности',
            archetypeNum: toRim(pos8),
        },
        {
            num: '9',
            name: 'Базовая энергия прошлого',
            archetypeNum: toRim(pos9),
        },
        {
            num: '10',
            name: 'Негативное поведение прошлого',
            archetypeNum: toRim(pos10),
        },
        {
            num: '11',
            name: 'Несданный экзамен прошлого',
            archetypeNum: toRim(pos11),
        },
        {
            num: '12',
            name: 'Духовная задача (психологический комфорт)',
            archetypeNum: toRim(pos12),
        },
        {
            num: '13',
            name: 'Нарциссическое Эго (Восприятие человеком себя самого)',
            archetypeNum: toRim(pos13),
        },
        {
            num: '14',
            name: 'Слепое пятно (Восприятие человека другими)',
            archetypeNum: toRim(pos14),
        },
        {
            num: 'A',
            name: 'Детская потребность',
            archetypeNum: toRim(posA),
        },
        {
            num: 'B',
            name: 'Детская травма',
            archetypeNum: toRim(posB),
        },
        {
            num: 'C',
            name: 'Испытание эго',
            archetypeNum: toRim(posC),
        },
        {
            num: 'D',
            name: 'Стрессовое поведение',
            archetypeNum: toRim(posD),
        },
        {
            num: 'E',
            name: 'Защитная часть',
            archetypeNum: toRim(posE),
        },
        {
            num: 'F',
            name: 'Творческий источник',
            archetypeNum: toRim(posF),
        },
        {
            num: 'H',
            name: 'Деструктивная энергия',
            archetypeNum: toRim(posH),
        },
        {
            num: 'G1',
            name: 'Архетипический отец',
            archetypeNum: toRim(posG1),
        },
        {
            num: 'G2',
            name: 'Архетипическая мать',
            archetypeNum: toRim(posG2),
        },
    ];

    return (
        <section className="results">
            <div className="container">
                <div className="results__wrapper">
                    <Link
                        to="/calculator"
                        className="results__back-link back-arrow"
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
                        <span className="underline">Назад</span>
                    </Link>
                    <h1 className="results__title title-1">
                        А ВОТ И ТВОЙ ПОРТРЕТ
                    </h1>
                    <div className="results__intro">
                        <p>
                            Но чтоб твой мозг не вскипел, сейчас тебе нужно
                            обратить внимание лишь на первые 6 позиций.
                        </p>
                        <p>
                            Позиция №1 — это и есть твой ведущий архетип. Ты
                            всегда его чувствуешь и чаще всего он работает «на
                            автомате». Это твой «внутренний ребенок», вечное
                            «ХОЧУ!»: желания, таланты, стихийная энергия.
                            Если «базу» сломали в детстве, запрещали быть
                            собой, человек теряет жизненные силы.
                        </p>
                        <p>
                            Позиция №2 — это то, чему жизнь тебя будет упорно
                            учить. Препятствия на пути к взрослению. Каждый
                            раз, когда у тебя есть энергия двигаться дальше,
                            выходить на новый уровень в отношениях, работе или
                            финансах, случается что-то, что тебя тормозит. Так?
                            Это «внутренний родитель», постоянное «НАДО!» и
                            «ДОЛЖЕН!». Этот архетип будет формировать твое
                            окружение. Часто показывает, какими были отношения
                            с родителями, в частности с мамой, или значимыми
                            взрослыми. Конфликт между «Хочу» Базы и «Надо»
                            Уроков — причина большинства внутренних драм и
                            застревания в детстве.
                        </p>
                        <p>
                            Позиция №3 — это энергия, которая помогает
                            принимать осознанные решения и брать ответственность
                            за свою жизнь. Твой «внутренний взрослый», твое
                            «МОГУ». Но это скрытый ресурс, который открывается,
                            если правильно проходишь уроки. Именно там твои
                            «секс», «деньги», «признание», потому что все это
                            есть только у взрослых, у детей этого нет.
                        </p>
                        <p>
                            Позиция №4 — внутренние страхи, блоки. Она
                            показывает, что происходит, когда тебя захватывают
                            эмоции, тень архетипа. Это та кнопка, на которую
                            нажимают в стрессовых ситуациях. Зная ее и понимая,
                            ты перестанешь реагировать на автомате.
                        </p>
                        <p>
                            Позиция №5 — то, как ты думаешь и как тебя
                            воспринимают окружающие. Твоя ментальная «маска»,
                            которая может быть твоей тюрьмой, если носишь чужие
                            установки, или суперсилой, если начнешь мыслить
                            свободно. А еще она твой условный «Ангел-хранитель».
                        </p>
                        <p>
                            Позиция №6 — твой самый главный жизненный сценарий.
                            Стоит лишь научиться не сгорать в огне эмоций и
                            мыслить правильно, и она станет главным даром. А
                            если жить «на автомате», то это будет твое главное
                            испытание.
                        </p>
                        <p>
                            Понимая как устроены твои архетипы, ты получаешь
                            понятную дорожную карту для взросления и счастливой
                            жизни. Это лишь малая часть того, о чем могут
                            рассказать твои архетипы в портрете. О значении
                            остальных позиций ты можешь узнать на консультации.
                        </p>
                    </div>
                    <div className="results__content">
                        <div className="results__body">
                            <p className="results__body-text">
                                Поздравляю! Ниже находится твоя персональная
                                архетипическая карта, рассчитанная по указанной
                                дате рождения. Нажимая на римскую цифру,
                                обозначающую архетип в каждой позиции карты, ты
                                найдёшь описание некоторых основных
                                характеристик этого архетипа.
                            </p>
                            <div className="results__body-list">
                                <span className="results__body-date">
                                    {results.day} / {results.month} /{' '}
                                    {results.year}
                                </span>
                                <ResultsList
                                    pos1={pos1}
                                    pos2={pos2}
                                    pos3={pos3}
                                    pos4={pos4}
                                    pos5={pos5}
                                    pos6={pos6}
                                    pos7={pos7}
                                    pos8={pos8}
                                    pos9={pos9}
                                    pos10={pos10}
                                    pos11={pos11}
                                    pos12={pos12}
                                    pos13={pos13}
                                    pos14={pos14}
                                    pos15={pos15}
                                    posA={posA}
                                    posB={posB}
                                    posC={posC}
                                    posD={posD}
                                    posE={posE}
                                    posF={posF}
                                    posH={posH}
                                    posG1={posG1}
                                    posG2={posG2}
                                />
                            </div>
                        </div>

                        <div className="results__info">
                            <ul className="results__info-list">
                                <li className="results__info-item">
                                    <p className="results__info-number underline">
                                        НОМЕР
                                    </p>
                                    <p className="results__info-name underline">
                                        ПОЗИЦИЯ
                                    </p>
                                    <p className="results__info-archetype">
                                        <span className="underline">
                                            АРХЕТИП
                                        </span>
                                    </p>
                                </li>
                                {resultsData.map((result, index) => (
                                    <li
                                        className="results__info-item"
                                        key={index}
                                    >
                                        <span className="results__info-number">
                                            {result.num}
                                        </span>
                                        <p className="results__info-name">
                                            {result.name}
                                        </p>
                                        <Link
                                            className="results__info-archetype"
                                            to={`/archetypes/${result.archetypeNum}`}
                                        >
                                            {result.archetypeNum}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <p className="results__info-text">
                                Полная карта со всеми архетипами представлена
                                здесь для людей, чуть более погруженных в тему,
                                или для «душнил». Ничего не понятно – это
                                нормальная реакция. Приходи на консультацию. Я
                                расскажу тебе про твои архетипы: основные,
                                теневые, про то, что заложено в тебе
                                генетически, из прошлых поколений; про твои
                                профессиональные предрасположенности и скрытые
                                таланты. Посмотрим, где твои сбои на пути к
                                идеальной жизни.
                            </p>
                            <Button
                                text="СВЯЖИСЬ СО МНОЙ"
                                className="results__info-link"
                                onClick={() =>
                                    dispatch(setOpenContactForm(true))
                                }
                            ></Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ResultsResults;
