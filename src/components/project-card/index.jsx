import PropTypes from "prop-types";
import "../../assets/css/custom.css";

const ProjectCard = ({ data }) => {
    // Backend returns full Cloudinary URLs (https://...).
    // Legacy local data uses relative paths — keep both working.
    const imgSrc = data.image?.startsWith("http")
        ? data.image
        : process.env.PUBLIC_URL + data.image;

    return (
        <div className="project-card">
            <div className="thumb">
                <a href={data.website} target="_blank" rel="noopener noreferrer">
                    <img src={imgSrc} alt={data.name} />
                </a>
            </div>
            <div className="content">
                <a href={data.website} target="_blank" rel="noopener noreferrer">
                    <h3 className="title">{data.name}</h3>
                </a>
                <hr />
                <ul className="feature-list">
                    {data.features.map((feature, index) => (
                        <li key={index} className="feature">
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        website: PropTypes.string,
        features: PropTypes.arrayOf(PropTypes.string),
    }),
};

export default ProjectCard;

