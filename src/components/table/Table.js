import React  from "react";
import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faChevronDown

} from "@fortawesome/free-solid-svg-icons";
import Landscape from '../../images/landscape.jpg';


const Table = () => {
    return(
        <div className="products-block p-3 ps-4 pe-4 d-flex flex-column">
           <div className="header mb-3 d-flex align-items-center justify-content-between">
                <div className="heading fw-bold">
                    Product Sell
                </div>
                <div className="right d-flex gap-2">
                    <div className='search-box-2 d-flex align-items-center p-1 '>
                        <div className=''>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='ms-1 me-2 text-secondary'  />
                        </div>
                        <div className="hold">
                            <input className='custom-input-2 w-75' type='text' placeholder='Search' />
                        </div>
                    </div>
                    <div className='filter-box d-flex align-items-center gap-2 p-1 ps-2 pe-2 '>
                        <div className='secondary-text '>
                            <span className="filter-text">Last</span> <span className="filter-days">30 days</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faChevronDown} />                      
                        </div>
                    </div>
                </div>
           </div>
           <div className="product-table">
                <table className="table table-borderless table-hover" style={{ backgroundColor: 'white' }}>
                    <thead className="border-bottom ">
                        <tr>
                            <td scope="col  "><span className="secondary-text">Product Name</span></td>
                            <td scope="col text-center  "><span className=" secondary-text text-center">Stock</span></td>
                            <td scope="col "><span className="secondary-text">Price</span></td>
                            <td scope="col "><span className="secondary-text">Sales</span></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="product-row ">
                            <td className="d-flex gap-3 ">
                                <div className="">
                                    <td>
                                        <img src={Landscape} height={'40px'} width={'65px'}/>
                                    </td>
                                </div>
                                <div className="d-flex flex-column">
                                    <div className="title-text fw-bold">
                                        Abstract 3D
                                    </div>
                                    <div className='description secondary-text'>
                                        Lorem ipsum dolor sit amet, corescular odispicing elit.
                                    </div>
                                </div>

                            </td>
                            <td className="stock text-center text-md-start">32 <span className="extra">in stock</span></td>
                            <td className="fw-bold price text-md-start  ">$ 45.99</td>
                            <td className="sales text-center text-md-start">20</td>
                        </tr>
                        <tr>
                            <td className="d-flex gap-3">
                                <div>
                                    <td>
                                        <img src={Landscape} height={'40px'} width={'65px'}/>
                                    </td>
                                </div>
                                <div className="d-flex flex-column">
                                    <div className="title-text fw-bold">
                                        Vancity
                                    </div>
                                    <div className='description secondary-text'>
                                        Lorem ipsum dolor sit amet, corescular odispicing elit.
                                    </div>
                                </div>

                            </td>
                            <td className="stock text-center text-md-start">32 <span className="extra">in stock</span></td>
                            <td className="fw-bold price text-md-start"><span className="dollar">$</span> 45.99</td>
                            <td className="sales text-center text-md-start">20</td>
                        </tr>
                        <tr>
                            <td className="d-flex gap-3">
                                <div>
                                    <td>
                                        <img src={Landscape} height={'40px'} width={'65px'}/>
                                    </td>
                                </div>
                                <div className="d-flex flex-column">
                                    <div className="title-text fw-bold">
                                        Illustration
                                    </div>
                                    <div className='description secondary-text'>
                                        Lorem ipsum dolor sit amet, corescular odispicing elit.
                                    </div>
                                </div>

                            </td>
                            <td className="stock text-center text-md-start">32 <span className="extra">in stock</span></td>
                            <td className="fw-bold price text-md-start">$ 45.99</td>
                            <td className="sales text-center text-md-start">20</td>
                        </tr>
                        <tr>
                            <td className="d-flex gap-3">
                                <div>
                                    <td>
                                        <img src={Landscape} className="landscape-image" height={'40px'} width={'65px'}/>
                                    </td>
                                </div>
                                <div className="d-flex flex-column">
                                    <div className="title-text fw-bold">
                                        Illuminati
                                    </div>
                                    <div className='description secondary-text'>
                                        Lorem ipsum dolor sit amet, corescular odispicing elit.
                                    </div>
                                </div>
                            </td>
                            <td className="stock text-center text-md-start ">32 <span className="extra">in stock</span></td>
                            <td className="fw-bold price text-md-start">$ 45.99</td>
                            <td className="sales text-center text-md-start">20</td>
                        </tr>
                    </tbody>
                </table>
           </div>
        </div>
    );
};

export default Table;