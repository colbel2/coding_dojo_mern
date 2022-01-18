import React, {useState} from 'react';
import axios from 'axios';

const PokemonAxios = (props)=>{

    //create a state variable to store the array of coins inside so that we can loop through this array and display each coin on the page
    let [listOfPokemon, setListOfPokemon] = useState([])

    const getPokemon = ()=>{
        console.log("you clicked on that button!")
        
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        
        .then(response=>{
            console.log("response after formatting it to json-->", response)
            setListOfPokemon(response)
        })

    
        .catch(err =>{
            console.log("errorrr!!!-->", err)
        })

        
        
    }
    return (
        <>
            <h3>Hello from Pokemon API</h3>
            <p><button onClick = {getPokemon}>Click to get 807 Pokemon!</button></p>

            {
                listOfPokemon.map((pokemonObj, i)=>{
                    
                    return (
                        <div style = {{border: "1px solid black"}}>
                            <h3>{pokemonObj.name}</h3>
                            
                        </div>
                    )
                })
            }
        </>
    )
}


export default PokemonAxios;
