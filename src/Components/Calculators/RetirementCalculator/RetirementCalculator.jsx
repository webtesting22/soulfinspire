import React, { useState } from "react";
import { Slider, TextField, Button, Box, Typography } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Row, Col } from "antd";

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
        <div className="RetirementCalculator">
            <Row>
                <Col lg={24} md={24}>
                    {/* <Typography variant="h5" sx={{ marginBottom: "20px", fontWeight: "bold", color: "#1D402D" }}>Lump Sum Investment Calculator</Typography> */}


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
                        <div className="AdjustContainer" style={{ borderTop: "1px solid #c5c5c5" }}>
                            <Typography sx={{ fontWeight: "bold", color: "#1D402D", textAlign: "left" }}>{label}</Typography>
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
                        </div>
                    ))}

                    <Button
                        onClick={calculateRetirementPlan}
                        variant="contained"
                        sx={{ mt: 2, background: "#1D402D", color: "white", "&:hover": { background: "#15482D" } }}
                        fullWidth
                        className="CalculateBtn"
                    >
                        Calculate Now
                    </Button>
                </Col>
                <Col lg={24}>
                    <div className="AnalysisContainer">
                        {requiredCorpus > 0 && (
                            <Box sx={{ maxWidth: "100%", margin: "auto", textAlign: "center", }}>
                                <Box sx={{ mt: 3, textAlign: "left", padding: "15px", }}>
                                    <Row>
                                        <Col lg={8} md={12} >
                                            <div>
                                                <div>
                                                    <h2>Monthly Expenses</h2>
                                                    <br />
                                                </div>
                                            </div>
                                        </Col>
                                        <Typography><strong>Future Monthly Expenses:</strong> ₹{futureExpense.toLocaleString()}</Typography>
                                        <Typography><strong>Required Corpus:</strong> ₹{requiredCorpus.toLocaleString()}</Typography>
                                        {/* </Box> */}

                                    </Row>
                                </Box>
                            </Box>
                        )}
                    </div>
                    <div>
                        <div className="ChartsContainer">
                            <Row>
                                <Col lg={8} style={{ width: "100%" }}>
                                    <Box sx={{ mt: 3, textAlign: "center" }}>
                                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1D402D" }}>Investment Breakdown</Typography>
                                        <Pie data={chartData} />
                                    </Box>

                                </Col>
                                <Col lg={16}>
                                    <Box sx={{ mt: 3, textAlign: "center" }}>
                                        
                                    </Box>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </div >
    );
};

export default RetirementCalculator;
