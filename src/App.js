import React, {Suspense, lazy} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';

import Preloader from './assets/components/Preloader/Preloader';
import AnimatedCursor from './assets/feature/AnimatedCursor';

import Header from './assets/components/Header/Header';
import Footer from './assets/components/Footer/Footer';
import FooterWithWaterEffect from './assets/components/Footer/FooterWithWaterEffect';

const Home = lazy(() => import('./assets/pages/Home/Home'));

const Story = lazy(() => import('./assets/pages/Story/Story'));
const Storys = lazy(() => import('./assets/pages/Storys/Storys'));

const Archetype = lazy(() => import('./assets/pages/Archetype/Archetype'));
const Archetypes = lazy(() => import('./assets/pages/Archetypes/Archetypes'));

const Blog = lazy(() => import('./assets/pages/Blog/Blog'));
const Calculator = lazy(() => import('./assets/pages/Calculator/Calculator'));
const MonthCalculator = lazy(
    () => import('./assets/pages/MonthCalculator/MonthCalculator')
);
const MonthResults = lazy(
    () => import('./assets/pages/MonthResults/MonthResults')
);
const PartnerCalculator = lazy(
    () => import('./assets/pages/PartnerCalculator/PartnerCalculator')
);
const PartnerResults = lazy(
    () => import('./assets/pages/PartnerResults/PartnerResults')
);
const Results = lazy(() => import('./assets/pages/Results/Results'));
const Services = lazy(() => import('./assets/pages/Services/Services'));
const BlogArticle = lazy(
    () => import('./assets/pages/BlogArticle/BlogArticle')
);

const SuccessSend = lazy(
    () => import('./assets/components/SuccessSend/SuccessSend')
);

function App() {
    const location = useLocation();

    return (
        <div className="App">
            <AnimatedCursor />
            <Header />
            <main className="main">
                <Suspense fallback={<Preloader />}>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/storys" element={<Storys />}></Route>
                        <Route
                            path="/archetypes"
                            element={<Archetypes />}
                        ></Route>
                        <Route path="/blog" element={<Blog />}></Route>
                        <Route path="/services" element={<Services />}></Route>
                        <Route
                            path="/calculator"
                            element={<Calculator />}
                        ></Route>
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
                        <Route
                            path="/blog/:slug"
                            element={<BlogArticle />}
                        ></Route>
                        <Route
                            path="/success-send"
                            element={<SuccessSend />}
                        ></Route>
                    </Routes>
                </Suspense>
            </main>

            {location.pathname === '/' ? <FooterWithWaterEffect /> : <Footer />}
        </div>
    );
}

export default App;
