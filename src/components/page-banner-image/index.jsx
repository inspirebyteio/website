import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Parallax from "parallax-js";

const PageBannerImage = ({ image }) => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);
    return (
        <div
            className="banner-content scene banner-img"
            id="scene"
            ref={sceneEl}
        >
            <div data-depth="0.2">
                <img 
                    src={
                        (image?.url || image)?.startsWith("http")
                            ? (image?.url || image)
                            : process.env.PUBLIC_URL + 
                              ((image?.url || image)?.startsWith("/") ? "" : "/") + 
                              (image?.url || image)
                    } 
                    alt="img" 
                />
            </div>
        </div>
    );
};

PageBannerImage.propTypes = {
    image: PropTypes.string,
};

export default PageBannerImage;
