import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const PrivacyPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO
                    title="Privacy Policy | InspireByte"
                    description="Read InspireByte's Privacy Policy to understand how we collect, use, and protect your personal information when you visit our website or use our services. We value your privacy and are committed to safeguarding your data."
                    keywords="InspireByte privacy policy, data protection, user privacy, information security, cookies, data collection, IT services privacy, software company policy"
                    image="/images/service/media.png"
                    author="InspireByte"
                    ogTitle="InspireByte Privacy Policy"
                    ogDescription="Learn how InspireByte handles your data responsibly. Our Privacy Policy explains data collection, usage, and security practices to keep your information safe."
                />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Privacy Policy"
                        excerpt="At InspireByte, your privacy matters. This Privacy Policy outlines how we collect, use, and safeguard the information you provide while using our website and services. We are committed to maintaining transparency and protecting your personal data through secure practices and responsible data handling."
                        image="./images/service/media.png"
                    />

                    <div className="privacy-policy-content section-padding">
                        <div className="container">
                            <h2>Effective Date: 20-01-2024</h2>
                            <p>
                                At <strong>InspireByte</strong>, accessible from{" "}
                                <a href="https://www.inspirebyte.io">
                                    https://www.inspirebyte.io
                                </a>
                                , we respect your privacy and are committed to
                                protecting any personal information you share
                                with us. This Privacy Policy explains how we
                                collect, use, and safeguard your data when you
                                interact with our website, products, and
                                services.
                            </p>

                            <h3>Information We Collect</h3>
                            <ul>
                                <li>
                                    <strong>Personal Information:</strong> Name,
                                    email address, phone number, company
                                    details, and other information you provide
                                    through forms or service requests.
                                </li>
                            </ul>
                            <br></br>
                            <h3>How We Use Your Information</h3>
                            <ul>
                                <li>
                                    Responding to inquiries and support
                                    requests.
                                </li>
                                <li>
                                    Sending updates, offers, and notifications
                                    (with consent).
                                </li>
                            </ul>
                            <br></br>
                            <h3>Cookies and Tracking</h3>
                            <p>
                                We don&apos;t use cookies or other similar
                                tracking technologies.
                            </p>
                            <br></br>
                            <h3>Sharing of Information</h3>
                            <p>
                                We do not sell or rent your personal
                                information. We may share your data only in the
                                following cases:
                            </p>
                            <ul>
                                <li>
                                    With trusted third-party providers (e.g.,
                                    payment processors, hosting services).
                                </li>
                                <li>When required by law or regulation.</li>
                                <li>
                                    To protect the rights, property, or safety
                                    of InspireByte, our clients, or the public.
                                </li>
                            </ul>
                            <br></br>
                            <h3>Data Security</h3>
                            <p>
                                We take appropriate technical and organizational
                                measures to safeguard your personal information
                                against unauthorized access, loss, misuse, or
                                disclosure.
                            </p>
                            <br></br>
                            <h3>Data Retention</h3>
                            <p>
                                We retain personal data only as long as
                                necessary to fulfill the purposes outlined in
                                this policy, unless a longer retention period is
                                required by law.
                            </p>
                            <br></br>
                            <h3>Your Rights</h3>
                            <p>
                                Depending on your jurisdiction, you may have the
                                right to:
                            </p>
                            <ul>
                                <li>Access, correct, or delete your data.</li>
                                <li>Withdraw consent for certain data uses.</li>
                                <li>Object to marketing communications.</li>
                                <li>
                                    Request a copy of the data we hold about
                                    you.
                                </li>
                            </ul>
                            <p>
                                To exercise these rights, contact us at{" "}
                                <strong>info@inspirebyte.io</strong>.
                            </p>
                            <br></br>
                            <h3>Third-Party Links</h3>
                            <p>
                                Our website may include links to external sites.
                                We are not responsible for the privacy practices
                                or content of those sites.
                            </p>
                            <br></br>
                            <h3>Updates to this Policy</h3>
                            <p>
                                We may update this Privacy Policy from time to
                                time. Changes will be posted on this page with a
                                revised effective date.
                            </p>
                            <br></br>
                            <h3>Contact Us</h3>
                            <p>
                                If you have any questions about this Privacy
                                Policy, please contact us at:
                            </p>
                            <p>
                                <strong>InspireByte</strong>
                                <br />
                                Email: <strong>info@inspirebyte.io</strong>
                                <br />
                                Website:{" "}
                                <a href="https://www.inspirebyte.io">
                                    https://www.inspirebyte.io
                                </a>
                            </p>
                        </div>
                    </div>

                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default PrivacyPage;
