import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';

import Preloader from './assets/components/Preloader/Preloader';
import AnimatedCursor from './assets/feature/AnimatedCursor';

import Footer from './assets/components/Footer/Footer';
import Header from './assets/components/Header/Header';

import GUI from './assets/pages/GUI/GUI';
import Home from './assets/pages/Home/Home';
import Story from './assets/pages/Story/Story';
import Storys from './assets/pages/Storys/Storys';

import Archetype from './assets/pages/Archetype/Archetype';
import Archetypes from './assets/pages/Archetypes/Archetypes';

import Blog from './assets/pages/Blog/Blog';
import Calculator from './assets/pages/Calculator/Calculator';
import MonthCalculator from './assets/pages/MonthCalculator/MonthCalculator';
import MonthResults from './assets/pages/MonthResults/MonthResults';
import PartnerCalculator from './assets/pages/PartnerCalculator/PartnerCalculator';
import PartnerResults from './assets/pages/PartnerResults/PartnerResults';
import Results from './assets/pages/Results/Results';
import Services from './assets/pages/Services/Services';

import FooterWithWaterEffect from './assets/components/Footer/FooterWithWaterEffect';
import SuccessSend from './assets/components/SuccessSend/SuccessSend';
import BlogArticle from './assets/pages/BlogArticle/BlogArticle';

function App() {
    const location = useLocation();

    return (
        <div className="App">
            {location.pathname !== '/success-send' && <Preloader />}
            <AnimatedCursor />
            <Header />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/GUI" element={<GUI />}></Route>
                    <Route path="/storys" element={<Storys />}></Route>
                    <Route path="/archetypes" element={<Archetypes />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/services" element={<Services />}></Route>
                    <Route path="/calculator" element={<Calculator />}></Route>
                    <Route
                        path="/partner-calculator"
                        element={<PartnerCalculator />}
                    ></Route>
                    <Route
                        path="/month-calculator"
                        element={<MonthCalculator />}
                    ></Route>
                    <Route
                        path="/month-results"
                        element={<MonthResults />}
                    ></Route>
                    <Route path="/results" element={<Results />}></Route>
                    <Route
                        path="/partner-results"
                        element={<PartnerResults />}
                    ></Route>
                    <Route path="/archetypes/:id" element={<Archetype />} />
                    <Route path="/storys/:id" element={<Story />}></Route>
                    <Route path="/blog/:id" element={<BlogArticle />}></Route>
                    <Route
                        path="/success-send"
                        element={<SuccessSend />}
                    ></Route>
                </Routes>
            </main>

            {location.pathname === '/' ? <FooterWithWaterEffect /> : <Footer />}
        </div>
    );
}

export default App;
