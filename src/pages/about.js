import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import AboutContainer from "../containers/about";
import BrandContainer from "../containers/global/brand/index";
import FunFactContainer from "../containers/global/funfact";
import IconBoxContainer from "../containers/global/icon-box";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import TestimonialReverse from "../containers/global/testimonial-reverse";
import ServiceListContainer from "../containers/service/service-list";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const AboutPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="InspireByte – About" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="About us"
                        excerpt="Based in Dehradun, we're a dynamic software solutions firm dedicated to innovating and tailoring solutions for businesses. Our tech artisans specialize in system development, business automations, API integrations, and software development. We collaborate closely with clients, delivering reliable, secure, and scalable solutions to drive digital excellence. Let's transform your business together — contact us today!"
                        image="./images/banner/1.png"
                    />
                    <IconBoxContainer classOption="section-pt" />
                    <BrandContainer />
                    <FunFactContainer classOption="mt-0 mt-lg-0" />
                    <AboutContainer />
                    <ServiceListContainer />
                    <TestimonialReverse />

                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
