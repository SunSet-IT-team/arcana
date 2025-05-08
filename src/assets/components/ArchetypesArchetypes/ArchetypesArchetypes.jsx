import {useEffect, useMemo, useState} from 'react';

import './styles.scss';

import {Link} from 'react-router-dom';

import SelectLabel from '../../components/Select/Select';
import SliderMobile from '../Slider/SliderMobile';

export const archetypesData = [
    {
        title: 'Il Mago',
        number: 'I',
        positive: 'PAROLA',
        negative: 'CHIACCHERE INUTILI',
        imgSrc: './images/archetypes/1.webp',
        linkTo: '/archetypes/I',
        energy: 'MASCHILE',
    },
    {
        title: 'La Papessa',
        number: 'II',
        positive: 'TUTELA',
        negative: 'IPERPROTEZIONE',
        imgSrc: './images/archetypes/2.webp',
        linkTo: '/archetypes/II',
        energy: 'FEMMINILE',
    },
    {
        title: "L'Imperatrice",
        number: 'III',
        positive: 'BELLEZZA',
        negative: 'INFERTILITA’',
        imgSrc: './images/archetypes/3.webp',
        linkTo: '/archetypes/III',
        energy: 'FEMMINILE',
    },
    {
        title: "L'Imperatore",
        number: 'IV',
        positive: 'POTERE',
        negative: 'DISPOTISMO',
        imgSrc: './images/archetypes/4.webp',
        linkTo: '/archetypes/IV',
        energy: 'MASCHILE',
    },
    {
        title: 'Il Papa',
        number: 'V',
        positive: 'AUTORITA’',
        negative: 'STUPIDITÀ',
        imgSrc: './images/archetypes/5.webp',
        linkTo: '/archetypes/V',
        energy: 'MASCHILE',
    },
    {
        title: "L'Innamorato",
        number: 'VI',
        positive: 'SCELTA',
        negative: 'DISTRUZIONE DELLA RELAZIONE',
        imgSrc: './images/archetypes/6.webp',
        linkTo: '/archetypes/VI',
        energy: 'NEUTRALE',
    },
    {
        title: 'Il Carro',
        number: 'VII',
        positive: 'BERSAGLIO',
        negative: 'ASSENZA DI SCOPO',
        imgSrc: './images/archetypes/7.webp',
        linkTo: '/archetypes/VII',
        energy: 'MASCHILE',
    },
    {
        title: 'La Giustizia',
        number: 'VIII',
        positive: 'REGOLE',
        negative: 'INIQUITÀ',
        imgSrc: './images/archetypes/8.webp',
        linkTo: '/archetypes/VIII',
        energy: 'FEMMINILE',
    },
    {
        title: 'L’Eremita',
        number: 'IX',
        positive: 'SAGGEZZA',
        negative: 'IL CAMMINO DI QUALCUN ALTRO',
        imgSrc: './images/archetypes/9.webp',
        linkTo: '/archetypes/IX',
        energy: 'NEUTRALE',
    },
    {
        title: 'La Ruota della Fortuna',
        number: 'X',
        positive: 'PROPRI BISOGNI',
        negative: 'DEBITI',
        imgSrc: './images/archetypes/10.webp',
        linkTo: '/archetypes/X',
        energy: 'NEUTRALE',
    },
    {
        title: 'La Forza',
        number: 'XI',
        positive: 'GESTA EROICHE',
        negative: 'VIOLENZA',
        imgSrc: './images/archetypes/11.webp',
        linkTo: '/archetypes/XI',
        energy: 'MASCHILE',
    },
    {
        title: 'L’Appeso',
        number: 'XII',
        positive: 'SACRIFICIO VOLONTARIO',
        negative: 'VITTIMA',
        imgSrc: './images/archetypes/12.webp',
        linkTo: '/archetypes/XII',
        energy: 'NEUTRALE',
    },
    {
        title: 'La Morte',
        number: 'XIII',
        positive: 'CAMBIAMENTI',
        negative: 'STAGNAZIONE',
        imgSrc: './images/archetypes/13.webp',
        linkTo: '/archetypes/XIII',
        energy: 'FEMMINILE',
    },
    {
        title: 'La Temperanza',
        number: 'XIV',
        positive: 'EQUILIBRIO',
        negative: 'ESTREMI',
        imgSrc: './images/archetypes/14.webp',
        linkTo: '/archetypes/XIV',
        energy: 'NEUTRALE',
    },
    {
        title: 'Il Diavolo',
        number: 'XV',
        positive: 'PIACERE',
        negative: 'DIPENDENZE',
        imgSrc: './images/archetypes/15.webp',
        linkTo: '/archetypes/XV',
        energy: 'MASCHILE',
    },
    {
        title: 'La Torre',
        number: 'XVI',
        positive: 'COSTRUZIONE',
        negative: 'DISTRUZIONE',
        imgSrc: './images/archetypes/16.webp',
        linkTo: '/archetypes/XVI',
        energy: 'NEUTRALE',
    },
    {
        title: 'La Stella',
        number: 'XVII',
        positive: 'AMICIZIA',
        negative: 'TRADIMENTO',
        imgSrc: './images/archetypes/17.webp',
        linkTo: '/archetypes/XVII',
        energy: 'FEMMINILE',
    },
    {
        title: 'La Luna',
        number: 'XVIII',
        positive: 'INCONSCIO',
        negative: 'PAURE',
        imgSrc: './images/archetypes/18.webp',
        linkTo: '/archetypes/XVIII',
        energy: 'FEMMINILE',
    },
    {
        title: 'Il Sole',
        number: 'XIX',
        positive: 'COSCENZA',
        negative: 'INCENERIMENTO',
        imgSrc: './images/archetypes/19.webp',
        linkTo: '/archetypes/XIX',
        energy: 'MASCHILE',
    },
    {
        title: 'Il Giudizio',
        number: 'XX',
        positive: 'UNIONE SU VALORI COMUNI',
        negative: 'MANCANZA DI VALORI PROPRI',
        imgSrc: './images/archetypes/20.webp',
        linkTo: '/archetypes/XX',
        energy: 'NEUTRALE',
    },
    {
        title: 'Il Mondo',
        number: 'XXI',
        positive: 'ILLIMITATEZZA',
        negative: 'INVASIONE DEI CONFINI',
        imgSrc: './images/archetypes/21.webp',
        linkTo: '/archetypes/XXI',
        energy: 'NEUTRALE',
    },
    {
        title: 'Il Matto',
        number: 'XXII',
        positive: 'GIOCO',
        negative: 'IRRESPONSABILITÀ',
        imgSrc: './images/archetypes/22.webp',
        linkTo: '/archetypes/XXII',
        energy: 'NEUTRALE',
    },
];
const archetypesOptions = [
    {value: 'TUTTI', label: 'TUTTI'},
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
    {value: 'VI', label: 'VI'},
    {value: 'VII', label: 'VII'},
    {value: 'VIII', label: 'VIII'},
    {value: 'XIX', label: 'XIX'},
    {value: 'XX', label: 'XX'},
    {value: 'XXI', label: 'XXI'},
    {value: 'XXII', label: 'XXII'},
];

function ArchetypesArchetypes() {
    const [archetypes, setArchetypes] = useState(archetypesData);
    const [selectedArchetypesFilter, setSelectedArchetypesFilter] =
        useState('TUTTI');

    const handleArchetypesFilterChange = (selectedArchetypesFilter) => {
        setSelectedArchetypesFilter(selectedArchetypesFilter);
    };

    const filteredArchetypes = useMemo(() => {
        return selectedArchetypesFilter === 'TUTTI'
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
                        <span className="underline">Torna indietro</span>
                    </Link>
                    <h1 className="archetypes__title title-1">22 ARCHETYPES</h1>

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
                            placeholder="TUTTI"
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
                                                Energia:
                                                <span className="archetypes__item-span">
                                                    {archetype.energy}
                                                </span>
                                            </p>
                                            <p className="archetypes__item-positive">
                                                Manifestazione positiva:
                                                <span className="archetypes__item-span">
                                                    {archetype.positive}
                                                </span>
                                            </p>
                                            <p className="archetypes__item-negative">
                                                Manifestazione negativa:
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
                                                    Più dettagli
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
