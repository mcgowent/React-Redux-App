import React from 'react'

const PokemonCard = props => {
    return (
        <div>
            <img className="sets" src={props.sets.logoUrl} alt={props.sets.code} />
        </div>
    )
}

export default PokemonCard