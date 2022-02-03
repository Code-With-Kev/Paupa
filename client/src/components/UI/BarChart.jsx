import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from "chart.js";
import moment from 'moment'
import './BarChart.css'
Chart.register(...registerables);

function BarChart(props) {
    const { allBubbles } = props

    //only show months with expenses
    const monthsWithExpenses = (allBubbles) => {
        let dateArr = [];
        for (const bubble of allBubbles) {
            if(!dateArr.includes(moment(bubble.startDate).format('MMM'))) {
                dateArr.push(moment(bubble.startDate).format('MMM'))
            }
        }
        return dateArr
    }

    const expensesPerMonth = [ 
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]

    const addMonthlyExpenses = (allExpenses) => {
        for (const bubble of allExpenses){
            
            if (bubble.isExpense) {
                const expenseMonth = moment(bubble.startDate).format('MMM')
                console.log(expenseMonth)
                for (let i=0; i<expensesPerMonth.length; i++){
                    if (expensesPerMonth[i].label === expenseMonth){
                        expensesPerMonth[i].value += bubble.cost

                    }
                }
            }
        }
        return expensesPerMonth.map(expense => expense.value)
    }

    const data = {
        // labels: monthsWithExpenses(allBubbles), method 1: only show months included in to do list
        labels: expensesPerMonth.map(month => month.label),
        datasets: [
        {
            label: 'Dataset 1',
            data:  addMonthlyExpenses(allBubbles), //addMonthlyExpenses(allBubbles),
            backgroundColor: ['rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)', 'rgba(55, 6, 14, 1)'],

        },
        //   {
        //     label: 'Dataset 2',
        //     data: [200, 300],
        //     backgroundColor: 'rgba(100, 99, 255, 0.5)',
        //   },
        ]
    };
    
    const config = {
        indexAxis: 'x',
        data: data,
        options: {
        elements: {
            bar: {
            borderWidth: 5,
            }
        },
        responsive: true,
        plugins: {
            legend: {
            position: 'right',
            },
            title: {
            display: true,
            text: 'Chart.js Horizontal Bar Chart'
            }
        }
        },
    };

    return <Bar options={config} data={data} className="graph"/>;
    }

export default BarChart