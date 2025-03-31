import React, { useEffect, useState, useRef } from "react";
import "./SoulHome.css";
import { Row, Col } from "antd";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import useIntersectionAnimation from "./useIntersectionAnimation";
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

const SoulHome = () => {
    const [scrollY, setScrollY] = useState(0);
    const containerRef = useRef(null);

    // Use our custom hook to add the "animate" class after a delay when visible
    useIntersectionAnimation(containerRef, 100, 0.5, "animate");

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const HomePageTextContentData = [
        {
            title: <>Equity is a <span>Wealth</span> Creator</>,
            tag:"Equity",
            content: <>Equities possess the potential to generate considerable long-term wealth.</>
        },
        {
            title: <>Debt is a Wealth <span>Preserver</span></>,
            tag:"Debt",
            content: <>Debt instruments ensure stability and safeguard wealth during periods of market turbulence.</>
        },
        {
            title: <>Asset <span>Allocation</span> is Crucial</>,
            tag:"Asset Allocation",
            content: <>The optimal distribution of assets is essential for balancing risk and reward effectively.</>
        }
    ]

    return (
        <>
            <section id="SoulHome">
                <div className="SectionContainer">
                    <div className="MaxWidthContainer" id="HomepageContainerPaddingAdjust" style={{ overflow: "unset" }}>
                        <div className="OverlayContainer">
                            <img src="/Images/HomePageBannerBackground.jpg" alt="" />
                        </div>
                        <Row className="HomepageContainerPaddingAdjust">
                            {HomePageTextContentData.map((item, index) => (
                                <Col
                                    lg={index === HomePageTextContentData.length - 1 ? 24 : 12}
                                    key={index}
                                    data-aos={index === HomePageTextContentData.length - 1 ? "fade-up" : "fade-left"}
                                    data-aos-delay={index === HomePageTextContentData.length - 1 ? "800" : index * 500}
                                    data-aos-duration="1000"
                                >
                                    <div>
                                        <div className="homePageHeadingContainer">
                                            <span className="TagEdit">{item.tag}</span>
                                            <h2 className="PrimaryHeadingStyle">{item.title}</h2>
                                            <p>{item.content}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>


                        {/* <Row id="HomePageRow">
                            <Col lg={12} >
                                <div>
                                    <div>
                                        <span className="TagEdit" data-aos="fade-up"
                                            data-aos-duration="3000">Welcome to Innovest!</span>
                                        <h1 className="PrimaryHeadingStyle" data-aos="fade-up"
                                            data-aos-duration="2000" data-aos-delay="200">Bringing tomorrow’s possibilities into <span>today’s plans</span> for a <span>brighter future</span></h1>
                                        <br />
                                        <div className="PrimarybtnContainer" data-aos="fade-up"
                                            data-aos-duration="3000" data-aos-delay="800">
                                            <button>Get In Touch</button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div>
                                    <div>
                                        <img src="/Images/IllustrationImages/HomePageStockImage.svg" alt="" loading="lazy" />
                                    </div>
                                </div>
                                
                            </Col>
                        </Row> */}
                    </div>
                </div>

                <br />
                <div className="HomePageImageContainer">
                    <div className="AnimatedSlideWhiteLayerAnimation" ref={containerRef} >
                        <div className="AnimatedWhiteLayer">

                        </div>
                        <img src="/Images/IllustrationImages/HomePageIllustratorGraph1.png" alt="" style={{ width: "100%" }} loading="lazy" />
                    </div>
                    {/* <div>
                        <Swiper
                            spaceBetween={30}
                            effect={'fade'}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            speed={800}
                            loop={true}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            // navigation={true}
                            modules={[Autoplay, Pagination, Navigation, EffectFade]}
                            className="mySwiper"
                        >
                            {CarousalImages.map((item, index) => (
                                <SwiperSlide key={index}  >
                                    <div >
                                        <div className="ParallaxImageContainer">
                                            <img style={{ transform: `translateY(${scrollY * 0.2}px)` }} src={item.img} alt="Image for soul-finspire office" loading="lazy" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div> */}
                </div>
                {/* <div className="sectionContainerForSidePadding">
                    <div className="MaxWidthContainer sliteSectionLikePadding">
                        <div>
                            <Row>
                                {CardsData.map((item, index) => (
                                    <Col lg={8} data-aos="fade-up"
                                        data-aos-duration="1000" data-aos-delay={index * 200}>
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
            </section>
        </>
    )
}
export default SoulHome