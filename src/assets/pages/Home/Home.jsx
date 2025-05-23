import {useEffect} from 'react';

import GoToPage from '../../components/GoToPage/GoToPage';
import MainAbout from '../../components/MainAbout/MainAbout';
import MainArchetypes from '../../components/MainArchetypes/MainArchetypes';
import MainBlog from '../../components/MainBlog/MainBlog';
import MainInfo from '../../components/MainInfo/MainInfo';
import MainMenu from '../../components/MainMenu/MainMenu';
import MainServices from '../../components/MainServices/MainServices';
import MainStory from '../../components/MainStory/MainStory';

import './styles.scss';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const hash = window.location.hash;
        if (!hash) return;

        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (!element) return;

        const timeout = setTimeout(() => {
            element.scrollIntoView({behavior: 'smooth'});
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <MainInfo />
            <GoToPage></GoToPage>
            <MainMenu />
            <MainAbout />
            <MainServices />
            <MainStory />
            <MainArchetypes />
            <MainBlog />
        </>
    );
};
export default Home;
