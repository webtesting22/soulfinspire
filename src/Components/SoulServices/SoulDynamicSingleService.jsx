import React from "react";
import { useParams } from "react-router-dom";
import "./SoulServices.css";
import { ServiceData } from "./SoulServicesData";
import { Row, Col } from "antd";
import "./SingleServiceContainer.css"
const SoulDynamicSingleService = () => {
    const { serviceId } = useParams();
    const selectedService = ServiceData.find(item => item.id === serviceId);

    if (!selectedService) return <div>Service not found</div>;

    return (
        <div className="SingleServicePage">
            <div className="SingleServiceBanner"
            // style={{ backgroundImage: `url(${selectedService.backgroundImage})` }}
            >
                {/* <h1>{selectedService.title}</h1> */}
                <div className="SectionContainer">
                    <div className="MaxWidthContainer" id="HomepageContainerPaddingAdjust" style={{ overflow: "unset" }}>
                        <div>
                            <div id="SingleServicePageTopHeroSection">
                                <Row>
                                    <Col lg={10}>
                                        <div>
                                            <div className="SingleServicesMainGraphicImage">
                                                <img src="https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                            </div>
                                            <br /><br />
                                            <div>
                                                <p>{selectedService.topBio}</p>
                                                <div className="PrimarybtnContainer" data-aos="fade-up"
                                                    data-aos-duration="2000" data-aos-delay="800">
                                                    <button>View More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={14}>
                                        <div>
                                            <div>
                                                <div>
                                                    <span className="TagEdit" data-aos="fade-up"
                                                        data-aos-duration="3000">{selectedService.title}</span>
                                                    <h1 className="PrimaryHeadingStyle" data-aos="fade-up"
                                                        data-aos-duration="2000" data-aos-delay="200">{selectedService.tagline}</h1>
                                                    <br />
                                                    <div className="ContentBottomImageStyle">
                                                        <img src="https://images.unsplash.com/photo-1614029655965-2464911905a4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="SectionContainer" style={{ paddingTop: "0px" }}>
                <div className="MaxWidthContainer" id="HomepageContainerPaddingAdjust" style={{ overflow: "unset" }}>
                    <div className="SingleServiceContent">
                        {selectedService.description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoulDynamicSingleService;
