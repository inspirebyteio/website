import React from "react";
import ReactMarkdown from "react-markdown";
import ArticleData from "../../data/articles.json";
import { Link } from "react-router-dom";

import ArticleContent from "../../data/article-content.json";

const ArticleDetailsContainer = ({ data }) => {
    const content = ArticleContent[data.slug] || "Content not found.";

    const recentPosts = ArticleData.filter(post => post.slug !== data.slug).slice(0, 3);

    return (
        <div className="article-details-section section-py">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="article-details-content card shadow-sm border-0 p-4 p-md-5 rounded-3">
                            <article className="prose-custom">
                                <ReactMarkdown>{content}</ReactMarkdown>
                            </article>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="article-sidebar mt-5 mt-lg-0 ml-lg-4">
                            {/* Author Widget */}
                            <div className="sidebar-widget card shadow-sm border-0 p-4 mb-5 rounded-3 bg-dark text-white">
                                <h4 className="widget-title text-white mb-3">About Author</h4>
                                <div className="author-info d-flex align-items-center">
                                    <div className="avatar me-3 bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        <img
                                            src={process.env.PUBLIC_URL + "/" + data.authorImage}
                                            alt="author"
                                            className="img-fluid rounded-circle"
                                        />
                                    </div>
                                    <div>
                                        <h6 className="mb-0 text-white">{data.author}</h6>
                                        <span className="small text-muted-custom">Senior Software Engineer</span>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Posts Widget */}
                            <div className="sidebar-widget card shadow-sm border-0 p-4 mb-5 rounded-3">
                                <h4 className="widget-title mb-4">Recent Posts</h4>
                                <ul className="recent-posts list-unstyled mb-0">
                                    {recentPosts.map((post, index) => (
                                        <li key={index} className={`mb-3 ${index !== recentPosts.length - 1 ? 'border-bottom pb-3' : ''}`}>
                                            <Link to={`${process.env.PUBLIC_URL}/article/${post.slug}`} className="text-dark hover-primary-text deco-none">
                                                <h6 className="mb-1 small font-weight-bold">{post.title}</h6>
                                            </Link>
                                            <span className="text-muted small">{post.date}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Categories Widget */}
                            <div className="sidebar-widget card shadow-sm border-0 p-4 rounded-3">
                                <h4 className="widget-title mb-4">Categories</h4>
                                <ul className="categories list-unstyled mb-0">
                                    {[...new Set(ArticleData.map(p => p.category))].map((cat, index) => (
                                        <li key={index} className="mb-2">
                                            <Link
                                                to={`${process.env.PUBLIC_URL}/articles`}
                                                className="text-dark hover-primary-text deco-none d-flex justify-content-between align-items-center"
                                            >
                                                <span>{cat}</span>
                                                <span className="badge bg-light text-dark">{ArticleData.filter(p => p.category === cat).length}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetailsContainer;
