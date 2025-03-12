import React, { useState } from "react";
import { Slider, TextField, Button, Box, Typography } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Row, Col } from "antd";
// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

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

    return (
        <div>

            <Row>
                <Col lg={24} md={24} style={{ width: "100%" }}>

                    <Typography variant="h5" sx={{ marginBottom: "20px", fontWeight: "bold", color: "#1D402D" }}>SIP Calculator</Typography>

                    {/* Monthly SIP Amount */}
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

                    {/* SIP Duration */}
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

                    {/* Expected Return */}
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

                    {/* Calculate Button */}
                    <Button
                        onClick={calculateSIP}
                        variant="contained"
                        sx={{ mt: 2, background: "#1D402D", color: "white", "&:hover": { background: "#15482D" } }}
                        fullWidth
                    >
                        Calculate Now
                    </Button>
                </Col>

                <Col lg={24} md={24} style={{ width: "100%" }}>
                    <Box sx={{ maxWidth: "600px", margin: "auto", textAlign: "center", padding: "20px", borderRadius: "10px", background: "#fff", }}>


                        {/* Results */}
                        <Box sx={{ mt: 3, textAlign: "left", background: "#f5f5f5", padding: "15px", borderRadius: "8px" }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1D402D" }}>Results:</Typography>
                            <Typography><strong>Total SIP Amount Invested:</strong> ₹{totalInvested.toLocaleString()}</Typography>
                            <Typography><strong>Total Growth:</strong> ₹{totalGrowth.toLocaleString()}</Typography>
                            <Typography><strong>Total Future Value:</strong> ₹{futureValue.toLocaleString()}</Typography>
                        </Box>

                        {/* Pie Chart */}
                        <Row>
                            <Col lg={12} style={{ width: "100%" }}>
                                {totalInvested > 0 && (
                                    <Box sx={{ mt: 3, textAlign: "center" }}>
                                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1D402D" }}>Investment Breakdown</Typography>
                                        <Pie data={chartData} />
                                    </Box>
                                )}
                            </Col>
                        </Row>
                    </Box>
                </Col>
            </Row>
        </div>
    );
};

export default SIPCalculator;
