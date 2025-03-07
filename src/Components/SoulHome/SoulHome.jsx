import React, { useEffect, useState } from "react";
import "./SoulHome.css";
import { Row, Col } from "antd";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

const SoulHome = () => {
    const [scrollY, setScrollY] = useState(0);

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
                    <div className="MaxWidthContainer" id="HomepageContainerPaddingAdjust">
                        <Row>
                            <Col lg={14}>
                                <div>
                                    <div>
                                        <span className="TagEdit">Welcome to Innovest!</span>
                                        <h1 className="PrimaryHeadingStyle">Planning is <span className="ColorChangeSpan">bringing the future</span> in present</h1>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={10}>
                                <div>
                                    <div>
                                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quae molestias nostrum laborum dignissimos optio sint quidem distinctio sit, perferendis totam esse, id at deserunt minus commodi rem, consectetur explicabo!</p>
                                        <div className="PrimarybtnContainer">
                                            <button>Get In Touch</button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="HomePageImageContainer">
                    <div>
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
                                <SwiperSlide key={index}>
                                    <div>
                                        <div className="ParallaxImageContainer">
                                            <img style={{ transform: `translateY(${scrollY * 0.2}px)` }} src={item.img} alt="Image for soul-finspire office" loading="lazy" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="sectionContainerForSidePadding">
                    <div className="MaxWidthContainer sliteSectionLikePadding">
                        <div>
                            <Row>
                                {CardsData.map((item, index) => (
                                    <Col lg={8}>
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
                </div>
            </section>
        </>
    )
}
export default SoulHome