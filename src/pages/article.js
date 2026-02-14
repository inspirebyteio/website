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
                    description="Thoughts from building, shipping, and maintaining software that has to hold up over time.
Expect practical breakdowns on systems, automation, and product thinking."
                    keywords="InspireByte articles, tech articles, AI insights, automation trends, software development"
                    author="InspireByte"
                />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Our Articles"
                        excerpt="Thoughts from building, shipping, and maintaining software that has to hold up over time.
Expect practical breakdowns on systems, automation, and product thinking."
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
