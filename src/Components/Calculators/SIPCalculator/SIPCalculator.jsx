import React, { useState } from "react";
import { Slider, TextField, Button, Box, Typography } from "@mui/material";
import { Bar, Pie } from "react-chartjs-2";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from "chart.js";

import { Row, Col } from "antd";
// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement);


const marksAmount = [
    { value: 1000, label: "1K" },
    { value: 25000, label: "25K" },
    { value: 50000, label: "50K" },
    { value: 75000, label: "75K" },
    { value: 100000, label: "1L" },
];

const marksDuration = [
    { value: 1, label: "1" },
    { value: 100, label: "100" },
    { value: 200, label: "200" },
    { value: 300, label: "300" },
    { value: 400, label: "400" },
    { value: 500, label: "500" },
];

const marksReturn = [
    { value: 1, label: "1%" },
    { value: 20, label: "20%" },
    { value: 40, label: "40%" },
    { value: 60, label: "60%" },
    { value: 80, label: "80%" },
    { value: 100, label: "100%" },
];

const SIPCalculator = () => {
    const [sipAmount, setSIPAmount] = useState(10000);
    const [duration, setDuration] = useState(120);
    const [returnRate, setReturnRate] = useState(14);

    const [totalInvested, setTotalInvested] = useState(0);
    const [totalGrowth, setTotalGrowth] = useState(0);
    const [futureValue, setFutureValue] = useState(0);
    const years = Array.from({ length: 10 }, (_, i) => 2026 + i); // Generate years dynamically
    const principalData = years.map((_, i) => totalInvested * (i + 1) / 10); // Simulated principal growth
    const growthData = years.map((_, i) => totalGrowth * (i + 1) / 10); // Simulated growth
    const projectedReturns = years.map((_, i) => futureValue * (i + 1) / 10); // Simulated projection

    const calculateSIP = () => {
        const P = sipAmount;
        const n = duration;
        const r = returnRate / 12 / 100;

        const FV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
        const investedAmount = P * n;
        const growth = FV - investedAmount;

        setTotalInvested(investedAmount);
        setTotalGrowth(growth);
        setFutureValue(FV);
    };

    // Pie Chart Data
    const chartData = {
        labels: ["Principal Amount", "Growth Amount"],
        datasets: [
            {
                data: [totalInvested, totalGrowth],
                backgroundColor: ["#1D402D", "#FF9606"],
                hoverBackgroundColor: ["#1D402D", "#FF9606"],
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: true, position: "bottom" },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        const dataset = tooltipItem.dataset;
                        const dataIndex = tooltipItem.dataIndex;
                        const value = dataset.data[dataIndex];
                        const total = dataset.data.reduce((acc, val) => acc + val, 0);
                        const percentage = ((value / total) * 100).toFixed(2);
                        const formattedValue = new Intl.NumberFormat("en-IN").format(value);
                        return `${percentage}% (₹${formattedValue})`;
                    },
                },
            },
        },
    };

    const investmentChartData = {
        labels: years,
        datasets: [
            {
                label: "Principal Amount",
                data: principalData,
                backgroundColor: "#1D402D",
                borderRadius: 5,
            },
            {
                label: "Growth Amount",
                data: growthData,
                backgroundColor: "#FF9606",
                borderRadius: 5,
            },
            {
                label: "Projected Returns",
                data: projectedReturns,
                type: "line",
                borderColor: "#FF9606",
                backgroundColor: "#1D402D",
                pointRadius: 5,
                borderWidth: 2,
            },
        ],
    };

    const investmentChartOptions = {
        responsive: true,
        scales: {
            x: { title: { display: true, text: "Years" } },
            y: {
                title: { display: true, text: "Projected Returns" },
                ticks: {
                    callback: function (value) {
                        if (value >= 1000000) {
                            return "₹" + (value / 1000000).toFixed(1) + "M"; // Format 1M, 2.5M
                        } else if (value >= 1000) {
                            return "₹" + (value / 1000).toFixed(0) + "K"; // Format 100K, 500K
                        } else {
                            return "₹" + value; // Keep small numbers unchanged
                        }
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


    return (
        <div className="SIPCalculatorContainer">

            <Row>
                <Col lg={24} md={24} style={{ width: "100%" }}>

                    {/* <Typography variant="h5" sx={{ marginBottom: "20px", fontWeight: "bold", color: "#1D402D" }}>SIP Calculator</Typography> */}

                    {/* Monthly SIP Amount */}
                    <div className="AdjustContainer" style={{ borderTop: "1px solid #c5c5c5" }}>
                        <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>Monthly SIP Amount (₹)</Typography>

                        <div>
                            <TextField
                                value={sipAmount}
                                onChange={(e) => setSIPAmount(Number(e.target.value))}
                                type="number"
                                fullWidth
                                variant="outlined"
                                sx={{ mb: 1 }}
                            />
                            <Slider
                                value={sipAmount}
                                onChange={(e, val) => setSIPAmount(val)}
                                min={1000}
                                max={100000}
                                step={1000}
                                marks={marksAmount}
                                sx={{ color: "#FF9606" }}
                            />
                        </div>
                    </div>

                    {/* SIP Duration */}
                    <div className="AdjustContainer">
                        <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>SIP Duration (In Months)</Typography>
                        <div>

                            <TextField
                                value={duration}
                                onChange={(e) => setDuration(Number(e.target.value))}
                                type="number"
                                fullWidth
                                variant="outlined"
                                sx={{ mb: 1 }}
                            />
                            <Slider
                                value={duration}
                                onChange={(e, val) => setDuration(val)}
                                min={1}
                                max={500}
                                step={10}
                                marks={marksDuration}
                                sx={{ color: "#FF9606" }}
                            />
                        </div>
                    </div>

                    {/* Expected Return */}
                    <div className="AdjustContainer">
                        <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>Expected Return (%)</Typography>

                        <div>
                            <TextField
                                value={returnRate}
                                onChange={(e) => setReturnRate(Number(e.target.value))}
                                type="number"
                                fullWidth
                                variant="outlined"
                                sx={{ mb: 1 }}
                            />
                            <Slider
                                value={returnRate}
                                onChange={(e, val) => setReturnRate(val)}
                                min={1}
                                max={100}
                                step={1}
                                marks={marksReturn}
                                sx={{ color: "#FF9606" }}
                            />
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <Button
                        onClick={calculateSIP}
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
                                {/* <h2> Results:</h2> */}
                                <Row>
                                    <Col lg={8} md={12} >
                                        <div>
                                            <div>
                                                <h2>Total SIP Amount Invested:</h2>
                                                <br />
                                                <div>
                                                    <h2>₹{new Intl.NumberFormat("en-IN").format(totalInvested)}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={8} md={12}>
                                        <div>
                                            <div>
                                                <h2>Total Growth:</h2>
                                                <br />
                                                <div>
                                                    <h2>₹{new Intl.NumberFormat("en-IN").format(totalGrowth)}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={8} md={12}>
                                        <div>
                                            <div>
                                                <h2>Total Future Value:</h2>
                                                <br />
                                                <div>
                                                    <h2>₹{new Intl.NumberFormat("en-IN").format(futureValue)}</h2>
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
                                    <h2>SIP Investment Breakup</h2>
                                    <br />
                                    <Pie data={chartData} options={chartOptions} />
                                </Box>
                                {/* )} */}
                            </Col>
                            <Col lg={16}>
                                <Box sx={{ mt: 3, textAlign: "center" }}>
                                    <h2>SIP Investment Projection</h2>
                                    <br />
                                    <Bar data={investmentChartData} options={investmentChartOptions} />
                                </Box>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default SIPCalculator;
