import React from 'react'


const ExpenseChartBars = (props) => {
    let barFill= '0%'; 
    const { max, maxValue, value, month } = props
    if (max > 0) { // accounts for months with no expenses
        barFill = Math.round( ( value / maxValue ) * 100 ) + '%'; // % the bar should be filled
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFill}}>

                </div>
            </div>
            <div className='chart-bar__label'>{month}</div>
        </div>
    )
}

export default ExpenseChartBars
