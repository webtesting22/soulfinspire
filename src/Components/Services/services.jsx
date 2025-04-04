import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useLocation } from "react-router-dom";
import "./Services.css"
import { AnimatedCards } from "../SoulServices/SoulServicesData";
const Services = () => {

    const ServicesData = [
        {
            title: "360° Financial Planning",
            img: "/Images/ServicesPageIcons/FinancialPlanning.png",
            id: "financialPlanning",
            content: <>
                Wealth management isn’t just about growing your money—it’s about building the life you want. We take a personal, strategy-driven approach to managing your assets, helping you make smart decisions that align with your goals. Whether you’re planning for retirement, growing your investments, or securing your family’s future, we simplify the complex and guide you with clarity. Your wealth should work for you, not the other way around—and we’re here to make that happen.

            </>
        },
        {
            title: "Portfolio Management",
            id: "portfolioManagement",
            img: "/Images/ServicesPageIcons/portfolio managemnt.png",
            content: <>
                Portfolio management isn’t just about picking investments—it’s about creating a strategy that truly fits your goals, risk tolerance, and financial vision. We take a hands-on, personalized approach to building and balancing your portfolio, ensuring your money is working efficiently for you. Whether you're focused on growth, stability, or long-term wealth preservation, we simplify the complexities and guide you with clarity. Smart investing starts with a plan, and we’re here to craft one that’s built around you.
            </>
        },
        {
            title: "Tax Planning",
            id: "taxPlanning",
            img: "/Images/ServicesPageIcons/tax planning.png",
            content: <>
                Tax planning isn’t just about saving money—it’s about keeping more of what you earn and making every dollar count. We help you navigate tax laws with smart, forward-thinking strategies that minimize liabilities and maximize opportunities. Whether you’re a business owner, investor, or simply looking to optimize your returns, we make tax planning simple, stress-free, and tailored to your financial goals. Let’s turn taxes from a burden into a tool for building your wealth.

            </>
        },

        {
            title: "Family Offices",
            id: "familyOffices",
            img: "/Images/ServicesPageIcons/family office.png",
            content: <>
                Managing generational wealth requires more than just investment strategies—it demands a personalized, holistic approach. Our Family Office services are designed to simplify the complexities of wealth management, ensuring your family's financial legacy is preserved and grown with care. From investment planning and estate management to philanthropy and succession strategies, we provide tailored solutions that align with your family's values and long-term vision. With us, you gain a trusted partner dedicated to safeguarding your wealth for generations to come.

            </>
        },
        {
            title: "Loan Syndication",
            id: "loanSyndications",
            img: "/Images/ServicesPageIcons/loansyndications.png",
            content: <>
                Securing the right loan isn’t just about getting approved—it’s about finding the best terms that align with your financial goals. Whether you're expanding your business, investing in property, or need strategic financing, we simplify the loan acquisition process. With expert guidance, tailored solutions, and a focus on your long-term success, we help you navigate lenders, negotiate terms, and secure funding with confidence. The right loan can be a powerful tool—let’s make it work for you.

            </>
        }
    ]

    const { pathname, hash } = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            if (hash) {
                // Determine viewport width
                const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
                const offset = isMobile ? -400 : 100; // Set offsets for mobile and desktop

                // Use a timeout to ensure the element is rendered before scrolling
                setTimeout(() => {
                    const element = document.getElementById(hash.substring(1));
                    if (element) {
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - offset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth',
                        });
                    }
                }, 0);
            } else {
                // Scroll to the top if no hash is present
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        handleScroll();

        // Optional: Add event listener for window resize to handle dynamic viewport changes
        window.addEventListener('resize', handleScroll);
        return () => window.removeEventListener('resize', handleScroll);
    }, [pathname, hash]);
    return (
        <>
            <section>
                <div className="SectionContainer">
                    <div className="MaxWidthContainer" id="HomepageContainerPaddingAdjust">
                        <div>
                            <h1 className="PrimaryHeadingStyle" data-aos="fade-up"
                                data-aos-duration="1200" data-aos-delay="200">
                                Our <span>Services</span>
                            </h1>
                        </div>
                        <div>
                            <AnimatedCards cardsData={ServicesData} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Services