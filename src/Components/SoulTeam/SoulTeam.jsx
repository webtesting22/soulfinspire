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
                <p><b>Mr. Raj</b></p>
                <p>Founder of SOULFINSPIRE</p>
                <br />
                <div>
                    <Link to="https://www.linkedin.com/in/raj-shah-324a12298/" target="_blank"><FaLinkedin style={{color:"white",fontSize:"25px"}}/></Link>
                </div>
            </>
        }
    ]
    const TeamMembers = [
        {
            image: "/Images/TeamPhotos/ShanayShah.jpeg",
            content: <>
                <p><b>Shanay Sir</b></p>
            </>
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1690366911099-0c0e170c9a51?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            content: <>
                <p><b>Shanay Sir</b></p>
            </>
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
                        <div className="TeamMemberCards">
                            <div>
                                <Row>
                                    {/* {TeamMembers.map((item, index))}
                                    <Col lg={8} md={12}>
                                        <div>
                                            <div>

                                            </div>
                                        </div>
                                    </Col> */}
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