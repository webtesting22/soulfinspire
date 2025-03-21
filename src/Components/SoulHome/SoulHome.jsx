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

    const CardsData = [
        {
            title: "Detailed market analysis for a smoother investment journey",
            tagline: "Our thorough research based on different markets, helps choose right business returns"
        },
        {
            title: "Expert assistance at fingertips to make your future better",
            tagline: "Our Expert advice helps you make tax efficient optimized  decisions"
        },
        {
            title: "Customized financial solutions for a well-built monetary growth",
            tagline: "Understanding your financial picture and managing  investments with risk tolerance and time horizon"
        }
    ]


    const CarousalImages = [
        {
            img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            img: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
    return (
        <>
            <section id="SoulHome">
                <div className="SectionContainer">
                    <div className="MaxWidthContainer" id="HomepageContainerPaddingAdjust" style={{ overflow: "unset" }}>
                        <Row id="HomePageRow">
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
                                        <img src="/Images/IllustrationImages/HomePageStockImage.svg" alt="" />
                                    </div>
                                </div>
                                {/* <div>
                                    <div>
                                        <p data-aos="fade-left"
                                            data-aos-duration="2000" data-aos-delay="300"> Great investments aren't about chasing quick gains—they're about patience, discipline, and steady growth. Like watching grass grow or paint dry, the best strategies take time but yield lasting results. We help you navigate the market with a calm, calculated approach, ensuring your wealth flourishes securely over time. Let your investments grow the right way—with confidence and consistency.</p>
                                        <div className="PrimarybtnContainer" data-aos="fade-up"
                                            data-aos-duration="3000" data-aos-delay="800">
                                            <button>Get In Touch</button>
                                        </div>
                                    </div>
                                </div> */}
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className="HomePageImageContainer">
                    <div className="AnimatedSlideWhiteLayerAnimation" ref={containerRef}>
                        <div className="AnimatedWhiteLayer">

                        </div>
                        <img src="/Images/IllustrationImages/GraphImage.svg" alt="" style={{ width: "100%" }} />
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