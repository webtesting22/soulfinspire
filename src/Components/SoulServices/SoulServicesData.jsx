import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { Row, Col } from "antd";


//----------- This is a animated card common component to used every services inside
export const AnimatedCards = ({ cardsData }) => {
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
                {cardsData.map((item, index) => (
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
    );
};

export { ServiceData };



//----------- This is a animated card common component to used every services inside

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


const InsuranceCards = [
    {
        title: "Families and Breadwinners",
        content: <>If you have financial dependents, a Term Life Insurance plan and a Family Floater Health Insurance plan with a Super Top-up are essential. These ensure that your family's financial future is protected in the event of your untimely demise or hospitalization, allowing them to maintain their standard of living even in your absence.</>,
        img: ""
    },
    {
        title: "Individuals with Family History",
        content: <>For those with pre-existing health conditions or a family history of medical issues, Life and Health Insurance is vital. It covers hospitalization costs, medical treatments, and preventive care, reducing the financial burden during health emergencies.</>,
        img: ""
    },
    {
        title: "Young Professionals",
        content: <>Starting early with Life and Health Insurance is advantageous, as premiums are generally lower when you are younger and healthier. This not only ensures long-term protection but also locks in affordable rates for the future.</>,
        img: ""
    },
    {
        title: "Retirees",
        content: <>As medical expenses rise with age, Health Insurance becomes crucial for retirees. A robust Health Insurance plan ensures you receive the best care without depleting your savings, allowing you to enjoy your retirement without financial stress.</>,
        img: ""
    }
]
const AlternativeInvestmentsCards = [
    {
        title: "Visionary Investors",
        content: <>If you have financial dependents, a Term Life Insurance plan and a Family Floater Health Insurance plan with a Super Top-up are essential. These ensure that your family's financial future is protected in the event of your untimely demise or hospitalization, allowing them to maintain their standard of living even in your absence.</>,
        img: ""
    },
    {
        title: "Institutions and Family Offices",
        content: <>For those with pre-existing health conditions or a family history of medical issues, Life and Health Insurance is vital. It covers hospitalization costs, medical treatments, and preventive care, reducing the financial burden during health emergencies.</>,
        img: ""
    },
]

const FixedIncomeCards = [
    {
        title: "Conservative Investors",
        content: <>If your priority is capital preservation and generating steady income, Fixed Deposits and Bonds are ideal. They provide predictable income with minimal volatility, making them suitable for those who prefer safety over high returns.</>,
        img: "https://images.unsplash.com/photo-1506751470038-e579eb91f580?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Retirees",
        content: <>For those looking to secure post-retirement expenses, FDs and Bonds offer regular interest payouts, ensuring a stable income. These instruments help retirees avoid market volatility while focusing on capital protection.</>,
        img: ""
    },
    {
        title: "Short-term Milestone Planners",
        content: <>Whether you're saving for a major purchase, funding education, or building an emergency fund, Fixed Deposits and Bonds offer the required safety and stability for short-term investment milestones.</>,
        img: ""
    },
    {
        title: "Institutional Investors",
        content: <>Businesses and institutions seeking stable investment options can benefit from FDs and Bonds. These instruments provide assured returns and help efficiently manage cash flow, making them a reliable choice for organizational investments.</>,
        img: ""
    }
]

//----------- This is a animated card common component to used every services inside end--------------------




const ServiceData = [
    {
        id: "mutual-funds",
        title: "Mutual Funds",
        tagline: <>Mutual Funds: A Must-Have in Your Investment <span>Strategy</span></>,
        topBio: <>At Artham FinoMetry, we believe Mutual Funds are one of the best investment avenues available in India. They offer a diversified, professionally managed investment option that aligns with your investment milestones, whether you're a seasoned investor or just starting out. With transparency, regulation, and a wide range of products, Mutual Funds can cater to investors at any stage of their investment journey.</>,
        backgroundImage: "/Images/SoulServicesBackgrounds/MUTUALFUNDS.jpg",
        description: (
            <>
                {/* <div>
                    <div> */}
                <AnimatedCards cardsData={PerfectMatchMutualFundsCardsData} />
                {/* </div>
                </div> */}
            </>
        )
    },
    {
        id: "insurance",
        title: "Insurance",
        tagline: <>Mutual Funds: A Must-Have in Your Investment <span>Strategy</span></>,
        backgroundImage: "/Images/SoulServicesBackgrounds/INSURANCE.jpg",
        description: (
            <>
                <AnimatedCards cardsData={InsuranceCards} />
            </>
        )
    },
    {
        id: "alternative-investments",
        title: "Alternative Investments",
        tagline: <>Mutual Funds: A Must-Have in Your Investment <span>Strategy</span></>,
        backgroundImage: "/Images/SoulServicesBackgrounds/TaxPlanning.jpg",
        description: (
            <>
                <AnimatedCards cardsData={AlternativeInvestmentsCards} />
            </>
        )
    },
    {
        id: "fixed-income",
        title: "Fixed Income",
        tagline: <>Mutual Funds: A Must-Have in Your Investment <span>Strategy</span></>,
        backgroundImage: "/Images/SoulServicesBackgrounds/FIXEDINCOME.jpg",
        description: (
            <>
                <AnimatedCards cardsData={FixedIncomeCards} />
            </>
        )
    }
];

