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

        </div>
    );
};

export default IntroContainer;
