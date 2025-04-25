import React from "react";
import Intro from "../../../components/intro";
import HomeData from "../../../data/home.json";

const IntroContainer = () => {
    const introData = HomeData[0].slider[0];

    return (
        <div className="section position-relative" aria-label="Intro Section - Inspirebyte">
            <div className="hero-shape1">
                <img
                    src={`${process.env.PUBLIC_URL}/images/slider/shape/shape1.png`}
                    alt="Decorative shape element 1"
                />
            </div>
            <div className="hero-shape2">
                <img
                    src={`${process.env.PUBLIC_URL}/images/slider/shape/shape2.png`}
                    alt="Decorative shape element 2"
                />
            </div>

            {/* Pass the relevant data to the Intro component */}
            <Intro data={introData} />

            {/* Hidden SEO content */}
            <div style={{ display: 'none' }}>
                <p>
                    Inspirebyte specializes in innovative software solutions, offering custom APIs, automation, and
                    system integration for businesses.
                </p>
            </div>
        </div>
    );
};

export default IntroContainer;
