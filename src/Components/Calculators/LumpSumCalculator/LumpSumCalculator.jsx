import React, { useState } from "react";
import { Slider, TextField, Button, Box, Typography } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

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

    return (
        <Box sx={{ maxWidth: "100%", margin: "auto", textAlign: "center", padding: "20px", borderRadius: "10px", background: "#fff", }}>
            <Typography variant="h5" sx={{ marginBottom: "20px", fontWeight: "bold", color: "#1D402D" }}>Lump Sum Investment Calculator</Typography>

            {/* Investment Inputs */}
            <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>Investment Amount (₹)</Typography>
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

            {/* Investment Duration */}
            <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>Investment Duration (Months)</Typography>
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

            {/* Growth Rate */}
            <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>Expected Growth Rate (%)</Typography>
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

            {/* Calculate Button */}
            <Button
                onClick={calculateLumpSum}
                variant="contained"
                sx={{ mt: 2, background: "#1D402D", color: "white", "&:hover": { background: "#15482D" } }}
                fullWidth
            >
                Calculate Now
            </Button>

            {/* Results */}
            {totalInvested > 0 && (
                <Box sx={{ mt: 3, textAlign: "left", background: "#f5f5f5", padding: "15px", borderRadius: "8px" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1D402D" }}>Lump Sum Investment Summary:</Typography>
                    <Typography><strong>Initial Investment:</strong> ₹{totalInvested.toLocaleString()}</Typography>
                    <Typography><strong>Total Growth:</strong> ₹{totalGrowth.toLocaleString()}</Typography>
                    <Typography><strong>Total Future Value:</strong> ₹{futureValue.toLocaleString()}</Typography>
                </Box>
            )}

            {/* Pie Chart */}
            {totalInvested > 0 && (
                <Box sx={{ mt: 3, textAlign: "center" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1D402D" }}>Investment Breakdown</Typography>
                    <Pie data={chartData} />
                </Box>
            )}
        </Box>
    );
};

export default LumpSumCalculator;
