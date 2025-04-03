import React from "react";
import "./OurApproach.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Row, Col } from "antd";

const OurApproach = () => {
    const OurApproachData = [
        {
            title: "Understanding You",
            image: "/Images/OurApprochIcons/AssesYouNeed.svg",
            content: (
                <>We start with an in-depth conversation to explore your goals, risk tolerance, and personal preferences. This thorough assessment helps us gain valuable insight into your financial vision, ensuring we craft a strategy tailored to your aspirations and the path you want to take.
                </>
            ),
        },
        {
            title: "Designing Your Personalized Strategy",
            image: "/Images/OurApprochIcons/CreateaCustomRoadmap.png",
            content: (
                <>
                    With your goals in mind, we build a tailored investment plan that aligns with your needs. This includes smart asset allocation, carefully chosen investment products, and a clear roadmap to guide your financial journey. Every detail is customized to keep you on track toward your objectives with a focused, strategic approach.

                </>
            ),
        },
        {
            title: "Putting Your Plan into Action",
            image: "/Images/OurApprochIcons/Implement.png",
            content: (
                <>
                    Once we finalize your custom strategy, we take care of the investment process for you. Our team continuously monitors your portfolio, making sure it stays aligned with your goals. With regular updates and insights, you’ll always know where you stand—while we handle the details with expert care.


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
                                {/* <SectionHeading text="Our Approach" color="black" valueOfBorder="1px solid black" beforeBgColor="brand" /> */}
                                <div>
                                    <h2 className="PrimaryHeadingStyle" data-aos="fade-up"
                                        data-aos-duration="2000" data-aos-delay="200">Our <span>Approach</span></h2>
                                </div>
                                <br /><br />
                                <div className="FlexContainer">
                                    {OurApproachData.map((item, index) => (
                                        <Row key={index} gutter={[16, 16]}>
                                            <Col lg={11} style={{ opacity: index % 2 === 0 ? '1' : '0', transition: 'opacity 0.5s ease' }} className="DisplayProperty">
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
                                            <Col lg={11} style={{ opacity: index % 2 !== 0 ? '1' : '0', transition: 'opacity 0.5s ease' }} className="DisplayProperty">
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
