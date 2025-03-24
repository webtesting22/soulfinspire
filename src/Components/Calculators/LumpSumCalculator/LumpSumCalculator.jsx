import React, { useState } from "react";
import { Slider, TextField, Button, Box, Typography } from "@mui/material";
import { Bar, Pie } from "react-chartjs-2";
import { Row, Col } from "antd";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, LineController } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, LineController);

const marksAmount = [
    { value: 1000, label: "1K" },
    { value: 25000, label: "25K" },
    { value: 50000, label: "50K" },
    { value: 75000, label: "75K" },
    { value: 100000, label: "1L" },
    { value: 500000, label: "5L" },
    { value: 1000000, label: "10L" },
];

const marksDuration = [
    { value: 1, label: "1 Year" },
    { value: 10, label: "10 Years" },
    { value: 20, label: "20 Years" },
    { value: 30, label: "30 Years" },
    { value: 40, label: "40 Years" },
];

const marksReturn = [
    { value: 1, label: "1%" },
    { value: 5, label: "5%" },
    { value: 10, label: "10%" },
    { value: 15, label: "15%" },
    { value: 20, label: "20%" },
];

const LumpsumCalculator = () => {
    const [investmentAmount, setInvestmentAmount] = useState(1000000);
    const [lumpsumAmount, setLumpsumAmount] = useState(100000);
    const [duration, setDuration] = useState(10);
    const [returnRate, setReturnRate] = useState(12);
    const [growthRate, setGrowthRate] = useState(10);
    const [totalInvested, setTotalInvested] = useState(0);
    const [totalGrowth, setTotalGrowth] = useState(0);
    const [futureValue, setFutureValue] = useState(0);
    const years = Array.from({ length: duration }, (_, i) => new Date().getFullYear() + i);
    const principalData = years.map((_, i) => totalInvested);
    const growthData = years.map((_, i) => (totalGrowth * (i + 1)) / duration);
    const projectedReturns = years.map((_, i) => (futureValue * (i + 1)) / duration);

    const calculateLumpSum = () => {
        const P = investmentAmount;
        const n = duration;
        const r = growthRate / 12 / 100;

        const FV = P * Math.pow(1 + r, n);
        const growth = FV - P;

        setTotalInvested(P);
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
            legend: {
                display: true,
                position: "bottom",
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
                        if (value >= 10000000) {
                            return "₹" + (value / 10000000).toFixed(1) + "Cr";
                        } else if (value >= 100000) {
                            return "₹" + (value / 100000).toFixed(1) + "L";
                        } else {
                            return "₹" + value;
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
        <div className="LumpSumCalculator">
            <Row>
                <Col lg={24} md={24}>
                    {/* <Typography variant="h5" sx={{ marginBottom: "20px", fontWeight: "bold", color: "#1D402D" }}>Lump Sum Investment Calculator</Typography> */}

                    {/* Investment Inputs */}
                    <div className="AdjustContainer" style={{ borderTop: "1px solid #c5c5c5" }}>
                        <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>Investment Amount (₹)</Typography>
                        <div>
                            <TextField
                                value={investmentAmount}
                                onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                                type="number"
                                fullWidth
                                variant="outlined"
                                sx={{ mb: 1 }}
                            />
                            <Slider
                                value={investmentAmount}
                                onChange={(e, val) => setInvestmentAmount(val)}
                                min={0}
                                max={100000000}
                                step={100000}
                                marks={marksAmount}
                                sx={{ color: "#FF9606" }}
                            />
                        </div>

                    </div>
                    {/* Investment Duration */}
                    <div className="AdjustContainer">
                        <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>Duration (In Months)</Typography>
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
                                max={600}
                                step={10}
                                marks={marksDuration}
                                sx={{ color: "#FF9606" }}
                            />
                        </div>
                    </div>

                    {/* Growth Rate */}
                    <div className="AdjustContainer">
                        <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>Growth Rate (%)</Typography>
                        <div>
                            <TextField
                                value={growthRate}
                                onChange={(e) => setGrowthRate(Number(e.target.value))}
                                type="number"
                                fullWidth
                                variant="outlined"
                                sx={{ mb: 1 }}
                            />
                            <Slider
                                value={growthRate}
                                onChange={(e, val) => setGrowthRate(val)}
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
                        onClick={calculateLumpSum}
                        variant="contained"
                        sx={{ mt: 2, background: "#1D402D", color: "white", "&:hover": { background: "#15482D" } }}
                        fullWidth
                        className="CalculateBtn"
                    >
                        Calculate Now
                    </Button>
                </Col>
                {/* Results */}
                <Col lg={24}>
                    <div className="AnalysisContainer">

                        <Box sx={{ maxWidth: "100%", margin: "auto", textAlign: "center", }}>
                            <Box sx={{ mt: 3, textAlign: "left", padding: "15px", }}>
                                <Row>
                                    <Col lg={8} md={12} >
                                        <div>
                                            <div>
                                                <h2>Initial Investment:</h2>
                                                <br />
                                                <div>
                                                    <h2>{new Intl.NumberFormat("en-IN").format(totalInvested)}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={8} md={12}>
                                        <div>
                                            <div>
                                                <h2> Total Growth:</h2>
                                                <br />
                                                <div>
                                                    <h2> ₹{new Intl.NumberFormat("en-IN").format(totalGrowth)}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={8} md={12}>
                                        <div>
                                            <div>
                                                <h2> Total Future Value:</h2>
                                                <br />
                                                <div>
                                                    <h2>₹{new Intl.NumberFormat("en-IN").format(futureValue)}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Box>
                        </Box>
                    </div>
                </Col>
                <Col lg={24} md={24} style={{ width: "100%" }}>
                    <div className="ChartsContainer">
                        <Row>
                            <Col lg={8} style={{ width: "100%" }}>
                                <Box sx={{ mt: 3, textAlign: "center" }}>
                                    <h2>Investment Breakup</h2>
                                    <br />
                                    <Pie data={chartData} options={chartOptions} />
                                </Box>
                            </Col>
                            <Col lg={16}>
                                <Box sx={{ mt: 3, textAlign: "center" }}>
                                    <h2>Investment Projection</h2>
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

export default LumpsumCalculator;
