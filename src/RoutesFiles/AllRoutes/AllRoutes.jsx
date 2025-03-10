import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageRoutes from "../HomePageRoutes/HomePageRoutes";
import AboutUs from "../../Components/AboutUs/AboutUs";
import SoulNavigation from "../../Components/Navigation/SoulNavigation";
import Footer from "../../Components/Footer/Footer";
import WhatsAppButton from "../../Components/WhatsappBtn/WhatAppButton";
import SoulServices from "../../Components/SoulServices/SoulServices";
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
                </Routes>
                <Footer />
            </Router>
        </>
    )
}
export default AllRoutes