import PropTyps from "prop-types";

const TeamCard = ({ data }) => {
    return (
        <div className="team-card">
            <div className="thumb">
                <img src={process.env.PUBLIC_URL + data.thumb} alt={`${data.name}, ${data.designation}` } />
            </div>
            <div className="content">
                <a href={`${data.linkedin}`} target="_blank">
                <h3 className="title">{data.name}</h3>
                </a>
                <span>{data.designation}</span>
            </div>
        </div>
    );
};

TeamCard.propTypes = {
    data: PropTyps.object,
};

export default TeamCard;
