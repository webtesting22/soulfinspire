import React from "react";
import "./OurApproach.css"
import SectionHeading from "../SectionHeading/SectionHeading";
import { Row, Col } from "antd";
const OurApproach = () => {

    const OurApproachData = [
        {
            title: "Assess Your Needs",
            image: "/Images/OurApprochIcons/AssesYouNeed.svg",
            content: <>
                We begin by having an in-depth conversation to understand your investment milestones, volatility tolerance, and investment preferences. This comprehensive assessment allows us to gain deep insights into your aspirations and the financial landscape you wish to navigate.

            </>
        },
        {
            title: "Create a Custom Roadmap",
            content: <>
                With a clear understanding of your needs, we craft a personalized investment strategy. This strategy includes optimum asset allocation, careful selection of suitable investment products, and a detailed investment roadmap. Every aspect of the strategy is tailored to meet your specific objectives, ensuring a focused and individualized approach.
            </>
        },
        {
            title: "Implement and Monitor",
            image: "/Images/OurApprochIcons/ImplementMonitor.png",
            content: <>
                Once your custom plan is mutually agreed, we handle the implementation of your investments. Our team diligently reviews your portfolio. We provide you with regular updates and feedback, so you can rest easy knowing your financial future is in expert hands.
            </>
        }
    ]
    return (
        <>
            <section id="OurApproachContainer">
                <div className="sectionContainerForSidePadding" style={{ overflow: "hidden" }}>
                    <div className="MaxWidthContainer sliteSectionLikePadding" style={{ overflow: "unset" }}>
                        <div style={{ position: "relative" }}>
                            <div>

                                <Row>
                                    <Col lg={12}>
                                        <div className="OurApproachImagesContainer">

                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div>
                                            <SectionHeading text="Our Approach" color="black" valueOfBorder="1px solid black" beforeBgColor="brand" />

                                            <div className="FlexContainer">
                                                {OurApproachData.map((item, index) => (
                                                    <div key={index} className="OurApprochCardContainer" data-aos="fade-left"
                                                        data-aos-duration="1300" data-aos-delay={index * 400}>
                                                        <div>
                                                            <img src={item.image} alt="" />
                                                            
                                                            <h2>{item.title}</h2>
                                                            <br />
                                                            <p>{item.content}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <br /><br />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OurApproach