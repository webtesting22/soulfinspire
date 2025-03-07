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
                    <div className="MaxWidthContainer sliteSectionLikePadding">
                        <SectionHeading text="About SoulFinspire" color="white" beforeBgColor="white" />
                        {/* <div>
                            <h1 className="PrimaryHeadingStyle" style={{ color: "white" }}>At Innovest, we are committed to fueling the <span className="ColorChangeSpan">growth</span> and <span className="ColorChangeSpan">innovation</span> of visionary <span className="ColorChangeSpan">startups</span> and high-potential <span className="ColorChangeSpan">companies</span>.</h1>
                        </div> */}
                        <div className=" PaddingAdjustHeadingContainer">
                            <Row>
                                <Col lg={12}>
                                    <div>
                                        <div>
                                            <h1 className="PrimaryHeadingStyle" style={{ color: "white" }}>At Innovest, we believe in <span>unlocking</span> potential.</h1>
                                            <br />
                                            <br />
                                            <p>Run successfully under the leadership of Mr. Raj Shah and his highly skilled team, SoulFinspire stands as a premier financial advisory firm headquartered in Ahmedabad, India. With a commitment to delivering strategic financial solutions, we go beyond traditional advisory services to empower individuals and businesses with informed financial decisions. Our client-centric approach, backed by extensive industry expertise, ensures tailored solutions that drive financial growth and stability.</p>
                                            <br />
                                            <p>Backed by 25 years of expertise in curated financial products, we specialize in wealth management, financial consulting, loans, equity research, and tax planning. Our mission is to provide personalized financial strategies that align with our clients’ goals, ensuring long-term security and prosperity. With a deep understanding of market trends and regulatory frameworks, we strive to optimize financial portfolios, maximize returns, and offer holistic guidance for a secure financial future.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} style={{ width: "100%" }}>
                                    <div className="AboutHomeSectionImageContainer">
                                        <div
                                            ref={imageRef}
                                            className="ParallaxZoomImage"
                                            style={{ transform: `scale(${scale})`, transition: ".3s" }}
                                        >
                                            <img
                                                src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt=""
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
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