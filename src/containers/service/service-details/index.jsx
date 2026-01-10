import React from "react";
import ServiceDetails from "../../../components/service-details";
import ServiceCate from "../../../components/sidebar/service-cate";
import ServiceData from "../../../data/service.json";

const ServiceDetailsContainer = ({ data }) => {
    if (!data) {
        return (
            <div className="single-service section-py text-center">
                <h2>Service Not Found</h2>
                <p>The service you're looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div className="single-service section-py">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <ServiceDetails data={data} />
                    </div>
                    <div className="col-xl-3 col-lg-4 offset-xl-1">
                        <div className="sidbar-widget float-start w-100">
                            <ServiceCate data={ServiceData} />
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-4">
                    <div dangerouslySetInnerHTML={{ __html: data.bodyBottom }} />
                </div>
                <div className="col-12 mt-10">
                    <div className="cta-section bg-dark p-8 rounded-3 text-center text-white">
                        <h3 className="text-white mb-4">Ready to elevate your business with <span className="text-primary">{data.title}</span>?</h3>
                        <p className="mb-8">Our Dehradun-based experts are ready to help you innovate, integrate, and elevate your operations. Get a free technical consultation today.</p>
                        <a href="/contact" className="btn btn-lg btn-primary btn-hover-secondary">Work with Inspirebyte</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsContainer;