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
                <SEO title="InspireByte – Faq" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="FAQ"
                        excerpt="We understand that you may have some questions about our IT service and consultancy firm. <br />
                        To assist you, Here are some FAQ's, but do feel free to Contact us and get consultation."
                        image="./images/faq/1.png"
                    />
                    <AccordionContainer />
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default FaqPage;
