import React from 'react';

import GoToPage from '../../components/GoToPage/GoToPage';
import MainAbout from '../../components/MainAbout/MainAbout';
import MainArchetypes from '../../components/MainArchetypes/MainArchetypes';
import MainBlog from '../../components/MainBlog/MainBlog';
import MainInfo from '../../components/MainInfo/MainInfo';
import MainMenu from '../../components/MainMenu/MainMenu';
import MainServices from '../../components/MainServices/MainServices';
import MainStory from '../../components/MainStory/MainStory';
import WaterEffectWrapper from '../../components/WatterEffectWrapper/WaterEffectWrapper';
import './styles.scss';
const Home = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);

        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({behavior: 'smooth'});
                }, 300);
            }
        }
    }, []);

    return (
        <>
            <WaterEffectWrapper>
                <MainInfo />
            </WaterEffectWrapper>
            <GoToPage></GoToPage>
            <WaterEffectWrapper>
                <MainMenu />
            </WaterEffectWrapper>

            <WaterEffectWrapper>
                <MainAbout />
            </WaterEffectWrapper>
            <WaterEffectWrapper>
                <MainServices />
            </WaterEffectWrapper>
            <WaterEffectWrapper>
                <MainStory />
            </WaterEffectWrapper>
            <WaterEffectWrapper>
                <MainArchetypes />
            </WaterEffectWrapper>
            <WaterEffectWrapper>
                <MainBlog />
            </WaterEffectWrapper>
        </>
    );
};
export default Home;
