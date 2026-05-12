import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import { getAllBlogs } from "../services/blogService";
import ArticleDetailsContainer from "../containers/article-details";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const ArticleDetails = () => {
    const { slug } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getAllBlogs();
                if (data) {
                    setBlogs(data);
                }
            } catch (error) {
                console.error("Failed to fetch blogs:", error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <Layout>
                <div className="wrapper text-center py-10">
                    <h2>Loading...</h2>
                </div>
            </Layout>
        );
    }

    const data = blogs.find((article) => article.slug === slug);

    if (!data) {
        return (
            <Layout>
                <div className="wrapper text-center py-10">
                    <h2>Post Not Found</h2>
                    <p>
                        The article you&apos;re looking for doesn&apos;t exist.
                    </p>
                    <a
                        href={`${process.env.PUBLIC_URL}/articles`}
                        className="btn btn-primary mt-4"
                    >
                        Back to Articles
                    </a>
                </div>
            </Layout>
        );
    }

    return (
        <React.Fragment>
            <Layout>
                <SEO
                    title={`${data.title} | InspireByte Articles`}
                    description={data.excerpt}
                    keywords={`InspireByte, ${data.category}, ${data.tags.join(
                        ", "
                    )}`}
                    image={data.thumbnail}
                    author={data.author}
                />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title={data.title}
                        excerpt={data.excerpt}
                        image={data.thumbnail}
                    />
                    <ArticleDetailsContainer data={data} allBlogs={blogs} />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ArticleDetails;
