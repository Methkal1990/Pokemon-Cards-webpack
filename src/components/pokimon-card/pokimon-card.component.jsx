import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { LoaderLarge } from "../loader/loader.component.jsx"


import axios from 'axios';

import "./pokimon-card.style.css"

const PokimonCard = ({match, history}) => {
  const [ pokimon, setPokimon ] = useState({})
  const pokimonid = match.params.pokimonid;

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokimonid}`)
    .then(response => setPokimon({ ...response.data }))
  },[])

    const { name, id, types, height, abilities } = pokimon;
    return (
      <>
      {
        pokimon.types
        ?
        <div className="pokimon-card">
        <div className="pokimon-card-close" onClick={() => history.push("/")}>X</div>
        <div className="card-image-box">
            <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokimonid}.gif`} alt={`pokimon ${pokimonid}`}/>
        </div>
        <div className="pokimon-card-name">{name}</div>
        <div className="pokimon-card-content">
          <div>ID : {id}</div>
          <div>Types : {
            types.map(({type, slot}) => <span key={slot}>{type.name} | </span>)
          }

          </div>
          <div>Height : { height }</div>
          <div>
            Abilities
            <ul>
            {
              abilities.map(({ability, slot}) =>  <li key={slot}>{ability.name}</li>)
            }
             
            </ul>
          </div>
        </div>
      </div>
      :
      <LoaderLarge />
      }
      </>
    );
}

export default withRouter(PokimonCard);
