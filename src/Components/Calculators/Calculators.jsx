import React, { useState, useEffect } from "react";
import { Row, Col, Tabs } from "antd";
import { useLocation } from "react-router-dom";
import SIPCalculator from "./SIPCalculator/SIPCalculator";
import LumpSumCalculator from "./LumpSumCalculator/LumpSumCalculator";
import RetirementCalculator from "./RetirementCalculator/RetirementCalculator";
import NavigationLinks from "../Navigation/NavigationLinks";
import "./Calculators.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import HouseCalculator from "./HouseCalculator/HouseCalculator";
import CarPlanningCalculator from "./CarPlanningCalculator/CarPlanningCalculator";
const { TabPane } = Tabs;

const Calculators = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tabParam = queryParams.get("tab");

    const calculatorNav = NavigationLinks.find(item => item.link === "Calculators");
    const calculatorTabs = calculatorNav ? calculatorNav.sublinks : [];

    // Set the default active tab based on URL query param or the first sublink
    const [activeTab, setActiveTab] = useState(tabParam || (calculatorTabs.length > 0 ? calculatorTabs[0].link : ""));

    useEffect(() => {
        if (tabParam) {
            setActiveTab(tabParam);
        }
    }, [tabParam]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section id="CalculatorsContainer">
                <div className="SectionContainer" style={{paddingBottom:"0px"}}>
                    <div className="MaxWidthContainer" id="HomepageContainerPaddingAdjust">
                        <Row>
                            <Col lg={24}>
                                <span className="TagEdit" data-aos="fade-up" data-aos-duration="3000">
                                    Our Soulfinspire Planning

                                </span>
                                <h1 className="PrimaryHeadingStyle" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
                                    Comprehensive <span>Investment</span> & Lending <span>Solutions</span> at Your Fingertips
                                </h1>
                            </Col>
                            {/* <Col lg={10}>
                                <p data-aos="fade-left" data-aos-duration="2000" data-aos-delay="300">
                                    We offer a comprehensive range of Investment products such as Mutual Funds, Insurance, Stock Broking, Fixed Income Products and Properties as well as lending solutions through dedicated web, App and Chatbot platforms.
                                </p>
                            </Col> */}
                        </Row>
                        <div className="sliteSectionLikePadding">
                            <SectionHeading text="Soulfinspire Planning" valueOfBorder="1px solid black" color="black" beforeBgColor="black" />

                            <div className="sliteSectionLikePadding " style={{paddingBottom:"0px"}}>
                                <Tabs activeKey={activeTab} onChange={setActiveTab}>
                                    {calculatorTabs.map((calculator) => (
                                        <TabPane tab={calculator.link} key={calculator.link} />
                                    ))}
                                </Tabs>

                                <div style={{ marginTop: "20px" }} className="AllComponentsContainer">
                                    {activeTab === "SIP Planning" && <SIPCalculator />}
                                    {activeTab === "Lumpsum Planning" && <LumpSumCalculator />}
                                    {activeTab === "Retirement Planning" && <RetirementCalculator />}
                                    {activeTab === "House Planning" && <HouseCalculator/>}
                                    {activeTab === "Marriage Planning" && <p>Marriage Planning Calculator Coming Soon...</p>}
                                    {activeTab === "Vacation Planning" && <p>Vacation Calculator Coming Soon...</p>}
                                    {activeTab === "Education Planning" && <p>Education Calculator Coming Soon...</p>}
                                    {activeTab === "Car Planning" && <CarPlanningCalculator/>}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Calculators;
