import {useEffect, useMemo, useState} from 'react';

import './styles.scss';

import {Link} from 'react-router-dom';

import SelectLabel from '../../components/Select/Select';
import SliderMobile from '../Slider/SliderMobile';
import {useSelector} from 'react-redux';

export const archetypesData = [
    {
        title: 'МАГ',
        number: 'I',
        positive: 'СЛОВО, СИЛА ИДЕИ',
        negative: 'ПУСТЫЕ РАЗГОВОРЫ, МАНИПУЛЯЦИИ',
        imgSrc: './images/archetypes/1.webp',
        linkTo: '/archetypes/I',
        energy: 'Я – ВОЛШЕБНИК',
    },
    {
        title: 'ЖРИЦА',
        number: 'II',
        positive: 'Забота и защита',
        negative: 'Чрезмерная опека',
        imgSrc: './images/archetypes/2.webp',
        linkTo: '/archetypes/II',
        energy: 'Я – ХРАНИТЕЛЬ ТАЙНЫХ ЗНАНИЙ',
    },
    {
        title: 'ИМПЕРАТРИЦА',
        number: 'III',
        positive: 'красота, изобилие, созидание',
        negative: 'утрата плодотворности (во всех смыслах), неряшливость',
        imgSrc: './images/archetypes/3.webp',
        linkTo: '/archetypes/III',
        energy: 'Я – ПЛОДОРОДИЕ, Я – ИЗОБИЛИЕ, Я – КОМФОРТ',
    },
    {
        title: 'ИМПЕРАТОР',
        number: 'IV',
        positive: 'структура, власть, трудолюбие',
        negative: 'деспотизм, контроль',
        imgSrc: './images/archetypes/4.webp',
        linkTo: '/archetypes/IV',
        energy: 'Я – ВЛАСТЬ',
    },
    {
        title: 'ЖРЕЦ',
        number: 'V',
        positive: 'авторитет, мудрость',
        negative: 'глупость, догматизм',
        imgSrc: './images/archetypes/5.webp',
        linkTo: '/archetypes/V',
        energy: 'Я – УЧИТЕЛЬ, Я – АВТОРИТЕТ',
    },
    {
        title: 'ВЛЮБЛЁННЫЕ',
        number: 'VI',
        positive: 'осознанный выбор',
        negative: 'разрушение отношений',
        imgSrc: './images/archetypes/6.webp',
        linkTo: '/archetypes/VI',
        energy: 'Я – ВЫБОР',
    },
    {
        title: 'КОЛЕСНИЦА',
        number: 'VII',
        positive: 'цель, направление',
        negative: 'отсутствие смысла и вектора',
        imgSrc: './images/archetypes/7.webp',
        linkTo: '/archetypes/VII',
        energy: 'Я – ЛИДЕРСТВО И ЦЕЛЕПОЛАГАНИЕ',
    },
    {
        title: 'СПРАВЕДЛИВОСТЬ',
        number: 'VIII',
        positive: 'порядок, правила',
        negative: 'несправедливость, перекос',
        imgSrc: './images/archetypes/8.webp',
        linkTo: '/archetypes/VIII',
        energy: 'Я – ПРАВОСУДИЕ',
    },
    {
        title: 'ОТШЕЛЬНИК',
        number: 'IX',
        positive: 'мудрость, жизненный опыт',
        negative: 'жизнь по чужому пути',
        imgSrc: './images/archetypes/9.webp',
        linkTo: '/archetypes/IX',
        energy: 'Я – ОПЫТ',
    },
    {
        title: 'КОЛЕСО ФОРТУНЫ',
        number: 'X',
        positive: 'умение чувствовать свои потребности',
        negative: 'долги, застревание в нехватке',
        imgSrc: './images/archetypes/10.webp',
        linkTo: '/archetypes/X',
        energy: 'Я – УДАЧА',
    },
    {
        title: 'СИЛА',
        number: 'XI',
        positive: 'героизм, внутренняя мощь',
        negative: 'насилие, разрушение',
        imgSrc: './images/archetypes/11.webp',
        linkTo: '/archetypes/XI',
        energy: 'ПРИРУЧИ ВНУТРЕННЕГО ЗВЕРЯ',
    },
    {
        title: 'ПОВЕШЕННЫЙ',
        number: 'XII',
        positive: 'осознанная жертва, помогающий человек',
        negative: 'позиция жертвы, все грани треугольника Карпмана',
        imgSrc: './images/archetypes/12.webp',
        linkTo: '/archetypes/XII',
        energy: 'Я – ГЛУБИНА',
    },
    {
        title: 'СМЕРТЬ',
        number: 'XIII',
        positive: 'обновление, перемены',
        negative: 'застой, страх изменений',
        imgSrc: './images/archetypes/13.webp',
        linkTo: '/archetypes/XIII',
        energy: 'Я – ТРАНСФОРМАЦИЯ',
    },
    {
        title: 'УМЕРЕННОСТЬ',
        number: 'XIV',
        positive: 'равновесие, божественная гармония',
        negative: 'крайности, застревание на одном из берегов',
        imgSrc: './images/archetypes/14.webp',
        linkTo: '/archetypes/XIV',
        energy: 'Я – ГАРМОНИЯ',
    },
    {
        title: 'ДЬЯВОЛ',
        number: 'XV',
        positive: 'удовольствие, жизненная энергия',
        negative: 'зависимости, утрата контроля',
        imgSrc: './images/archetypes/15.webp',
        linkTo: '/archetypes/XV',
        energy: 'Я – УДОВОЛЬСТВИЕ',
    },
    {
        title: 'БАШНЯ',
        number: 'XVI',
        positive: 'созидание, построение новых структур',
        negative: 'разрушение, крах, дезинтеграция',
        imgSrc: './images/archetypes/16.webp',
        linkTo: '/archetypes/XVI',
        energy: 'Я – СТАБИЛЬНОСТЬ',
    },
    {
        title: 'ЗВЕЗДА',
        number: 'XVII',
        positive: 'дружба, искренность, творчество',
        negative: 'предательство, зависть, измена',
        imgSrc: './images/archetypes/17.webp',
        linkTo: '/archetypes/XVII',
        energy: 'Я – ИСКЛЮЧИТЕЛЬНОСТЬ',
    },
    {
        title: 'ЛУНА',
        number: 'XVIII',
        positive: 'бессознательное, психология, любые женские инициации',
        negative: 'страхи, тайны и интриги, сумасшествие',
        imgSrc: './images/archetypes/18.webp',
        linkTo: '/archetypes/XVIII',
        energy: 'Я – ЗАГАДКА',
    },
    {
        title: 'СОЛНЦЕ',
        number: 'XIX',
        positive: 'сознание, высший свет, проявленность',
        negative: 'выгорание, быть в тени',
        imgSrc: './images/archetypes/19.webp',
        linkTo: '/archetypes/XIX',
        energy: 'Я – СВЕТ, Я – ВЫСШИЙ СВЕТ',
    },
    {
        title: 'СУД',
        number: 'XX',
        positive: 'объединение на основе общих ценностей',
        negative: 'отсутствие собственных ценностей',
        imgSrc: './images/archetypes/20.webp',
        linkTo: '/archetypes/XX',
        energy: 'Я – ЭГРЕГОР',
    },
    {
        title: 'МИР',
        number: 'XXI',
        positive: 'безграничность, все, что связано с интернетом',
        negative: 'нарушение границ',
        imgSrc: './images/archetypes/21.webp',
        linkTo: '/archetypes/XXI',
        energy: 'Я И ЕСТЬ БЕЗГРАНИЧНЫЙ МИР',
    },
    {
        title: 'ШУТ',
        number: 'XXII',
        positive: 'игра, начало нового, ребенок',
        negative: 'безответственность, инфантилизм',
        imgSrc: './images/archetypes/22.webp',
        linkTo: '/archetypes/XXII',
        energy: 'Я – ВЕСЕЛЬЕ',
    },
];
const archetypesOptions = [
    {value: 'ВСЕ', label: 'ВСЕ'},
    {value: 'I', label: 'I'},
    {value: 'II', label: 'II'},
    {value: 'III', label: 'III'},
    {value: 'IV', label: 'IV'},
    {value: 'V', label: 'V'},
    {value: 'VI', label: 'VI'},
    {value: 'VII', label: 'VII'},
    {value: 'VIII', label: 'VIII'},
    {value: 'IX', label: 'IX'},
    {value: 'X', label: 'X'},
    {value: 'XI', label: 'XI'},
    {value: 'XII', label: 'XII'},
    {value: 'XIII', label: 'XIII'},
    {value: 'XIV', label: 'XIV'},
    {value: 'XV', label: 'XV'},
    {value: 'XVI', label: 'XVI'},
    {value: 'XVII', label: 'XVII'},
    {value: 'XVIII', label: 'XVIII'},
    {value: 'XIX', label: 'XIX'},
    {value: 'XX', label: 'XX'},
    {value: 'XXI', label: 'XXI'},
    {value: 'XXII', label: 'XXII'},
];

