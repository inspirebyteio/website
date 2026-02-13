import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ArticleCard = ({ data }) => {
    return (
        <div className="article-card card shadow-sm border-0 h-100">
            <div className="thumb overflow-hidden rounded-top">
                <Link to={`${process.env.PUBLIC_URL}/article/${data.slug}`}>
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
                    <span className="badge text-primary rounded-pill">
                        ~ {data.author}
                    </span>
                </div>
                <h3 className="date small">
                    <i className="icofont-calendar mr-1"></i> {data.date}
                </h3>
                <h3 className="title h5 mb-3">
                    <Link to={`${process.env.PUBLIC_URL}/article/${data.slug}`} className="text-dark hover-primary-text deco-none">
                        {data.title}
                    </Link>
                </h3>
                <p className="excerpt mb-4 small">
                    {data.excerpt}
                </p>
                <Link to={`${process.env.PUBLIC_URL}/article/${data.slug}`} className="read-more-btn text-primary font-weight-bold deco-none d-inline-flex align-items-center">
                    Read More <i className="icofont-long-arrow-right ml-2"></i>
                </Link>
            </div>
        </div>
    );
};

ArticleCard.propTypes = {
    data: PropTypes.object,
};

export default ArticleCard;
