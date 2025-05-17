import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setOpenContactForm} from '../../../redux/slices/contactFormSlice';

import Button from '../../components/Button/Button';
import './styles.scss';

function ServicesList({services}) {
    const dispatch = useDispatch();
    const [openCard, setOpenCard] = useState(null);

    const handleOpenCard = (index) => {
        setOpenCard(openCard === index ? null : index);
    };

    return (
        <ul className="services-list__list">
            {services.map((service, index) => (
                <li className="services-list__item" key={index}>
                    <div
                        className={`services-list__item-wrapper ${
                            openCard === index
                                ? 'services-list__item-wrapper--open'
                                : ''
                        }`}
                    >
                        <h2 className="services-list__name">{service.name}</h2>

                        <div className="services-list__box">
                            <span className="services-list__time">
                                {service.time}
                            </span>
                            <span className="services-list__line services-list__line--empty">
                                ⠀
                            </span>
                            <span className="services-list__line services-list__line--empty">
                                ⠀
                            </span>
                            <span className="services-list__price">
                                {service.price} euro
                            </span>
                        </div>

                        <div className="services-list__info">
                            <div className="services-list__text">
                                {service.info}
                            </div>

                            {openCard !== index && (
                                <button
                                    className="services-list__button underline"
                                    onClick={() => handleOpenCard(index)}
                                >
                                    Leggi tutto
                                </button>
                            )}

                            {openCard === index && (
                                <button
                                    className="services-list__button underline"
                                    onClick={() => handleOpenCard(index)}
                                >
                                    Chiudi
                                </button>
                            )}

                            <Button
                                text="Iscriviti"
                                className="services-list__info-button"
                                onClick={() =>
                                    dispatch(setOpenContactForm(true))
                                }
                            />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ServicesList;
