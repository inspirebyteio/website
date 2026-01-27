import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import SocialIcon from "../../components/social-icon";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-top position-relative">
                <img
                    className="footer-shape"
                    src={`${process.env.PUBLIC_URL}/images/footer/inspirebyte-footer.png`}
                    alt="shape"
                />
                <div className="container">
                    <div className="row mb-n7">
                        <div className="col-lg-3 col-sm-6 mb-7">
                            <div className="footer-widget">
                                <Logo
                                    classOption="footer-logo mb-9"
                                    image={`images/logo/inspirebyte-logo-footer.png`}
                                />
                                <p>
                                    Stay Connected and Follow Us for the Latest Updates
                                </p>
                                <ul className="footer-social-links">
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://www.linkedin.com/company/inspirebyteio/"
                                            icon="icofont-linkedin"
                                        />
                                    </li>
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://www.instagram.com/inspirebyte/"
                                            icon="icofont-instagram"
                                        />
                                    </li>
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://x.com/inspirebyteio"
                                            icon="icofont-twitter"
                                        />
                                    </li>
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://wa.me/9997033980"
                                            icon="icofont-whatsapp"
                                        />
                                    </li>
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://www.youtube.com/@InspirebytePvtLtd"
                                            icon="icofont-youtube"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-7 offset-xl-1">
                            <div className="footer-widget">
                                <h4 className="title">Quick Link</h4>
                                <ul className="footer-menu">
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/about"
                                            }
                                        >
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/services"
                                            }
                                        >
                                            Services
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL + "/team"
                                            }
                                        >
                                            Our Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/contact"
                                            }
                                        >
                                            Contact us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/privacy"
                                            }
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/faq"
                                            }
                                        >
                                            FAQs
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-7">
                            <div className="footer-widget">
                                <h4 className="title">Services</h4>
                                <ul className="footer-menu">
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/services/full-stack-development`
                                            }
                                        >
                                            Full Stack Software Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/services/it-consulting`
                                            }
                                        >
                                            IT Consulting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/services/cloud-solutions`
                                            }
                                        >
                                            Data And Cloud Solutions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/services/business-process-automation`
                                            }
                                        >
                                            Business Process Automation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/services/crm-solutions`
                                            }
                                        >
                                            CRM Solutions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/services/api-integration`
                                            }
                                        >
                                            API Integration And Development
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-7">
                            <div className="footer-widget">
                                <h4 className="title">Contact info</h4>
                                <p>
                                    3rd Floor, Dev Bhoomi Tower, 86, Mussoorie
                                    Rd, Malsi, Dehradun, Uttarakhand 248014
                                </p>
                                <ul className="address">
                                    <li>
                                        <a
                                            className="address-link"
                                            href="tel:+919997033980"
                                        >
                                            (+91) 99970 33980
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="address-link"
                                            href="tel:+917351512142"
                                        >
                                            (+91) 73515 12142
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="address-link"
                                            href="mailto:info@inspirebyte.io"
                                        >
                                            info@inspirebyte.io
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="address-link"
                                            href="mailto:info@inspirebyte.io"
                                        >
                                            www.inspirebyte.io
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright-info text-center">
                                <p>Copyright &copy; InspireByte | 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
