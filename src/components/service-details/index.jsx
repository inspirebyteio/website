import React from "react";
import PropTypes from "prop-types";

const ServiceDetails = ({ data }) => {
    const body = Array.isArray(data?.body) ? data.body : [];

    return (
        <div className="service-wrap">
            <div className="service-thumb bg-light text-center">
                <img
                    src={`${process.env.PUBLIC_URL}/${data.image}`}
                    alt={data.title}
                />
            </div>
            <div className="title-section">
                <h3 className="title pb-2">{data.title}</h3>
                <div className="service-content-wrap">
                    {body.map((single, key) => (
                        <div
                            className="desc"
                            key={key}
                            dangerouslySetInnerHTML={{ __html: single }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

ServiceDetails.propTypes = {
    data: PropTypes.object,
};

export default ServiceDetails;
