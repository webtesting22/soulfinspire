import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const SIPCalculator = () => {
    const [sipAmount, setSIPAmount] = useState(100000); // Default: 1L
    const [duration, setDuration] = useState(500); // Default: 500 months
    const [returnRate, setReturnRate] = useState(100); // Default: 100%

    const [totalInvested, setTotalInvested] = useState(0);
    const [totalGrowth, setTotalGrowth] = useState(0);
    const [futureValue, setFutureValue] = useState(0);

    const calculateSIP = () => {
        const P = sipAmount;
        const n = duration;
        const r = returnRate / 12 / 100; // Monthly interest rate

        const FV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
        const investedAmount = P * n;
        const growth = FV - investedAmount;

        setTotalInvested(investedAmount);
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
            <h2>SIP Calculator</h2>

            {/* Monthly SIP Amount (in steps of 100) */}
            <label>Monthly SIP Amount (₹ {sipAmount.toLocaleString()}) </label>
            <input
                type="range"
                min="1000" max="1000000" step="100"
                value={sipAmount}
                onChange={(e) => setSIPAmount(Number(e.target.value))}
                style={{ width: "100%" }}
            />

            {/* SIP Duration */}
            <label>SIP Duration ({duration} Months): </label>
            <input
                type="range"
                min="1" max="500" step="1"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                style={{ width: "100%" }}
            />

            {/* Expected Return */}
            <label>Expected Return ({returnRate}%)</label>
            <input
                type="range"
                min="1" max="100" step="1"
                value={returnRate}
                onChange={(e) => setReturnRate(Number(e.target.value))}
                style={{ width: "100%" }}
            />

            {/* Calculate Button */}
            <button
                onClick={calculateSIP}
                style={{ marginTop: "15px", padding: "10px", fontSize: "16px", cursor: "pointer" }}
            >
                Calculate
            </button>

            {/* Results */}
            <div style={{ marginTop: "20px", textAlign: "left", background: "#f5f5f5", padding: "15px", borderRadius: "8px" }}>
                <h3>Results:</h3>
                <p><strong>Total SIP Amount Invested:</strong> ₹{totalInvested.toLocaleString()}</p>
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

export default SIPCalculator;
