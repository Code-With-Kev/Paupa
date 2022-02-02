import React from 'react'
// import ExpenseChart from '../Chart/ExpenseChart'


const ExpensesMonths = (props) => {
    // default values + because we will be mapping this, it needs to be an object
    const { costs } = props;

    const expenseMonths = [ 
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'March', value: 0 },
        { label: 'April', value: 0 },
        { label: 'May', value: 0 },
        { label: 'June', value: 0 },
        { label: 'July', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sept', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]

    for (const cost of costs) { // needs to be for-of loop b/c costs is an array
        // const expenseMonth = cost.date.getMonth(); // starts at 0, Jan = 0, just like it's index
        // expenseMonths[expenseMonth].value += cost.amount //allows us to add the total costs of each month to 0
        console.log(costs)
    }

    // return <ExpenseChart expenseMonths={expenseMonths}/>
}

export default ExpensesMonths
