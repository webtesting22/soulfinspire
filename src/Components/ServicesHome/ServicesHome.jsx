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
            title: "360-Degree Financial Planning",
            content: <>Wealth management is about building the life you want, not just growing money. We provide strategic, personalized guidance to simplify finances and help you achieve your goals</>
        },
        {
            img: "/Images/ServicesIcons/TaxPlanning.png",
            title: "Tax Planning",
            content: <>Tax planning is about maximizing your earnings, not just saving money. We simplify the process with smart strategies that minimize liabilities and turn taxes into a wealth-building tool</>

        },
        {
            img: "/Images/ServicesIcons/PortFolioManagement.png",
            title: "Family Offices",
            content: <>Portfolio management is about aligning investments with your goals and risk tolerance. We create personalized strategies to optimize growth, stability, and long-term wealth</>

        },
        {
            img: "/Images/ServicesIcons/LoadAcquisitions.png",
            title: "⁠⁠Loan syndications",
            content: <>Getting a loan isn’t just about approval—it’s about securing the best terms for your goals. We simplify the process with expert guidance, tailored solutions, and strategic financing</>

        },
        {
            img: "/Images/ServicesIcons/PrivateWealth.png",
            title: "Portfolio Management",
            content: <>We provide expert guidance, bespoke solutions, and insights for informed decision-making. Our strategies ensure long-term security and success
            </>

        }

    ]

    const ProductsCarousal = [
        {
            img: "/Images/ServicesIcons/Loan.svg",
            title: "Alternative Investments",
            content: <>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum quia sed hic dolorem ipsam consequatur tempora, commodi earum fuga.</>
        },
        {
            img: "/Images/ServicesIcons/MutualFund.svg",
            title: "Mutual funds",
            content: <>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum quia sed hic dolorem ipsam consequatur tempora, commodi earum fuga.</>

        },
        {
            img: "/Images/ServicesIcons/Insurance.svg",
            title: "Insurance",
            content: <>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum quia sed hic dolorem ipsam consequatur tempora, commodi earum fuga.</>

        },
        {
            img: "/Images/ServicesIcons/FixedIncome.svg",
            title: "Fixed income",
            content: <>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum quia sed hic dolorem ipsam consequatur tempora, commodi earum fuga.</>

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
                                                    <div>
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