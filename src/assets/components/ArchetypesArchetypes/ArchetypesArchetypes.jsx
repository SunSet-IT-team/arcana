import {useEffect, useMemo, useState} from 'react';

import './styles.scss';

import {Link} from 'react-router-dom';

import SelectLabel from '../../components/Select/Select';
import SliderMobile from '../Slider/SliderMobile';

const archetypesData = [
    {
        title: 'IL MAGO',
        number: 'I',
        energy: 'MASCHILE',
        positive: 'PAROLA',
        negative: 'CHIACCHERE INUTILI',
    },
    {
        title: 'LA PAPESSA',
        number: 'II',
        energy: 'FEMMINILE',
        positive: 'TUTELA',
        negative: 'IPERPROTEZIONE',
    },
    {
        title: "L'IMPERATRICE",
        number: 'III',
        energy: 'FEMMINILE',
        positive: 'BELLEZZA',
        negative: 'INFERTILITA’',
    },
    {
        title: "L'IMPERATORE",
        number: 'IV',
        energy: 'MASCHILE',
        positive: 'POTERE',
        negative: 'DISPOTISMO',
    },
    {
        title: 'IL PAPA',
        number: 'V',
        energy: 'MASCHILE',
        positive: 'AUTORITA’',
        negative: 'STUPIDITÀ',
    },
    {
        title: "L'INNAMORATO",
        number: 'VI',
        energy: 'NEUTRALE',
        positive: 'SCELTA',
        negative: 'DISTRUZIONE DELLA RELAZIONE',
    },
    {
        title: 'IL CARRO',
        number: 'VII',
        energy: 'MASCHILE',
        positive: 'BERSAGLIO',
        negative: 'ASSENZA DI SCOPO',
    },
    {
        title: 'LA GIUSTIZIA',
        number: 'VIII',
        energy: 'FEMMINILE',
        positive: 'REGOLE',
        negative: 'INIQUITÀ',
    },
    {
        title: "L'EREMITA",
        number: 'IX',
        energy: 'NEUTRALE',
        positive: 'SAGGEZZA',
        negative: 'IL CAMMINO DI QUALCUN ALTRO',
    },
    {
        title: 'LA RUOTA DELLA FORTUNA',
        number: 'X',
        energy: 'NEUTRALE',
        positive: 'PROPRI BISOGNI',
        negative: 'DEBITI',
    },
    {
        title: 'LA FORZA',
        number: 'XI',
        energy: 'FEMMINILE',
        positive: 'GESTA EROICHE',
        negative: 'VIOLENZA',
    },
    {
        title: "L'APPESO",
        number: 'XII',
        energy: 'NEUTRALE',
        positive: 'SACRIFICIO VOLONTARIO',
        negative: 'VITTIMA',
    },
    {
        title: 'LA MORTE',
        number: 'XIII',
        energy: 'FEMMINILE',
        positive: 'CAMBIAMENTI',
        negative: 'STAGNAZIONE',
    },
    {
        title: 'LA TEMPERANZA',
        number: 'XIV',
        energy: 'NEUTRALE',
        positive: 'EQUILIBRIO',
        negative: 'ESTREMI',
    },
    {
        title: 'IL DIAVOLO',
        number: 'XV',
        energy: 'MASCHILE',
        positive: 'PIACERE',
        negative: 'DIPENDENZE',
    },
    {
        title: 'LA TORRE',
        number: 'XVI',
        energy: 'MASCHILE',
        positive: 'COSTRUZIONE',
        negative: 'DISTRUZIONE',
    },
    {
        title: 'LA STELLA',
        number: 'XVII',
        energy: 'FEMMINILE',
        positive: 'AMICIZIA',
        negative: 'TRADIMENTO',
    },
    {
        title: 'LA LUNA',
        number: 'XVIII',
        energy: 'FEMMINILE',
        positive: 'INCONSCIO',
        negative: 'PAURE',
    },
    {
        title: 'IL SOLE',
        number: 'XIX',
        energy: 'FEMMINILE',
        positive: 'COSCENZA',
        negative: 'INCENERIMENTO',
    },
    {
        title: 'IL GIUDIZIO',
        number: 'XX',
        energy: 'NEUTRALE',
        positive: 'UNIONE SU VALORI COMUNI',
        negative: 'MANCANZA DI VALORI PROPRI',
    },
    {
        title: 'IL MONDO',
        number: 'XXI',
        energy: 'NEUTRALE',
        positive: 'ILLIMITATEZZA',
        negative: 'INVASIONE DEI CONFINI',
    },
    {
        title: 'IL MATTO',
        number: 'XXII',
        energy: 'NEUTRALE',
        positive: 'GIOCO',
        negative: 'IRRESPONSABILITÀ',
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
