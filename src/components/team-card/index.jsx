import PropTypes from "prop-types";

const TeamCard = ({ data }) => {
    // Backend returns full Cloudinary URLs (https://...).
    // Legacy local data uses relative paths — keep both working.
    const imgSrc = data.image?.url?.startsWith("http")
        ? data.image?.url
        : `${process.env.PUBLIC_URL}/${data.image?.url}`;
  
    return (
        <div className="team-card">
            <div className="thumb">
                <img
                    src={imgSrc}
                    alt={`${data.name}, ${data.designation}`}
                />
            </div>
            <div className="content">
                <a href={`${data.linkedin}`} target="_blank" rel="noreferrer">
                    <h3 className="title">{data.name}</h3>
                </a>
                <span>{data.designation}</span>
            </div>
        </div>
    );
};

TeamCard.propTypes = {
    data: PropTypes.object,
};

export default TeamCard;

