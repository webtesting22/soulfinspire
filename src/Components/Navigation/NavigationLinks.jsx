const NavigationLinks = [
    {
        link: "Home",
        path: "/"
    },
    {
        link: "About Us",
        path: "/about-us"
    },
    {
        link: "Services",
        sublinks: [
            {
                link: "Mutual Funds",
                path: "/soul-services#mutualfunds"
            },
            {
                link: "Insurance",
                path: "/soul-services#insurance"
            },
            {
                link: "Tax Planning",
                path: "/soul-services#taxplanning"
            },
            {
                link: "Financial Planning",
                path: "/soul-services#financialplanning"
            },
            {
                link: "Fixed Income",
                path: "/soul-services#fixedincome"
            }
        ],
        path: "/soul-services"
    },
    {
        link: "Calculators",
        sublinks: [
            {
                link: "SIP Planning",
                path: ""
            },
            {
                link: "Lumpsum Planning",
                path: ""
            },
            {
                link: "Retirement Planning",
                path: ""
            },
            {
                link: "House Planning",
                path: ""
            },
            {
                link: "Marriage Planning",
                path: ""
            },
            {
                link: "Vacation Planning",
                path: ""
            },
            {
                link: "Education Planning",
                path: ""
            },
            {
                link: "Car Planning",
                path: ""
            }
        ],
        path: "/soul-calculators"
    }
];

export default NavigationLinks;
