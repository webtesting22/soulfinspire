import React, { useRef } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Row, Col } from "antd";
import "./MainPrinciples.css"
import useIntersectionAnimation from "../SoulHome/useIntersectionAnimation";
const MainPrinciples = () => {
    const containerRef = useRef(null);

    // Use our custom hook to add the "animate" class after a delay when visible
    useIntersectionAnimation(containerRef, 100, 0.5, "animate");
    const CardsData = [
        {
            title: "Detailed market analysis for a smoother investment journey",
            tagline: "Our thorough research based on different markets, helps choose right business returns"
        },
        {
            title: "Expert assistance at fingertips to make your future better",
            tagline: "Our Expert advice helps you make tax efficient optimized  decisions"
        },
        {
            title: "Customized financial solutions for a well-built monetary growth",
            tagline: "Understanding your financial picture and managing  investments with risk tolerance and time horizon"
        }
    ]
    return (
        <>
            <section id="MainPrinciples">
                <div className="sectionContainerForSidePadding">
                    <div className="MaxWidthContainer sliteSectionLikePadding">
                        <SectionHeading text="Main Principles" color="black" valueOfBorder="1px solid black" beforeBgColor="brand" />
                        <div>
                            <Row>
                                <Col lg={12}>
                                    <div>
                                        <h1 className="PrimaryHeadingStyle" data-aos="fade-up"
                                            data-aos-duration="1000">
                                            Investment Solutions with <span>Trust</span> and <span>Transparency</span>
                                        </h1>
                                        <br /><br />
                                        <p data-aos="fade-up"
                                            data-aos-duration="1000">We don’t aim to be just your financial advisors, those are available in plenty, but what we aim for is to be give you 360° insight and plan your investments with full trust and transparency such that any unwanted situations can be mitigated easily.</p>
                                        <br />
                                        <div className="TagsContainer">
                                            {/* <ul> */}
                                            <span className="TagEdit" data-aos="fade-up"
                                                data-aos-duration="1000" data-aos-delay="300">Hyper Personalized Plans</span>
                                            <span className="TagEdit" data-aos="fade-up"
                                                data-aos-duration="1000" data-aos-delay="500">Data Driven Investment Decisions</span>
                                            <span className="TagEdit" data-aos="fade-up"
                                                data-aos-duration="1000" data-aos-delay="700">Use of Cutting edge Technology</span>
                                            <span className="TagEdit" data-aos="fade-up"
                                                data-aos-duration="1000" data-aos-delay="900">Constant Monitoring and Re-alignment of Investments</span>
                                            {/* </ul> */}
                                        </div>
                                        {/* <ul>
                                            <li>Hyper Personalized Plans</li>
                                            <li>Data Driven Investment Decisions</li>
                                            <li>Use of Cutting edge Technology</li>
                                            <li>Constant Monitoring and Re-alignment of Investments</li>
                                        </ul> */}
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="MainPrinciplesContainerImages">

                                        <div className="AnimatedSlideWhiteLayerAnimation" ref={containerRef}>
                                            <div className="AnimatedWhiteLayer">

                                            </div>
                                            <img src="/Images/MainPrinciples.webp" alt="" loading="lazy"/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}
export default MainPrinciples