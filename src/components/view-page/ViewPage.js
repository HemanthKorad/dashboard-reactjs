import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import './ViewPage.css';
import Cards from '../cards/Cards';
import BarGraph from '../bar-graph/BarGraph';
import Table from '../table/Table';
import DonutChart from '../donut-chart/DonutChart';


export default class ViewPage extends Component{
    render(){
        return (
            <div className='main-dash p-2 ps-3 pe-3 pb-3 border w-100  ' >
                <div className='header mb-4 d-flex justify-content-between flex-wrap'>
                    <div className='welcome fs-4 fw-bold text-start'>
                        Hello Hemanth {"\uD83D\uDC4B"},
                    </div>
                    <div className='search-box d-flex align-items-center p-1 '>
                        <div className=''>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='ms-1 me-2 text-secondary'  />
                        </div>
                        <div className='input-hold'>
                            <input className='custom-input w-75' type='text' placeholder='Search' />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className=''>
                        <Cards/>
                    </div>
                </div>
                <div className='row d-flex flex-wrap  mt-4'>
                    <div className=' col-md-8 mb-4 '>
                        <BarGraph/>
                    </div>
                    <div className=' col-md-4 mb-4'>
                        {/* <ProgressBar/> */}
                        <DonutChart />
                    </div>
                </div>
                <div>
                    <Table/>
                </div>
            </div>
        ); 
    }
};
