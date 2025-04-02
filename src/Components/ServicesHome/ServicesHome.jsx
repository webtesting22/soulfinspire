import React, { useRef } from 'react';
import SectionHeading from "../SectionHeading/SectionHeading";
import "./ServicesHome.css"

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { IoArrowForward } from "react-icons/io5";
import { Row, Col } from 'antd';
const ServicesHome = () => {
    const swiperRef = useRef(null);

    const ServicesCarousal = [
        {
            img: "/Images/ServicesIcons/WealthManagement.png",
            title: <>360°Financial Planning</>,
            content: <>​360 Financial Planning offers personalized wealth management to help you make informed decisions aligned with your goals, simplifying complexities and guiding you toward financial <span>clarity</span> </>
        },
        {
            img: "/Images/ServicesIcons/TaxPlanning.png",
            title: "Tax Planning",
            content: <>Effective tax planning helps retain more earnings by minimizing liabilities and maximizing opportunities, turning taxes into tools for wealth <span>building</span></>

        },
        {
            img: "/Images/ServicesIcons/PortFolioManagement.png",
            title: "Family Offices",
            content: <>​Family Offices provide personalized, holistic wealth management services to preserve and grow generational wealth, aligning with your family's values and long-term <span>vision</span> </>

        },
        {
            img: "/Images/ServicesIcons/LoadAcquisitions.png",
            title: "⁠⁠Loan syndications",
            content: <>​Loan syndication involves multiple lenders collaborating to provide a single borrower with a substantial loan, distributing the risk among the participating <span>lenders</span> </>

        },
        {
            img: "/Images/ServicesIcons/PrivateWealth.png",
            title: "Portfolio Management",
            content: <>​Portfolio management involves creating and overseeing an investment mix that aligns with your financial goals and risk tolerance to optimize <span>returns</span>
            </>

        }

    ]

    const ProductsCarousal = [
        {
            img: "/Images/ServicesIcons/Loan.svg",
            title: "Alternative Investments",
            content: <>​Alternate Investment Funds (AIFs) and Portfolio Management Services (PMS) provide access to high-growth opportunities in emerging sectors, aiming to accelerate wealth creation beyond traditional markets. ​</>
        },
        {
            img: "/Images/ServicesIcons/MutualFund.svg",
            title: "Mutual funds",
            content: <>Mutual Funds in India offer a balanced, accessible way to grow wealth. With diversification, transparency, and oversight, they help investors achieve financial goals while managing risk.</>

        },
        {
            img: "/Images/ServicesIcons/Insurance.svg",
            title: "Insurance",
            content: <>​Life insurance safeguards your family's future by providing financial stability and tax benefits, allowing you to navigate uncertainties with confidence.</>

        },
        {
            img: "/Images/ServicesIcons/FixedIncome.svg",
            title: "Fixed income",
            content: <>​Fixed income investments like Fixed Deposits and Bonds offer a secure, predictable path to wealth accumulation, balancing growth with stability.</>

        },

    ]

    const handleMouseMove = (e) => {
        if (!swiperRef.current) return;

        const { clientX, currentTarget } = e;
        const { left, width } = currentTarget.getBoundingClientRect();
        const edgeRange = 200; // 100px from left and right edges

        if (clientX < left + edgeRange) {
            // Hovering within 100px from the left edge
            swiperRef.current.slidePrev();
        } else if (clientX > left + width - edgeRange) {
            // Hovering within 100px from the right edge
            swiperRef.current.slideNext();
        }
    };

    return (
        <>
            <section>
                <div className="sectionContainerForSidePadding">
                    <div className="MaxWidthContainer sliteSectionLikePadding">
                        {/* <SectionHeading text="Services SoulFinspire" color="black" valueOfBorder="1px solid black" beforeBgColor="brand" /> */}
                        <div>
                            <h1 className="PrimaryHeadingStyle" style={{ color: "black", marginTop: "0px" }} data-aos="fade-up"
                                data-aos-duration="1200">Our <span>Services</span></h1>
                        </div>
                        <div className="PaddingAdjustHeadingContainer sliteSectionLikePadding" style={{ padding: "0px" }}>
                            <div className="InfiniteCarousalForServices PaddingAdjustHeadingContainer" onMouseMove={handleMouseMove}>
                                <Swiper
                                    dir="rtl"
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    freeMode={true}
                                    loop={true}
                                    speed={800}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    breakpoints={{
                                        320: { // Small screens (phones)
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        480: { // Slightly larger phones
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: { // Tablets
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        1024: { // Small laptops
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        },
                                    }}
                                    modules={[Autoplay, FreeMode, Pagination]}
                                    className="mySwiper"
                                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                                >
                                    {ServicesCarousal.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="PaddingAdjustHeadingContainer">
                                                <div>
                                                    <div className="CarousalImageContainer">
                                                        <img src={item.img} alt="" loading="lazy" />
                                                    </div>
                                                    <br />
                                                    <div className='ServicesContainer'>
                                                        <h2 style={{ textAlign: "end" }}>{item.title}</h2>
                                                        <br />
                                                        <p style={{ textAlign: "end" }}>{item.content}</p>
                                                    </div>
                                                    {/* <div className='SwiperReadMoreBtnContainer' style={{ display: "flex", justifyContent: "end" }}>
                                                        <button >Read More <IoArrowForward /></button>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className="sectionContainerForSidePadding">
                    <div className="MaxWidthContainer sliteSectionLikePadding" style={{ paddingTop: "0px" }}>
                        {/* <SectionHeading text="Products SoulFinspire" color="black" valueOfBorder="1px solid black" beforeBgColor="brand" /> */}
                        <div>
                            <h1 className="PrimaryHeadingStyle" style={{ color: "black", marginTop: "0px" }} data-aos="fade-up"
                                data-aos-duration="1200">Our <span>Products</span></h1>
                        </div>
                        <div className="PaddingAdjustHeadingContainer sliteSectionLikePadding" style={{ padding: "0px" }}>
                            <div className="InfiniteCarousalForServices PaddingAdjustHeadingContainer" onMouseMove={handleMouseMove}>
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    freeMode={true}
                                    loop={true}
                                    speed={800}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    breakpoints={{
                                        320: { // Small screens (phones)
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        480: { // Slightly larger phones
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: { // Tablets
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        1024: { // Small laptops
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        },
                                    }}
                                    modules={[Autoplay, FreeMode, Pagination]}
                                    className="mySwiper"
                                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                                >
                                    {ProductsCarousal.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="PaddingAdjustHeadingContainer">
                                                <div>
                                                    <div className="CarousalImageContainer">
                                                        <img src={item.img} alt="" loading="lazy" />
                                                    </div>
                                                    <br />
                                                    <div>
                                                        <h2>{item.title}</h2>
                                                        <br />
                                                        <p>{item.content}</p>
                                                    </div>
                                                    {/* <div className='SwiperReadMoreBtnContainer'>
                                                        <button>Read More <IoArrowForward /></button>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default ServicesHome