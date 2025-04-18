import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageRoutes from "../HomePageRoutes/HomePageRoutes";
import AboutUs from "../../Components/AboutUs/AboutUs";
import SoulNavigation from "../../Components/Navigation/SoulNavigation";
import Footer from "../../Components/Footer/Footer";
import WhatsAppButton from "../../Components/WhatsappBtn/WhatAppButton";
import SoulServices from "../../Components/SoulServices/SoulServices";
import Calculators from "../../Components/Calculators/Calculators";
import SoulDynamicSingleService from "../../Components/SoulServices/SoulDynamicSingleService";
import LoginPortal from "../../Components/PortalLogin/LoginPanel";
import Services from "../../Components/Services/services";
const AllRoutes = () => {
    return (
        <>
            <Router>
                <SoulNavigation />
                <WhatsAppButton />
                <Routes>
                    <Route path="/" element={<HomePageRoutes />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/soul-services" element={<SoulServices />} />
                    <Route path="/soul-services/:serviceId" element={<SoulDynamicSingleService />} />
                    <Route path="/soul-calculators" element={<Calculators />} />
                    <Route path="/login-portal" element={<LoginPortal />} />
                    <Route path="/services" element={<Services />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}
export default AllRoutes