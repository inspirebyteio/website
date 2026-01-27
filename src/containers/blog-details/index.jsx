import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import BlogData from "../../data/blogs.json";
import { Link } from "react-router-dom";

const BlogDetailsContainer = ({ data }) => {
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/blog-posts/${data.slug}.md`);
                if (!response.ok) throw new Error("File not found");
                const text = await response.text();

                // Simple frontmatter parser for browser
                const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
                const match = text.match(frontMatterRegex);
                const markdownBody = match ? text.replace(frontMatterRegex, "") : text;

                setContent(markdownBody);
            } catch (error) {
                console.error("Error fetching blog content:", error);
                setContent("Failed to load blog content. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [data.slug]);

    const recentPosts = BlogData.filter(post => post.slug !== data.slug).slice(0, 3);

    return (
        <div className="blog-details-section section-py">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-details-content card shadow-sm border-0 p-4 p-md-5 rounded-3">
                            {loading ? (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <article className="prose-custom">
                                    <ReactMarkdown>{content}</ReactMarkdown>
                                </article>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-sidebar mt-5 mt-lg-0 ml-lg-4">
                            {/* Author Widget */}
                            <div className="sidebar-widget card shadow-sm border-0 p-4 mb-5 rounded-3 bg-dark text-white">
                                <h4 className="widget-title text-white mb-3">About Author</h4>
                                <div className="author-info d-flex align-items-center">
                                    <div className="avatar me-3 bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        <i className="icofont-user-alt-3 text-white"></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-0 text-white">{data.author}</h6>
                                        <span className="small text-muted-custom">Tech Specialist</span>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Posts Widget */}
                            <div className="sidebar-widget card shadow-sm border-0 p-4 mb-5 rounded-3">
                                <h4 className="widget-title mb-4">Recent Posts</h4>
                                <ul className="recent-posts list-unstyled mb-0">
                                    {recentPosts.map((post, index) => (
                                        <li key={index} className={`mb-3 ${index !== recentPosts.length - 1 ? 'border-bottom pb-3' : ''}`}>
                                            <Link to={`${process.env.PUBLIC_URL}/blog-details/${post.slug}`} className="text-dark hover-primary-text deco-none">
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
                                    {[...new Set(BlogData.map(p => p.category))].map((cat, index) => (
                                        <li key={index} className="mb-2">
                                            <Link
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                                className="text-dark hover-primary-text deco-none d-flex justify-content-between align-items-center"
                                            >
                                                <span>{cat}</span>
                                                <span className="badge bg-light text-dark">{BlogData.filter(p => p.category === cat).length}</span>
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

export default BlogDetailsContainer;
