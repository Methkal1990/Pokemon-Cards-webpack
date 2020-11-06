import React from 'react';
import { withRouter } from 'react-router-dom';

import './card.style.css';

const Card = ({pokimon, history, match}) => {
    const { name } = pokimon;
    return(
        <div className="card-container" onClick={() => history.push(`${match.url}pokemon/${name}`)}>
            <div className="card-image-box">
            <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} alt={`pokimon ${name}`}/>
            </div>
            <h2>{name}</h2>
        </div>
    )
};

export default withRouter(Card);