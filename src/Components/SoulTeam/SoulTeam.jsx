import React, { useRef } from "react";
import "./SoulTeam.css"
import { Row, Col } from "antd";
import SectionHeading from "../SectionHeading/SectionHeading";
import useIntersectionAnimation from "../SoulHome/useIntersectionAnimation";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SoulTeam = () => {
    const founderRef = useRef(null);
    const teamRefs = useRef([]);

    // Use our custom hook to add the "animate" class after a delay when visible
    useIntersectionAnimation(founderRef, 100, 0.5, "animate");
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
                <p>At SoulFinspire, we believe that true financial success begins with understanding. Our mission is to equip you with clarity, knowledge, and a well-structured approach before you commit to any investment, helping you build a secure and prosperous future.

                </p>
                <br />
                <p><b>Mr. Raj Shah</b></p>
                <p>Founder of SOULFINSPIRE</p>
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
            position: "Head of Products & Research",
            content: "Shriya Shah",
            Link: "https://www.linkedin.com/in/shriyashah/"
        },
        {
            image: "/Images/TeamPhotos/ShanayShah.jpeg",
            position: "Head of Retail Development",
            content: "Shanay Shah",
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
                                        <Col lg={8} md={12} key={index}>
                                            <div className="TeamMembersCard">
                                                <div>
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <br />
                                                <div>
                                                    <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                                                        <h2>{item.content}</h2><Link to={item.Link} target="_blank"><FaLinkedin style={{ color: "white", fontSize: "20px" }} /></Link>
                                                    </div>
                                                    <p style={{ color: "white" }}>{item.position}</p>

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