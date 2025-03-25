import React, { useState, useEffect, useRef } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Row, Col } from "antd";
import "./AboutHome.css"
const ScrollBleWords = [
    "Financial", "Wealth", "Consulting", "Loans",
    "Equity", "Tax", "Advisory", "Investments"
];
const AboutHome = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [scrollX, setScrollX] = useState(0);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const handleScroll = () => {
                        setScrollX(entry.intersectionRatio * 100); // Moves based on visibility percentage
                    };
                    window.addEventListener("scroll", handleScroll);
                    return () => window.removeEventListener("scroll", handleScroll);
                }
            },
            { threshold: [0, 0.25, 0.5, 0.75, 1] }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Scale the image based on visibility ratio (1 when fully visible, 0 when out of view)
                    const newScale = 1 - (1 - entry.intersectionRatio) * 0.2; // Adjust scale range
                    setScale(Math.max(newScale, 0.8)); // Ensure min scale is 0.8
                }
            },
            { threshold: Array.from({ length: 11 }, (_, i) => i * 0.1) } // Trigger at every 10% visibility
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <>
            <section id="AboutHomeComponent">
                <div className=" sectionContainerForSidePadding">
                    <div className="MaxWidthContainer sliteSectionLikePadding" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                     
                        <div className=" PaddingAdjustHeadingContainer">
                            <Row>
                                <Col lg={12}>
                                    <div>
                                        <div>
                                            <h1 className="PrimaryHeadingStyle" style={{ color: "black" }} data-aos="fade-up"
                                                data-aos-duration="1100">At Innovest, we believe in <span>unlocking</span> potential.</h1>
                                            <br />
                                            <br />
                                            <p data-aos="fade-up"
                                                data-aos-duration="1200"><b>SoulFinspire, led by Mr. Raj Shah,</b> is a top financial advisory firm in Ahmedabad.
                                                With 25 years of expertise, we specialize in wealth management, loans, and tax planning.
                                                Our client-centric approach ensures tailored strategies for financial growth and stability.
                                                We empower individuals and businesses with informed, strategic financial solutions.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} style={{ width: "100%" }}>
                                    <div className="AboutHomeSectionImageContainer" data-aos="fade-left"
                                        data-aos-duration="1200">
                                        <div
                                            ref={imageRef}
                                            className="ParallaxZoomImage"
                                            style={{ transform: `scale(${scale})`, transition: ".3s" }}
                                        >
                                            <img
                                                style={{ width: "100%" }}
                                                src="/Images/IllustrationImages/AboutHomeBoy.png"
                                                alt=""
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        {/* <div className="AboutusCardsContainer PaddingAdjustHeadingContainer" style={{paddingBottom:"0px"}}>

                            <div >
                                <div>
                                    <Row>
                                        {CardsData.map((item, index) => (
                                            <Col lg={8} data-aos="fade-up"
                                                data-aos-duration="1000" data-aos-delay={index * 200} key={index}>
                                                <div>
                                                    <div>
                                                        <span>0<b>{index + 1}</b></span>
                                                        <br /><br /><br />
                                                        <h2>{item.title}</h2>
                                                        <br />
                                                        <p>{item.tagline}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </div>
                        </div> */}
                        {/* <div ref={textRef}>
                            <div className="ScrollingText LeftToRight" style={{ transform: `translateX(${scrollX}px)` }}>
                                {ScrollBleWords.slice(0, 4).map((word, index) => (
                                    <span key={index} className="ScrollWord PrimaryHeadingStyle" style={{ color: "white" }}>{word}</span>
                                ))}
                            </div>

                            <div className="ScrollingText RightToLeft" style={{ transform: `translateX(-${scrollX}px)` }}>
                                {ScrollBleWords.slice(4, 8).map((word, index) => (
                                    <span key={index} className="ScrollWord PrimaryHeadingStyle">{word}</span>
                                ))}
                            </div>
                        </div> */}


                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutHome