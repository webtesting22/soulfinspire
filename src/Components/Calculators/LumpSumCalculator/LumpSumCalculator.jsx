import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const LumpSumCalculator = () => {
    const [investmentAmount, setInvestmentAmount] = useState(1000000); // Default: ₹10L
    const [duration, setDuration] = useState(600); // Default: 600 months
    const [growthRate, setGrowthRate] = useState(10); // Default: 10%

    const [totalInvested, setTotalInvested] = useState(0);
    const [totalGrowth, setTotalGrowth] = useState(0);
    const [futureValue, setFutureValue] = useState(0);

    const calculateLumpSum = () => {
        const P = investmentAmount;
        const n = duration;
        const r = growthRate / 12 / 100; // Monthly interest rate

        const FV = P * Math.pow(1 + r, n);
        const growth = FV - P;

        setTotalInvested(P);
        setTotalGrowth(growth);
        setFutureValue(FV);
    };

    // Calculate total amount to derive percentage
    const totalAmount = totalInvested + totalGrowth;

    // Chart Data
    const chartData = {
        labels: ["Principal Amount", "Growth Amount"],
        datasets: [
            {
                data: [totalInvested, totalGrowth],
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
            <h2>Lump Sum Investment Calculator</h2>

            {/* Investment Amount */}
            <label>Investment Amount (₹ {investmentAmount.toLocaleString()})</label>
            <input
                type="range"
                min="0" max="1000000000" step="100000"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                style={{ width: "100%" }}
            />

            {/* Duration */}
            <label>Investment Duration ({duration} Months)</label>
            <input
                type="range"
                min="1" max="600" step="1"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                style={{ width: "100%" }}
            />

            {/* Growth Rate */}
            <label>Expected Growth Rate ({growthRate}%)</label>
            <input
                type="range"
                min="1" max="100" step="1"
                value={growthRate}
                onChange={(e) => setGrowthRate(Number(e.target.value))}
                style={{ width: "100%" }}
            />

            {/* Calculate Button */}
            <button
                onClick={calculateLumpSum}
                style={{ marginTop: "15px", padding: "10px", fontSize: "16px", cursor: "pointer" }}
            >
                Calculate
            </button>

            {/* Results */}
            <div style={{ marginTop: "20px", textAlign: "left", background: "#f5f5f5", padding: "15px", borderRadius: "8px" }}>
                <h3>Lump Sum Investment Summary:</h3>
                <p><strong>Initial Investment:</strong> ₹{totalInvested.toLocaleString()}</p>
                <p><strong>Total Growth:</strong> ₹{totalGrowth.toLocaleString()}</p>
                <p><strong>Total Future Value:</strong> ₹{futureValue.toLocaleString()}</p>
            </div>

            {/* Pie Chart */}
            {totalInvested > 0 && (
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <h3>Investment Breakdown</h3>
                    <Pie data={chartData} options={chartOptions} />
                </div>
            )}
        </div>
    );
};

export default LumpSumCalculator;
