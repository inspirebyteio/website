import PropTyps from "prop-types";
import "../../assets/css/custom.css";

const ProjectCard = ({ data }) => {
    return (
        <div className="project-card">
            <div className="thumb">
                <img src={process.env.PUBLIC_URL + data.image} alt="img" />
            </div>
            <div className="content">
                <h3 className="title">{data.name}</h3>
                <h6>{data.description}</h6>
                <hr/>
                <ul>                   
                    <li>
                        {data.type.map((tag, index) => (
                            <span key={index} className="tag">
                            {tag}
                            </span>
                        ))}
                    </li>
                    {/*<li>{data.industries}</li>*/}
                    <hr/>
                    <li>
                        <ul>
                        {data.features.map((feature, index) => (
                            <li key={index} className="feature">
                            {feature}
                            </li>
                        ))}
                        </ul>
                    </li>
                    {/*<li>{data.website}</li>*/}
                </ul>                
            </div>            
        </div>
    );
};

ProjectCard.propTypes = {
    data: PropTyps.object,
};

export default ProjectCard;
