import PropTypes from "prop-types";

// Team component that displays a single team member.
// Backend returns an `image` object with a `url` field (Cloudinary URL).
// For backward compatibility we also support a legacy `thumb` string (relative path).
const Team = ({ data }) => {

    const imgSrc = data?.image?.url ? data.image.url : data?.thumb ? `${process.env.PUBLIC_URL}/${data.thumb}` : "";


    return (
        <div className="new-team-members-list">
            <img src={imgSrc} alt="team member" />
            <h3 className="title">{data?.name}</h3>
            <span>{data?.designation}</span>
        </div>
    );
};

Team.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        designation: PropTypes.string,
        thumb: PropTypes.string,
        image: PropTypes.shape({
            url: PropTypes.string,
        }),
    }).isRequired,
};

export default Team;
