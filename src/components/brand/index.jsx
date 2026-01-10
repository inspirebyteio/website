import PropTypes from "prop-types";

const Brand = ({ data }) => {
    return (
        <a href={process.env.PUBLIC_URL + data.profile} target="_blank" className="brand-link" rel="noreferrer">
            <div className="single-brand">
                <div className="brand-logo">
                    <img src={process.env.PUBLIC_URL + data.image} alt={data.name} />
                </div>
                <h5 className="brand-name">{data.name}</h5>
            </div>
        </a>
    );
};

Brand.propTypes = {
    data: PropTypes.object,
};

export default Brand;
