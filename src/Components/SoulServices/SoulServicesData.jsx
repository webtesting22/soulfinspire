import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Collapse, Row, Col } from "antd";
const { Panel } = Collapse;

//----------- This is a animated card common component to used every services inside
export const AnimatedCards = ({ cardsData }) => {
    const [activeKey, setActiveKey] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

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

    useEffect(() => {
        const handleResize = () => {
            const isNowMobile = window.innerWidth <= 768;
            setIsMobile(isNowMobile);

            if (isNowMobile) {
                const allKeys = cardsData.map((_, index) => index.toString());
                setActiveKey(allKeys); // Open all on mobile
            } else {
                setActiveKey(null); // Reset on desktop
            }
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [cardsData]);

    const handlePanelChange = (key) => {
        if (!isMobile) {
            setActiveKey(activeKey === key ? null : key);
        }
    };

    return (
        <div>
            {cardsData.map((item, index) => (
                <Row key={index}>
                    <Col lg={24} style={{width:"100%"}}>
                        <div
                            id={item.id}
                            className="Animated3DCard"
                            onMouseEnter={() => !isMobile && setActiveKey(index.toString())}
                            onMouseLeave={() => !isMobile && setActiveKey(null)}
                            ref={(el) => (cardRefs.current[index] = el)}
                        >
                            <Collapse
                                bordered={false}
                                expandIconPosition="right"
                                {...(!isMobile && { accordion: true })}
                                activeKey={activeKey}
                                onChange={() => handlePanelChange(index.toString())}
                                style={{ width: "100%" }}
                            >
                                <Panel
                                    header={
                                        <div className="AnimatedRowColumnContainer">
                                            <div className="AnimatedContentContainer">
                                                <div className="CountCards">
                                                    <span>{(index + 1).toString().padStart(2, '0')}</span>
                                                </div>
                                                <h3 className="PrimaryHeadingStyle">{item.title}</h3>
                                            </div>
                                            <div className="AnimatedInsideImageContainer">
                                                <img src={item.img} alt="" />
                                            </div>
                                        </div>
                                    }
                                    key={index.toString()}
                                >
                                    <p>{item.content}</p>
                                </Panel>
                            </Collapse>
                        </div>
                    </Col>
                </Row>
            ))}
        </div>
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
        img: "https://images.unsplash.com/photo-1506751470038-e579eb91f580?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Retirement Planning",
        content: <>Planning for retirement requires building a substantial corpus to maintain your lifestyle. Mutual Funds offer a range of products to help you create wealth during your working years and generate regular income post-retirement through Hybrid and Debt Funds with Systematic Withdrawal Plans (SWPs).</>,
        img: "https://images.unsplash.com/photo-1506751470038-e579eb91f580?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Institutional Investors",
        content: <>Businesses and institutions can also benefit from Mutual Funds, with products designed for both short-term investments and long-term wealth creation. These solutions help manage cash flows efficiently and cater to the varied investment horizons of your organization.</>,
        img: "https://images.unsplash.com/photo-1506751470038-e579eb91f580?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]


const InsuranceCards = [
    {
        title: "Families and Breadwinners",
        content: <>If you have financial dependents, a Term Life Insurance plan and a Family Floater Health Insurance plan with a Super Top-up are essential. These ensure that your family's financial future is protected in the event of your untimely demise or hospitalization, allowing them to maintain their standard of living even in your absence.</>,
        img: "https://images.unsplash.com/photo-1506751470038-e579eb91f580?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Individuals with Family History",
        content: <>For those with pre-existing health conditions or a family history of medical issues, Life and Health Insurance is vital. It covers hospitalization costs, medical treatments, and preventive care, reducing the financial burden during health emergencies.</>,
        img: "https://images.unsplash.com/photo-1506751470038-e579eb91f580?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Young Professionals",
        content: <>Starting early with Life and Health Insurance is advantageous, as premiums are generally lower when you are younger and healthier. This not only ensures long-term protection but also locks in affordable rates for the future.</>,
        img: "https://images.unsplash.com/photo-1506751470038-e579eb91f580?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Retirees",
        content: <>As medical expenses rise with age, Health Insurance becomes crucial for retirees. A robust Health Insurance plan ensures you receive the best care without depleting your savings, allowing you to enjoy your retirement without financial stress.</>,
        img: "https://images.unsplash.com/photo-1506751470038-e579eb91f580?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

const AlternativeInvestmentsCards = [
    {
        title: "Visionary Investors",
        content: <>If you have financial dependents, a Term Life Insurance plan and a Family Floater Health Insurance plan with a Super Top-up are essential. These ensure that your family's financial future is protected in the event of your untimely demise or hospitalization, allowing them to maintain their standard of living even in your absence.</>,
        img: "https://images.unsplash.com/photo-1506751470038-e579eb91f580?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Institutions and Family Offices",
        content: <>For those with pre-existing health conditions or a family history of medical issues, Life and Health Insurance is vital. It covers hospitalization costs, medical treatments, and preventive care, reducing the financial burden during health emergencies.</>,
        img: "https://images.unsplash.com/photo-1506751470038-e579eb91f580?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        img: "https://images.unsplash.com/photo-1506751470038-e579eb91f580?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Short-term Milestone Planners",
        content: <>Whether you're saving for a major purchase, funding education, or building an emergency fund, Fixed Deposits and Bonds offer the required safety and stability for short-term investment milestones.</>,
        img: "https://images.unsplash.com/photo-1506751470038-e579eb91f580?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Institutional Investors",
        content: <>Businesses and institutions seeking stable investment options can benefit from FDs and Bonds. These instruments provide assured returns and help efficiently manage cash flow, making them a reliable choice for organizational investments.</>,
        img: "https://images.unsplash.com/photo-1506751470038-e579eb91f580?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

//----------- This is a animated card common component to used every services inside end--------------------




//---------- why choose us dynamic component start

import SectionHeading from "../SectionHeading/SectionHeading";
export const AnimatedWhyChooseUsCard = ({ WhyChooseUsCards }) => {

    return (
        <>
            <div id="AnimatedWhyChooseUsCard">
                <Row>
                    {WhyChooseUsCards.map((item, index) => (
                        <Col lg={12} key={index}>
                            <div>
                                <div className="OurServicesCardsContainer">
                                    <div className="OverlayImage">
                                        <img src={item.backgroundImg} alt="" loading="lazy" />
                                    </div>
                                    <div className="ContentContainerOurServices">
                                        <div>
                                            <h2 style={{ textTransform: "uppercase" }}>{item.title}</h2>
                                            <br />
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};

export default AnimatedWhyChooseUsCard

const MutualFundsCardsData = [
    {
        title: "Regulation and Safety",
        backgroundImg: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=3226&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: <>Mutual Funds in India are highly regulated and closely monitored by SEBI, making them a safe investment choice.</>
    },
    {
        title: "Professional Management",
        backgroundImg: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=3226&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: <>Managed by expert fund managers, Mutual Funds benefit from professional insights, ensuring your investments are in capable hands.</>
    },
    {
        title: "Low Cost",
        backgroundImg: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=3226&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: <>With a transparent fee structure regulated by SEBI, Mutual Funds are one of the most affordable investment options available.</>
    },
    {
        title: "Diversification",
        backgroundImg: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=3226&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: <>Mutual Funds invest in a variety of securities, spreading risk and providing a balanced portfolio. Whether it’s 25 or 200 stocks, the diversification offered helps mitigate risk without compromising on potential returns.</>
    }
]

const InsuranceWhyChooseUsCards = [
    {
        title: "Financial Security",
        description: <>Life & Health Insurance provides a safety net for your family, covering expenses such as hospital bills, mortgage payments, education costs, and daily living expenses, ensuring their financial stability in your absence.</>
    },
    {
        title: "Comprehensive Health Coverage",
        description: <>Health Insurance offers extensive coverage, including hospitalization, surgeries, prescription drugs, and preventive care. It enables you to access quality healthcare without worrying about the costs.</>
    },
    {
        title: "Tax Benefits",
        description: <>Both Life and Health Insurance offer tax benefits under various sections of the Income Tax Act (Old Regime), reducing your taxable income and providing additional savings.</>
    },
    {
        title: "Critical Illness and Disability Riders",
        description: <>Many insurance plans include riders for critical illness and disability, offering extra coverage for serious health conditions or accidents that could affect your earning ability.</>
    }
]
const AlternativeInvestmentsWhyChooseUsCards = [
    {
        title: "Invest in the Future",
        description: <>Startup Funds offer a direct path to investing in the future of sectors like technology, healthcare, and finance. By supporting early-stage companies, you become part of their growth journey from the ground up, with the potential for substantial returns as these companies scale.</>
    },
    {
        title: "Exclusive Opportunities",
        description: <>Startup Funds provide access to investment opportunities that are not available in public markets. These funds are SEBI-registered and managed by experts with deep industry insights, ensuring that you invest in the most promising startups with robust growth potential.</>
    },
    {
        title: "Tailored Investment Strategies",
        description: <>PMSs and AIFs offer personalized portfolios aligned with your investment milestones and volatility tolerance. With professional management focused on achieving superior returns, these funds are ideal for those seeking a bespoke investment approach.</>
    },
    {
        title: "Enhanced Diversification",
        description: <>Alternate Funds, particularly AIFs, offer diversification into niche markets and asset classes, spreading risk while targeting higher returns. This diversification is essential for sophisticated investors aiming to optimize their portfolio performance.</>
    }
]

const FixedIncomeWhyChooseUsCards = [
    {
        title: "Stability and Security",
        description: <>Fixed Deposits and Bonds are low-volatility investment options offering guaranteed income. They are perfect for risk-averse investors who value secure and stable investment avenues.</>
    },
    {
        title: "Regular Income",
        description: <>These instruments provide regular interest payouts, ensuring a steady income stream. This feature is particularly attractive to retirees and those seeking periodic returns.</>
    },
    {
        title: "Capital Preservation",
        description: <>FDs and Bonds focus on preserving your capital. Your principal amount remains secure while earning interest, making these options ideal for conservative investors.</>
    },
    {
        title: "Fixed Tenure and Returns",
        description: <>AWith predetermined tenure and interest rates, FDs and Bonds allow you to plan your investment milestones with certainty. The fixed nature of returns ensures predictability in your investment portfolio.</>
    }
]

//---------- why choose us dynamic component End

const ServiceData = [
    {
        id: "mutual-funds",
        title: "Mutual Funds",
        tagline: <>Mutual Funds: A Must-Have in Your Investment <span>Strategy</span></>,
        topBio: <>At Artham FinoMetry, we believe Mutual Funds are one of the best investment avenues available in India. They offer a diversified, professionally managed investment option that aligns with your investment milestones, whether you're a seasoned investor or just starting out. With transparency, regulation, and a wide range of products, Mutual Funds can cater to investors at any stage of their investment journey.</>,
        backgroundImage: "/Images/SoulServicesBackgrounds/MUTUALFUNDS.jpg",
        description: (
            <>
                <AnimatedCards cardsData={PerfectMatchMutualFundsCardsData} />
                <SectionHeading text="Awards and Recognitions" valueOfBorder="1px solid black" color="black" beforeBgColor="black" />
                <AnimatedWhyChooseUsCard WhyChooseUsCards={MutualFundsCardsData} />
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
                <SectionHeading text="Awards and Recognitions" valueOfBorder="1px solid black" color="black" beforeBgColor="black" />
                <AnimatedWhyChooseUsCard WhyChooseUsCards={InsuranceWhyChooseUsCards} />
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
                <SectionHeading text="Awards and Recognitions" valueOfBorder="1px solid black" color="black" beforeBgColor="black" />
                <AnimatedWhyChooseUsCard WhyChooseUsCards={AlternativeInvestmentsWhyChooseUsCards} />
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
                <SectionHeading text="Awards and Recognitions" valueOfBorder="1px solid black" color="black" beforeBgColor="black" />
                <AnimatedWhyChooseUsCard WhyChooseUsCards={FixedIncomeWhyChooseUsCards} />
            </>
        )
    }
];

