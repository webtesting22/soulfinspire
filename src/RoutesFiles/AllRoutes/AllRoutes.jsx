import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageRoutes from "../HomePageRoutes/HomePageRoutes";
import AboutUs from "../../Components/AboutUs/AboutUs";
import SoulNavigation from "../../Components/Navigation/SoulNavigation";
const AllRoutes = () => {
    return (
        <>
            <Router>
                <SoulNavigation/>
                <Routes>
                    <Route path="/" element={<HomePageRoutes />} />
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
            </Router>
        </>
    )
}
export default AllRoutes