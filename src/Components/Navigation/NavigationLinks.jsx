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
            { link: "Mutual Funds", path: "/soul-services#mutualfunds" },
            { link: "Insurance", path: "/soul-services#insurance" },
            { link: "Alternative Investments", path: "/soul-services#alternativeinvestments" },
            { link: "Fixed Income", path: "/soul-services#fixedincome" }
        ],
        path: "/about-us"
    },
    {
        link: "Services",
        sublinks: [
            { link: "Wealth Management", path: "" },
            { link: "Tax Planning", path: "" },
            { link: "Portfolio Management", path: "" },
            { link: "Load Acquisitions", path: "" },
            { link: "Private Wealth", path: "" }
        ],
        path: "/soul-services"
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
