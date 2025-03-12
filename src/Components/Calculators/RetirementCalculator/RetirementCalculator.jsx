import React, { useState } from "react";
import { Slider, TextField, Button, Box, Typography } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const marksAge = [
    { value: 18, label: "18" },
    { value: 30, label: "30" },
    { value: 45, label: "45" },
    { value: 60, label: "60" },
];

const marksLife = [
    { value: 60, label: "60" },
    { value: 70, label: "70" },
    { value: 85, label: "85" },
    { value: 100, label: "100" },
];

const marksExpense = [
    { value: 5000, label: "₹5K" },
    { value: 100000, label: "₹1L" },
    { value: 250000, label: "₹2.5L" },
    { value: 500000, label: "₹5L" },
];

const marksReturn = [
    { value: 1, label: "1%" },
    { value: 5, label: "5%" },
    { value: 10, label: "10%" },
    { value: 15, label: "15%" },
];

const RetirementCalculator = () => {
    const [currentAge, setCurrentAge] = useState(30);
    const [retirementAge, setRetirementAge] = useState(60);
    const [lifeExpectancy, setLifeExpectancy] = useState(85);
    const [monthlyExpense, setMonthlyExpense] = useState(50000);
    const [inflationRate, setInflationRate] = useState(6);
    const [preRetirementReturn, setPreRetirementReturn] = useState(12);
    const [postRetirementReturn, setPostRetirementReturn] = useState(8);

    const [futureExpense, setFutureExpense] = useState(0);
    const [requiredCorpus, setRequiredCorpus] = useState(0);

    const calculateRetirementPlan = () => {
        const yearsToRetirement = retirementAge - currentAge;
        const retirementDuration = lifeExpectancy - retirementAge;

        const futureMonthlyExpense = monthlyExpense * Math.pow(1 + inflationRate / 100, yearsToRetirement);
        const r = postRetirementReturn / 12 / 100;
        const n = retirementDuration * 12;
        const corpus = futureMonthlyExpense * ((1 - Math.pow(1 + r, -n)) / r);

        setFutureExpense(futureMonthlyExpense);
        setRequiredCorpus(corpus);
    };

    const chartData = {
        labels: ["Required Corpus"],
        datasets: [
            {
                data: [requiredCorpus],
                backgroundColor: ["#FF9606"],
                hoverBackgroundColor: ["#FF9606"],
            },
        ],
    };

    return (
        <Box sx={{ maxWidth: "100%", margin: "auto", textAlign: "center", padding: "20px", borderRadius: "10px", background: "#fff", }}>
            <Typography variant="h5" sx={{ marginBottom: "20px", fontWeight: "bold", color: "#1D402D" }}>Retirement Planning Calculator</Typography>

            {[{
                label: "Your Current Age",
                value: currentAge,
                setValue: setCurrentAge,
                min: 18, max: 60, step: 1, marks: marksAge
            }, {
                label: "Retirement Age",
                value: retirementAge,
                setValue: setRetirementAge,
                min: currentAge + 1, max: 80, step: 1
            }, {
                label: "Life Expectancy",
                value: lifeExpectancy,
                setValue: setLifeExpectancy,
                min: retirementAge + 1, max: 100, step: 1, marks: marksLife
            }, {
                label: "Current Monthly Expenses (₹)",
                value: monthlyExpense,
                setValue: setMonthlyExpense,
                min: 5000, max: 500000, step: 5000, marks: marksExpense
            }, {
                label: "Expected Inflation Rate (%)",
                value: inflationRate,
                setValue: setInflationRate,
                min: 1, max: 10, step: 0.5, marks: marksReturn
            }].map(({ label, value, setValue, min, max, step, marks }) => (
                <Box key={label} sx={{ marginBottom: "15px", textAlign: "left" }}>
                    <Typography sx={{ fontWeight: "bold", color: "#1D402D" }}>{label}</Typography>
                    <TextField
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        type="number"
                        fullWidth
                        variant="outlined"
                        sx={{ mb: 1 }}
                    />
                    <Slider
                        value={value}
                        onChange={(e, val) => setValue(val)}
                        min={min}
                        max={max}
                        step={step}
                        marks={marks}
                        sx={{ color: "#FF9606" }}
                    />
                </Box>
            ))}

            <Button
                onClick={calculateRetirementPlan}
                variant="contained"
                sx={{ mt: 2, background: "#1D402D", color: "white", "&:hover": { background: "#15482D" } }}
                fullWidth
            >
                Calculate Now
            </Button>

            {requiredCorpus > 0 && (
                <Box sx={{ mt: 3, textAlign: "left", background: "#f5f5f5", padding: "15px", borderRadius: "8px" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1D402D" }}>Retirement Planning Summary:</Typography>
                    <Typography><strong>Future Monthly Expenses:</strong> ₹{futureExpense.toLocaleString()}</Typography>
                    <Typography><strong>Required Corpus:</strong> ₹{requiredCorpus.toLocaleString()}</Typography>
                </Box>
            )}

            {requiredCorpus > 0 && (
                <Box sx={{ mt: 3, textAlign: "center" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1D402D" }}>Investment Breakdown</Typography>
                    <Pie data={chartData} />
                </Box>
            )}
        </Box>
    );
};

export default RetirementCalculator;
