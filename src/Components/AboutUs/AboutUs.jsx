import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "antd";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./AboutUs.css";
import OurApproach from "../OurApproach/OurApproach";
import MainPrinciples from "../MainPrinciples/MainPrinciples";
import SoulTeam from "../SoulTeam/SoulTeam";
import { GoArrowUp } from "react-icons/go";


const AboutUs = () => {
    const countersRef = useRef([]);
    const [counts, setCounts] = useState(
        Array(4).fill(0) // Initialize all counters with 0
    );

    const OurAchievementsData = [
        { counterNumber: 250, suffix: "+", title: "Investors", content: "Serving Over 3000 Investors Across India and globe, we manage diverse portfolios and provide customized investment solutions." },
        { counterNumber: 200, suffix: "Cr", title: "Crore", content: "Managing ₹600 Crores of Investments. We ensure prudent management and growth of our clients' wealth." },
        { counterNumber: 5, suffix: "+", title: "Experts", content: "Our team includes some of the brightest minds in the financial industry, dedicated to your peaceful investment journey." },
        { counterNumber: 30, suffix: "+", title: "Experience", content: "75+ Years of Combined Experience. Our team brings a wealth of knowledge and expertise to every client interaction." }
    ];

    useEffect(() => {
        const animateCounter = (index, endValue) => {
            let start = 0;
            const duration = 6000; // Animation duration in milliseconds
            const increment = endValue / (duration / 16); // Approx. 16ms per frame

            const timer = setInterval(() => {
                start += increment;
                if (start >= endValue) {
                    start = endValue;
                    clearInterval(timer);
                }
                setCounts(prevCounts => {
                    const newCounts = [...prevCounts];
                    newCounts[index] = Math.floor(start);
                    return newCounts;
                });
            }, 16);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        animateCounter(index, OurAchievementsData[index].counterNumber);
                    } else {
                        setCounts(prevCounts => {
                            const newCounts = [...prevCounts];
                            newCounts[index] = 0; // Reset when out of view
                            return newCounts;
                        });
                    }
                });
            },
            { threshold: 0.1 } // Trigger animation when 50% visible
        );

        countersRef.current.forEach((el, index) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section>
                <div className="SectionContainer">
                    {/* <img src="/Images/CommonAllPagesTop.webp" alt="" /> */}
                    <div className="MaxWidthContainer" id="HomepageContainerPaddingAdjust">
                        <div>
                            <Row>
                                <Col lg={24}>
                                    <div>
                                        {/* <span className="TagEdit" data-aos="fade-up"
                                            data-aos-duration="3000">About Soulfinspire</span> */}
                                        <h1 className="PrimaryHeadingStyle" data-aos="fade-up"
                                            data-aos-duration="2000" data-aos-delay="200">
                                            Discover Our <span>Vision</span>, Trust Our <span>Expertise</span>.
                                        </h1>
                                        {/* <br /> */}
                                        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ullam voluptatem sequi mollitia reprehenderit blanditiis, exercitationem nobis, aliquam amet ut iure nisi soluta, reiciendis cumque hic laboriosam ea totam enim.</p> */}
                                    </div>
                                </Col>
                                {/* <Col lg={10}>
                                    <div>
                                        <div>
                                            <p data-aos="fade-left"
                                                data-aos-duration="2000" data-aos-delay="300">
                                                We don’t aim to be just your financial advisors, those are available in plenty, but what we aim for is to be give you 360° insight and plan your investments with full trust and transparency such that any unwanted situations can be mitigated easily.</p>
                                        </div>
                                    </div>
                                </Col> */}
                            </Row>
                        </div>
                    </div>
                </div>

                <div className="sectionContainerForSidePadding" id="OurAchivementsContainer">
                    <img src="/Images/GrowthArrowImage.jpg" alt="" />
                    <div className="MaxWidthContainer sliteSectionLikePadding">
                        {/* <SectionHeading text="Soulfinspire Achievements" color="white" beforeBgColor="white" /> */}
                        <div>
                                    <h2 className="PrimaryHeadingStyle" data-aos="fade-up"
                                        data-aos-duration="2000" data-aos-delay="200">Our Achievements</h2>
                                </div>
                        <div >
                            <Row className="PaddingAdjustHeadingContainer" style={{ paddingBottom: "0px" }}>
                                {OurAchievementsData.map((item, index) => (
                                    <Col lg={6} md={8} key={index} data-aos="fade-up"
                                        data-aos-duration="1000" data-aos-delay={index * 200}>
                                        <div className="AchievementsCountersContainer" ref={(el) => countersRef.current[index] = el}>
                                            <h2 className="CounterFont"><GoArrowUp style={{ fontSize: "30px" }} /> {item.prefix} {/* Prefix Icon */}
                                                {counts[index]} {/* Animated Counter */}
                                                {item.suffix} {/* Suffix Text */}</h2>
                                            <br /><br />
                                            <h2>{item.title}</h2>
                                            <br />
                                            <p>{item.content}</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>

                    </div>
                </div>
                <div className="SectionContainer" style={{paddingBottom:"0px"}}>
                    {/* <img src="/Images/CommonAllPagesTop.webp" alt="" /> */}
                    <div className="MaxWidthContainer" id="HomepageContainerPaddingAdjust">
                        <div>
                            <p><span style={{fontSize:"30px",fontWeight:"400"}}>W</span>e believe wealth management should be as personal as your financial journey. Our approach is built on understanding what truly matters to you—your goals, your lifestyle, and your vision for the future. With a blend of strategic planning, smart investing, and proactive guidance, we craft tailored solutions that grow and protect your wealth. No one-size-fits-all advice here—just a thoughtful, hands-on partnership designed to keep you confident in every financial decision.
                            </p>
                            <br />
                            <p><b>Started in 2003</b>, today Soul Finspire is one of <b>India's fastest growing</b> wealth management company. We sensed the potential and under penetration of mutual funds early on, which laid the foundation of Soul Finspire. Since then we have expanded to offer financial services and products such as <b>Mutual Funds, Insurance, Fixed Income Products, PMS-AIF and Fixed Income Products.</b></p>
                        </div>
                    </div>
                </div>
            </section>
            <SoulTeam />

            <OurApproach />
            <MainPrinciples />
        </>
    );
};

export default AboutUs;
