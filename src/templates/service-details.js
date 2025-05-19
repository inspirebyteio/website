/* prettier-ignore */
import React from "react";
import PropTypes from "prop-types";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import ServiceData from "../data/service.json";
import ServiceDetailsContainer from "../containers/service/service-details";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const ServiceDetails = ({
    match: {
        params: { link },
    },
}) => {
    const data = ServiceData.find((service) => service.link === link);

    if (!data) {
        return (
            <Layout>
                <div className="wrapper text-center py-5">
                    <h2>Service Not Found</h2>
                    <p>
                        The service you`&apos;`re looking for doesn`&apos;`t
                        exist.
                    </p>
                </div>
            </Layout>
        );
    }

    return (
        <React.Fragment>
            <Layout>
                <SEO
                    title={`InspireByte – ${data.title}`}
                    description={
                        data.excerpt ||
                        "Explore the detailed service offerings of InspireByte."
                    }
                    keywords={`InspireByte, ${data.title}, ${data.excerpt}`}
                    image="/images/service/2.png"
                    author="InspireByte"
                    ogTitle={`InspireByte – ${data.title}`}
                    ogDescription={data.excerpt}
                />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title={data.title}
                        excerpt={data.excerpt}
                        image="/images/service/inspirebyte-services.png"
                    />
                    <ServiceDetailsContainer data={data} />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

ServiceDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            link: PropTypes.string,
        }),
    }),
};

export default ServiceDetails;
