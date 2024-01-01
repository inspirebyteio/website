import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Logo = ({ image, classOption }) => {
  const mobileWidth = '90%'; // Width for mobile devices
  const defaultWidth = '65%'; // Default width for larger screens

  return (
    <Link className={`${classOption}`} to={process.env.PUBLIC_URL + "/"}>
      <img
        className="logo-main"
        src={process.env.PUBLIC_URL + image}
        style={{
          width: defaultWidth, // Default width for larger screens
        }}
        alt="Logo"
      />
      <style>
        {`
          @media (max-width: 768px) { /* Adjust the max-width to your desired breakpoint */
            .logo-main {
              width: ${mobileWidth} !important; // Width for mobile devices
            }
          }
        `}
      </style>
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
