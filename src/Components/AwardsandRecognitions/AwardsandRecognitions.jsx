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
            img: "/Images/AwardsLogos/360oneLoog.svg",
            link: "https://www.360.one/"
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
            img: "/Images/AwardsLogos/ICICILogo.png",
            link: "https://www.icicibank.com/"
        },
        {
            img: "/Images/AwardsLogos/Aditya_Birla_Group.webp",
            link: "https://mutualfund.adityabirlacapital.com/"
        },
        {
            img: "/Images/AwardsLogos/Hdfcmutualfunds.jpg",
            link: "https://www.hdfcbank.com/"
        },
        {
            img: "/Images/AwardsLogos/MotilaluswalLog.webp",
            link: "https://www.motilaloswal.com/"
        },


    ]
    return (
        <>
            <section>
                <div className="sectionContainerForSidePadding">
                    <div className="MaxWidthContainer">
                        <div>
                            {/* <div>
                                <SectionHeading text="Awards and Recognitions" valueOfBorder="1px solid black" color="black" beforeBgColor="black" />
                            </div> */}
                            <div className="sectionContainerForSidePadding" style={{ paddingLeft: "0px", paddingRight: "0px" }} id="AwardsContainer">
                                <Row>
                                    <Col lg={24}>
                                        <div className="LeftSideContentContainer">
                                            <div>
                                                <h2 className="PrimaryHeadingStyle" style={{ marginTop: "0px" }} data-aos="fade-up"
                                                            data-aos-duration="1400">A Testament to Our Financial <span>Expertise</span></h2>
                                                <br />
                                                <p>At Soul Finspire, our excellence in financial advisory has been recognized through prestigious awards and industry-leading certifications. These accolades reflect our commitment to delivering top-tier wealth management, tax planning, and loan solutions. Our award-winning expertise ensures trusted, strategic, and client-centric financial growth.</p>
                                            </div>
                                            <br /><br />
                                        </div>
                                    </Col>

                                    <Col lg={24}>
                                        <div>

                                            <div>
                                                <Row>
                                                    {AwardsData.map((item, index) => (
                                                        <Col key={index} lg={4} md={12} data-aos="fade-up"
                                                            data-aos-duration="500" data-aos-delay={index * 100}>
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