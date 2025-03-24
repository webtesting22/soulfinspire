import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Row, Col } from "antd";
import "./Awards.css"
import { Link } from "react-router-dom";
const AwardsandRecognitions = () => {

    const AwardsData = [
        {
            img: "/Images/AwardsLogos/1.webp",
            link: "https://www.principal.com/"
        },
        {
            img: "/Images/AwardsLogos/2.webp",
            link: "https://www.miraeassetmf.co.in/"
        },
        {
            img: "/Images/AwardsLogos/3.webp",
            link: "https://www.morganstanley.com/"
        },
        {
            img: "/Images/AwardsLogos/4.webp",
            link: "https://www.ltfs.com/"
        },
        {
            img: "/Images/AwardsLogos/5.webp",
            link: "https://www.icicipruamc.com/"
        },
        {
            img: "/Images/AwardsLogos/6.webp",
            link: "https://www.dspim.com/"
        },
        {
            img: "/Images/AwardsLogos/7.webp",
            link: "https://www.axismf.com/"
        },
        {
            img: "/Images/AwardsLogos/8.webp",
            link: "https://www.icicipruamc.com/",
        },
        {
            img: "/Images/AwardsLogos/9.webp",
            link: "https://mutualfund.adityabirlacapital.com/"
        },

    ]
    return (
        <>
            <section>
                <div className="sectionContainerForSidePadding">
                    <div className="MaxWidthContainer">
                        <div>
                            <div>
                                <SectionHeading text="Awards and Recognitions" valueOfBorder="1px solid black" color="black" beforeBgColor="black" />
                            </div>
                            <div className="sectionContainerForSidePadding" style={{ paddingLeft: "0px", paddingRight: "0px" }} id="AwardsContainer">
                                <Row>
                                    <Col lg={10}>
                                        <div className="LeftSideContentContainer">
                                            <div>
                                                <h2 className="PrimaryHeadingStyle">A Testament to Our Financial <span>Expertise</span></h2>
                                                <br />
                                                <p>At SoulFinspire, our excellence in financial advisory has been recognized through prestigious awards and industry-leading certifications. These accolades reflect our commitment to delivering top-tier wealth management, tax planning, and loan solutions. Our award-winning expertise ensures trusted, strategic, and client-centric financial growth.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={14}>
                                        <div>
                                            <div>
                                                <Row>
                                                    {AwardsData.map((item, index) => (
                                                        <Col key={index} lg={8} md={12}>
                                                            <Link to={item.link} target="_blank">
                                                            <div>
                                                                <div className="AwardsImageCard">
                                                                    <img src={item.img} alt="" />
                                                                </div>
                                                            </div>
                                                            </Link>
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AwardsandRecognitions;