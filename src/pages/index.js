import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import BrandContainer from "../containers/global/brand/index";
import FunFactContainer from "../containers/global/funfact";
import IconBoxContainer from "../containers/global/icon-box";
import NewsletterArea from "../containers/global/newsletter";
import TeamContainer from "../containers/global/team";
import TestimonialContainer from "../containers/global/testimonial";
import HomeAboutContainer from "../containers/home/about";
import HomeBlog from "../containers/home/blog";
import IntroContainer from "../containers/home/intro";
import ServiceListContainer from "../containers/service/service-list";
import ContactContainer from "../containers/contact";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const HomePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO
                    title="InspireByte | Innovate, Integrate, Elevate"
                    description="InspireByte delivers custom software solutions, business automation, and IT services tailored to transform your operations. We help businesses innovate, integrate, and elevate with smart, scalable technology."
                    keywords="InspireByte, custom software development, business automation, IT services, workflow automation, software solutions, digital transformation, InspireByte India, technology consulting"
                    author="InspireByte"
                    ogTitle="InspireByte | Innovate, Integrate, Elevate"
                    ogDescription="Empowering businesses with cutting-edge software solutions, automation, and technology consulting. Discover how InspireByte can drive your digital success."
                />
                <div className="wrapper">
                    <Header />
                    <IntroContainer />
                    <BrandContainer />
                    <IconBoxContainer classOption="section-pb" />
                    <FunFactContainer classOption="mt-10 mt-lg-0" />
                    <HomeAboutContainer />
                    <ServiceListContainer />
                    <TestimonialContainer />

                    <TeamContainer classOption="section-pb" />
                    <ContactContainer />
                    {/*<HomeBlog />*/}
                    {/*<NewsletterArea />*/}
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;
