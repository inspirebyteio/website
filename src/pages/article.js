import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import PageBanner from "../containers/global/page-banner";
import ArticleList from "../containers/article";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const ArticlePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO
                    title="InspireByte Articles | Tech Insights & Automation Trends"
                    description="Stay updated with the latest in AI, business automation, and custom software development. Expert insights from the InspireByte team."
                    keywords="InspireByte articles, tech articles, AI insights, automation trends, software development tips"
                    author="InspireByte"
                />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Our Articles"
                        excerpt="Knowledge is the bridge between imagination and innovation. Explore our latest thoughts on technology, business automation, and scaling digital success."
                        image="images/service/inspirebyte-services.png"
                    />
                    <ArticleList />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ArticlePage;
