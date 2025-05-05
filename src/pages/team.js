import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import TeampPageContainer from "../containers/team-page-container";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const TeamPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO
                    title="InspireByte – Our Team"
                    description="Meet the InspireByte team — a group of skilled professionals dedicated to delivering innovative software solutions, business automation, and IT services that drive business growth and success."
                    keywords="InspireByte team, software experts, business automation specialists, IT service professionals, custom software development team, InspireByte professionals"
                    image="/images/team/inspirebyte-team.webp"
                    author="InspireByte"
                    ogTitle="Meet Our Team – InspireByte"
                    ogDescription="Discover the talented professionals behind InspireByte's success. Our team combines innovation, expertise, and a passion for driving transformative results for businesses."
                />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Our Team"
                        excerpt="Our exceptional team at Inspirebyte consists of highly skilled professionals who collaborate to create innovative software solutions. With diverse expertise and a commitment to excellence, we drive business growth and deliver exceptional results for our clients."
                        image="./images/team/inspirebyte-team.webp"
                    />
                    <TeampPageContainer />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default TeamPage;
