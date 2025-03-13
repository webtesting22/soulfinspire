import React, { useState } from "react";
import { Slider, TextField, Button, Box, Typography } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Row, Col } from "antd";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend
);
const marksAmount = [
    { value: 0, label: "0" },
    { value: 10000000, label: "1Cr" },
    { value: 50000000, label: "5Cr" },
    { value: 100000000, label: "10Cr" },
];

const marksDuration = [
    { value: 1, label: "1" },
    { value: 100, label: "100" },
    { value: 300, label: "300" },
    { value: 600, label: "600" },
];

const marksReturn = [
    { value: 1, label: "1%" },
    { value: 20, label: "20%" },
    { value: 50, label: "50%" },
    { value: 100, label: "100%" },
];

const LumpSumCalculator = () => {
    const [investmentAmount, setInvestmentAmount] = useState(1000000);
    const [duration, setDuration] = useState(600);
    const [growthRate, setGrowthRate] = useState(10);

    const [totalInvested, setTotalInvested] = useState(0);
    const [totalGrowth, setTotalGrowth] = useState(0);
    const [futureValue, setFutureValue] = useState(0);

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
                position: "bottom", // 👈 Set legend position to bottom
            },
        }
    }
    
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
                        <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>Investment Duration (Months)</Typography>
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
                        <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>Expected Growth Rate (%)</Typography>
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

                    <br /><br />
                    <div className="ChartsContainer">
                        <Row>
                            <Col lg={8} style={{ width: "100%" }}>
                                <Box sx={{ mt: 3, textAlign: "center" }}>
                                    <h2> Lumpsum Investment Breakup
                                    </h2>
                                    <br />
                                    <Pie data={chartData} options={chartOptions}/>
                                </Box>
                            </Col>
                            <Col lg={16}>

                            </Col>
                        </Row>
                    </div>

                </Col>

            </Row>
        </div >
    );
};

export default LumpSumCalculator;
