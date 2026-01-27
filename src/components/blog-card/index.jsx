import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
    return (
        <div className="blog-card card shadow-sm border-0 h-100">
            <div className="thumb overflow-hidden rounded-top">
                <Link to={`${process.env.PUBLIC_URL}/blog-details/${data.slug}`}>
                    <img
                        src={process.env.PUBLIC_URL + "/" + data.thumbnail}
                        alt={data.title}
                        className="img-fluid transition-base"
                    />
                </Link>
            </div>
            <div className="content p-4">
                <div className="meta mb-3 d-flex align-items-center justify-content-between">
                    <span className="category badge bg-primary-soft text-primary px-3 py-2 rounded-pill">
                        {data.category}
                    </span>
                    <span className="date text-muted small">
                        <i className="icofont-calendar mr-1"></i> {data.date}
                    </span>
                </div>
                <h3 className="title h5 mb-3">
                    <Link to={`${process.env.PUBLIC_URL}/blog-details/${data.slug}`} className="text-dark hover-primary-text deco-none">
                        {data.title}
                    </Link>
                </h3>
                <p className="excerpt text-muted mb-4 small">
                    {data.excerpt}
                </p>
                <Link to={`${process.env.PUBLIC_URL}/blog-details/${data.slug}`} className="read-more-btn text-primary font-weight-bold deco-none d-inline-flex align-items-center">
                    Read More <i className="icofont-long-arrow-right ml-2"></i>
                </Link>
            </div>
        </div>
    );
};

BlogCard.propTypes = {
    data: PropTypes.object,
};

export default BlogCard;
