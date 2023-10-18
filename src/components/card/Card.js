import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMoneyCheckDollar,
    faFileInvoiceDollar,
    faBagShopping,
    faWallet,
    faArrowUp,
    faArrowDown
} from "@fortawesome/free-solid-svg-icons";
import './Card.css';

const Card = (props)=>{

    let bgColor = props.color.backgroundColor;
    let textColor = props.color.textColor;
    let iconColor = props.color.iconColor;
    let changeValue = props.change.value;

    let changeIcon = null;
    switch (props.change.iconType) {
        case 'faArrowUp':
            changeIcon = faArrowUp;
            break;
        case 'faArrowDown':
            changeIcon = faArrowDown;
            break;
    }

    let icon = null;
    switch (props.icon) {
        case 'faMoneyCheckDollar':
            icon = faMoneyCheckDollar;
            break;
        case 'faFileInvoiceDollar':
            icon = faFileInvoiceDollar;
            break;
        case 'faWallet':
            icon = faWallet;
            break;
        case 'faBagShopping':
            icon = faBagShopping;
            break;
        default:
            icon = faMoneyCheckDollar; 
    }

    return(
        <div className='card-box p-3 d-flex   gap-3'>
           <div className='icon-box d-flex align-items-center justify-content-center' style={{backgroundColor: bgColor}}>
                <FontAwesomeIcon icon={icon} className='me-2 text-secondary' style={{ color: iconColor, fontSize: '2em' }}  />
           </div>
           <div className='d-flex flex-column align-items-start justify-content-center'>
                <div className='title  text-secondary '>
                    {props.title}
                </div>
                <div className='amount fs-4 fw-bold '>
                    {props.amount}
                </div>
                <div>
                    <FontAwesomeIcon icon={changeIcon} className='me-1 text-secondary' style={{ color: textColor, fontSize: '12px' }}  /><span className='change fw-bold' style={{color: textColor}}>{changeValue}</span> <span className='text'>{props.text}</span>
                </div>
           </div>
        </div>
    )
}

export default  Card 