import React from 'react';
import './DonutChart.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
    const pink = "#f43497";
    const blue = "#5f37e9";
    const grey = "#f1effc";
    const data = {
        labels: ['', '', ''],
        datasets: [
            {
                data: [150, 330, 250],
                backgroundColor: [  pink,blue,grey],
                hoverBackgroundColor: [  pink,blue,grey],
                borderWidth: [5,20,25],
            },
        ],
    };

    const options = {
        cutout: 70, 
        plugins: {
            legend: {
                display: false 
            }
        },
        elements: {
            arc: {
                backgroundColor: "transparent"
            }
        }
    };



    return (
        <div className='chart-container p-3 pb-4'>
            <div className='chart-header'>
                <div className='chart-header fw-bold'>
                    Customers
                </div>
                <div className='chart-description secondary-text'>
                    Customers that buy products
                </div>
            </div>
            <div className='chart-body  '>
                <Doughnut data={data} options={options} />
                <div className='inner-text-box'>
                    <div className='percent-num fs-2 fw-bold'>
                        65%
                    </div>
                    <div className='inner-text'>
                        Total New Customers
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonutChart;