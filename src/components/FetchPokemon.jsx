import React, {useState} from "react";

const PokeDex = () => {
    const[pokemon, setPokemon] = useState([])


    const FetchPokemon = () => {

        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {
                return response.json()
            })
            .then(response => {
                setPokemon(response.results)
            })
    }

    return(
        <div>
            <br></br>
            <button onClick={ FetchPokemon }>Fetch Pokemon</button>
            {
                pokemon.map((poke, x) => {
                    
                    return(
                        <div>
                            <ul>
                                <li>{poke.name}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PokeDex;