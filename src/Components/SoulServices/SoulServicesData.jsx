import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { Row, Col } from "antd";
export const MutualFundCards = () => {
    const cardRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            cardRefs.current.forEach((card) => {
                if (!card) return;

                const rect = card.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // ✅ Add 100px offset trigger
                let progress = (rect.top - -400) / windowHeight;

                // Clamp between 0 and 1
                progress = Math.min(1, Math.max(0, progress));

                const scale = 1 - 0.2 * (1 - progress); // Zoom in as it comes in view

                card.style.transform = `scale(${scale})`;
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        // <div>
        <>
            <div>
                {PerfectMatchMutualFundsCardsData.map((item, index) => (
                    <Row>
                        <Col lg={24}>
                            <div key={index} className="Animated3DCard" ref={(el) => (cardRefs.current[index] = el)}>

                                <div className="AnimatedContentContainer">
                                    <div className="CountCards">
                                        <span>0{index + 1}</span>
                                    </div>
                                    <h3 className="PrimaryHeadingStyle">{item.title}</h3>
                                    <br />
                                    <p>{item.content}</p>
                                </div>
                                <div className="AnimatedInsideImageContainer">
                                    <img src="https://images.unsplash.com/photo-1506751470038-e579eb91f580?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                ))}
            </div>
        </>
        // </div>
    );
};

export { ServiceData };

const PerfectMatchMutualFundsCardsData = [
    {
        title: "Young Investors",
        content: <>If you're just starting your investment journey, Systematic Investment Plans (SIPs) in Equity Mutual Funds can help you build substantial wealth over the long term. Starting early is key to a successful investment  journey, and Mutual Funds provide a strong foundation.</>,
        img: "https://images.unsplash.com/photo-1506751470038-e579eb91f580?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Seasoned Investors",
        content: <>For those with a well-established investment portfolio, Mutual Funds offer diversified options, including conservative, moderate, and aggressive products. Whether it's short-term Debt Funds or more aggressive Mid Cap, Small Cap, or Thematic Funds, you can customize your investments via Systematic Investment Plans or Systematic Transfer Plans (STPs).</>,
        img: ""
    },
    {
        title: "Retirement Planning",
        content: <>Planning for retirement requires building a substantial corpus to maintain your lifestyle. Mutual Funds offer a range of products to help you create wealth during your working years and generate regular income post-retirement through Hybrid and Debt Funds with Systematic Withdrawal Plans (SWPs).</>,
        img: ""
    },
    {
        title: "Institutional Investors",
        content: <>Businesses and institutions can also benefit from Mutual Funds, with products designed for both short-term investments and long-term wealth creation. These solutions help manage cash flows efficiently and cater to the varied investment horizons of your organization.</>,
        img: ""
    }
]

const ServiceData = [
    {
        id: "mutual-funds",
        title: "Mutual Funds",
        tagline: <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident eos quisquam adipisci vero corporis illum atque cupiditate aliquid. Molestiae.</>,
        topBio: <>At Artham FinoMetry, we believe Mutual Funds are one of the best investment avenues available in India. They offer a diversified, professionally managed investment option that aligns with your investment milestones, whether you're a seasoned investor or just starting out. With transparency, regulation, and a wide range of products, Mutual Funds can cater to investors at any stage of their investment journey.</>,
        backgroundImage: "/Images/SoulServicesBackgrounds/MUTUALFUNDS.jpg",
        description: (
            <>
                {/* <div>
                    <div> */}
                <MutualFundCards />
                {/* </div>
                </div> */}
            </>
        )
    },
    {
        id: "insurance",
        title: "Insurance",
        tagline: <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident eos quisquam adipisci vero corporis illum atque cupiditate aliquid. Molestiae.</>,
        backgroundImage: "/Images/SoulServicesBackgrounds/INSURANCE.jpg",
        description: (
            <>
                <p>Providing Life and General Insurance solutions through state of the art online platform and App backed by Gennext Insurance Brokers Pvt. Ltd., an IRDA registered Insurance Broking Company. One can Select, Compare, Buy, Renew and Manage their policies online from anywhere through www.policyworld.com. Policy world has partnered with leading insurers to provide insurance solutions related to Life, Health, Personal Accident, Critical Illness, Travel, Car and Two wheeler. </p>
                <p><b>For more information visit <Link to="https://www.policyworld.com" target="_blank">www.policyworld.com</Link></b></p>
            </>
        )
    },
    {
        id: "alternative-investments",
        title: "Alternative Investments",
        tagline: <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident eos quisquam adipisci vero corporis illum atque cupiditate aliquid. Molestiae.</>,
        backgroundImage: "/Images/SoulServicesBackgrounds/TaxPlanning.jpg",
        description: (
            <>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, tempora tenetur deleniti odit aut, possimus sit iste voluptas eum, similique magnam. Quasi repellendus sequi similique eius placeat praesentium architecto dignissimos?</p>
                <p><b>For more information visit <Link to="https://www.policyworld.com" target="_blank">www.policyworld.com</Link></b></p>
            </>
        )
    },
    {
        id: "fixed-income",
        title: "Fixed Income",
        tagline: <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident eos quisquam adipisci vero corporis illum atque cupiditate aliquid. Molestiae.</>,
        backgroundImage: "/Images/SoulServicesBackgrounds/FIXEDINCOME.jpg",
        description: (
            <>
                <p>Fixed Income Products are offered to investors who need fixed and regular income and wish to diversify their portfolio. Through Fundzbazar.com we provide paperless Investment solution for Gsec, SDL, Fixed Deposits & Liquiloans.</p>
                <p><b>For more information visit <Link to="https://www.fundzbazar.com" target="_blank">www.fundzbazar.com</Link></b></p>
            </>
        )
    }
];

