import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import FunFactContainer from "../containers/global/funfact";
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
                <SEO
                    title="InspireByte – Expert Software Solutions & Business Process Automation"
                    description="Discover InspireByte's full range of services including custom software development, business process automation, CRM integrations, and data solutions. We deliver innovative, scalable, and efficient tech solutions that transform operations and fuel business growth."
                    keywords="InspireByte services, custom software development, business process automation, CRM integration, IT consulting, data solutions, workflow automation, InspireByte India"
                    image="/images/service/inspirebyte-services.png"
                    author="InspireByte"
                    ogTitle="Expert Software Solutions & Business Automation | InspireByte"
                    ogDescription="From software development to CRM integration and process automation, InspireByte helps businesses grow with scalable, tailor-made tech solutions."
                />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Our Services"
                        excerpt="At Inspirebyte, we offer a comprehensive range of services aimed at unlocking the full potential of your business. From innovative Software Development and Business Process Automation to data solutions and CRM integration, our expert team is committed to maximizing efficiency, optimizing performance, and driving growth. With a focus on innovation, reliability, and client satisfaction, we deliver tailored solutions that ignite innovation and empower your business to achieve excellence in the digital landscape. Partner with Inspirebyte to transform your business today and embark on a journey of digital success."
                        image="./images/service/inspirebyte-services.png"
                    />
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
