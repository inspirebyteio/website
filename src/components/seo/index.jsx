import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords, author }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="robots" content="index, follow" />
            <meta name="description" content={description || "Inspirebyte - Innovating Your Business with Tailored Software Solutions"} />
            {keywords && <meta name="keywords" content={keywords} />}
            {author && <meta name="author" content={author} />}
            
            {/* Open Graph Tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description || "Inspirebyte offers software solutions to automate processes, integrate systems, and scale operations."} />
            <meta property="og:image" content="https://www.inspirebyte.io/logo512.png" />
            <meta property="og:url" content="https://www.inspirebyte.io" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    keywords: PropTypes.string,
    author: PropTypes.string,
};


export default SEO;
