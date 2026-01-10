import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import ContactContainer from "../containers/contact";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const ContactPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO
                    title="InspireByte – Contact Us for Software Development in Dehradun"
                    description="Get in touch with InspireByte for customized software solutions, business automation, and IT services. Our team is ready to help transform your business with innovative technology and expert collaboration."
                    keywords="InspireByte contact, business automation services, custom software development, IT services, technology consulting, business solutions"
                    image="/images/contact/inspirebyte-contact.png"
                    author="InspireByte"
                    ogTitle="Contact Us - InspireByte Dehradun"
                    ogDescription="Reach out to InspireByte to discover how our team can help your business achieve transformative results through tailored technology solutions and expert support."
                />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Contact us"
                        excerpt="Reach Out to Us and Ignite Your Business's Transformation. <br />
                        We would love to hear from you and discuss how Inspirebyte can help drive your business to new heights. Our dedicated team of experts is ready to collaborate, innovate, and deliver tailored solutions that propel your success in the digital era. Contact us now to start your journey towards transformative results."
                        image="./images/contact/inspirebyte-contact.png"
                    />
                    <ContactContainer />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ContactPage;
