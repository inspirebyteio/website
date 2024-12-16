import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import PageBanner from "../containers/global/page-banner";
import TestimonialContainer from "../containers/global/testimonial";
import Projects from "../containers/projects";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const ProjectsPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="InspireByte – Projects" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Projects"
                        excerpt="Explore a showcase of our expertise through 
                        some of our past projects, where we've delivered custom software 
                        solutions, advanced business automation, and IT services
                        tailored to diverse needs. Each project reflects our 
                        commitment to solving real-world challenges with 
                        innovative technology, efficient processes, and 
                        impactful results. From developing robust backend 
                        systems to creating seamless integrations, our work 
                        highlights the depth and versatility of our solutions.
                        "
                        image="./images/team/5.png"
                    />
                    <Projects />
                    <TestimonialContainer />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ProjectsPage;
