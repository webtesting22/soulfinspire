import React, { useState } from "react";
import { Row, Col, Tabs } from "antd";
import SIPCalculator from "./SIPCalculator/SIPCalculator";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Calculators.css"
import NavigationLinks from "../Navigation/NavigationLinks";
import LumpSumCalculator from "./LumpSumCalculator/LumpSumCalculator";
import RetirementCalculator from "./RetirementCalculator/RetirementCalculator";
const { TabPane } = Tabs;
const Calculators = () => {
    // Extract the sublinks from "Calculators"
    const calculatorNav = NavigationLinks.find(item => item.link === "Calculators");
    const calculatorTabs = calculatorNav ? calculatorNav.sublinks : [];

    // Set first sublink as the default active tab
    const [activeTab, setActiveTab] = useState(calculatorTabs.length > 0 ? calculatorTabs[0].link : "");


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
                        <div className="sliteSectionLikePadding">
                            {/* <SectionHeading text="Soulfinspire Provides" valueOfBorder="1px solid black" color="black" beforeBgColor="black" /> */}


                            <Tabs defaultActiveKey={activeTab} onChange={setActiveTab}>
                                {calculatorTabs.map((calculator, index) => (
                                    <TabPane tab={calculator.link} key={calculator.link} />
                                ))}
                            </Tabs>

                            <div style={{ marginTop: "20px" }}>
                                {activeTab === "SIP Planning" && <SIPCalculator />}
                                {activeTab === "Lumpsum Planning" && <LumpSumCalculator/>}
                                {activeTab === "Retirement Planning" && <RetirementCalculator/>}
                                {activeTab === "House Planning" && <p>House Planning Calculator Coming Soon...</p>}
                                {activeTab === "Marriage Planning" && <p>Marriage Planning Calculator Coming Soon...</p>}
                                {activeTab === "Vacation Planning" && <p>Vacation Calculator Coming Soon...</p>}
                                {activeTab === "Education Planning" && <p>Education Calculator Coming Soon...</p>}
                                {activeTab === "Car Planning" && <p>Car Loan Calculator Coming Soon...</p>}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Calculators