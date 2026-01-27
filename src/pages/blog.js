import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import PageBanner from "../containers/global/page-banner";
import BlogList from "../containers/blog";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const BlogPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO
                    title="InspireByte Blog | Tech Insights & Automation Trends"
                    description="Stay updated with the latest in AI, business automation, and custom software development. Expert insights from the InspireByte team."
                    keywords="InspireByte blog, tech blog, AI insights, automation trends, software development tips"
                    author="InspireByte"
                />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Our Blog"
                        excerpt="Knowledge is the bridge between imagination and innovation. Explore our latest thoughts on technology, business automation, and scaling digital success."
                        image="images/service/inspirebyte-services.png"
                    />
                    <BlogList />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default BlogPage;
