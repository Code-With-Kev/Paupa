import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from "chart.js";
import moment from 'moment'
import './BarChart.css'
Chart.register(...registerables);

function BarChart(props) {
    const { allBubbles, filter, setFilter } = props
    const [data, setData] = useState(null)


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
                for (let i=0; i<expensesPerMonth.length; i++){
                    if (expensesPerMonth[i].label === expenseMonth){
                        expensesPerMonth[i].value += bubble.cost

                    }
                }
            }
        }
        return expensesPerMonth
    }
    

    let data = {
        labels: expensesPerMonth.map(month => month.label),

        datasets: [
            {
                label: 'Dataset 1',
                barThickness: 130,
                hoverBackgroundColor: 'rgba(255, 255, 255, .4)',
                data:  addMonthlyExpenses(allBubbles).map(expense => expense.value),
                backgroundColor: ['rgba(255, 26, 104, .5)',
                'rgba(54, 162, 235, .5)', 'rgba(55, 6, 14, .5)'],
            },
        ]
        };
    
    if (filter === "filterExpenseMonths") {
            data.labels = addMonthlyExpenses(allBubbles).filter(expense=>expense.value > 0).map(expense => expense.label)
            data.datasets.data = addMonthlyExpenses(allBubbles).filter(expense=>parseInt(expense.value) > 0).map(expense => expense.value)
            // console.log(data.labels)
            // console.log(data.datasets.data)
            // data.datasets.update()
    }
                // let newObj = {}
                // for (let i=0; i<data.labels.length; i++) {
                //         if (!newObj.hasOwnProperty(data.labels[i])) {
                //                 newObj[data.labels[i]] = data.datasets.data[i]
                //             }
                //         }
                //     data.labels = Object.keys(newObj)
                //     data.datasets.data = Object.values(newObj)
                //     console.log( "these are the values --->", data.datasets.data)
                //     console.log("This is the newObj --->", newObj)
                //     }
            
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

    return (
        <div>
            <div>
                <Bar options={config} data={data} className="graph"/><br />
                <select onChange={e => setFilter(e.target.value)}>
                    <option>None</option>
                    <option value="filterExpenseMonths">Only Months With Expenses</option>
                </select>
            </div>

        </div>
    );
    }

export default BarChart