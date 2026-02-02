import React from 'react';

import TitleAnimation from '../../hooks/titleAnimation';

import './styles.scss';

import Link from '../../components/Link/Link';
import ServicesList from '../ServicesList/ServicesList';
import {servicesData} from '../ServicesServices/ServicesServices';

function MainServices() {
    return (
        <section className="services-demo">
            <div className="container">
                <div className="services-demo__wrapper">
                    <TitleAnimation
                        tag="h2"
                        className="services-demo__title title title-2 title-animation"
                    >
                        <span>КОНСУЛЬТАЦИИ</span>
                    </TitleAnimation>

                    <ServicesList services={servicesData.slice(0, 3)} />
                    <Link
                        text="ПОЛНЫЙ СПИСОК УСЛУГ"
                        className="services-demo__link link--black"
                        path="services"
                    />
                </div>
            </div>
        </section>
    );
}

export default MainServices;
