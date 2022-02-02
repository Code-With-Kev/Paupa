import React from 'react'
// import ExpenseChartBars from './ExpenseChartBars'

const ExpenseChart = (props) => {
    // const { expenseMonths } = props
    // const expenseMonthsValues = expenseMonths.map(expenseMonth => expenseMonth.value)//creates array of just the total cost of each month
    // const totalMaximum = Math.max(...expenseMonthsValues) //takes the array of totals and finds the max value
    return (
        <div className='chart'>
            {/* {
            expenseMonths.map( (expenseMonth, i) => (
                <ExpenseChartBars key={i} value={expenseMonth.value} maxValue={totalMaximum} month={expenseMonth.label} />)
                )
            } */}
        </div>
    )
        }

export default ExpenseChart
