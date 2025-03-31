import React, { useEffect } from "react";
import { Row, Col } from "antd";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./SoulServices.css"
import { Link, useLocation } from "react-router-dom";
import { ServiceData } from "./SoulServicesData";
const SoulServices = () => {

    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace("#", ""); 
            const section = document.getElementById(sectionId);
            if (section) {
                const yOffset = -200; // Offset from the top
                const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }
    }, [location]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section>
                <div className="SectionContainer">
                    <div className="MaxWidthContainer" id="HomepageContainerPaddingAdjust">
                        <div>
                            <div>
                                <Row>
                                    <Col lg={24}>
                                        <div>
                                            <span className="TagEdit" data-aos="fade-up"
                                                data-aos-duration="3000">Our Soulfinspire Services</span>
                                            <h1 className="PrimaryHeadingStyle" data-aos="fade-up"
                                                data-aos-duration="2000" data-aos-delay="200">
                                                Comprehensive <span>Investment</span> & Lending <span>Solutions</span> at Your Fingertips
                                            </h1>
                                        </div>
                                    </Col>
                                    {/* <Col lg={10}>
                                        <div>
                                            <div>
                                                <p data-aos="fade-left"
                                                    data-aos-duration="2000" data-aos-delay="300">

                                                    We offer a comprehensive range of Investment products such as Mutual Funds, Insurance, Stock Broking, Fixed Income Products and Properties as well as lending solutions through dedicated web, App and Chatbot platforms.</p>
                                            </div>
                                        </div>
                                    </Col> */}
                                </Row>
                            </div>
                        </div>
                        <div className="OurServicesContainer">
                            <div className="sliteSectionLikePadding" style={{ paddingBottom: "0px" }}>
                                <SectionHeading text="Soulfinspire Provides" valueOfBorder="1px solid black" color="black" beforeBgColor="black" />
                                <div className="PaddingAdjustHeadingContainer" style={{ paddingBottom: "0px" }}>
                                    <Row id="ServicesCardAdjust">
                                        {ServiceData.map((item, index) => (
                                            <Col lg={12} key={index} id={item.title.replace(/\s+/g, "").toLowerCase()} data-aos="fade-up"
                                                data-aos-duration="800" data-aos-delay={index * 200}>
                                                <div className="OurServicesCardsContainer">
                                                    <div className="OverlayImage">
                                                        <img src={item.backgroundImage} alt="" loading="lazy" />
                                                    </div>
                                                    <div className="ContentContainerOurServices">
                                                        <div>
                                                            <h2 style={{ textTransform: "uppercase" }}>{item.title}</h2>
                                                            {/* <br /> */}
                                                            <p style={{ marginTop: "8px" }}>{item.tagline}</p>
                                                            {/* <br /> */}
                                                            <div className="PrimarybtnContainer" >
                                                                <Link to={`/soul-services/${item.title.replace(/\s+/g, "-").toLowerCase()}`}>
                                                                    <button className="ReadMoreButton">Read More</button>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </Col>

                                        ))}
                                    </Row>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default SoulServices