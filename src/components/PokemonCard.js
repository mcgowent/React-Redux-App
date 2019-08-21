import React from 'react'
import { Link } from 'react-router-dom';


const PokemonCard = props => {
    return (
        <div>
            <Link to="/pokemonInfo" onClick={() => { props.getInfo(props.pokemon.id) }}>
                <img className="cards" src={props.pokemon.imageUrl} alt={props.pokemon.name} />
            </Link>
        </div>
    )
}

export default PokemonCard