function ArchetypesArchetypes() {
    const deviceType = useSelector((state) => state.screen.deviceType);

    const [archetypes, setArchetypes] = useState(archetypesData);
    const [selectedArchetypesFilter, setSelectedArchetypesFilter] =
        useState('ВСЕ');

    const handleArchetypesFilterChange = (selectedArchetypesFilter) => {
        setSelectedArchetypesFilter(selectedArchetypesFilter);
    };

    const filteredArchetypes = useMemo(() => {
        return selectedArchetypesFilter === 'ВСЕ'
            ? archetypesData
            : archetypesData.filter(
                  (item) => item.number === selectedArchetypesFilter
              );
    }, [selectedArchetypesFilter]);

    useEffect(() => {
        setArchetypes(filteredArchetypes);
    }, [selectedArchetypesFilter, filteredArchetypes]);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const storyItems = document.querySelectorAll('.storys__item');
            storyItems.forEach((item) => {
                if (item.offsetWidth > 335) {
                    item.classList.add('storys__item--big');
                } else {
                    item.classList.remove('storys__item--big');
                }
            });
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 768);
            };

            handleResize();
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="archetypes">
            <div className="container">
                <div className="archetypes__wrapper">
                    <Link
                        to="/"
                        className="archetypes__back-link back-arrow"
                        href="#"
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
                    <h1 className="archetypes__title title-1">22 АРХЕТИПА</h1>

                    <div className="archetypes__filter">
                        <ul className="archetypes__filter-list">
                            {archetypesOptions.map((archetype, index) => (
                                <li
                                    className="archetypes__filter-item underline"
                                    key={archetype.label + index}
                                    onClick={() =>
                                        setSelectedArchetypesFilter(
                                            archetype.value
                                        )
                                    }
                                >
                                    {archetype.value}
                                </li>
                            ))}
                        </ul>
                        <SelectLabel
                            className="archetypes__filter-select"
                            options={archetypesOptions}
                            placeholder="ВСЕ"
                            onChange={handleArchetypesFilterChange}
                            value={selectedArchetypesFilter}
                        />
                    </div>
                    {isMobile ? (
                        <SliderMobile archetypesProp={archetypes} />
                    ) : (
                        <ul className="archetypes__list">
                            {archetypes.map((archetype) => (
                                <li
                                    className="archetypes__item"
                                    key={archetype.title}
                                >
                                    <h2 className="archetypes__item-title">
                                        {archetype.title}
                                    </h2>
                                    <div className="archetypes__item-content">
                                        <img
                                            className="archetypes__item-img"
                                            src={`../images/archetypes/${archetype.number}.webp`}
                                            alt="#"
                                        />
                                        <div className="archetypes__item-info">
                                            <span className="archetypes__item-number">
                                                {archetype.number}
                                            </span>
                                            <p className="archetypes__item-energy">
                                                <span className="archetypes__item-span">
                                                    {archetype.energy}
                                                </span>
                                            </p>
                                            <p className="archetypes__item-positive">
                                                Позитивное проявление:
                                                <span className="archetypes__item-span">
                                                    {archetype.positive}
                                                </span>
                                            </p>
                                            <p className="archetypes__item-negative">
                                                Негативное проявление:
                                                <span className="archetypes__item-span">
                                                    {archetype.negative}
                                                </span>
                                            </p>

                                            <Link
                                                to={`/archetypes/${archetype.number}`}
                                                className="archetypes__item-link arrow"
                                                href="#"
                                            >
                                                <span className="underline">
                                                    Подробнее
                                                </span>
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
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ArchetypesArchetypes;
