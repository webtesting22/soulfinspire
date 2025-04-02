import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button, Modal, Input, Form, message, notification } from "antd";
import "./LoginPortal.css";
import "./LoginPage.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
const LoginPortal = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    const [form] = Form.useForm(); // Ant Design's form instance to manage the form
    const swiperRef = useRef(null);
    const toggleMode = () => {
        setIsSignUp(!isSignUp);
    };
    const handleNavigation = () => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;
            if (isSignUp) {
                // If in Sign Up mode, move to the next slide
                swiper.slideNext();
            } else {
                // If in Log In mode, move to the previous slide
                swiper.slidePrev();
            }
        }
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsDisabled(false);
        }, 30000); // 10 seconds

        return () => clearTimeout(timer);
    }, []);

    // Handle form submit
    const handleSubmit = async (values) => {
        console.log("Form Values: ", values); // Log values to check the structure

        // Construct JSON payload using form values
        const payload = {
            clientCodeUCC: values.clientCodeUCC,
            firstName: values.firstName,
            middleName: values.middleName,
            lastName: values.lastName,
            taxStatus: values.taxStatus,
            occupationCode: values.occupationCode,
            holdingNature: values.holdingNature,
            panExempt: values.panExempt,
            holderPAN: values.holderPAN,
            clientType: values.clientType,
            defaultDP: values.defaultDP,
            cdsldpid: values.cdsldpid,
            cdsLCLTID: values.cdsLCLTID,
            cmbpId: values.cmbpId,
            nsdldpid: values.nsdldpid,
            nsdlCLTID: values.nsdlCLTID,
            accountType1: values.accountType1,
            accountNo1: values.accountNo1,
            micrNo1: values.micrNo1,
            ifscCode1: values.ifscCode1,
            defaultBankFlag: values.defaultBankFlag,
            divPayMode: values.divPayMode,
            address1: values.address1,
            address2: values.address2,
            city: values.city,
            state: values.state,
            pincode: values.pincode,
            country: values.country,
            email: values.email,
            communicationMode: values.communicationMode,
            foreignAddress1: values.foreignAddress1,
            foreignAddress2: values.foreignAddress2,
            foreignAddressCity: values.foreignAddressCity,
            foreignAddressPincode: values.foreignAddressPincode,
            foreignAddressState: values.foreignAddressState,
            foreignAddressCountry: values.foreignAddressCountry,
            indianMobileNo: values.indianMobileNo,
            nominee1Name: values.nominee1Name,
            nominee1Relationship: values.nominee1Relationship,
            nominee1ApplicablePercentage: values.nominee1ApplicablePercentage,
            nominee1DOB: values.nominee1DOB,
            holderKYCType: values.holderKYCType,
            holderCKYCNumber: values.holderCKYCNumber,
            paperlessFlag: values.paperlessFlag,
            nominationOpt: values.nominationOpt,
            nominationAuthMode: values.nominationAuthMode,
            nomineePAN1: values.nomineePAN1,
            nomineePAN2: values.nomineePAN2,
        };

        try {
            const response = await fetch("http://localhost:4040/api/soulfinspire/addSoulFinspireUserApplication", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload), // Send the form data as JSON
            });

            const data = await response.json();

            if (response.ok) {

                console.log("ghsduhfiwfh")
                setIsModalOpen(false); // Close the modal
                setIsSuccessModalOpen(true);
                notification.success({
                    message: "Form Successfully Submitted",
                });

                // Show the notification after a delay of 5-6 seconds
                // setTimeout(() => {

                // }, 100); // Delay for 5 seconds before showing the notification
            } else {
                message.error(data.message || "Error during form submission.");
                console.error("Error submitting form:", data.message);
            }
        } catch (error) {
            message.error("Network error. Please try again later.");
            console.error("Error:", error);
        }
    };


    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);
    const handleSuccessModalCancel = () => setIsSuccessModalOpen(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleButtonClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    }; const handleButtonClickAnother = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <>
            <div id="LoginPage">
                <Row>
                    <Col lg={12}>
                        <div>
                            <div>
                                <img src="/Images/LoginPageImage.jpg" alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="DynamicLoginFilesContainer">
                            <div style={{ width: "100%" }}>
                                <div className="LoginPageLogoContainer">
                                    <img src="/Images/SoulFinspireLogo.png" alt="" loading="lazy" />
                                </div>
                                <br /><br />
                                <div className="LogInSwiperContainer">
                                    <div>
                                        <Swiper
                                            // navigation={true}
                                            modules={[Navigation]}
                                            className="mySwiper"
                                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                                        >
                                            <SwiperSlide>
                                                <div className="FiledsContainer">
                                                    <div>
                                                        <h2 style={{ textAlign: "center" }}>Enhance your Finances
                                                        </h2>
                                                        <p style={{ textAlign: "center" }}>Click below to View & Manage Portfolio</p>
                                                        <br /><br />
                                                        <div style={{ width: "100%" }}>
                                                            <Form.Item
                                                                style={{ width: "100%" }}
                                                                label="UserName"
                                                                name="UserName"
                                                                rules={[{ required: true, message: 'Please enter your Client Code (UCC)' }]}
                                                            >
                                                                <Input placeholder="Enter your User Name" />
                                                            </Form.Item>

                                                            <Form.Item
                                                                style={{ width: "100%" }}
                                                                label="Password"
                                                                name="password"
                                                                rules={[{ required: true, message: 'Please enter your Valid Password' }]}
                                                            >
                                                                <Input placeholder="Enter your Password" />
                                                            </Form.Item>
                                                        </div>
                                                        {/* <div style={{ display: "flex", }} className="PrimarybtnContainer">
                                                        <Button type="primary" onClick={showModal}>Log In</Button>
                                                    </div> */}
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div>
                                                    <div>
                                                        <p><b>Please visit the link below to validate your KYC</b></p>
                                                        <p>Please follow the steps below:</p>
                                                        <ul>
                                                            <li>- Visit the KYC Validation Portal: <a href="https://www.cvlkra.com" target="_blank">https://www.cvlkra.com</a> and click KYC Inquiry.</li>
                                                            <li>- If your KYC status is marked as "Validated," please proceed by clicking the "Confirm" button below.</li>
                                                            <li>- If your KYC status is not "Validated," please complete the necessary steps on the portal to update your information.</li>
                                                            <li>- Once your KYC is validated, click on the "Confirm" button to confirm KYC.</li>
                                                        </ul>
                                                        <div className="PrimarybtnContainer" style={{ marginLeft: "10px" }}>
                                                            <Button style={{ padding: "10px 20px" }} disabled={isDisabled} onClick={showModal}>Confirm</Button>
                                                        </div>

                                                        {/* <p>https://www.cvlkra.com</p>
                                                    <p> Click on 'Continue' only if your KYC is "Validated"</p>
                                                    <p>CONTINUE</p> */}
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                                {/* <div>
                                    <h2 className="PrimaryHeadingStyle" style={{ textAlign: "center" }}>Welcome <span>Back</span></h2>
                                    <p style={{ textAlign: "center" }}>Fill all the Fields and Get <b>Dashboard Credentials</b></p>
                                </div> */}
                                <br />

                                <div style={{ display: "flex", justifyContent: "center" }} className="PrimarybtnContainer">
                                    <Button type="primary" onClick={handleButtonClick}>
                                        Log In
                                    </Button>
                                </div>

                                {/* Toggle between Sign Up and Log In */}
                                <div style={{ textAlign: "center", marginTop: 10 }}>
                                    <Button type="link" onClick={handleButtonClickAnother}>
                                        {isSignUp ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Modal
                    width={800}
                    title="SoulfinSpire"
                    open={isModalOpen}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <br />
                    <Form layout="vertical" form={form} onFinish={handleSubmit}>
                        <Form.Item
                            label="Client Code (UCC)"
                            name="clientCodeUCC"
                            rules={[{ required: true, message: 'Please enter your Client Code (UCC)' }]}
                        >
                            <Input placeholder="Enter your Client Code (UCC)" />
                        </Form.Item>

                        <Form.Item
                            label="Primary Holder First Name"
                            name="firstName"
                            rules={[{ required: true, message: 'Please enter your First Name' }]}
                        >
                            <Input placeholder="Enter your First Name" />
                        </Form.Item>

                        <Form.Item
                            label="Primary Holder Middle Name"
                            name="middleName"
                            rules={[{ required: true, message: 'Please enter your Middle Name' }]}
                        >
                            <Input placeholder="Enter your Middle Name" />
                        </Form.Item>

                        <Form.Item
                            label="Primary Holder Last Name"
                            name="lastName"
                            rules={[{ required: true, message: 'Please enter your Last Name' }]}
                        >
                            <Input placeholder="Enter your Last Name" />
                        </Form.Item>

                        <Form.Item
                            label="Tax Status"
                            name="taxStatus"
                            rules={[{ required: true, message: 'Please enter your Tax Status' }]}
                        >
                            <Input placeholder="Enter your Tax Status" />
                        </Form.Item>

                        <Form.Item
                            label="Occupation Code"
                            name="occupationCode"
                            rules={[{ required: true, message: 'Please enter your Occupation Code' }]}
                        >
                            <Input placeholder="Enter your Occupation Code" />
                        </Form.Item>

                        <Form.Item
                            label="Holding Nature"
                            name="holdingNature"
                            rules={[{ required: true, message: 'Please enter your Holding Nature' }]}
                        >
                            <Input placeholder="Enter your Holding Nature" />
                        </Form.Item>

                        <Form.Item
                            label="Primary Holder PAN Exempt"
                            name="panExempt"
                            rules={[{ required: true, message: 'Please enter your Primary Holder PAN Exempt' }]}
                        >
                            <Input placeholder="Enter your Primary Holder PAN Exempt" />
                        </Form.Item>

                        <Form.Item
                            label="Primary Holder PAN"
                            name="holderPAN"
                            rules={[{ required: true, message: 'Please enter your Primary Holder PAN' }]}
                        >
                            <Input placeholder="Enter your Primary Holder PAN" />
                        </Form.Item>

                        <Form.Item
                            label="Client Type"
                            name="clientType"
                            rules={[{ required: true, message: 'Please enter your Client Type' }]}
                        >
                            <Input placeholder="Enter your Client Type" />
                        </Form.Item>

                        <Form.Item
                            label="Default DP"
                            name="defaultDP"
                            rules={[{ required: true, message: 'Please enter your Default DP' }]}
                        >
                            <Input placeholder="Enter your Default DP" />
                        </Form.Item>

                        <Form.Item
                            label="CDSL DPID"
                            name="cdsldpid"
                            rules={[{ required: true, message: 'Please enter your CDSL DPID' }]}
                        >
                            <Input placeholder="Enter your CDSL DPID" />
                        </Form.Item>

                        <Form.Item
                            label="CDSLCLTID"
                            name="cdslcltid"
                            rules={[{ required: true, message: 'Please enter your CDSLCLTID' }]}
                        >
                            <Input placeholder="Enter your CDSLCLTID" />
                        </Form.Item>

                        <Form.Item
                            label="CMBP Id"
                            name="cmbpId"
                            rules={[{ required: true, message: 'Please enter your CMBP Id' }]}
                        >
                            <Input placeholder="Enter your CMBP Id" />
                        </Form.Item>

                        <Form.Item
                            label="NSDLDPID"
                            name="nsdldpid"
                            rules={[{ required: true, message: 'Please enter your NSDLDPID' }]}
                        >
                            <Input placeholder="Enter your NSDLDPID" />
                        </Form.Item>

                        <Form.Item
                            label="NSDLCLTID"
                            name="nsdlCLTID"
                            rules={[{ required: true, message: 'Please enter your NSDLCLTID' }]}
                        >
                            <Input placeholder="Enter your NSDLCLTID" />
                        </Form.Item>

                        <Form.Item
                            label="Account Type 1"
                            name="accountType1"
                            rules={[{ required: true, message: 'Please enter your Account Type 1' }]}
                        >
                            <Input placeholder="Enter your Account Type 1" />
                        </Form.Item>

                        <Form.Item
                            label="Account No 1"
                            name="accountNo1"
                            rules={[{ required: true, message: 'Please enter your Account No 1' }]}
                        >
                            <Input placeholder="Enter your Account No 1" />
                        </Form.Item>

                        <Form.Item
                            label="MICR No 1"
                            name="micrNo1"
                            rules={[{ required: true, message: 'Please enter your MICR No 1' }]}
                        >
                            <Input placeholder="Enter your MICR No 1" />
                        </Form.Item>

                        <Form.Item
                            label="IFSC Code 1"
                            name="ifscCode1"
                            rules={[{ required: true, message: 'Please enter your IFSC Code 1' }]}
                        >
                            <Input placeholder="Enter your IFSC Code 1" />
                        </Form.Item>

                        <Form.Item
                            label="Default Bank Flag"
                            name="defaultBankFlag"
                            rules={[{ required: true, message: 'Please enter your Default Bank Flag' }]}
                        >
                            <Input placeholder="Enter your Default Bank Flag" />
                        </Form.Item>

                        <Form.Item
                            label="Div pay mode"
                            name="divPayMode"
                            rules={[{ required: true, message: 'Please enter your Div Pay Mode' }]}
                        >
                            <Input placeholder="Enter your Div Pay Mode" />
                        </Form.Item>

                        <Form.Item
                            label="Address 1"
                            name="address1"
                            rules={[{ required: true, message: 'Please enter your Address 1' }]}
                        >
                            <Input placeholder="Enter your Address 1" />
                        </Form.Item>

                        <Form.Item
                            label="Address 2"
                            name="address2"
                            rules={[{ required: true, message: 'Please enter your Address 2' }]}
                        >
                            <Input placeholder="Enter your Address 2" />
                        </Form.Item>

                        <Form.Item
                            label="City"
                            name="city"
                            rules={[{ required: true, message: 'Please enter your City' }]}
                        >
                            <Input placeholder="Enter your City" />
                        </Form.Item>

                        <Form.Item
                            label="State"
                            name="state"
                            rules={[{ required: true, message: 'Please enter your State' }]}
                        >
                            <Input placeholder="Enter your State" />
                        </Form.Item>

                        <Form.Item
                            label="Pincode"
                            name="pincode"
                            rules={[{ required: true, message: 'Please enter your Pincode' }]}
                        >
                            <Input placeholder="Enter your Pincode" />
                        </Form.Item>

                        <Form.Item
                            label="Country"
                            name="country"
                            rules={[{ required: true, message: 'Please enter your Country' }]}
                        >
                            <Input placeholder="Enter your Country" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please enter your Email' }]}
                        >
                            <Input placeholder="Enter your Email" />
                        </Form.Item>

                        <Form.Item
                            label="Communication Mode"
                            name="communicationMode"
                            rules={[{ required: true, message: 'Please enter your Communication Mode' }]}
                        >
                            <Input placeholder="Enter your Communication Mode" />
                        </Form.Item>

                        <Form.Item
                            label="Foreign Address 1"
                            name="foreignAddress1"
                            rules={[{ required: true, message: 'Please enter your Foreign Address 1' }]}
                        >
                            <Input placeholder="Enter your Foreign Address 1" />
                        </Form.Item>

                        <Form.Item
                            label="Foreign Address 2"
                            name="foreignAddress2"
                            rules={[{ required: true, message: 'Please enter your Foreign Address 2' }]}
                        >
                            <Input placeholder="Enter your Foreign Address 2" />
                        </Form.Item>

                        <Form.Item
                            label="Foreign Address City"
                            name="foreignAddressCity"
                            rules={[{ required: true, message: 'Please enter your Foreign Address City' }]}
                        >
                            <Input placeholder="Enter your Foreign Address City" />
                        </Form.Item>

                        <Form.Item
                            label="Foreign Address Pincode"
                            name="foreignAddressPincode"
                            rules={[{ required: true, message: 'Please enter your Foreign Address Pincode' }]}
                        >
                            <Input placeholder="Enter your Foreign Address Pincode" />
                        </Form.Item>

                        <Form.Item
                            label="Foreign Address State"
                            name="foreignAddressState"
                            rules={[{ required: true, message: 'Please enter your Foreign Address State' }]}
                        >
                            <Input placeholder="Enter your Foreign Address State" />
                        </Form.Item>

                        <Form.Item
                            label="Foreign Address Country"
                            name="foreignAddressCountry"
                            rules={[{ required: true, message: 'Please enter your Foreign Address Country' }]}
                        >
                            <Input placeholder="Enter your Foreign Address Country" />
                        </Form.Item>

                        <Form.Item
                            label="Indian Mobile No."
                            name="indianMobileNo"
                            rules={[{ required: true, message: 'Please enter your Indian Mobile No.' }]}
                        >
                            <Input placeholder="Enter your Indian Mobile No." />
                        </Form.Item>

                        <Form.Item
                            label="Nominee 1 Name"
                            name="nominee1Name"
                            rules={[{ required: true, message: 'Please enter your Nominee 1 Name' }]}
                        >
                            <Input placeholder="Enter your Nominee 1 Name" />
                        </Form.Item>

                        <Form.Item
                            label="Nominee 1 Relationship"
                            name="nominee1Relationship"
                            rules={[{ required: true, message: 'Please enter your Nominee 1 Relationship' }]}
                        >
                            <Input placeholder="Enter your Nominee 1 Relationship" />
                        </Form.Item>

                        <Form.Item
                            label="Nominee 1 Applicable(%)"
                            name="nominee1ApplicablePercentage"
                            rules={[{ required: true, message: 'Please enter your Nominee 1 Applicable(%)' }]}
                        >
                            <Input placeholder="Enter your Nominee 1 Applicable(%)" />
                        </Form.Item>

                        <Form.Item
                            label="Nominee 1 DOB"
                            name="nominee1DOB"
                            rules={[{ required: true, message: 'Please enter your Nominee 1 DOB' }]}
                        >
                            <Input placeholder="Enter your Nominee 1 DOB" />
                        </Form.Item>

                        <Form.Item
                            label="Primary Holder KYC Type"
                            name="holderKYCType"
                            rules={[{ required: true, message: 'Please enter your Primary Holder KYC Type' }]}
                        >
                            <Input placeholder="Enter your Primary Holder KYC Type" />
                        </Form.Item>

                        <Form.Item
                            label="Primary Holder CKYC Number"
                            name="holderCKYCNumber"
                            rules={[{ required: true, message: 'Please enter your Primary Holder CKYC Number' }]}
                        >
                            <Input placeholder="Enter your Primary Holder CKYC Number" />
                        </Form.Item>

                        <Form.Item
                            label="Paperless_flag"
                            name="paperlessFlag"
                            rules={[{ required: true, message: 'Please enter your Paperless Flag' }]}
                        >
                            <Input placeholder="Enter your Paperless Flag" />
                        </Form.Item>

                        <Form.Item
                            label="Nomination Opt"
                            name="nominationOpt"
                            rules={[{ required: true, message: 'Please enter your Nomination Opt' }]}
                        >
                            <Input placeholder="Enter your Nomination Opt" />
                        </Form.Item>

                        <Form.Item
                            label="Nomination Auth Mode"
                            name="nominationAuthMode"
                            rules={[{ required: true, message: 'Please enter your Nomination Auth Mode' }]}
                        >
                            <Input placeholder="Enter your Nomination Auth Mode" />
                        </Form.Item>

                        <Form.Item
                            label="Nominee PAN1"
                            name="nomineePAN1"
                            rules={[{ required: true, message: 'Please enter your Nominee PAN1' }]}
                        >
                            <Input placeholder="Enter your Nominee PAN1" />
                        </Form.Item>

                        <Form.Item
                            label="Nominee PAN2"
                            name="nomineePAN2"
                            rules={[{ required: true, message: 'Please enter your Nominee PAN2' }]}
                        >
                            <Input placeholder="Enter your Nominee PAN2" />
                        </Form.Item>
                        <div style={{ display: "flex", justifyContent: "space-between" }} className="PrimarybtnContainer">
                            <Button onClick={handleCancel}>Cancel</Button>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Sign Up
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </Modal>
                <Modal
                    width={400}
                    title="Submission Successful"
                    open={isSuccessModalOpen}
                    onCancel={handleSuccessModalCancel}
                    footer={null}
                >
                    <br />
                    <div className="PrimarybtnContainer">
                        <div>
                            <div>
                                <p>  Dear User,</p>

                                <br />
                                <p>Thank you for providing the details! Your provided details are currently under review.</p>
                                <br />
                                <p>You shall receive a confirmation email shortly on your registered email ID, following which transactions will be enabled on your account.</p>
                                <br />
                                <p>  In case of any queries, please contact Team Soul Finspire.</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "end" }}>
                            <Button type="primary" onClick={handleSuccessModalCancel}>
                                OK
                            </Button>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default LoginPortal;
