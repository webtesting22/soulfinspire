import React, { useState, useEffect, useRef } from "react";
import "./AttachBack.css"
import { Row, Col } from "antd";
import { IoArrowForward } from "react-icons/io5";
const AttachBackHome = () => {
    const [count, setCount] = useState(0);
    const sectionRef = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
        const animateCounter = () => {
            let start = 0;
            const end = 86;
            const duration = 4000; // 1.5 seconds
            const increment = end / (duration / 16); // ~16ms per frame

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    start = end;
                    clearInterval(timer);
                }
                setCount(Math.floor(start));
            }, 16);
        };

        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animateCounter();
                } else {
                    setCount(0); // Reset counter when out of view
                }
            },
            { threshold: 0.5 } // Trigger when 50% of section is visible
        );

        if (sectionRef.current) {
            observerRef.current.observe(sectionRef.current);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);
    return (
        <>
            <section ref={sectionRef}>
                <div className="sectionContainerForSidePadding AttachBackgroundImage">
                    <div className="OverlayBackAttachBackground">

                    </div>
                    <div className="MaxWidthContainer sliteSectionLikePadding">
                        <div className="ContentContainerAttachBack">
                            <div>
                                <Row>
                                    <Col lg={12}>
                                        <div data-aos="fade-up"
                                            data-aos-duration="1200">
                                            <div>
                                                <h2 className="PrimaryHeadingStyle" style={{ color: "white" }}>How <span>confident</span> are you that you'll be able to <span>achieve all</span> your <span>financial goals in the future</span>?</h2>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div >
                                <div className="AttachBackContentParagraphEdit">
                                    <p data-aos="fade-left"
                                        data-aos-duration="1200"> <span>{count}%</span> of our clients who have gone through the <b>Confident Investment</b> approach feel confident they will reach to the goals.</p>
                                    <br />
                                    <div className='SwiperReadMoreBtnContainer' >
                                        <button>Let's Get You Started <IoArrowForward /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AttachBackHome