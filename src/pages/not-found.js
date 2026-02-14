import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

export default function NotFoundPage() {
    return (
        <React.Fragment>
            <Layout>
                <SEO
                    title="404 - Page Not Found | InspireByte"
                    description="The page you are looking for might have been
                    removed, had its name changed, or is temporarily
                    unavailable."
                />
                <div className="wrapper">
                    <Header />
                    <div
                        className="error-area section-padding-01"
                        style={{
                            minHeight: "80vh",
                            display: "flex",
                            alignItems: "center",
                            background:
                                "linear-gradient(135deg, #f8faff 0%,#ffffff 100%)",
                            position: "relative",
                            overflow: "hidden",
                            paddingTop: "150px",
                        }}
                    >
                        {/* Decorative background elements */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-10%",
                                right: "-5%",
                                width: "400px",
                                height: "400px",
                                background: "#0047fb",
                                opacity: "0.03",
                                borderRadius: "50%",
                                filter: "blur(80px)",
                            }}
                        ></div>
                        <div
                            style={{
                                position: "absolute",
                                bottom: "10%",
                                left: "5%",
                                width: "300px",
                                height: "300px",
                                background: "#00d084",
                                opacity: "0.03",
                                borderRadius: "50%",
                                filter: "blur(60px)",
                            }}
                        ></div>

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <div
                                        className="error-content"
                                        style={{
                                            position: "relative",
                                            zIndex: 2,
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize:
                                                    "clamp(120px, 15vw, 180px)",
                                                fontWeight: "900",
                                                lineHeight: "0.8",
                                                background:
                                                    "linear-gradient(to bottom, #000000, #000000)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor:
                                                    "transparent",
                                                letterSpacing: "-5px",
                                                marginBottom: "20px",
                                                opacity: "0.9",
                                            }}
                                        >
                                            404
                                        </div>

                                        <h2
                                            style={{
                                                fontSize:
                                                    "clamp(24px, 4vw, 36px)",
                                                fontWeight: "700",
                                                color: "#111",
                                                marginBottom: "15px",
                                                letterSpacing: "-0.5px",
                                            }}
                                        >
                                            Oops! This Page is Missing
                                        </h2>

                                        <p
                                            style={{
                                                fontSize: "18px",
                                                color: "#666",
                                                maxWidth: "500px",
                                                margin: "0 auto 40px",
                                                lineHeight: "1.7",
                                            }}
                                        >
                                            The link you followed might be
                                            broken, or the page may have been
                                            moved. Let&apos;s get you back to
                                            safety.
                                        </p>

                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "15px",
                                                justifyContent: "center",
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <Link
                                                to="/"
                                                className="btn btn-primary btn-hover-secondary"
                                                style={{
                                                    padding: "16px 35px",
                                                    borderRadius: "8px",
                                                    fontWeight: "600",
                                                    boxShadow:
                                                        "0 10px 20px rgba(0, 71, 251, 0.15)",
                                                    transition:
                                                        "transform 0.3s ease",
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                }}
                                                onMouseOver={(e) =>
                                                (e.currentTarget.style.transform
                                                    = "translateY(-3px)")
                                                }
                                                onMouseOut={(e) =>
                                                (e.currentTarget.style.transform
                                                    = "translateY(0)")
                                                }
                                            >
                                                Return to Home
                                            </Link>
                                            <Link
                                                to="/contact"
                                                className="btn btn-outline-primary"
                                                style={{
                                                    padding: "16px 35px",
                                                    borderRadius: "8px",
                                                    fontWeight: "600",
                                                    borderWidth: "2px",
                                                    transition: "all 0.3s ease",
                                                }}
                                            >
                                                Contact Support
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
}
