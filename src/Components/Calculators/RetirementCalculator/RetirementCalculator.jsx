import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

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
    const [sipInvestment, setSIPInvestment] = useState(0);
    const [lumpsumInvestment, setLumpsumInvestment] = useState(0);

    const calculateRetirementPlan = () => {
        const yearsToRetirement = retirementAge - currentAge;
        const retirementDuration = lifeExpectancy - retirementAge;

        // Future Monthly Expenses Adjusted for Inflation
        const futureMonthlyExpense = monthlyExpense * Math.pow(1 + inflationRate / 100, yearsToRetirement);

        // Required Retirement Corpus Calculation
        const r = postRetirementReturn / 12 / 100;
        const n = retirementDuration * 12;

        const corpus = futureMonthlyExpense * ((1 - Math.pow(1 + r, -n)) / r);

        // SIP Required to Achieve Corpus
        const sipMonths = yearsToRetirement * 12;
        const preRetirementMonthlyRate = preRetirementReturn / 12 / 100;

        const sipAmount = corpus / (((Math.pow(1 + preRetirementMonthlyRate, sipMonths) - 1) / preRetirementMonthlyRate) * (1 + preRetirementMonthlyRate));

        // Lump Sum Required Today
        const lumpsumAmount = corpus / Math.pow(1 + preRetirementMonthlyRate, sipMonths);

        setFutureExpense(futureMonthlyExpense);
        setRequiredCorpus(corpus);
        setSIPInvestment(sipAmount);
        setLumpsumInvestment(lumpsumAmount);
    };

    // Calculate total amount for percentage display
    const totalAmount = sipInvestment + lumpsumInvestment;

    // Chart Data
    const chartData = {
        labels: ["Invested Amount", "Growth Amount"],
        datasets: [
            {
                data: [sipInvestment, requiredCorpus - sipInvestment],
                backgroundColor: ["#1D402D", "#FF9606"], // Static Colors
                hoverBackgroundColor: ["#1D402D", "#FF9606"],
            },
        ],
    };

    // Chart Options (Show Percentage on Hover)
    const chartOptions = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        let value = tooltipItem.raw;
                        let percentage = ((value / totalAmount) * 100).toFixed(2);
                        return `${tooltipItem.label}: ₹${value.toLocaleString()} (${percentage}%)`;
                    },
                },
            },
        },
    };

    return (
        <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center", padding: "20px" }}>
            <h2>Retirement Planning Calculator</h2>

            {/* Current Age */}
            <label>Your Current Age: {currentAge} Years</label>
            <input
                type="range"
                min="18" max="60" step="1"
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value))}
                style={{ width: "100%" }}
            />

            {/* Retirement Age */}
            <label>Retirement Age: {retirementAge} Years</label>
            <input
                type="range"
                min={currentAge + 1} max="80" step="1"
                value={retirementAge}
                onChange={(e) => setRetirementAge(Number(e.target.value))}
                style={{ width: "100%" }}
            />

            {/* Life Expectancy */}
            <label>Life Expectancy: {lifeExpectancy} Years</label>
            <input
                type="range"
                min={retirementAge + 1} max="100" step="1"
                value={lifeExpectancy}
                onChange={(e) => setLifeExpectancy(Number(e.target.value))}
                style={{ width: "100%" }}
            />

            {/* Monthly Expenses */}
            <label>Current Monthly Expenses (₹ {monthlyExpense.toLocaleString()})</label>
            <input
                type="range"
                min="5000" max="500000" step="5000"
                value={monthlyExpense}
                onChange={(e) => setMonthlyExpense(Number(e.target.value))}
                style={{ width: "100%" }}
            />

            {/* Inflation Rate */}
            <label>Expected Inflation Rate ({inflationRate}%)</label>
            <input
                type="range"
                min="1" max="10" step="0.5"
                value={inflationRate}
                onChange={(e) => setInflationRate(Number(e.target.value))}
                style={{ width: "100%" }}
            />

            {/* Calculate Button */}
            <button onClick={calculateRetirementPlan} style={{ marginTop: "15px", padding: "10px", fontSize: "16px", cursor: "pointer" }}>
                Calculate
            </button>

            {/* Results */}
            <div style={{ marginTop: "20px", textAlign: "left", background: "#f5f5f5", padding: "15px", borderRadius: "8px" }}>
                <h3>Retirement Planning Summary:</h3>
                <p><strong>Monthly Expenses at Retirement:</strong> ₹{futureExpense.toLocaleString()}</p>
                <p><strong>Required Lumpsum Corpus:</strong> ₹{requiredCorpus.toLocaleString()}</p>
                <p><strong>Planning Through SIP:</strong> ₹{sipInvestment.toLocaleString()}</p>
                <p><strong>Planning Through Lumpsum:</strong> ₹{lumpsumInvestment.toLocaleString()}</p>
            </div>

            {/* Pie Chart */}
            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <h3>Investment Breakdown</h3>
                <Pie data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};

export default RetirementCalculator;
