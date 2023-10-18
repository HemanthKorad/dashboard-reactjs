import React, { Component, useState, useEffect } from 'react';
import './Sidebar.css';
import Profile from '../../images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDashboard,
    faChevronDown,
    faChevronRight,
    faUser,
    faWallet,
    faQuestion,
    faBullhorn,
    faBox,
    faGear,
    faBars
} from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';

const Sidebar = () =>{

    const [expanded, setExpanded] = useState(true);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setExpanded(false);
          } else {
            setExpanded(true);
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    const sidebarVariants = {
        true:{
            left: '0'
        },
        false:{
            left: '-80%'
        }
    }

    return (
        <>
            <div className='bars ms-3' style={expanded? {left: "60%"} : {left: "0%"}}
                onClick={()=> setExpanded(!expanded)}
            >
                <FontAwesomeIcon icon={faBars} className='' size='2x' />                        

            </div>
            <motion.div className="sidebar-container d-flex flex-column p-3 justify-content-between"
                variants={sidebarVariants}
                animate={window.innerWidth<=768?`${expanded}`: ''}
            >
                <div className='top'>
                    <div className="brand d-flex align-items-center justify-content- gap-2 m-2 mb-4">
                        <div className='logo'>
                            <FontAwesomeIcon icon={faDashboard} className='' />                        
                        </div>
                        <div className='title fs-2'>
                            Dashboard
                        </div>
                    </div>
                    <div className='navbar gap-1 '>
                        <div className='nav-item nav-item-active w-100 d-flex justify-content-between h-100 p-3 '>
                            <div className='d-flex align-items-center'>
                                <FontAwesomeIcon icon={faGear} className='me-2' />                        
                                <span className='nav-title'>Dashboard</span>
                            </div>
                            <div className='right-icon'>
                                <FontAwesomeIcon icon={faChevronRight} /> 
                            </div>
                        </div>
                        <div className=' nav-item w-100 d-flex align-items-center justify-content-between h-100  p-3  '>
                            <div className='d-flex align-items-center'>
                                <FontAwesomeIcon icon={faBox} className='me-2' />                        
                                <span className='nav-title'>Product</span>
                            </div>
                            <div className='right-icon'>
                                <FontAwesomeIcon icon={faChevronRight} /> 
                            </div>
                        </div>
                        <div className='nav-item w-100 d-flex justify-content-between h-100  p-3 '>
                            <div className='d-flex align-items-center'>
                                <FontAwesomeIcon icon={faUser} className='me-2' />                        
                                <span className='nav-title'>Customers</span>
                            </div>
                            <div className='right-icon'>
                                <FontAwesomeIcon icon={faChevronRight} /> 
                            </div>
                        </div>
                        <div className='nav-item w-100 d-flex justify-content-between h-100  p-3 '>
                            <div className='d-flex align-items-center'>
                                <FontAwesomeIcon icon={faWallet} className='me-2' />                        
                                <span className='nav-title'>Income</span>
                            </div>
                            <div className='right-icon'>
                                <FontAwesomeIcon icon={faChevronRight} /> 
                            </div>
                        </div>
                        <div className='nav-item w-100 d-flex justify-content-between h-100  p-3 '>
                            <div className='d-flex align-items-center'>
                                <FontAwesomeIcon icon={faBullhorn} className='me-2' />                        
                                <span className='nav-title'>Promote</span>
                            </div>
                            <div className='right-icon'>
                                <FontAwesomeIcon icon={faChevronRight} /> 
                            </div>
                        </div>
                        <div className='nav-item w-100 d-flex justify-content-between h-100  p-3 '>
                            <div className='d-flex align-items-center'>
                                <FontAwesomeIcon icon={faQuestion} className='me-2' />                        
                                <span className='nav-title'>Help</span>
                            </div>
                            <div className='right-icon'>
                                <FontAwesomeIcon icon={faChevronRight} /> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='profile d-flex p-2 align-items-center gap-2 mb-4 '>
                        <div className='profile-image'>
                            <img className='profile-pic' src={Profile} width="45px" height="45px" />
                        </div>
                        <div className='user ms-2'>
                            <div className='username '>
                                Evano
                            </div>
                            <div className='role  text-secondary'>
                                Project Manager
                            </div>
                        </div>
                        <div className='down-icon'>
                            <FontAwesomeIcon icon={faChevronDown} />                      
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default  Sidebar