import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Drawer, Collapse } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./SoulNavigation.css";
import NavigationLinks from "./NavigationLinks";

const { Panel } = Collapse;

const SoulNavigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const [drawerVisible, setDrawerVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {/* PC Navigation */}
            {!isMobile ? (
                <div
                    className="StikyContainer"
                    style={{
                        backgroundColor: scrolled ? "white" : "transparent",
                        boxShadow: scrolled ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : "none",
                    }}
                >
                    <div
                        className="NavigationFlexContainer"
                        style={{
                            paddingTop: scrolled ? "0.5%" : "3%",
                            paddingBottom: scrolled ? "0.5%" : "0%",
                            transition: ".5s",
                        }}
                    >
                        <div className="WidthContainer">
                            <div className="SoulLogoContainer">
                                <Link to="/">
                                    <img src="/Images/SoulFinspireLogo.png" alt="Logo" />
                                </Link>
                            </div>
                            <div className="NavigationLinksContainer">
                                <ul>
                                    {NavigationLinks.map((item, index) => (
                                        <li key={index} className="nav-item">
                                            {item.link}
                                            {item.sublinks && (
                                                <div className="dropdown-menu">
                                                    <ul >
                                                        {item.sublinks.map((sub, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link to={sub.path}>{sub.link}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                // Mobile Navigation (Drawer + Accordion)
                <div
                    className="StikyContainer"
                    style={{
                        backgroundColor: scrolled ? "white" : "transparent",
                        boxShadow: scrolled ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : "none",
                    }}
                >
                <div className="MobileNavContainer">
                    <div className="MobileNavHeader">
                        <Link to="/">
                            <img src="/Images/SoulFinspireLogo.png" alt="Logo" />
                        </Link>
                        <MenuOutlined className="MenuIcon" onClick={() => setDrawerVisible(true)} />
                    </div>

                    <Drawer
                        title="Navigation"
                        placement="right"
                        closable
                        onClose={() => setDrawerVisible(false)}
                        visible={drawerVisible}
                    >
                        <Collapse accordion>
                            {NavigationLinks.map((item, index) => (
                                item.sublinks && item.sublinks.length > 0 ? (
                                    <Panel header={item.link} key={index}>
                                        {item.sublinks.map((sub, subIndex) => (
                                            <p key={subIndex}>
                                                <Link to={sub.path}>{sub.link}</Link>
                                            </p>
                                        ))}
                                    </Panel>
                                ) : (
                                    <Panel
                                        header={
                                            <Link to={item.path || "#"} onClick={() => setDrawerVisible(false)}>
                                                {item.link}
                                            </Link>
                                        }
                                        key={index} showArrow={false} onClose={() => setDrawerVisible(false)} className="WithoutSublinkPanel">
                                        {/* <p>
                                            <Link to={item.path || "#"}>{item.link}</Link>
                                        </p> */}
                                    </Panel>
                                )
                            ))}
                        </Collapse>
                    </Drawer>
                </div>
                </div>
            )}
        </>
    );
};

export default SoulNavigation;
