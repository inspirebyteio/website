import { useEffect, useRef, useState } from "react";
import SectionTitle from "../../../components/section-title";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "../../../components/testimonial";
import HomeData from "../../../data/home.json";
import SwiperCore, { Navigation } from "swiper";
import Parallax from "parallax-js";
import { getAllTestimonials } from "../../../services/testimonialService";

SwiperCore.use([Navigation]);
const TestimonialReverse = () => {
    const swiperOption = {
        loop: false,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".testimonial-carousel .swiper-button-next",
            prevEl: ".testimonial-carousel .swiper-button-prev",
        },
    };

    const sceneEl = useRef(null);
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const data = await getAllTestimonials();
                if (data) {
                    setTestimonials(data);
                }
            } catch (err) {
                console.error("Failed to fetch testimonials:", err.message);
            }
        };

        fetchTestimonials();
    }, []);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);
    return (
        <section className="testimonial-section section-py">
            <div className="container">
                <div className="row mb-n7">
                    <div className="col-xl-5 col-lg-6 mb-7">
                        <div className="testimonial-wrap">
                            <SectionTitle
                                classOption="title-section"
                                subTitle="TESTIMONIALS"
                                title="Don’t Believe us Check <span class='text-primary'>Clients</span> word"
                            />
                            <h5 className="happy-customer">
                                More over{" "}
                                <span className="font-weight-bold">85</span>{" "}
                                happy customer
                            </h5>
                        </div>
                        <div className="testimonial-carousel position-relative">
                            <Swiper {...swiperOption}>
                                {testimonials &&
                                    testimonials.map(
                                        (single, key) => {
                                            return (
                                                <SwiperSlide key={key}>
                                                    <Testimonial
                                                        key={key}
                                                        data={single}
                                                    />
                                                </SwiperSlide>
                                            );
                                        }
                                    )}
                            </Swiper>
                            <div className="swiper-button-prev">
                                <i className="icofont-rounded-left"></i>prev
                            </div>
                            <div className="swiper-button-next">
                                Next
                                <i className="icofont-rounded-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 mb-7">
                        <div
                            className="testimonial-photo scene mt-10 mt-lg-0"
                            id="scene"
                            ref={sceneEl}
                        >
                            <div data-depth="0.2">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/testimonial/inspirebyte-testimonials.png`}
                                    alt="inspirebyte-testimonials"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialReverse;
