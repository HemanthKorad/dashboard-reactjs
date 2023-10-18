import React, { Component } from 'react';
import './Cards.css';
import { CardsData } from '../../data/Data';
import Card from '../card/Card';

export default class Cards extends Component {
    render(){
        return(
            <div className='cards-page d-flex  row-gap-4 column-gap-4'>
                {CardsData.map((card, id)=>{
                    return(
                        <div className='parentContainer  '>
                            <Card
                                title={card.title}
                                color={card.color}
                                amount={card.amount}
                                text={card.text}
                                icon={card.icon}
                                change={card.change}
                            />
                        </div>
                    )
                })}
            </div>
        );
    }
};