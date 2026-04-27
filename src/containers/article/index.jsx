import React, { useState, useEffect } from "react";
import ArticleCard from "../../components/article-card";
import { getAllBlogs } from "../../services/blogService";

const ArticleList = () => {
    const [filter, setFilter] = useState("All");
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getAllBlogs();
                if (data) {
                    setArticles(data);
                }
            } catch (err) {
                console.error("Failed to fetch blogs:", err.message);
            }
        };

        fetchBlogs();
    }, []);

    const categories = ["All", ...new Set(articles.map(item => item.category))];

    const filteredArticles = filter === "All"
        ? articles
        : articles.filter(item => item.category === filter);

    return (
        <div className="article-section section-py">
            <div className="container">
                <div className="row mb-5 justify-content-center">
                    <div className="col-12 text-center">
                        <div className="filter-buttons mb-4">
                            {categories.map((cat, index) => (
                                <button
                                    key={index}
                                    onClick={() => setFilter(cat)}
                                    className={`btn btn-sm mx-1 px-4 py-2 rounded-pill transition-base ${filter === cat
                                        ? "btn-primary"
                                        : "btn-outline-primary"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row g-4 mb-n7">
                    {filteredArticles.length > 0 ? (
                        filteredArticles.map((item, key) => (
                            <div key={key} className="col-12 col-md-6 col-lg-4 mb-7 animate-fade-in">
                                <ArticleCard data={item} />
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <h3 className="text-muted">No articles found in this category.</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ArticleList;
