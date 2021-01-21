import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './App.css';
import DisplayPokemon from './components/DisplayPokemon';
import Navbar from './Navbar/Navbar';

function App() {

  const [pokemon, setPokemon] = useState([
    {name: "bulbasaur", url:"https://pokeapi.co/api/v2/pokemon/1/"}
  ])

  const getPokemon = () =>{
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((response) =>{
        
        setPokemon(response.data.results)
        

      })
      .catch((err) =>{
        console.log(err)
      })
  }

  useEffect(()=>{
    getPokemon();
  })


  return (
    <div className="App">
      
      <Navbar/>
      <DisplayPokemon pokemon={pokemon}/>
    </div>
  );
}

export default App;
