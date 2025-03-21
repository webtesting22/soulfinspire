import React, { useRef, useState, useEffect } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Row, Col } from "antd";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import useIntersectionAnimation from "../SoulHome/useIntersectionAnimation";

const SoulTestimonial = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const countRef = useRef(null);
    const [count, setCount] = useState(0);
    const targetNumber = 98;
    const containerRef = useRef(null);

    // Use our custom hook to add the "animate" class after a delay when visible
    useIntersectionAnimation(containerRef, 100, 0.5, "animate");
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const duration = 5000; // Animation duration in ms
                    const stepTime = duration / targetNumber;

                    const interval = setInterval(() => {
                        start += 1;
                        setCount(start);
                        if (start >= targetNumber) {
                            clearInterval(interval);
                        }
                    }, stepTime);
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, []);

    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const ClientReviewData = [
        {
            name: "Mr. Dev Aneja",
            position: "Assistant Vice President - Invest India",
            postionPost: "Ministry of Commerce",
            content: (
                <>
                    <p>
                        Hi all, I have been taking investment advisory and making my investments through SoulFinspire. I must admit that my experience has been extremely good. The team here is very knowledgeable and gives highly customized services.
                    </p>
                    <br />
                    <p>
                        Over and above this, the team here proposes a re-jig of the portfolio as and when needed. I would recommend all long-term investors to consult SoulFinspire.
                    </p>
                </>
            ),
        },
        {
            name: "Mr. Amit Raturi",
            position: "Export Head",
            postionPost: "",
            content: (
                <>
                    <p>SoulFinspire was introduced to me by my colleague. I was investing in mutual funds earlier also but when I first wanted to begin investing in SoulFinspire was a different ball game. What I can say about the SoulFinspire team is highly professional, knowledgeable, and quick responsive. They have their own app called Wealth Elite which makes it easier for people to see their status. </p>
                    <br />
                    <p>I would like to thank SoulFinspire for taking care of my investments and for immediate support whenever I required and hoping that this relationship will go long. </p>
                </>
            ),
        },
        {
            name: "Mr. Hitesh Trivedi ",
            position: "Businessman",
            postionPost: "",
            content: (
                <>
                    <p>
                        We are investor with Raj Shah as our advisor and manager. We are extremely happy with services provided by him and his company SoulFinspire
                    </p>
                    <br />
                    <p>
                        Everything is very transparent starting with pre investment discussion of our goals and needs. Fee structure is very acceptable and can be adjusted according to investor ideas like performance based.

                    </p>
                    <br />
                    <p>Monthly reporting is very timely and simple to understand and so is year-end reporting for tax purposes. All transactions are thru bank only. There is no pressure to invest. “We are very happy and would recommend anyone
                    </p>
                </>
            ),
        },
        {
            name: "Ms. Ratna Shah",
            position: "Manager",
            postionPost: "Flamingo Transworld Pvt. Ltd.",
            content: (
                <>
                    <p>
                        The service from Soul Inc was superb. Raj and team helped me with proper asset allocation in debt and equity. My portfolio has given amazing returns. Choice of mutual funds was on point considering the timing of the market.
                    </p>

                </>
            ),
        },
    ];

    return (
        <section>
            <div className="sectionContainerForSidePadding">
                <div className="MaxWidthContainer sliteSectionLikePadding">
                    <SectionHeading
                        text="Reviews"
                        color="black"
                        valueOfBorder="1px solid black"
                        beforeBgColor="brand"
                    />
                    <div id="TestimonialsContainerRow">
                        <Row>
                            <Col lg={14}>
                                <div style={{ width: "100%" }}>
                                    <div>
                                        <h2
                                            className="PrimaryHeadingStyle"
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                            style={{ margin: "0px" }}
                                        >
                                            What our <span>Customers</span> Say?
                                        </h2>
                                        <br />
                                        <p>
                                            We value the trust of our clients and always strive to
                                            provide the best financial solutions for them.
                                        </p>
                                    </div>
                                    <div className="PaddingAdjustHeadingContainer" id="SwiperContainerAdjust">
                                        <div className="ReviewSwiperContentContainer PaddingAdjustHeadingContainer" style={{ paddingBottom: "0px" }}>
                                            <Swiper
                                                spaceBetween={30}
                                                centeredSlides={true}
                                                loop={true}
                                                autoplay={{
                                                    delay: 2500,
                                                    disableOnInteraction: false,
                                                }}
                                                speed={800}
                                                modules={[Autoplay, Pagination, Navigation]}
                                                className="mySwiper"
                                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                                onSlideChange={(swiper) =>
                                                    setActiveIndex(swiper.realIndex)
                                                }
                                            >
                                                {ClientReviewData.map((item, index) => (
                                                    <SwiperSlide key={index}>
                                                        <div>
                                                            <div>
                                                                <p>{item.content}</p>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                            <div className="NameAboutDetailsContainer">
                                                <Row>
                                                    <Col lg={18} md={24} style={{ width: "100%" }}>
                                                        <div>
                                                            <div>
                                                                <h2>{ClientReviewData[activeIndex].name} ({ClientReviewData[activeIndex].position})</h2>
                                                                <p>{ClientReviewData[activeIndex].postionPost}</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6} md={24} style={{ width: "100%" }}>
                                                        <div className="CustomNavigationButtons">
                                                            <div className="SwiperBtnContainer">
                                                                <button className="swiper-button prev" onClick={handlePrev}>
                                                                    <MdKeyboardArrowLeft size={24} />
                                                                </button>
                                                                <button className="swiper-button next" onClick={handleNext}>
                                                                    <MdKeyboardArrowRight size={24} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={10}>
                                <div className="TestimonialsSectionImage" ref={countRef}>
                                    <div>
                                        <div className="AbsoluteContentContainer">
                                            <p>{count}%</p>
                                            <p>Client Satisfaction Rate</p>
                                        </div>
                                        <div className="AnimatedSlideWhiteLayerAnimation" ref={containerRef}>
                                            <div className="AnimatedWhiteLayer">

                                            </div>
                                            <img src="https://cdn.prod.website-files.com/67765ad592aee8ab80237e9b/677df7303175761c2bfd1181_review-img.jpg" alt="" style={{ width: "100%" }} loading="lazy"/>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SoulTestimonial;
