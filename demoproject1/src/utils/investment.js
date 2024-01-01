import React from 'react'

function calculateInvestmentReuslts({ 
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration, }) {
    const annualData = [];
    let investmentValue= initialInvestment;
    for(let i =0; i<duration ; i++){
      const interestEarnedInYear = investmentValue * (expectedReturn/100)
      investmentValue +=interestEarnedInYear + annualInvestment;
      annualData.push({
        year:i+1,
        interest:interestEarnedInYear,
        valueEndOfYear:investmentValue,
        annualInvestment:annualInvestment,
      })
    }
  return annualData
}

export default calculateInvestmentReuslts