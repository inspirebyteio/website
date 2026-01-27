import PropTyps from "prop-types";
import "../../assets/css/custom.css";

const ProjectCard = ({ data }) => {
    return (
        <div className="project-card">
            <div className="thumb">
                <a href={data.website} target="_blank" rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + data.image} alt={data.name} />
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
    data: PropTyps.shape({
        name: PropTyps.string,
        image: PropTyps.string,
        website: PropTyps.string,
        features: PropTyps.arrayOf(PropTyps.string),
    }),
};

export default ProjectCard;
