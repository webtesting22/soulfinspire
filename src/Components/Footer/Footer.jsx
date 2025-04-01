import React from "react";
import "./Footer.css"
import { Row, Col } from "antd";
import NavigationLinks from "../Navigation/NavigationLinks";
import { MdLocalPhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <section id="FooterContainer">
                <div className="sectionContainerForSidePadding" style={{ backgroundColor: "white" }}>
                    <div className="MaxWidthContainer sliteSectionLikePadding" >
                        <Row>
                            <Col lg={18}>
                                <div className="FooterLogoContainer">
                                    <div>
                                        <img src="/Images/SoulFinspireLogo.png" alt="" loading="lazy" />
                                        <div className="FooterContactContainer">
                                            {/* <h2>Contacts</h2>
                                        <br /> */}
                                            <div>
                                                <p><IoLocationOutline style={{ fontSize: "20px" }} />&nbsp;C-1008, The First,
                                                    Behind Keshavbagh Party Plot,
                                                    Bodakdev, Ahmedabad, Gujarat-380015</p>
                                            </div>

                                            <div>
                                                <p style={{ display: "flex", alignItems: "center" }}><MdLocalPhone style={{ fontSize: "20px" }} />&nbsp;<a href="tel:+91 96625 97197">+91 96625 97197</a></p>
                                            </div>

                                            <div>
                                                <p style={{ display: "flex", alignItems: "center" }}><AiOutlineMail style={{ fontSize: "20px" }} />&nbsp;<a href="mailto:info@soulfinspire.com">Info@soulfinspire.com</a></p>
                                            </div>
                                        </div>
                                        {/* <p>We put clients first, we lead with exceptional idea, and we believe in doing the right thing</p> */}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="LinksContainerFooter">
                                    <div>
                                        <h2>Links</h2>
                                        <ul>
                                            {NavigationLinks.map((item, index) => (
                                                <Link to={item.path} style={{color:"black"}}><li key={index}>{item.link}</li></Link>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            {/* <Col lg={6}>
                                <div>
                                    
                                </div>
                            </Col> */}
                        </Row>
                        <br />
                        <hr />
                        <div className="CopyrightTextContainer">
                            <div>
                                <div className="SocialMediaLinks">
                                    <ul>
                                        <li><Link to="https://twitter.com/SoulInc5" target="_blank"><FaTwitter /></Link></li>
                                        <li><Link to="https://www.facebook.com/soulinc12/" target="_blank"><FaFacebook /></Link></li>
                                        <li><Link to="https://www.linkedin.com/company/soul-inc-ahmedabad?trk=public_post_share-update_actor-text" target="_blank"><FaLinkedin /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <p>Designed By OutLead Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer