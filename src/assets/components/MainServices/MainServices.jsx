import React from 'react';

import TitleAnimation from '../../hooks/titleAnimation';

import './styles.scss';

import Link from '../../components/Link/Link';
import ServicesList from '../ServicesList/ServicesList';

function MainServices() {
    const servicesData = [
        {
            name: 'PERSONALITÀ',
            time: '90 – 120 min',
            info: "Se sei stanco di passare da uno psicologo all'altro e di investire inutilmente in corsi di crescita personale, e vuoi prenderecoscienza dei tuoi pattern comportamentali e delle tue convinzioni per liberarti da tutto ciò che ostacola la tua espansione personalee il progresso verso gli obiettivi. Durante la consulenza saràpossibile conoscere sé stessi e comprendere la propria unicità.",
            img: '1',
        },
        {
            name: 'RELAZIONI DI COPPIA',
            time: '90 – 120 min',
            info: "Se sogni una relazione armoniosa costruita sulla comprensione reciproca tra i partner, sul rispetto dei propri bisogni e delle aspirazioni per le quali esistono queste relazioni. Comprendere cosa vi unisce e cosa vi divide, come superare l'incomprensione esistente attraverso una profonda consapevolezza dei punti di forza...Se sogni una relazione armoniosa costruita sulla comprensione reciproca tra i partner, sul rispetto dei propri bisogni e delle aspirazioni per le quali esistono queste relazioni. Comprendere cosa vi unisce e cosa vi divide, come superare l'incomprensione esistente attraverso una profonda consapevolezza dei punti di forza...",
            img: '2',
        },
        {
            name: 'RAPPORTI SOCIALI',
            time: '60 – 90 min',
            info: 'Come “leggere” gli altri come un libro aperto. Capire perché sorgono conflitti, dove sono le aree problematiche e come comprendere i modelli di comportamento di genitori, capo, colleghi, amici al fine di migliorare la comprensione reciproca e avere relazioni sincere e armoniose.',
            img: '3',
        },
    ];

    return (
        <section className="services-demo">
            <div className="container">
                <div className="services-demo__wrapper">
                    <TitleAnimation
                        tag="h2"
                        className="services-demo__title title title-2 title-animation"
                    >
                        <span>CONSULENZE</span>
                    </TitleAnimation>

                    <ServicesList services={servicesData} />
                    <Link
                        text="VEDI L'ELENCO COMPLETO DELLE CONSULTAZIONI"
                        className="services-demo__link link--black"
                        path="services"
                    />
                </div>
            </div>
        </section>
    );
}

export default MainServices;
