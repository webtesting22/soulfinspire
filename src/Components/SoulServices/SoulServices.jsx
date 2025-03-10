import React, { useEffect } from "react";
import { Row, Col } from "antd";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./SoulServices.css"
import { Link, useLocation } from "react-router-dom";
const SoulServices = () => {

    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace("#", ""); // Remove "#" from hash
            const section = document.getElementById(sectionId);
            if (section) {
                const yOffset = -200; // Offset from the top
                const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }
    }, [location]);
    const ServicesCards = [
        {
            title: "MUTUAL FUNDS",
            backgroundImage: "/Images/SoulServicesImage.webp",
            content: <>
                <p>India’s 5th largest Mutual Fund distributor offering a wide range of Mutual Fund product & features like SIP, Trigger facility, Risk Profiling, Goal Planner, INSTAFUNDZ, Gold Accumulation Plan, Smart Combos and Asset Allocation Combos all under one place at www.fundzbazar.com. One can invest through App and Chat bot as well.</p>
                <p><b>For more information visit <Link to="https://www.fundzbazar.com" target="_blank">www.fundzbazar.com</Link>
                </b></p>
            </>
        },
        {
            title: "INSURANCE",
            backgroundImage: "/Images/SoulServicesImage.webp",
            content: <>
                <p>Providing Life and General Insurance solutions through state of the art online platform and App backed by Gennext Insurance Brokers Pvt. Ltd., an IRDA registered Insurance Broking Company. One can Select, Compare, Buy, Renew and Manage their policies online from anywhere through www.policyworld.com. Policy world has partnered with leading insurers to provide insurance solutions related to Life, Health, Personal Accident, Critical Illness, Travel, Car and Two wheeler. </p>
                <p><b>For more information visit <Link to="https://www.policyworld.com" target="_blank">www.policyworld.com</Link></b></p>
            </>
        },
        {
            title: "Tax Planning",
            backgroundImage: "/Images/SoulServicesImage.webp",
            content: <>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, tempora tenetur deleniti odit aut, possimus sit iste voluptas eum, similique magnam. Quasi repellendus sequi similique eius placeat praesentium architecto dignissimos?</p>
                <p><b>For more information visit <Link to="https://www.policyworld.com" target="_blank">www.policyworld.com</Link></b></p>
            </>
        },

        {
            title: "Financial Planning",
            backgroundImage: "/Images/SoulServicesImage.webp",
            content: <>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, tempora tenetur deleniti odit aut, possimus sit iste voluptas eum, similique magnam. Quasi repellendus sequi similique eius placeat praesentium architecto dignissimos?</p>
                <p><b>For more information visit <Link to="https://www.policyworld.com" target="_blank">www.policyworld.com</Link></b></p>
            </>
        },
        {
            title: "FIXED INCOME",
            backgroundImage: "/Images/SoulServicesImage.webp",
            content: <>
                <p>Fixed Income Products are offered to investors who need fixed and regular income and wish to diversify their portfolio. Through Fundzbazar.com we provide paperless Investment solution for Gsec, SDL, Fixed Deposits & Liquiloans.</p>
                <p><b>For more information visit <Link to="https://www.fundzbazar.com" target="_blank">www.fundzbazar.com</Link></b></p>
            </>
        },


    ]
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
                                    <Col lg={14}>
                                        <div>
                                            <span className="TagEdit" data-aos="fade-up"
                                                data-aos-duration="3000">Our Soulfinspire Services</span>
                                            <h1 className="PrimaryHeadingStyle" data-aos="fade-up"
                                                data-aos-duration="2000" data-aos-delay="200">
                                                Comprehensive <span>Investment</span> & Lending <span>Solutions</span> at Your Fingertips
                                            </h1>
                                        </div>
                                    </Col>
                                    <Col lg={10}>
                                        <div>
                                            <div>
                                                <p data-aos="fade-left"
                                                    data-aos-duration="2000" data-aos-delay="300">

                                                    We offer a comprehensive range of Investment products such as Mutual Funds, Insurance, Stock Broking, Fixed Income Products and Properties as well as lending solutions through dedicated web, App and Chatbot platforms.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="OurServicesContainer">
                            <div className="sliteSectionLikePadding">
                                <SectionHeading text="Soulfinspire Provides" valueOfBorder="1px solid black" color="black" beforeBgColor="black" />
                                <div className="PaddingAdjustHeadingContainer">
                                    {ServicesCards.map((item, index) => (
                                        <Row key={index} id={item.title.replace(/\s+/g, "").toLowerCase()}>
                                            <Col lg={24} className="OurServicesCardsContainer">
                                                <div>
                                                    <div className="OverlayImage">
                                                        <img src={item.backgroundImage} alt="" />
                                                    </div>
                                                    <div className="ContentContainerOurServices">
                                                        <div>
                                                            <h2 style={{ textTransform: "uppercase" }}>{item.title}</h2>
                                                            <br />
                                                            <p>{item.content}</p>
                                                        </div>
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
    )
}
export default SoulServices