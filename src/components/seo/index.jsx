import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords, author }) => {
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Inspirebyte",
        "url": "https://www.inspirebyte.io",
        "logo": "https://www.inspirebyte.io/logo512.png",
        "sameAs": [
            "https://www.linkedin.com/company/inspirebyteio/",
            "https://www.instagram.com/inspirebyte/",
            "https://twitter.com/InspireByte_"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9997033980",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": "en"
        }
    };

    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Inspirebyte",
        "image": "https://www.inspirebyte.io/images/about/inspirebyte-about.png",
        "@id": "https://www.inspirebyte.io",
        "url": "https://www.inspirebyte.io",
        "telephone": "+919997033980",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "3rd Floor, Dev Bhoomi Tower, 86, Mussoorie Rd, Malsi",
            "addressLocality": "Dehradun",
            "addressRegion": "Uttarakhand",
            "postalCode": "248014",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 30.3756,
            "longitude": 78.0745
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "21:00"
        }
    };

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

            {/* Schema.org markup */}
            <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
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
