import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import './BarGraph.css'

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

const data = {
    labels: ['Jan','Feb', 'Mar','Apr', 'May','Jun', 'Jul','Aug', 'Sep','Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: ' ',
        data: [12, 19, 13, 15, 12, 10, 15, 9, 11, 17, 15, 10],
        backgroundColor: 'rgb(242, 239, 255)',
        hoverBackgroundColor: 'rgb(90, 50, 234)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 1,
        borderRadius: 5,
        barThickness: 45,
        borderSkipped: 'middle',
        
      },
    ],
};
  
const options = {
    scales: {
        x:{
            grid:{
                display: false,
                drawBorder: false,
                drawOnChartArea: false,
            }
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false,
                drawBorder: false,
                drawOnChartArea: false,
            },
            ticks:{
                display: false
            }
        },
       
    },
};

const BarGraph = () => {
    return(
        <div className='bar-graph w-100 w-md-75 p-3 '>
           <div>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='fw-bold'> 
                        Overview
                    </div>
                    <div className='filter-box d-flex align-items-center gap-2 p-1 ps-2 pe-2 '>
                        <div className='secondary-text'>
                            Quarterly
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faChevronDown} />                      
                        </div>
                    </div>
                </div>
                <div className=' secondary-text'>
                    Monthly Earning
                </div>
           </div>
            <div className= '  bar '>
                <Bar 
                    data={data}
                    options={options}
                />
            </div>
        </div>
    )
};

export default BarGraph;