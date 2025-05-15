import React from 'react';

import './styles.scss';
import '../ArchetypesArchetypes/styles.scss';

import Slider from '../Slider/Slider';
import TitleAnimation from '../../hooks/titleAnimation';
// import SliderMobile from '../Slider/SliderMobile';

function MainArchetypes() {
    return (
        <section className="archetypes-demo">
            <div className="container">
                <div className="archetypes-demo__wrapper">
                    <TitleAnimation
                        tag="h2"
                        className="archetypes-demo__title title title-animation"
                    >
                        <span>22 ARCHETYPES</span>
                    </TitleAnimation>
                    <Slider />
                </div>
            </div>
        </section>
    );
}

export default MainArchetypes;
