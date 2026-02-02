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
                            {service.price && (
                                <>
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
                                        {service.price} евро
                                    </span>
                                </>
                            )}
                        </div>

                        <div className="services-list__info">
                            <div className="services-list__text">
                                {service.info}
                                <img
                                    className="services-list__info-img"
                                    src={`./images/services/${service.img}.jpg`}
                                    alt="фото услуги"
                                    loading="lazy"
                                />
                            </div>

                            {openCard !== index && (
                                <button
                                    className="services-list__button underline"
                                    onClick={() => handleOpenCard(index)}
                                >
                                    Читать полностью
                                </button>
                            )}

                            {openCard === index && (
                                <button
                                    className="services-list__button underline"
                                    onClick={() => handleOpenCard(index)}
                                >
                                    Свернуть
                                </button>
                            )}

                            <Button
                                text="Записаться"
                                className="services-list__info-button"
                                onClick={() => {
                                    // dispatch(setOpenContactForm(true))
                                }}
                            />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ServicesList;
