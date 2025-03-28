import React, { useState } from "react";
import { Slider, TextField, Button, Box, Typography } from "@mui/material";
import { Bar, Pie } from "react-chartjs-2";
import { Row, Col } from "antd";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, LineController } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, LineController);

const marksReturns = [
    { value: 0, label: "0%" },
    { value: 20, label: "20%" },
    { value: 40, label: "40%" },
    { value: 60, label: "60%" },
    { value: 80, label: "80%" },
    { value: 100, label: "100%" },
];

const marksHouseCost = [
    { value: 0, label: "0" },
    { value: 30000000, label: "3Cr" },
    { value: 60000000, label: "6Cr" },
    { value: 90000000, label: "9Cr" },
    { value: 120000000, label: "12Cr" },
    { value: 150000000, label: "15Cr" },
];

const marksInflation = [
    { value: 0, label: "0%" },
    { value: 20, label: "20%" },
    { value: 40, label: "40%" },
    { value: 60, label: "60%" },
    { value: 80, label: "80%" },
    { value: 100, label: "100%" },
];

const HouseCalculator = () => {
    const [houseCost, setHouseCost] = useState(30000000);
    const [years, setYears] = useState(20);  // years will remain for internal calculations, but won't be shown
    const [inflation, setInflation] = useState(6);
    const [expectedReturns, setExpectedReturns] = useState(10);  // New Expected Returns field
    const [futureCost, setFutureCost] = useState(0);
    const [sipPlanning, setSipPlanning] = useState(0);
    const [lumpSumPlanning, setLumpSumPlanning] = useState(0);
    const housePerYear = houseCost / years;
    const lumpSumPerYear = lumpSumPlanning / years;
    const sipPerYear = sipPlanning / years;
    const baseYear = new Date().getFullYear();
    // Generate year labels based on user-selected years
    const yearLabels = Array.from({ length: years }, (_, i) => baseYear + i);

    // Future house cost calculation
    const futureValue = houseCost * Math.pow(1 + inflation / 100, years);

    // Calculate year-wise data
    const principalData = [];
    const growthData = [];
    const totalData = [];

    for (let i = 1; i <= years; i++) {
        const yearlyCost = houseCost * Math.pow(1 + inflation / 100, i);
        const invested = yearlyCost / Math.pow(1 + expectedReturns / 100, years - i);
        const growth = yearlyCost - invested;

        principalData.push(invested);
        growthData.push(growth);
        totalData.push(yearlyCost);
    }

    const calculateHouseCost = () => {
        const inflationRate = inflation / 100;
        const returnRate = expectedReturns / 100;

        // Calculate future cost considering inflation based on dynamic years
        const FV = houseCost * Math.pow(1 + inflationRate, years);
        setFutureCost(FV);

        // Calculate SIP and LumpSum planning considering expected returns over the years
        const totalInvestment = FV * Math.pow(1 + returnRate, years);  // Factor in returns over the years
        setSipPlanning(totalInvestment * 0.7);
        setLumpSumPlanning(totalInvestment * 0.3);
    };

    const chartData = {
        labels: ["Current Cost", "Future Cost"],
        datasets: [
            {
                data: [houseCost, futureCost],
                backgroundColor: ["#1D402D", "#FF9606"],
                hoverBackgroundColor: ["#1D402D", "#FF9606"],
            },
        ],
    };
    const growthPercentage = ((futureCost - houseCost) / houseCost) * 100;
    const newChartData = {
        labels: yearLabels,
        datasets: [
            {
                label: "Base Cost",
                data: principalData,
                backgroundColor: "#1D402D",
                borderRadius: 5,
            },
            {
                label: "Growth",
                data: growthData,
                backgroundColor: "#FF9606",
                borderRadius: 5,
            },
            {
                label: "Future Value",
                data: totalData,
                type: "line",
                borderColor: "#FF9606",
                backgroundColor: "#1D402D",
                pointRadius: 5,
                borderWidth: 2,
            },
        ],
    };


    const newChartOptions = {
        responsive: true,
        scales: {
            x: {
                title: { display: true, text: "Years" },
            },
            y: {
                title: { display: true, text: "Amount (₹)" },
                ticks: {
                    callback: function (value) {
                        if (value >= 10000000) return "₹" + (value / 10000000).toFixed(1) + " Cr";
                        if (value >= 100000) return "₹" + (value / 100000).toFixed(1) + " L";
                        if (value >= 1000) return "₹" + (value / 1000).toFixed(1) + " K";
                        return "₹" + value;
                    },
                },
            },
        },
        plugins: {
            legend: { display: true, position: "bottom" },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        const dataset = tooltipItem.dataset;
                        const dataIndex = tooltipItem.dataIndex;
                        const value = dataset.data[dataIndex];
                        const formattedValue = new Intl.NumberFormat("en-IN").format(value);
                        return `${dataset.label}: ₹${formattedValue}`;
                    },
                },
            },
        },
    };

    const pieChartOptions = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const value = context.raw;
                        const label = context.label;
                        // Show growth percentage instead of value
                        return `${label}: ${growthPercentage.toFixed(2)}% growth`;
                    },
                },
            },
        },
    }

    return (
        <div className="HouseCalculatorContainer">
            <Row>
                <Col lg={24} md={24} style={{ width: "100%" }}>
                    {/* House Cost */}
                    <div className="AdjustContainer" style={{ borderTop: "1px solid #c5c5c5" }}>
                        <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>After how many years do you wish to own your dream home ?</Typography>
                        <div>
                            <TextField
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                                type="number"
                                fullWidth
                                variant="outlined"
                            />
                            <Slider
                                value={years}
                                onChange={(e, val) => setYears(val)}
                                min={1}
                                max={100}
                                step={1}
                                sx={{ color: "#FF9606" }}
                            />
                        </div>
                    </div>
                    <div className="AdjustContainer" style={{ borderTop: "1px solid #c5c5c5" }}>
                        <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>Current Cost of House (₹)</Typography>
                        <div>
                            <TextField
                                value={houseCost}
                                onChange={(e) => setHouseCost(Number(e.target.value))}
                                type="number"
                                fullWidth
                                variant="outlined"
                            />
                            <Slider
                                value={houseCost}
                                onChange={(e, val) => setHouseCost(val)}
                                min={0}
                                max={150000000}
                                step={1000000}
                                marks={marksHouseCost}
                                sx={{ color: "#FF9606" }}
                            />
                        </div>
                    </div>
                    {/* Years to Own */}
                    <div className="AdjustContainer">
                        <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>Expected Inflation Rate (%)</Typography>
                        <div>
                            <TextField
                                value={inflation}
                                onChange={(e) => setInflation(Number(e.target.value))}
                                type="number"
                                fullWidth
                                variant="outlined"
                            />
                            <Slider
                                value={inflation}
                                onChange={(e, val) => setInflation(val)}
                                min={0}
                                max={100}
                                step={1}
                                marks={marksInflation}
                                sx={{ color: "#FF9606" }}
                            />
                        </div>
                    </div>

                    {/* Expected Returns */}
                    <div className="AdjustContainer">
                        <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>Expected Returns (%)</Typography>

                        <div>
                            <TextField
                                value={expectedReturns}
                                onChange={(e) => setExpectedReturns(Number(e.target.value))}
                                type="number"
                                fullWidth
                                variant="outlined"
                            />
                            <Slider
                                value={expectedReturns}
                                onChange={(e, val) => setExpectedReturns(val)}
                                min={0}
                                max={100}
                                step={1}
                                marks={marksReturns}
                                sx={{ color: "#FF9606" }}
                            />
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <Button
                        onClick={calculateHouseCost}
                        variant="contained"
                        sx={{ mt: 2, background: "#1D402D", color: "white", "&:hover": { background: "#15482D" } }}
                        fullWidth
                        className="CalculateBtn"
                    >
                        Calculate Now
                    </Button>
                </Col>
                <Col lg={24} md={24} style={{ width: "100%" }}>
                    <div className="AnalysisContainer">
                        <Box sx={{ maxWidth: "100%", margin: "auto", textAlign: "center", }}>
                            {/* Results */}
                            <Box sx={{ mt: 3, textAlign: "left", padding: "15px", }}>
                                {/* <h2> House Planning Summary:</h2> */}
                                <Row>
                                    <Col lg={8} md={12} >
                                        <div>
                                            <div>
                                                <h2>    Dream House Cost (After {years} Years)</h2>
                                                <br />
                                                <div>
                                                    <h2>₹{new Intl.NumberFormat("en-IN").format(futureCost)}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={8} md={12}>
                                        <div>
                                            <div>
                                                <h2>Planning Through SIP</h2>
                                                <br />
                                                <div>
                                                    <h2>₹{new Intl.NumberFormat("en-IN").format(sipPlanning)}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={8} md={12}>
                                        <div>
                                            <div>
                                                <h2>Planning Through Lumpsum</h2>
                                                <br />
                                                <div>
                                                    <h2>₹{new Intl.NumberFormat("en-IN").format(lumpSumPlanning)}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Box>

                            {/* Pie Chart */}

                        </Box>
                    </div>
                    <br /><br />
                    <div className="ChartsContainer">
                        <Row>
                            <Col lg={8} style={{ width: "100%" }}>
                                {/* {totalInvested > 0 && ( */}
                                <Box sx={{ mt: 3, textAlign: "center" }}>
                                    <h2>Investment Breakup</h2>
                                    <br />
                                    <Pie data={chartData} options={pieChartOptions} />
                                </Box>
                                {/* )} */}
                            </Col>
                            <Col lg={16}>
                                <Box sx={{ mt: 3, textAlign: "center" }}>
                                    <h2>Investment Projection</h2>
                                    <br />
                                    <Bar data={newChartData} options={newChartOptions} />

                                </Box>
                            </Col>
                        </Row>
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default HouseCalculator;