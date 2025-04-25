import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            {/* Set the correct meta robots tag for SEO */}
            <meta name="robots" content="index, follow" />
            
            {/* Dynamic meta description */}
            <meta name="description" content={description || "Inspirebyte - Innovating Your Business with Tailored Software Solutions"} />
            
            {/* Open Graph Tags for social media sharing */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description || "Inspirebyte offers software solutions to automate processes, integrate systems, and scale operations."} />
            <meta property="og:image" content="https://www.inspirebyte.io/logo512.png" />
            <meta property="og:url" content="https://www.inspirebyte.io" />

            {/* Meta for mobile responsiveness */}
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default SEO;
