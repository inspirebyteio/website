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
                <SEO
                    title="InspireByte – About Us | Custom Software & Automation Experts"
                    description="Learn about InspireByte, a Dehradun-based software company specializing in business automation, system development, CRM integration, and scalable digital solutions. We're committed to driving innovation and transforming businesses with technology."
                    keywords="About InspireByte, Dehradun software company, business automation experts, system development, CRM integration, IT solutions firm, InspireByte team, API integration services"
                    image="/images/about/inspirebyte-about.webp"
                    author="InspireByte"
                    ogTitle="About InspireByte | Software Solutions & Automation Experts"
                    ogDescription="Discover the mission, team, and services behind InspireByte – your trusted partner in building reliable, scalable, and innovative digital solutions."
                />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="About us"
                        excerpt="Inspirebyte is a Dehradun-based software
                                development company committed to building
                                tailored digital solutions for modern
                                businesses. As a trusted IT service provider in
                                Dehradun, we specialize in &nbsp;
                                <strong>custom software development</strong>
                                ,&nbsp;
                                <strong>business process automation</strong>,
                                &nbsp;
                                <strong>CRM implementation</strong>, and&nbsp;
                                <strong>API integration</strong> for small and
                                mid-sized enterprises.
                                <br><br>
                                With a team of skilled developers and automation
                                experts, we collaborate closely with our clients
                                to understand their unique needs and deliver
                                secure, scalable, and future-ready systems.
                                Whether you're a startup or an
                                established business, our goal is to help you
                                streamline operations, reduce manual work, and
                                accelerate growth through intelligent software
                                systems.
                                <br><br>
                                Serving clients across India and internationally
                                , we bring a human touch to technology by
                                combining deep technical expertise with
                                transparent communication and a results-driven
                                approach.
                                <br><br>
                                <strong>
                                    Ready to transform your business?
                                </strong>
                                &nbsp;
                                <a href='/contact'>Contact Inspirebyte</a> today
                                and discover how our solutions can work for you."
                        image="images/about/inspirebyte-about.webp"
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
