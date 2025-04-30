import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import NavScrollTop from "./components/nav-scroll-top";
import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import ServicePage from "./pages/service";
import ServiceDetails from "./templates/service-details";
import TeamPage from "./pages/team";
import ProjectsPage from "./pages/projects";
import FaqPage from "./pages/faq";
import ContactPage from "./pages/contact";

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
                    path={`${process.env.PUBLIC_URL + "/service-details/:id"}`}
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
            </Switch>
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
