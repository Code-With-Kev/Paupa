import React from 'react';
import ExpenseChartBars from './ExpenseChartBars';
import './ExpenseChart.css';

const Chart = props => {

export default Chart

// 1. Rather than repeat <ChartBar /> 12 times in the HTML to get the bars, we will instead create a map function for data points, That way, we'll have as many bars as we need for the amount of data points. 

// value = The value each bar will get, maxValue = the highest amount all bars can be, label = The label each bar will have.

//  And since we're mapping and outputting a list, be sure to remember to add a key! It helps render list items efficiently. We can set it to label, because every label is unique!

// Now we create a component in the Expenses folder to help get us datapoints, "Expenses Chart". The file wont need a CSS file

// 2            const dataPointValues = props.dataPoints.map(dataPoint.value);
// This takes the value from each data point (month) that we passed in and turns it into an integer. So taking our datapoint objexts and turning them into numbers. Thus, the result will be an array of numbers.

//3             const totalMaximum = Math.max(...dataPointValues)
//Pulls out each array element and adds them as standalone arguments. So the math method will get 12 separate arguments as opposed to 1 list with 12 arguments. 