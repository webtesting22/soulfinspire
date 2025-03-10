import React from "react";
import SoulHome from "../../Components/SoulHome/SoulHome";
import AboutHome from "../../Components/AboutHome/AboutHome";
import ServicesHome from "../../Components/ServicesHome/ServicesHome";
import AttachBackHome from "../../Components/AttachBackHome/AttachBackHome";
import SoulTestimonial from "../../Components/SoulTestimonial/SoulTestimonial";

const HomePageRoutes = () => {
    return (
        <>
            <SoulHome />
            <AboutHome />
            <ServicesHome />
            <AttachBackHome />
            <SoulTestimonial/>
        </>
    )
}
export default HomePageRoutes