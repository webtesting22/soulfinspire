import React, { useEffect } from "react";
import { Row, Col } from "antd";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./SoulServices.css"
import { Link, useLocation } from "react-router-dom";
import { ServiceData } from "./SoulServicesData";
import { AnimatedCards } from "./SoulServicesData";
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
    const PerfectMatchMutualFundsCardsData = [
        {
            title: "Mutual Funds",
            content: <>India’s 5th largest Mutual Fund distributor, offering a comprehensive range of investment options, including SIPs, Trigger Facility, Risk Profiling, Goal Planner, INSTAFUNDZ, Gold Accumulation Plan, Smart Combos, and Asset Allocation Combos—all in one place at www.fundzbazar.com. Invest easily via the app or chatbot.</>,
            img: "/Images/ServicesIcons/MutualFund.svg",
        },
        {
            title: "Insurance",
            content: <>Offering Life and General Insurance solutions through a cutting-edge online platform and app, backed by Gennext Insurance Brokers Pvt. Ltd., an IRDA-registered insurance broking company. Easily select, compare, buy, renew, and manage policies anytime at www.policyworld.com. Partnered with leading insurers, Policy World provides coverage for Life, Health, Personal Accident, Critical Illness, Travel, Car, and Two-Wheeler insurance.</>,
            img: "/Images/ServicesIcons/Insurance.svg",
        },
        {
            title: "Alternative Investments",
            content: <>​We provide access to third-party Portfolio Management Services (PMS) and Alternative Investment Funds (AIFs), offering sophisticated investment strategies such as venture capital, private equity, hedge funds, and long-short strategies. Our Prudent Partners and Relationship Managers, located in your city, are available to guide you in developing investment strategies tailored to your risk appetite and return expectations.</>,
            img: "/Images/ServicesIcons/Loan.svg"
        },
        {
            title: "Fixed Income",
            content: <>Fixed Income Products cater to investors seeking stable, regular returns while diversifying their portfolios. Through Fundzbazar.com, we offer a seamless, paperless investment solution for G-Secs, SDLs, Fixed Deposits, and Liquiloans. Visit our website for more details.</>,
            img: "/Images/ServicesIcons/FixedIncome.svg",
        }
    ]

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
                                            {/* <span className="TagEdit" data-aos="fade-up"
                                                data-aos-duration="3000">Our Soulfinspire Services</span> */}
                                            <h1 className="PrimaryHeadingStyle" data-aos="fade-up"
                                                data-aos-duration="2000" data-aos-delay="200">
                                               Our <span>Products</span>

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
                        <br /><br />
                        <AnimatedCards cardsData={PerfectMatchMutualFundsCardsData} />
                        {/* <div className="OurServicesContainer">
                            <div className="sliteSectionLikePadding" style={{ paddingBottom: "0px" }}>
                                <SectionHeading text="Soulfinspire Provides" valueOfBorder="1px solid black" color="black" beforeBgColor="black" />
                                <div className="PaddingAdjustHeadingContainer" style={{ paddingBottom: "0px" }}>
                                    <Row id="ServicesCardAdjust">
                                        {ServiceData.map((item, index) => (
                                            <Col lg={24} key={index} id={item.title.replace(/\s+/g, "").toLowerCase()} data-aos="fade-up"
                                                data-aos-duration="800" data-aos-delay={index * 200}>
                                                <div className="OurServicesCardsContainer">
                                                    <div className="OverlayImage">
                                                        <img src={item.backgroundImage} alt="" loading="lazy" />
                                                    </div>
                                                    <div className="ContentContainerOurServices">
                                                        <div>
                                                            <h2 style={{ textTransform: "uppercase" }}>{item.title}</h2>
                                                           
                                                            <p style={{ marginTop: "8px" }}>{item.tagline}</p>
                                                          
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
                        </div> */}

                    </div>
                </div>
            </section>
        </>
    )
}
export default SoulServices