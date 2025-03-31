import React, { useRef } from "react";
import "./SoulTeam.css"
import { Row, Col } from "antd";
import SectionHeading from "../SectionHeading/SectionHeading";
import useIntersectionAnimation from "../SoulHome/useIntersectionAnimation";
const SoulTeam = () => {
    const founderRef = useRef(null);
    const teamRefs = useRef([]);

    // Use our custom hook to add the "animate" class after a delay when visible
    useIntersectionAnimation(founderRef, 100, 0.5, "animate");
    const SoulTeamInfo = [
        {
            image: "https://plus.unsplash.com/premium_photo-1690366911099-0c0e170c9a51?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            </>
        }
    ]
    const TeamMembers = [
        {
            image: "https://plus.unsplash.com/premium_photo-1690366911099-0c0e170c9a51?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                        <SectionHeading text="Our Team" color="black" valueOfBorder="1px solid black" beforeBgColor="brand" />

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
                            <div className="TeamMembersCards">
                                <div>
                                    <Row>
                                        {TeamMembers.map((item, index) => {
                                            const ref = useRef(null);
                                            teamRefs.current[index] = ref;

                                            // Apply animation to each team member's image
                                            useIntersectionAnimation(ref, 100, 0.5, "animate");

                                            return (
                                                <Col key={index} lg={12}>
                                                    <div className="FounderImageContainer">
                                                        <div className="AnimatedSlideWhiteLayerAnimation" ref={ref}>
                                                            <div className="AnimatedWhiteLayer"></div>
                                                            <img src={item.image} alt={item.name} loading="lazy" />
                                                        </div>
                                                        <div className="ContentContainerFounder">
                                                            {item.content}
                                                        </div>
                                                    </div>
                                                </Col>
                                            );
                                        })}
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
export default SoulTeam