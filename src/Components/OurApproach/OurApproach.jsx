import React from "react";
import "./OurApproach.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Row, Col } from "antd";

const OurApproach = () => {
    const OurApproachData = [
        {
            title: "Assess Your Needs",
            image: "/Images/OurApprochIcons/AssesYouNeed.svg",
            content: (
                <>
                    We begin by having an in-depth conversation to understand your investment
                    milestones, volatility tolerance, and investment preferences. This
                    comprehensive assessment allows us to gain deep insights into your
                    aspirations and the financial landscape you wish to navigate.
                </>
            ),
        },
        {
            title: "Create a Custom Roadmap",
            image: "/Images/OurApprochIcons/CreateaCustomRoadmap.png",
            content: (
                <>
                    With a clear understanding of your needs, we craft a personalized
                    investment strategy. This strategy includes optimum asset allocation,
                    careful selection of suitable investment products, and a detailed
                    investment roadmap. Every aspect of the strategy is tailored to meet
                    your specific objectives, ensuring a focused and individualized approach.
                </>
            ),
        },
        {
            title: "Implement and Monitor",
            image: "/Images/OurApprochIcons/Implement.png",
            content: (
                <>
                    Once your custom plan is mutually agreed, we handle the implementation
                    of your investments. Our team diligently reviews your portfolio. We
                    provide you with regular updates and feedback, so you can rest easy
                    knowing your financial future is in expert hands.
                </>
            ),
        },
    ];

    return (
        <>
            <section id="OurApproachContainer">
                <div className="sectionContainerForSidePadding" style={{ overflow: "hidden" }}>
                    <div className="MaxWidthContainer sliteSectionLikePadding" style={{ overflow: "unset" }}>
                        <div style={{ position: "relative" }}>
                            <div>
                                <SectionHeading text="Our Approach" color="black" valueOfBorder="1px solid black" beforeBgColor="brand" />
                                <div className="FlexContainer">
                                    {OurApproachData.map((item, index) => (
                                        <Row key={index} gutter={[16, 16]}>
                                            <Col lg={11} style={{ opacity: index % 2 === 0 ? '1' : '0', transition: 'opacity 0.5s ease' }}>
                                                <div
                                                    className="OurApprochCardContainer"
                                                    data-aos="fade-left"
                                                    data-aos-duration="1000"
                                                    data-aos-delay={index * 300}
                                                >
                                                    <div>

                                                        <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
                                                            <img src={item.image} alt="" loading="lazy" />
                                                        </div>
                                                        <h2 style={{ textAlign: "end" }}>{item.title}</h2>
                                                        <br />
                                                        <p style={{ textAlign: "end" }}>{item.content}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={2}>
                                                <div>
                                                    <div className="timelineAnimatedLine">
                                                        <div className="NumberingContainer">
                                                            <div data-aos="fade-up"
                                                                data-aos-duration="1000"
                                                                data-aos-delay={index * 300}>
                                                                <span>{index + 1} </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={11} style={{ opacity: index % 2 !== 0 ? '1' : '0', transition: 'opacity 0.5s ease' }}>
                                                <div
                                                    className="OurApprochCardContainer"
                                                    data-aos="fade-left"
                                                    data-aos-duration="1000"
                                                    data-aos-delay={index * 300}
                                                >
                                                    <div>

                                                        <div style={{ width: "100%", display: "flex", justifyContent: "start" }}>
                                                            <img src={item.image} alt="" loading="lazy" />
                                                        </div>
                                                        <h2 style={{ textAlign: "start" }}>{item.title}</h2>
                                                        <br />
                                                        <p style={{ textAlign: "start" }}>{item.content}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurApproach;
