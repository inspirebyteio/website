import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import BrandContainer from "../containers/global/brand/index";
import FunFactContainer from "../containers/global/funfact";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import TeamContainer from "../containers/global/team";
import TestimonialReverse from "../containers/global/testimonial-reverse";
import ServiceListContainer from "../containers/service/service-list";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const ServicePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="InspireByte – Service" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Our Services"
                        excerpt="At Inspirebyte, we offer a comprehensive range of services aimed at unlocking the full potential of your business. From innovative Software Development and Business Process Automation to data solutions and CRM integration, our expert team is committed to maximizing efficiency, optimizing performance, and driving growth. With a focus on innovation, reliability, and client satisfaction, we deliver tailored solutions that ignite innovation and empower your business to achieve excellence in the digital landscape. Partner with Inspirebyte to transform your business today and embark on a journey of digital success."
                        image="./images/service/2.png"
                    />
                    <BrandContainer />
                    <ServiceListContainer />
                    <TestimonialReverse />
                    <FunFactContainer classOption="mt-0 mt-lg-0" />
                    <TeamContainer classOption="null" />

                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ServicePage;
