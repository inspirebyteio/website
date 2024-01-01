import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Logo = ({ image, classOption }) => {
    return (
        <Link className={`${classOption}`} to={process.env.PUBLIC_URL + "/"}>
            <img
                className="logo-main"
<<<<<<< HEAD
                src={image}
=======
                src={process.env.PUBLIC_URL + image}
>>>>>>> 8e35d25f7c30029813d9697995f8a8fbdedcdd98
                width="70%"
                alt="Logo"
            />
        </Link>
    );
};

Logo.propTypes = {
    image: PropTypes.string,
    classOption: PropTypes.string,
};

Logo.defaultProps = {
    classOption: "text-center",
};

export default Logo;
