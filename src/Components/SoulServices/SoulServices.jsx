import React, { useEffect } from "react";
import { Row, Col } from "antd";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./SoulServices.css"
import { Link, useLocation } from "react-router-dom";
import { ServiceData } from "./SoulServicesData";
import { AnimatedCards } from "./SoulServicesData";
const SoulServices = () => {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            if (hash) {
                // Determine viewport width
                const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
                const offset = isMobile ? -400 : 100; // Set offsets for mobile and desktop

                // Use a timeout to ensure the element is rendered before scrolling
                setTimeout(() => {
                    const element = document.getElementById(hash.substring(1));
                    if (element) {
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - offset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth',
                        });
                    }
                }, 0);
            } else {
                // Scroll to the top if no hash is present
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        handleScroll();

        // Optional: Add event listener for window resize to handle dynamic viewport changes
        window.addEventListener('resize', handleScroll);
        return () => window.removeEventListener('resize', handleScroll);
    }, [pathname, hash]);

    const PerfectMatchMutualFundsCardsData = [
        {
            title: "Mutual Funds",
            id: "MutualFunds",
            content: <>Mutual Funds are one of the most effective ways to grow wealth in India, offering a balance of diversification, professional management, and accessibility. Whether you're taking your first steps into investing or looking to optimize your existing portfolio, they provide a structured approach to achieving financial goals. With strong regulatory oversight, transparency, and a wide variety of options tailored to different risk appetites and time horizons, Mutual Funds empower investors to build long-term wealth with security.</>,
            img: "/Images/ServicesIcons/Mutual Funds.png",
        },
        {
            title: "Insurance",
            id: "Insurance",
            content: <>Your family's well-being is your top priority, and protecting their future starts with the right insurance plan. Life insurance is more than just a policy—it’s a safety net that shields you from life’s uncertainties while also offering valuable tax benefits. Our carefully designed insurance solutions provide financial stability, ensuring that you and your loved ones can navigate the future with confidence and peace of mind.</>,
            img: "/Images/ServicesIcons/Insurance.png",
        },
        {
            title: "Alternative Investments",
            id: "AlternativeInvestments",
            content: <>The future of investing is driven by innovation, and we believe in staying ahead of the curve. Alternate Investment Funds (AIFs) and Portfolio Management Services (PMS) open doors to high-growth opportunities in disruptive technologies and emerging industries. For investors looking to go beyond traditional markets, these strategic investment avenues provide access to unique, high-potential assets designed to accelerate wealth creation.
            </>,
            img: "/Images/ServicesIcons/Alternative Investments.png"
        },
        {
            title: "Fixed Income",
            id: "FixedIncome",
            content: <>A strong portfolio balances growth with stability. Fixed income investments like Fixed Deposits (FDs) and Bonds offer a secure and predictable way to build wealth over time. Whether you’re preparing for retirement, saving for a major goal, or simply seeking steady returns, our fixed income solutions provide a reliable path to financial security while keeping your investment milestones in focus.
            </>,
            img: "/Images/ServicesIcons/FIXIncome.png",
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