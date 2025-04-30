import PropTypes from "prop-types";

const PageTitle = ({ title, excerpt }) => {
    return (
        <div className="banner-content banner-padding">
            <h1 className="title">{title}</h1>
            <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
        </div>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string,
    excerpt: PropTypes.string,
};

export default PageTitle;
