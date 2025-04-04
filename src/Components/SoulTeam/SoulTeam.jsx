import React, { useRef, useEffect } from "react";
import "./SoulTeam.css"
import { Row, Col } from "antd";
import SectionHeading from "../SectionHeading/SectionHeading";
import useIntersectionAnimation from "../SoulHome/useIntersectionAnimation";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SoulTeam = () => {
    const founderRef = useRef(null);
    const teamRefs = useRef(null);
    const teamRefstwo = useRef(null);

    // Use our custom hook to add the "animate" class after a delay when visible
    useIntersectionAnimation(founderRef, 100, 0.5, "animate");
    useIntersectionAnimation(teamRefs, 100, 0.5, "animate");
    useIntersectionAnimation(teamRefstwo, 100, 0.5, "animate");

    const SoulTeamInfo = [
        {
            image: "/Images/TeamPhotos/FounderPhoto.jpeg",
            content: <>
                {/* <h2 className="PrimaryHeadingStyle" style={{ margin: "0px" }}>Trusted Partner

                </h2>
                <br /> */}
                <p>We go beyond simply connecting you with the best investment opportunities; we provide personalized financial guidance to corporations and high-net-worth families, ensuring long-term wealth preservation and strategic growth.</p>
                <br />
                <p>As an established financial consulting firm, we take pride in offering expert insights into diverse investment avenues, empowering you to make informed, confident financial decisions.</p>
                <br />
                <p>At Soul Finspire, we believe that true financial success begins with understanding. Our mission is to equip you with clarity, knowledge, and a well-structured approach before you commit to any investment, helping you build a secure and prosperous future.

                </p>
                <br />
                <p><b>Mr. Raj Shah</b></p>
                <p>Founder of Soul Finspire</p>
                <br />
                <div>
                    <Link to="https://www.linkedin.com/in/raj-shah-324a12298/" target="_blank"><FaLinkedin style={{ color: "white", fontSize: "25px" }} /></Link>
                </div>
            </>
        }
    ]
    const TeamMembers = [
        {
            image: "/Images/TeamPhotos/Shriya.jpeg",
            position: <>Head&nbsp;of&nbsp;Products&nbsp;&&nbsp;Research</>,
            content: <>Shriya&nbsp;Shah</>,
            ref: teamRefstwo,
            details: <>
                With expertise in wealth management, risk analytics, and financial strategy, I help individuals and businesses make informed decisions. Having worked with leading firms like PwC and KPMG, I specialize in governance, risk, and compliance (GRC), financial consulting, and strategic investments. At SoulFinspire, my mission goes beyond advisory—we educate, guide, and empower clients in wealth preservation, tax planning, and long-term financial growth. Armed with a Master’s in Quantitative Economics from UCLA, I’m dedicated to building data-driven strategies that secure and grow your wealth. Let’s navigate your financial journey together!
            </>,
            Link: "https://www.linkedin.com/in/shriyashah/"
        },
        {
            image: "/Images/TeamPhotos/ShanayShah.jpeg",
            position: <>Head&nbsp;of&nbsp;Retail&nbsp;Development</>,
            ref: teamRefs,
            content: "Shanay Shah",
            details: <>
                With 6+ years of experience in business development, I have honed my skills across diverse industries, driving growth, forging strategic partnerships, and leading expansion initiatives. My experience spans across Financial Services, IT solutions, Staffing, BIM-solutions, Business Consulting and so on, where I have successfully led lead generation, client acquisition, and revenue growth initiatives.
<br /><br />
                In my role as Head of Retail Development at Soul Finspire, I focus on building and optimizing the Retail Division. <br />
            </>,
            Link: "https://www.linkedin.com/in/shanay-shah-035437214/"
        }
    ]
    return (
        <>
            <section id="SoulTeamContainer">
                <div className="sectionContainerForSidePadding" >
                    <div className="MaxWidthContainer sliteSectionLikePadding" style={{ overflow: "unset" }}>
                        {/* <SectionHeading text="Our Team" color="black" valueOfBorder="1px solid black" beforeBgColor="brand" /> */}
                        <div>
                            <h2 className="PrimaryHeadingStyle" data-aos="fade-up"
                                data-aos-duration="2000" data-aos-delay="200">Our <span>Team</span></h2>
                        </div>
                        <div className="FounderCardsContainer">
                            <div className="FounderRowStick">
                                {SoulTeamInfo.map((item, index) => (
                                    <Row className="FounderRow">
                                        <Col lg={10}>
                                            <div className="FounderImageContainer">
                                                <div className="AnimatedSlideWhiteLayerAnimation" ref={founderRef}>
                                                    <div className="AnimatedWhiteLayer">

                                                    </div>
                                                    <img src={item.image} alt="" loading="lazy" />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="ContentContainerFounder">
                                                <div>
                                                    {item.content}
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                ))}
                            </div>
                        </div>
                        <br /><br />
                        <div className="TeamMemberCards FounderCardsContainer">
                            <div>
                                <Row className="FounderRow">
                                    {TeamMembers.map((item, index) => (
                                        <Col lg={12} md={24} key={index} data-aos="fade-up" data-aos-duration="1500" data-aos-delay={`${index * 400}`}
                                        >
                                            <div className="TeamMembersCard">
                                                <div>
                                                    <div className="AnimatedSlideWhiteLayerAnimation" ref={item.ref}>
                                                        <div className="AnimatedWhiteLayer">

                                                        </div>
                                                        <img src={item.image} alt="" loading="lazy" />
                                                    </div>
                                                    <div className="CardContent">
                                                        <div>
                                                            <h2>{item.content}</h2>
                                                            <p style={{ color: "white" }}>{item.position}</p>
                                                        </div>
                                                        <div id="TeamCardAdjust">

                                                            <div>
                                                                <Link to={item.Link} target="_blank"><FaLinkedin style={{ color: "white", fontSize: "20px" }} /></Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div>


                                                    <br />
                                                    <p>{item.details}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SoulTeam