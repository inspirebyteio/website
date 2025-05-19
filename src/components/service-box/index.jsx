import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const ServiceBox = ({ data }) => {
    return (
        <div className="service-media">
            <img
                className="logo"
                src={process.env.PUBLIC_URL + data.icon}
                alt={data.categories}
            />
            <div className="service-media-body">
                <h4 className="title">
                    <Link
                        to={
                            process.env.PUBLIC_URL +
                            `/service-details/${data.link}`
                        }
                    >
                        {data.title}
                    </Link>
                </h4>
                <p>{data.excerpt}</p>
            </div>
        </div>
    );
};

ServiceBox.propTypes = {
    data: PropTypes.object,
};

export default ServiceBox;
