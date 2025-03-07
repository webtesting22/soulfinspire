import React from "react";
import "./SoulTeam.css"
import { Row, Col } from "antd";
import SectionHeading from "../SectionHeading/SectionHeading";
const SoulTeam = () => {

    const SoulTeamInfo = [
        {
            image: "/Images/FounderImage.webp",
            content: <>
                <h2 className="PrimaryHeadingStyle" style={{ margin: "0px" }}><span>SoulFinspire</span> is more than just a financial intermediary—we are your <span>trusted </span>partner in wealth management.

                </h2>
                <br />
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
    return (
        <>
            <section id="SoulTeamContainer">
                <div className="sectionContainerForSidePadding" >
                    <div className="MaxWidthContainer sliteSectionLikePadding" >
                        <SectionHeading text="Our Team" color="black" valueOfBorder="1px solid black" beforeBgColor="brand" />

                        <div>
                            {SoulTeamInfo.map((item, index) => (
                                <Row>
                                    <Col lg={12}>
                                        <div className="FounderImageContainer">
                                            <div style={{height:"100%"}}>
                                                <img src={item.image} alt="" />
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
                </div>
            </section>
        </>
    )
}
export default SoulTeam