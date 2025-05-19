import React from "react";
import { useParams } from "react-router-dom";
import ServiceDetails from "../../../components/service-details";
import ServiceCate from "../../../components/sidebar/service-cate";
import ServiceData from "../../../data/service.json";

const ServiceDetailsContainer = () => {
    const { link } = useParams();
    const data = ServiceData.find(service => service.link === link);

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
            </div>
        </div>
    );
};

export default ServiceDetailsContainer;
