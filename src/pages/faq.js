import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import AccordionContainer from "../containers/accordion";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const FaqPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO
                    title="InspireByte – Frequently Asked Questions (FAQ)"
                    description="Find answers to common questions about InspireByte’s IT services, software development, business automation, and integration solutions. Get the clarity you need before partnering with us."
                    keywords="InspireByte FAQ, IT services FAQ, business automation questions, software development queries, CRM integration help, InspireByte support"
                    image="/images/faq/inspirebyte-faqs.png"
                    author="InspireByte"
                    ogTitle="InspireByte – FAQ | Answers to Your IT & Automation Questions"
                    ogDescription="Have questions about our services? Explore InspireByte’s FAQ section to get helpful answers about our IT consulting, automation tools, and software solutions."
                />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="FAQ"
                        excerpt="We understand that you may have some questions about our IT service and consultancy firm. <br />
                        To assist you, Here are some FAQ's, but do feel free to Contact us and get consultation."
                        image="./images/faq/inspirebyte-faqs.png"
                    />
                    <AccordionContainer />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default FaqPage;
