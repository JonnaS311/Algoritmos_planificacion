import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
    scales: {
        x: {
          stacked: true,
          ticks: {
            precision: 1,
            stepSize: 1
          }
        },
        y: {
          stacked: true,
        },
      },
  };
  
  const labels = ['p1', 'p2', 'p3', 'p4'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [100,30],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [100],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  

const Graphic = () => {
    return (
        <div className=' overflow-auto relative'>
            <Bar options={options} data={data} width={1000} height={250}/>
        </div>
    );
};

export default Graphic;