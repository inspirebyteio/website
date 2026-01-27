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
                        excerpt="At Inspirebyte, we offer a comprehensive range of IT and software development services designed to unlock the full potential of your business. From scalable web applications to intelligent workflow automation, we specialize in delivering custom technology solutions that drive performance and digital growth.
                        <br><br>
                        Our core service areas include <strong>Full Stack Software Development</strong>, <strong>Business Process Automation</strong>, <strong>API Integration and Development</strong>, <strong>CRM Solutions</strong>, <strong>IT Consulting</strong>, and <strong>Data & Cloud Solutions</strong>. Whether you need to modernize your systems or build from scratch, our team of experts is here to architect reliable, secure, and scalable platforms tailored to your unique goals.
                        <br><br>
                        We understand that each business is different, which is why we focus on personalization — not one-size-fits-all. Our agile process ensures that we collaborate closely with you at every step to deliver practical, cost-effective, and high-performing solutions.
                        <br><br>
                        From <a href='/services/full-stack-development'>custom software</a> and <a href='/services/business-process-automation'>automation tools</a> to <a href='/services/crm-solutions'>CRM integration</a> and <a href='/services/api-integration'>seamless API connectivity</a>, we build the tech stack that fuels your business.
                        <br><br>
                        <strong>Partner with Inspirebyte to transform your business today</strong> and embark on a journey of innovation, efficiency, and digital excellence."
                        image="images/service/inspirebyte-services.png"
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
