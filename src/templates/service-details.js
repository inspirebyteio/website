import React from "react";
import { useParams } from "react-router-dom";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import ServiceData from "../data/service.json";
import ServiceDetailsContainer from "../containers/service/service-details";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const ServiceDetails = () => {
    const { param } = useParams();

    const data =
        ServiceData.find((service) => service.link === param) ||
        ServiceData.find((service) => String(service.id) === String(param));

    if (!data) {
        return (
            <Layout>
                <div className="wrapper text-center py-5">
                    <h2>Service Not Found</h2>
                    <p>
                        The service you&apos;re looking for doesn&apos;t exist.
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
                    keywords={`InspireByte, ${data.title}, ${data.excerpt || ""}
                    `}
                    image="/images/service/3.png"
                    author="InspireByte"
                    ogTitle={`InspireByte – ${data.title}`}
                    ogDescription={data.excerpt}
                />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title={data.title}
                        excerpt={data.excerpt}
                        image={`images/service/inspirebyte-services.png`}
                    />
                    <ServiceDetailsContainer data={data} />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ServiceDetails;
