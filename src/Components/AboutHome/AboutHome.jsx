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
    // const CardsData = [
    //     {
    //         title: "Detailed market analysis for a smoother investment journey",
    //         tagline: "Our thorough research based on different markets, helps choose right business returns"
    //     },
    //     {
    //         title: "Expert assistance at fingertips to make your future better",
    //         tagline: "Our Expert advice helps you make tax efficient optimized  decisions"
    //     },
    //     {
    //         title: "Customized financial solutions for a well-built monetary growth",
    //         tagline: "Understanding your financial picture and managing  investments with risk tolerance and time horizon"
    //     }
    // ]
    const CardsData = [
        {
            title: "Competitive Advantage",
            tagline: "Our experienced investment team through in-depth primary research constructs a portfolio suitable to the needs."
        },
        {
            title: "Customized Solutions",
            tagline: "We focus on understanding your financial landscape and managing investments based on your risk tolerance and time horizon."
        },
        {
            title: "Collaborative Approach",
            tagline: "We regularly monitor, track, and analyze your portfolio to ensure it stays aligned with your financial goals."
        }
    ]
    return (
        <>
            <section id="AboutHomeComponent">
                <div className=" sectionContainerForSidePadding">
                    <div className="MaxWidthContainer sliteSectionLikePadding" style={{ paddingTop: "10px", paddingBottom: "0px", overflow: "unset" }}>

                        <div className="PaddingAdjustHeadingContainer" style={{ paddingTop: "0px" }}>
                            <Row>
                                <Col lg={12}>
                                    <div>
                                        <div>
                                            <h1 className="PrimaryHeadingStyle" style={{ color: "black" }} data-aos="fade-up"
                                                data-aos-duration="1100">Reach New Heights with <span>Trust</span>, <span>Transparency</span> & <span>Expertise</span></h1>
                                            <br />
                                            <br />
                                            {/* <div className="AboutusCardsContainer " style={{ paddingBottom: "0px" }}>
                                                <div >
                                                    <div>
                                                        <Row>
                                                            {CardsData.map((item, index) => (
                                                                <Col lg={24} data-aos="fade-right"
                                                                    data-aos-duration="1000" data-aos-delay={index * 300} key={index}>
                                                                    <div>
                                                                        <div>
                                                                            <span>0<b>{index + 1}</b></span>
                                                                            <br /><br />
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
                                            <p data-aos="fade-up"
                                                data-aos-duration="1200">The path to your financial success may appear steep, but the journey is worth it — we at <b>Soul Finspire</b>, make Wealth Creation simple, accessible, and effective.   With a commitment to <b>trust, transparency, and efficiency</b>, we provide tailored financial strategies that drive growth and stability. Our client-centric approach ensures personalized solutions, empowering individuals and businesses to achieve long-term financial success with confidence.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} style={{ width: "100%" }}>
                                    <div className="AboutHomeSectionImageContainer" >
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
                                <Col lg={24}>
                                    <div className="AboutusCardsContainer " style={{ paddingBottom: "0px" }}>
                                        <div >
                                            <div>
                                                <Row>
                                                    {CardsData.map((item, index) => (
                                                        <Col lg={8} data-aos="fade-right"
                                                            data-aos-duration="1000" data-aos-delay={index * 300} key={index}>
                                                            <div>
                                                                <div>
                                                                    <span>0<b>{index + 1}</b></span>
                                                                    <br /><br />
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