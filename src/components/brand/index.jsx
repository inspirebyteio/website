import PropTypes from "prop-types";

const Brand = ({ data }) => {
    return (
        <a href={process.env.PUBLIC_URL + data.profile} target="_blank">
        <div className="single-brand">
            <img src={process.env.PUBLIC_URL + data.image} alt="brand logo" width="50%"/>
        </div>
        </a>
    );
};

Brand.propTypes = {
    data: PropTypes.object,
};

export default Brand;
