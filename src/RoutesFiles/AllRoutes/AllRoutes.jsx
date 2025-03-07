import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageRoutes from "../HomePageRoutes/HomePageRoutes";
import AboutUs from "../../Components/AboutUs/AboutUs";
import SoulNavigation from "../../Components/Navigation/SoulNavigation";
import Footer from "../../Components/Footer/Footer";
const AllRoutes = () => {
    return (
        <>
            <Router>
                <SoulNavigation/>
                <Routes>
                    <Route path="/" element={<HomePageRoutes />} />
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
                <Footer/>
            </Router>
        </>
    )
}
export default AllRoutes