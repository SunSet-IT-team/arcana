import React, {useEffect, useRef} from 'react';

import Menu from '../MenuList/MenuList';

import TitleAnimation from '../../hooks/titleAnimation';
import MenuAnimation from '../../hooks/menuAnimation';

import './styles.scss';

function MainMenu() {
    return (
        <section className="menu">
            <div className="container">
                <div className="menu__wrapper">
                    <TitleAnimation
                        tag="h2"
                        className="menu__title title title-2 title-animation"
                    >
                        <span>MENU</span>
                    </TitleAnimation>
                    <div className="menu__box">
                        <Menu />
                    </div>
                </div>
            </div>
            <MenuAnimation />
        </section>
    );
}

export default MainMenu;
