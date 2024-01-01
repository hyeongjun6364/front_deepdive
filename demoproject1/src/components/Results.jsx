import React from 'react'
import calculateInvestmentReuslts from '../utils/investment.js'
function Results({ input }) {
    const resultsData = calculateInvestmentReuslts(input)
    console.log(resultsData)
    return (
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>InvestMent Value</th>
                    <th>Interest (year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((yearData) => {
                    const totalInterest= resultsData[0].interest - resultsData[0].annualInvestment
                    return <tr>
                        <td>{yearData.year}</td>
                        <td>{yearData.interest}</td>
                        <td>{yearData.annualInvestment}</td>
                        <td>{yearData.year}</td>
                        <td>{yearData.year}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Results