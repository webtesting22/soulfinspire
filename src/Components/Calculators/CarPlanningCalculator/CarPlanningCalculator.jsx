import React, { useState } from "react";
import { Slider, TextField, Button, Box, Typography } from "@mui/material";
import { Bar, Pie } from "react-chartjs-2";
import { Row, Col } from "antd";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, LineController } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, LineController);

// Marks
const marksYears = [
    { value: 0, label: "0" },
    { value: 2, label: "2" },
    { value: 4, label: "4" },
    { value: 6, label: "6" },
    { value: 8, label: "8" },
    { value: 10, label: "10" },
];

const marksCost = [
    { value: 0, label: "0" },
    { value: 10000000, label: "1Cr" },
    { value: 20000000, label: "2Cr" },
    { value: 30000000, label: "3Cr" },
    { value: 40000000, label: "4Cr" },
    { value: 50000000, label: "5Cr" },
];

const marksPercent = [
    { value: 0, label: "0%" },
    { value: 20, label: "20%" },
    { value: 40, label: "40%" },
    { value: 60, label: "60%" },
    { value: 80, label: "80%" },
    { value: 100, label: "100%" },
];

const CarPlanningCalculator = () => {
    const [years, setYears] = useState(5);
    const [currentCost, setCurrentCost] = useState(1000000);
    const [inflationRate, setInflationRate] = useState(6);
    const [expectedReturns, setExpectedReturns] = useState(12);
    const [yearlyData, setYearlyData] = useState({
        futureValuePerYear: 0,
        sipPerYear: 0,
        lumpsumPerYear: 0,
    });

    const [futureCost, setFutureCost] = useState(0);
    const [sipAmount, setSipAmount] = useState(0);
    const [lumpsumAmount, setLumpsumAmount] = useState(0);
    const baseYear = new Date().getFullYear();
    const yearLabels = Array.from({ length: years }, (_, i) => baseYear + i);
    const calculateCarPlan = () => {
        const rInflation = inflationRate / 100;
        const rReturns = expectedReturns / 100;
        const fv = currentCost * Math.pow(1 + rInflation, years);

        // SIP formula
        const sip = fv * (rReturns / 12) / (Math.pow(1 + rReturns / 12, years * 12) - 1);

        // Lumpsum formula
        const lumpsum = fv / Math.pow(1 + rReturns, years);

        // Year-wise distribution values (to simulate)
        setFutureCost(fv);
        setSipAmount(sip);
        setLumpsumAmount(lumpsum);

        // 👇 Add these three lines right here
        setYearlyData({
            futureValuePerYear: fv / years,
            sipPerYear: (sip * 12 * years) / years,
            lumpsumPerYear: lumpsum / years,
        });
    };


    const chartData = {
        labels: ["Principal Amount", "Interest Amount"],
        datasets: [
            {
                data: [sipAmount * years * 12, futureCost - sipAmount * years * 12],
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
        labels: yearLabels,
        datasets: [
            {
                label: "Car Price",
                data: Array(years).fill(yearlyData.futureValuePerYear),
                backgroundColor: "#1D402D",
            },
            {
                label: "Planning through SIP",
                data: Array(years).fill(yearlyData.sipPerYear),
                backgroundColor: "#FF9606",
            },
            {
                label: "Planning through Lumpsum",
                data: Array(years).fill(yearlyData.lumpsumPerYear),
                backgroundColor: "#F4B400",
            },
        ],
    };


    const investmentChartOptions = {
        responsive: true,
        scales: {
            y: {
                title: { display: true, text: "Value (₹)" },
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
        <div className="CarPlanningContainer">
            <Row>
                <Col lg={24} md={24} style={{ width: "100%" }}>
                    {/* Inputs */}
                    <div className="AdjustContainer" style={{ borderTop: "1px solid #c5c5c5" }}>
                        <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>
                            After how many years do you wish to buy your dream car?
                        </Typography>
                        <div>
                            <TextField
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                                type="number"
                                fullWidth
                                variant="outlined"
                                sx={{ mb: 1 }}
                            />
                            <Slider
                                value={years}
                                onChange={(e, val) => setYears(val)}
                                min={0}
                                max={10}
                                step={1}
                                marks={marksYears}
                                sx={{ color: "#FF9606" }}
                            />
                        </div>
                    </div>

                    <div className="AdjustContainer" style={{ borderTop: "1px solid #c5c5c5" }}>
                        <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>
                            Current Cost of Your Dream Car
                        </Typography>
                        <div>
                            <TextField
                                value={currentCost}
                                onChange={(e) => setCurrentCost(Number(e.target.value))}
                                type="number"
                                fullWidth
                                variant="outlined"
                                sx={{ mb: 1 }}
                            />
                            <Slider
                                value={currentCost}
                                onChange={(e, val) => setCurrentCost(val)}
                                min={0}
                                max={50000000}
                                step={1000000}
                                marks={marksCost}
                                sx={{ color: "#FF9606" }}
                            />
                        </div>
                    </div>

                    <div className="AdjustContainer" style={{ borderTop: "1px solid #c5c5c5" }}>
                        <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>
                            Expected Inflation Rate (%)
                        </Typography>
                        <div>
                            <TextField
                                value={inflationRate}
                                onChange={(e) => setInflationRate(Number(e.target.value))}
                                type="number"
                                fullWidth
                                variant="outlined"
                                sx={{ mb: 1 }}
                            />
                            <Slider
                                value={inflationRate}
                                onChange={(e, val) => setInflationRate(val)}
                                min={0}
                                max={100}
                                step={1}
                                marks={marksPercent}
                                sx={{ color: "#FF9606" }}
                            />
                        </div>
                    </div>

                    <div className="AdjustContainer" style={{ borderTop: "1px solid #c5c5c5" }}>
                        <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>
                            Expected Returns (%)
                        </Typography>
                        <div>
                            <TextField
                                value={expectedReturns}
                                onChange={(e) => setExpectedReturns(Number(e.target.value))}
                                type="number"
                                fullWidth
                                variant="outlined"
                                sx={{ mb: 1 }}
                            />
                            <Slider
                                value={expectedReturns}
                                onChange={(e, val) => setExpectedReturns(val)}
                                min={0}
                                max={100}
                                step={1}
                                marks={marksPercent}
                                sx={{ color: "#FF9606" }}
                            />
                        </div>
                    </div>

                    <Button
                        onClick={calculateCarPlan}
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
                                                <h2>Your Dream Car Cost</h2>
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
                                                    <h2>₹{new Intl.NumberFormat("en-IN").format(sipAmount)}</h2>
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
                                                    <h2>₹{new Intl.NumberFormat("en-IN").format(lumpsumAmount)}</h2>
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
                                    <Pie data={chartData} options={chartOptions} />
                                </Box>
                                {/* )} */}
                            </Col>
                            <Col lg={16}>
                                <Box sx={{ mt: 3, textAlign: "center" }}>
                                    <h2>Car Planning Projection</h2>
                                    <br />
                                    <Bar data={investmentChartData} options={investmentChartOptions} />

                                </Box>
                            </Col>
                        </Row>
                    </div>
                </Col>
                {/* Result Cards */}
                {/* <Col lg={24}>
                    <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
                        <Col lg={8}><h2>Your Dream Car Cost: ₹{new Intl.NumberFormat("en-IN").format(futureCost)}</h2></Col>
                        <Col lg={8}><h2>Planning Through SIP: ₹{new Intl.NumberFormat("en-IN").format(sipAmount)}</h2></Col>
                        <Col lg={8}><h2>Planning Through Lumpsum: ₹{new Intl.NumberFormat("en-IN").format(lumpsumAmount)}</h2></Col>
                    </Row>
                </Col> */}

               
            </Row>
        </div>
    );
};

export default CarPlanningCalculator;
