import React, { useState } from "react";
import BlogCard from "../../components/blog-card";
import BlogData from "../../data/blogs.json";

const BlogList = () => {
    const [filter, setFilter] = useState("All");

    const categories = ["All", ...new Set(BlogData.map(item => item.category))];

    const filteredBlogs = filter === "All"
        ? BlogData
        : BlogData.filter(item => item.category === filter);

    return (
        <div className="blog-section section-py">
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
                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.map((item, key) => (
                            <div key={key} className="col-12 col-md-6 col-lg-4 mb-7 animate-fade-in">
                                <BlogCard data={item} />
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <h3 className="text-muted">No blogs found in this category.</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogList;
