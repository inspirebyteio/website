import React from "react";
import Intro from "../../../components/intro";
import HomeData from "../../../data/home.json";

const IntroContainer = () => {
    const introData = HomeData[0].slider[0];

    return (
        <div className="section position-relative" aria-label="Intro Section - Inspirebyte">
            <div className="hero-shape1">
                <img
                    src={`${process.env.PUBLIC_URL}/images/slider/shape/inspirebyte-slider-shape1.png`}
                    alt="inspirebyte-slider-Decorative shape element 1"
                />
            </div>
            <div className="hero-shape2">
                <img
                    src={`${process.env.PUBLIC_URL}/images/slider/shape/inspirebyte-slider-shape2.png`}
                    alt="inspirebyte-slider-Decorative shape element 2"
                />
            </div>

            {/* Pass the relevant data to the Intro component */}
            <Intro data={introData} />

            {/* Hidden SEO content */}
            <div style={{ display: 'none' }}>
                <p>
                    Inspirebyte is a leading software development company based in Dehradun, India. We provide cutting-edge solutions including custom software development, API integration, CRM systems, and business process automation tailored to meet specific business needs.
                </p>
                <p>
                    Our services are designed to enhance operational efficiency, reduce manual workloads, and deliver scalable, secure systems across various industries. From full stack development to cloud-based data solutions, we help startups and enterprises achieve digital transformation.
                </p>
                <p>
                    With expertise in tools like Node.js, React, and modern DevOps practices, Inspirebyte builds intelligent, reliable platforms that empower businesses to innovate and grow in the competitive digital landscape.
                </p>
                <p>
                    We work closely with clients throughout India and internationally, offering technical consulting, custom API development, and ongoing support to ensure long-term value and technology alignment.
                </p>
            </div>
        </div>
    );
};

export default IntroContainer;
