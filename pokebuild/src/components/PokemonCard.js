import React from 'react'

const PokemonCard = props => {
    return (
        <div>
            <img className="cards" src={props.pokemon.imageUrl} alt={props.pokemon.name} />
        </div>
    )
}

export default PokemonCard