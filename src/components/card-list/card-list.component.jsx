import React from 'react';

import  Card  from '../card/card.component.jsx';

import './card-list.style.css';

export const CardList = ({pokimons}) => {
    
    return (
        <div className="card-list">
            {pokimons.map(pokimon => (
         <Card key={pokimon.name} pokimon={pokimon}/>
        ))}
        </div>
    );
};



