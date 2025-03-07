import React from "react";
import "./SectionHeading.css";

const SectionHeading = ({ text, color = "white", valueOfBorder = "1px solid white", beforeBgColor = "white" }) => {
    return (
        <>


            <div className="PaddingAdjustHeadingContainer">
                <div className="HeadingContainerDynamic" style={{ borderTop: valueOfBorder }} data-aos="fade-left"
                    data-aos-duration="1000">
                    <h2 style={{ color }} className={`before-color-${beforeBgColor.replace("#", "")}`} data-aos="fade-left"
                        data-aos-duration="1200" data-aos-delay="400">{text}</h2>
                </div>
            </div>

        </>
    );
};

export default SectionHeading;
