const NavigationLinks = [
    // {
    //     link: "Home",
    //     path: "/"
    // },
    {
        link: "About Us",
        path: "/about-us"
    },
    {
        link: "Products",
        sublinks: [
            { link: "Mutual Funds", path: "/soul-services#MutualFunds" },
            { link: "Insurance", path: "/soul-services#Insurance" },
            { link: "Alternative Investments", path: "/soul-services#AlternativeInvestments" },
            { link: "Fixed Income", path: "/soul-services#FixedIncome" }
        ],
        path: "/soul-services"
    },
    {
        link: "Services",
        sublinks: [
            { link: "360° Financial Planning", path: "/services#financialPlanning" },
            { link: "Portfolio Management", path: "/services#portfolioManagement" },
            { link: "Tax Planning", path: "/services#taxPlanning" },
            { link: "Family Offices", path: "/services#familyOffices" },
            { link: "Loan Syndications", path: "/services#loanSyndications" }
        ],
        path: "/services"
    },
    {
        link: "Calculators",
        sublinks: [
            { link: "SIP Planning", path: "/soul-calculators?tab=SIP%20Planning" },
            { link: "Lumpsum Planning", path: "/soul-calculators?tab=Lumpsum%20Planning" },
            // { link: "Retirement Planning", path: "/soul-calculators?tab=Retirement%20Planning" },
            { link: "House Planning", path: "/soul-calculators?tab=House%20Planning" },
            // { link: "Marriage Planning", path: "/soul-calculators?tab=Marriage%20Planning" },
            // { link: "Vacation Planning", path: "/soul-calculators?tab=Vacation%20Planning" },
            // { link: "Education Planning", path: "/soul-calculators?tab=Education%20Planning" },
            { link: "Car Planning", path: "/soul-calculators?tab=Car%20Planning" }
        ],
        path: "/soul-calculators"
    }
];

export default NavigationLinks;
