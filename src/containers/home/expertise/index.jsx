import React from "react";
import SectionTitle from "../../../components/section-title";
import HomeData from "../../../data/home.json";

const ExpertiseContainer = () => {
    const expertiseData = HomeData[HomeData.length - 1].expertise;

    return (
        <div className="section-padding bg-light expertise-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="expertise-content pr-lg-5">
                            <SectionTitle
                                classOption="title-section"
                                subTitle={expertiseData.subTitle}
                                title={expertiseData.title}
                            />
                            {expertiseData.content.map((text, index) => (
                                <p key={index} className={index === expertiseData.content.length - 1 ? "mb-0" : "mb-5"}>
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6 mt-10 mt-lg-0">
                        <div className="expertise-image text-center">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/about/inspirebyte-about.png`}
                                alt="Inspirebyte Expertise and Innovation"
                                className="img-fluid rounded-3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertiseContainer;
