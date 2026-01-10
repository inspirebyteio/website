import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, lazy, Suspense } from "react";
import NavScrollTop from "./components/nav-scroll-top";

const HomePage = lazy(() => import("./pages/index"));
const AboutPage = lazy(() => import("./pages/about"));
const ServicePage = lazy(() => import("./pages/service"));
const ServiceDetails = lazy(() => import("./templates/service-details"));
const TeamPage = lazy(() => import("./pages/team"));
const ProjectsPage = lazy(() => import("./pages/projects"));
const PrivacyPage = lazy(() => import("./pages/privacy"));
const FaqPage = lazy(() => import("./pages/faq"));
const ContactPage = lazy(() => import("./pages/contact"));

import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import "./assets/css/vendor/metropolis.css";
import "./assets/css/vendor/icofont.min.css";
import "./assets/css/vendor/font-awesome.css";
import "./assets/css/vendor/material-design-iconic.min.css";
import "./assets/css/plugins/animate.min.css";
import "./assets/scss/style.scss";

const GA_MEASUREMENT_ID = "G-D7Z8EBL8Q9";

// Track page views
const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
        if (window.gtag) {
            window.gtag("config", GA_MEASUREMENT_ID, {
                page_path: location.pathname,
            });
        }
    }, [location]);
};

// Wrap routing and tracking logic inside a component
const RoutesWithTracking = () => {
    usePageTracking();

    return (
        <NavScrollTop>
            <Suspense fallback={<div className="preloader"><div className="loader"></div></div>}>
                <Switch>
                    <Route
                        path={`${process.env.PUBLIC_URL + "/"}`}
                        exact
                        component={HomePage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/about"}`}
                        component={AboutPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/service"}`}
                        component={ServicePage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/service-details/:param"}`}
                        component={ServiceDetails}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/team"}`}
                        component={TeamPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/projects"}`}
                        component={ProjectsPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/faq"}`}
                        component={FaqPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/contact"}`}
                        component={ContactPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/privacy"}`}
                        component={PrivacyPage}
                    />
                </Switch>
            </Suspense>
        </NavScrollTop>
    );
};

const App = () => {
    return (
        <>
            <Helmet>
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></script>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_MEASUREMENT_ID}');
                    `}
                </script>
            </Helmet>
            <Router>
                <RoutesWithTracking />
            </Router>
        </>
    );
};

export default App;
