import React, { useState, useEffect } from "react";
import axios from "axios"
import "./home-page.style.css";

import { CardList } from "../../components/card-list/card-list.component.jsx";
import { SearchBox } from '../../components/search-box/search-box.component.jsx';
import { LoaderLarge } from "../../components/loader/loader.component.jsx"

const HomePage = () => {

  const [ pokimons, setPokimons ] = useState([]);
  const [ searchTerm , setSearchTerm ] = useState("");
  
  useEffect (() => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(response => setPokimons([...response.data.results]))
  }, [])


    const filteredPokimons = pokimons.filter(pokimon => 
      pokimon.name.toLowerCase().includes(searchTerm.toLowerCase()));
      
    return (
      <div className="home-page">
        <h1>Pokimons' cards</h1>
        <SearchBox placeholder="search pokimons" handleChange={(e) => setSearchTerm(e.target.value)}/>
        {
          filteredPokimons.length
          ?
        <CardList pokimons={filteredPokimons} />
        :
        <LoaderLarge />
        }
      </div>
    );
  
}

export default HomePage;
