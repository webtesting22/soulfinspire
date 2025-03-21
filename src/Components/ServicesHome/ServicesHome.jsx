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
import { Row,Col } from 'antd';
const ServicesHome = () => {
    const swiperRef = useRef(null);

    const ServicesCarousal = [
        {
            img: "/Images/ServicesIcons/FinancialIncome.svg",
            title: "Financial Planning",
            content: <>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum quia sed hic dolorem ipsam consequatur tempora, commodi earum fuga.</>
        },
        {
            img: "/Images/ServicesIcons/TaxPlanning.svg",
            title: "Tax Planning",
            content: <>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum quia sed hic dolorem ipsam consequatur tempora, commodi earum fuga.</>

        },
        {
            img: "/Images/ServicesIcons/Loan.svg",
            title: "Loans",
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
                        <SectionHeading text="Services SoulFinspire" color="black" valueOfBorder="1px solid black" beforeBgColor="brand" />
                        <div>
                            <h1 className="PrimaryHeadingStyle" style={{ color: "black" }} data-aos="fade-up"
                                data-aos-duration="1200">Empowering <span>Innovation</span>. Fueling Future <span>Growth</span>.</h1>
                        </div>
                        <div className="PaddingAdjustHeadingContainer sliteSectionLikePadding">
                            <div className="InfiniteCarousalForServices PaddingAdjustHeadingContainer" onMouseMove={handleMouseMove}>
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    freeMode={true}
                                    loop={true}
                                    speed={800}
                                    autoplay={{
                                        delay: 2500,
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
                                                        <img src={item.img} alt="" loading="lazy"/>
                                                    </div>
                                                    <br />
                                                    <div>
                                                        <h2>{item.title}</h2>
                                                        <br />
                                                        <p>{item.content}</p>
                                                    </div>
                                                    <div className='SwiperReadMoreBtnContainer'>
                                                        <button>Read More <IoArrowForward /></button>
                                                    </div>
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