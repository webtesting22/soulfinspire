import React from "react";
import "./LoginPortal.css"
import { Row, Col } from "antd";
import "./LoginPage.css"
const LoginPortal = () => {
    return (
        <>
            <div id="LoginPage">
                <Row>
                    <Col lg={12}>
                        <div>
                            <div>``
                                <img src="/Images/LoginPageImage.jpg" alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="DynamicLoginFilesContainer">
                            <div>
                                <div className="LoginPageLogoContainer">
                                    <img src="/Images/SoulFinspireLogo.png" alt="" loading="lazy" />
                                </div>
                                <div>
                                    <h2 className="PrimaryHeadingStyle" style={{ textAlign: "center" }}>Welcome <span>Back</span></h2>
                                    <p style={{ textAlign: "center" }}>Enter your email and password to access your account</p>
                                </div>
                                <div className="DynamicChangeComponent">

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default LoginPortal