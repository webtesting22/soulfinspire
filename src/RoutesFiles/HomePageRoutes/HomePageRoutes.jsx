import React from "react";
import SoulHome from "../../Components/SoulHome/SoulHome";
import AboutHome from "../../Components/AboutHome/AboutHome";
import ServicesHome from "../../Components/ServicesHome/ServicesHome";
import AttachBackHome from "../../Components/AttachBackHome/AttachBackHome";
import SoulTestimonial from "../../Components/SoulTestimonial/SoulTestimonial";
import AwardsandRecognitions from "../../Components/AwardsandRecognitions/AwardsandRecognitions";

const HomePageRoutes = () => {
    return (
        <>
            <SoulHome />
            <AboutHome />
            <ServicesHome />
            <AttachBackHome />
            <SoulTestimonial/>
            <AwardsandRecognitions/>
        </>
    )
}
export default HomePageRoutes