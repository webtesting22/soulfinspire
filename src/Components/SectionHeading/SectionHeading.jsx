import React from "react";
import "./SectionHeading.css";

const SectionHeading = ({ text, color = "white", valueOfBorder = "1px solid white", beforeBgColor = "white" }) => {
    return (
        <>


            <div className="PaddingAdjustHeadingContainer">
                <div className="HeadingContainerDynamic" style={{ borderTop: valueOfBorder }}>
                    <h2 style={{ color }} className={`before-color-${beforeBgColor.replace("#", "")}`}>{text}</h2>
                </div>
            </div>

        </>
    );
};

export default SectionHeading;
