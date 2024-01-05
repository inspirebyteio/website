import PropTypes from "prop-types";

const Testimonial = ({ data }) => {
    return (
        <div className="testimonial-slide-item swiper-slide">
            <span className="quote zmdi zmdi-quote"></span>
            <p className="testimonial-text mt-2 mb-5">{data.excerpt}</p>
            <a href={data.profile} target="_blank">
            <div className="avater d-flex">
                <div className="avater-profile">
                    <img
                        src={process.env.PUBLIC_URL + data.authorThumb}
                        alt="avater"
                        style={{ borderRadius: '50%'}}
                    />
                </div>
                <div className="avater-info"> 
                    <p>{data.name}</p>
                    <span>{data.designation}</span>
                </div>
            </div>
            </a>
        </div>
    );
};

Testimonial.propTypes = {
    data: PropTypes.object,
};

export default Testimonial;
