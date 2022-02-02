import React from "react";

import { Bar} from 'react-chartjs-2';
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function BarChart(props) {

  const data = {
    labels: ['Jan', 'Feb', 'wednesday', 'thursday', 'monday', 'tuesday', 'wednesday', 'thursday',],
    datasets: [
      {
        label: 'Dataset 1',
        data: [100, 1200, 20, 100, 36, 909, 8100, 2, 933, 380, 202],
        backgroundColor: ['rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)'],

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
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide
      elements: {
        bar: {
          borderWidth: 2,
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

  return <Bar options={config} data={data} />;
}

export default BarChart